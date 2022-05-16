import { NgModule } from '@angular/core';
import { MissingTranslationHandler, TranslateModule } from '@ngx-translate/core';
import { BlockUIModule } from 'ng-block-ui';
import { MyMissingTranslationHandler } from 'src/app/handler/my-missing-translation-handler';
import { SharedModule } from 'src/app/shared/shared-module.module';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentRoutingModule } from './department-routing.module';



@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentFormComponent
  ],
  imports: [
    DepartmentRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
      useDefaultLang: false,
    }),
    BlockUIModule.forRoot(),
  ]
})
export class DepartmentModule { }
