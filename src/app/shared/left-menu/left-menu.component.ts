import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserMenu } from 'src/app/models/user-menu';
import { UserService } from 'src/app/services/user.service';
import { onSideNavChange, showLogo } from '../animations/animations';
import { SidenavService } from '../services/sidenav.service';
import { StorageService } from '../services/storage.service';


interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  animations: [onSideNavChange, showLogo],
  encapsulation: ViewEncapsulation.None
})
export class LeftMenuComponent implements OnInit {

  public sideNavState: boolean = false;
  public linkText: boolean = false;
  menuLoaded: boolean = false;
  public pages: UserMenu[];

  constructor(
    private _sidenavService: SidenavService,
    private userService: UserService,
    private translate: TranslateService,
    private storageService: StorageService,
    private router: Router
  ) {
    this.menuLoaded = false;
  }

  ngOnInit() {
    this.getMenu();
  }
  getMenu() {
    this.pages = this.userService.getMenus(null);
    this.menuLoaded = true;
    // this.userService.getMenus().subscribe(data => {
    //   const nodes = data.getModels();
    //   this.menuLoaded = true;
    // });
  }
  onSinenavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}