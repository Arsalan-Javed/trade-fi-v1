### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:alpine3.14 as builder
ARG nexity_ENV
COPY ./src/web/nexity.web/package*.json ./


## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm install -g npm@latest
RUN npm ci --audit false && mkdir /nexity.web && mv ./node_modules ./nexity.web/

## Move to /studio (eq: cd /studio)
WORKDIR /nexity.web


# Copy everything from host to /studio in the container
COPY ./src/web/nexity.web .

## Build the angular app in production mode and store the artifacts in dist folder
ARG NG_ENV=production
RUN echo $nexity_ENV
RUN npm run-script build$(test -z "$nexity_ENV" || echo "-$nexity_ENV" && echo "")


### STAGE 2: Setup ###

FROM nginx:alpine
EXPOSE 8080
## Copy our default nginx config
COPY ./src/web/nexity.web/nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /nexity.web/dist/nexity-web /usr/share/nginx/html

#CMD ["nginx", "-g", "daemon off;"]
# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
