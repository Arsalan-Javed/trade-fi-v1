import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/authguard';
import { CanDeactivateGuard } from 'src/app/shared/can-deactivate-guard';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
  { path: '', component: DepartmentListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: DepartmentFormComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard] },
  { path: 'edit/:id', component: DepartmentFormComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
