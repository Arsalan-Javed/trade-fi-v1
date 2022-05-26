import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/shared/authguard";
import { ActivePartnersComponent } from "./active-partners/active-partners.component";
import { BlacklistComponent } from "./blacklist/blacklist.component";
import { PartnersComponent } from "./partners.component";
import { PendingInvitesComponent } from "./pending-invites/pending-invites.component";

const routes: Routes = [
    {
        path: '', component: PartnersComponent, canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'active-partners', pathMatch: 'full' },
            { path: 'active-partners', component: ActivePartnersComponent },
            { path: 'pending-invites', component: PendingInvitesComponent },
            { path: 'blacklist', component: BlacklistComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartnersRoutingModule { }
