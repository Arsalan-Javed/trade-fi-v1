import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, RslBaseModule } from '@rosoftlab/core';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { Webcryptoservice } from '../services/webcrypto.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MissingTranslationHandler, TranslateModule } from "@ngx-translate/core";
import { MyMissingTranslationHandler } from "../handler/my-missing-translation-handler";
import { CustomCheckboxComponent } from './components/custom-checkbox/custom-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RslBaseModule,
    FlexLayoutModule,
    MaterialFileInputModule,
    TranslateModule.forChild({
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
      useDefaultLang: false,
    }),
  ],
  declarations: [
    FileUploadComponent,
    CustomCheckboxComponent,
  ],
  providers: [
    Webcryptoservice
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RslBaseModule,
    FlexLayoutModule,
    NgxMatSelectSearchModule,
    MaterialFileInputModule,
    FileUploadComponent,
    CustomCheckboxComponent
  ]
})
export class SharedModule { }
