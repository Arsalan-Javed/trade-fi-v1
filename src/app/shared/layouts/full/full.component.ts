import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { onMainContentChange, onSideNavChange, showLogo } from '../../animations/animations';
import { SidenavService } from '../../services/sidenav.service';
@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss'],
  animations: [onMainContentChange,onSideNavChange, showLogo]
})
export class FullComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  public onSideNavChange: boolean;
  public sideNavState: boolean = false;
  public linkText: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver, private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe(res => {
      // console.log(res)
      this.onSideNavChange = res;
    })
  }
  onSinenavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }
}
