import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/shared/authguard";
import { DepartmentsComponent } from "./departments/departments.component";
import { RolesComponent } from "./roles/roles.component";
import { UserSettingsComponent } from "./user-settings.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
    {
        path: '', component: UserSettingsComponent, canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'departments', pathMatch: 'full' },
            { path: 'departments', component: DepartmentsComponent },
            { path: 'users', component: UsersComponent },
            { path: 'roles', component: RolesComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserSettingsRoutingModule { }
