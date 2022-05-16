import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DialogService, MaterialModule, RslBaseModule } from '@rosoftlab/core';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { ClipboardModule } from 'ngx-clipboard';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyMissingTranslationHandler } from './handler/my-missing-translation-handler';
import { Datastore } from './services/datastore.service';
import { LanguageService } from './services/language.service';
import { UserService } from './services/user.service';
import { AuthInterceptor } from './shared/auth.interceptor';
import { AuthGuard } from './shared/authguard';
import { CanDeactivateGuard } from './shared/can-deactivate-guard';
import { HeaderComponent } from './shared/header/header.component';
import { FullComponent } from './shared/layouts/full/full.component';
import { TabLayoutComponent } from './shared/layouts/tab-layout/tab-layout.component';
import { LeftMenuComponent } from './shared/left-menu/left-menu.component';
import { AuthService } from './shared/services/auth.service';
import { StorageService } from './shared/services/storage.service';
import { TranslateloaderService } from './shared/services/translateloader.service';
import { Web3ModalComponent } from './shared/web3-modal/web3-modal/web3-modal.component';
import { Web3ModalModule } from './shared/web3-modal/web3-modal/web3-modal.module';
import { Web3ModalService } from './shared/web3-modal/web3-modal/web3-modal.service';
import { Web3Service } from './shared/web3.service';
// registerLocaleData(localeEn, 'en');
export let InjectorInstance: Injector;

const providers: any[] = [
  AuthGuard,
  AuthService,
  StorageService,
  UserService,
  Datastore,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
  TranslateloaderService,
  DialogService,
  DatePipe,
  DecimalPipe,
  PercentPipe,
  LanguageService,
  CanDeactivateGuard,
  { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  Web3Service,
  {
    provide: Web3ModalService,
    useFactory: () => {
      return new Web3ModalService();
    },
  },
];

const declarations: any[] = [
  AppComponent,
  DashboardComponent,
  FullComponent,
  HeaderComponent,
  AuthCallbackComponent,
  LeftMenuComponent,
  TabLayoutComponent,
];

const imports: any[] = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  LayoutModule,
  MaterialModule,
  HttpClientModule,
  RslBaseModule,
  FlexLayoutModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useClass: TranslateloaderService,
      deps: [HttpClient]
    },
    missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
    useDefaultLang: false,
  }),
  NgxMatSelectSearchModule,
  EditorModule,
  Web3ModalModule,
  ClipboardModule
  // BlockUIModule.forRoot(),
];

@NgModule({
  declarations: declarations,
  imports: imports,
  providers: providers,
  bootstrap: [AppComponent],
  entryComponents: [Web3ModalComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }
}


