import { Injectable } from '@angular/core';
import { BaseQueryData, BaseService } from '@rosoftlab/core';
import { Observable } from 'rxjs';
import { Right } from '../models/right';
import { User } from '../models/user';
import { UserMenu } from '../models/user-menu';
import { Datastore } from './datastore.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {
  userRights!: Right[];
  userMenus!: UserMenu[];
  constructor(datastore: Datastore) {
    super(datastore);
    this.setModelType(User);
  }
  // getMenus(): Observable<BaseQueryData<UserMenu>> {
  //   const response = this.datastore.findAll(UserMenu);
  //   return response;
  // }
  getRights(): Observable<BaseQueryData<Right>> {
    const response = this.datastore.findAll(Right);
    return response;
  }
  hasRightForLink(link: string): boolean {
    if (this.userRights && link) {
      const right = this.userRights.find(f => link.indexOf(f.pagePath) >= 0);
      return right !== undefined;
    }
    return false;
  }
  getMenusByParentKey(parentKey: string) {
    var parent = this.menus.find(f => f.rightKey === parentKey);
    if (parent)
      return this.getMenus(parent.id);
    else
      return null;
  }
  getMenus(parentId: string = null): UserMenu[] {

    return this.menus.filter(f => f.parentId == parentId).sort((a, b) => (a.order > b.order) ? 1 : -1);
  }
  get menus(): UserMenu[] {
    if (!this.userMenus) {
      this.userMenus = this.userRights.filter(f => f.isMenu).map(f => {
        var userMenu = new UserMenu();
        userMenu.id = f.id;
        userMenu.icon = f.icon
        userMenu.translationKey = f.resourceName;
        userMenu.link = f.pagePath
        userMenu.parentId = f.parentId ?? null;
        userMenu.order = f.order;
        userMenu.rightKey = f.rightKey;
        return userMenu;
      })
      // console.log(this.userMenus);
    }
    return this.userMenus;
  }
}
7