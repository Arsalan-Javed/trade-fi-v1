import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@rosoftlab/core';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './shared/authguard';
import { FullComponent } from './shared/layouts/full/full.component';

const routes: Routes = [
  { path: 'auth-callback', component: AuthCallbackComponent },
  // { path: 'notfound', component: PageNotFoundComponent },
  {
    path: '',
    component: FullComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview', component: DashboardComponent,
      },
      {
        path: 'administration',
        loadChildren: () => import('./modules/administration/administration.module').then(m => m.AdministrationModule),
        canActivate: [AuthGuard],
        data: { parentKey: 'Administration' }
      },
      {
        path: 'settings',
        loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule),
        canActivate: [AuthGuard],
        data: { parentKey: 'Settings' }
      },
      {
        path: 'user-settings',
        loadChildren: () => import('./modules/user-settings/user-settings.module').then(m => m.UserSettingsModule),
        canActivate: [AuthGuard],
        data: { parentKey: 'User Settings' }
      },
      {
        path: 'screens',
        loadChildren: () => import('./modules/screens/screens.module').then(m => m.ScreensModule),
        data: { parentKey: 'Screens' }
      },
      {
        path: 'partners',
        loadChildren: () => import('./modules/partners/partners.module').then(m => m.PartnersModule),
        data: { parentKey: 'Partners' }
      },
      {
        path: '**', component: PageNotFoundComponent
      },
      { path: 'notfound', component: PageNotFoundComponent },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
