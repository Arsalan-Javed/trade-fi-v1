import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MissingTranslationHandler, TranslateModule } from "@ngx-translate/core";
import { BlockUIModule } from "ng-block-ui";
import { MyMissingTranslationHandler } from "src/app/handler/my-missing-translation-handler";
import { SharedModule } from "src/app/shared/shared-module.module";
import { UserSettingsRoutingModule } from "./user-settings-routing.module";
import { UserSettingsComponent } from "./user-settings.component";
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { DepartmentsComponent } from './departments/departments.component';

@NgModule({
    declarations: [
        UserSettingsComponent,
        UsersComponent,
        RolesComponent,
        DepartmentsComponent
    ],
    imports: [
        CommonModule,
        UserSettingsRoutingModule,
        SharedModule,
        TranslateModule.forChild({
            missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
            useDefaultLang: false,
        }),
        BlockUIModule.forRoot(),
    ]
})
export class UserSettingsModule { }
