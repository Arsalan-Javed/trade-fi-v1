import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/authguard';
import { TabLayoutComponent } from 'src/app/shared/layouts/tab-layout/tab-layout.component';
import { AdministrationComponent } from './administration.component';

const routes: Routes = [
  { path: '', component: AdministrationComponent, canActivate: [AuthGuard] },
  {
    path: '',
    component: TabLayoutComponent,
    data: { parentKey: 'Administration.UserManagement' },
    children: [
      { path: 'usermanagement', loadChildren: () => import('./usermanagement/usermanagement.module').then(m => m.UsermanagementModule), canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
