import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nexity-web';
  constructor(
    public translate: TranslateService,
    private storageService: StorageService) {
      const lang = this.storageService.retrieve('language', true);
      translate.setDefaultLang('en');
      if (lang) {
        translate.use(lang);
      } else {
        translate.use('en');
      }
  }
}
