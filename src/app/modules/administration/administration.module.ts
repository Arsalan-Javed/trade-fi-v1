import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MissingTranslationHandler, TranslateModule } from '@ngx-translate/core';
import { BlockUIModule } from 'ng-block-ui';
import { MyMissingTranslationHandler } from 'src/app/handler/my-missing-translation-handler';
import { SharedModule } from 'src/app/shared/shared-module.module';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';



@NgModule({
  declarations: [
    AdministrationComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
      useDefaultLang: false,
    }),
    BlockUIModule.forRoot(),
  ]
})
export class AdministrationModule { }
