import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/authguard';

const routes: Routes = [
  { path: '', redirectTo: 'department', canActivate: [AuthGuard] },
  { path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermanagementRoutingModule { }
