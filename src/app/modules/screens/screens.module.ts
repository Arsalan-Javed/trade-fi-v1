import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MissingTranslationHandler, TranslateModule } from '@ngx-translate/core';
import { BlockUIModule } from 'ng-block-ui';
import { MyMissingTranslationHandler } from 'src/app/handler/my-missing-translation-handler';
import { SharedModule } from 'src/app/shared/shared-module.module';
import { ScreensRoutingModule } from './screens-routing';
import { KeepBusinessComponent } from './keep-business/keep-business.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { SuccessComponent } from './success/success.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterStep1Component } from './register-step1/register-step1.component';
import { RegisterStep2Component } from './register-step2/register-step2.component';
import { RegisterStep3Component } from './register-step3/register-step3.component';


@NgModule({
    declarations: [
        KeepBusinessComponent,
        CertificationsComponent,
        SuccessComponent,
        WelcomeComponent,
        RegisterStep1Component,
        RegisterStep2Component,
        RegisterStep3Component
    ],
    imports: [
        CommonModule,
        ScreensRoutingModule,
        SharedModule,
        TranslateModule.forChild({
            missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
            useDefaultLang: false,
        }),
        BlockUIModule.forRoot(),
    ]
})
export class ScreensModule { }