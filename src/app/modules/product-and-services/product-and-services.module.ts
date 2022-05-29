import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MissingTranslationHandler, TranslateModule } from "@ngx-translate/core";
import { BlockUIModule } from "ng-block-ui";
import { MyMissingTranslationHandler } from "src/app/handler/my-missing-translation-handler";
import { SharedModule } from "src/app/shared/shared-module.module";
import { ProductAndServicesRoutingModule } from "./product-and-services-routing.module";
import { ProductServiceTabsComponent } from './product-service-tabs/product-service-tabs.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
    declarations: [
    
    ProductServiceTabsComponent,
         ProductsComponent,
         ServicesComponent
  ],
    imports: [
        CommonModule,
        ProductAndServicesRoutingModule,
        SharedModule,
        TranslateModule.forChild({
            missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
            useDefaultLang: false,
        }),
        BlockUIModule.forRoot(),
    ]
})
export class ProductAndServicesModule { }
