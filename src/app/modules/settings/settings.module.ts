import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MissingTranslationHandler, TranslateModule } from "@ngx-translate/core";
import { BlockUIModule } from "ng-block-ui";
import { MyMissingTranslationHandler } from "src/app/handler/my-missing-translation-handler";
import { SharedModule } from "src/app/shared/shared-module.module";
import { OrganizationInformationComponent } from "./organization-information/organization-information.component";
import { PersonalInformationComponent } from "./personal-information/personal-information.component";
import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";

@NgModule({
    declarations: [
        SettingsComponent,
        PersonalInformationComponent,
        OrganizationInformationComponent
    ],
    imports: [
        CommonModule,
        SettingsRoutingModule,
        SharedModule,
        FormsModule,
        TranslateModule.forChild({
            missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
            useDefaultLang: false,
        }),
        BlockUIModule.forRoot(),
    ]
})
export class SettingsModule { }
