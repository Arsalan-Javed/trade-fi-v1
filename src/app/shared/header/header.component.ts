import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language';
import { LanguageService } from 'src/app/services/language.service';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Web3Service } from '../../shared/web3.service';
import { ClipboardService } from 'ngx-clipboard';
import { accountCopyFlash } from '../animations/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [accountCopyFlash]
})
export class HeaderComponent implements OnInit {
  languages: Language[] | undefined;
  account: string;
  ellipsis: string;
  connected = false;
  isFlashed = false;
  constructor(
    public authService: AuthService,
    public languageService: LanguageService,
    // private translate: TranslateService,
    private web3Service: Web3Service,
    private storageService: StorageService,
    private clipboardApi: ClipboardService
  ) { }

  ngOnInit() {
    this.languageService.GetCachedLanguages().subscribe(models => {
      this.languages = models;
    });
    this.web3Service.accounts.subscribe(a => {
      if (a.length > 0) {
        this.account = a[0];
        this.ellipsis = this.account.slice(0, 6) + '...' + this.account.slice(-4);

        this.connected = true;
      } else {
        this.connected = false;
      }

    });
  }
  logout() {
    this.authService.signout();
  }
  changeLanguage(language: Language) {
    this.storageService.store('language', language.code, true);
    // this.translate.use(language.code);
  }
  connect() {
    this.web3Service.connectAccount();
  }

  clipboardAccount() {
    this.clipboardApi.copyFromContent(this.account);
    this.isFlashed = !this.isFlashed;
    setTimeout(() => {
      this.isFlashed = !this.isFlashed;
    }, 1200);
  }
}
