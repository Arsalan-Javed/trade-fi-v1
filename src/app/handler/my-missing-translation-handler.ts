import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { environment } from "../../environments/environment";
import { InjectorInstance } from '../app.module';
import { LanguageService } from '../services/language.service';
export class MyMissingTranslationHandler implements MissingTranslationHandler {
    /**
     *
     */
    constructor() {

    }
    handle(params: MissingTranslationHandlerParams) {
        return params.key;
        if (!environment.production) {
            console.log(params.key);
            const languageService = InjectorInstance.get<LanguageService>(LanguageService);
            const key = params.key.toString();
            languageService.addMissingTranslation(params.translateService.currentLang, params.key).subscribe(f => {
                params.translateService.setTranslation(params.translateService.currentLang, { key: key });
            });
        }
        return params.key;
    }
}