import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/shared/authguard";
import { OrganizationInformationComponent } from "./organization-information/organization-information.component";
import { PersonalInformationComponent } from "./personal-information/personal-information.component";
import { SettingsComponent } from "./settings.component";

const routes: Routes = [
    {
        path: '', component: SettingsComponent, canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'personal-information', pathMatch: 'full' },
            { path: 'personal-information', component: PersonalInformationComponent },
            { path: 'organization-information', component: OrganizationInformationComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
