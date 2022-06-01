import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPartnerComponent } from './add-partner/add-partner.component';
import { AgreementComponent } from './agreement/agreement.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { DocumentDetailComponent } from './document-detail/document-detail.component';
import { DocumentsComponent } from './documents/documents.component';
import { InviteSuccessComponent } from './invite-success/invite-success.component';
import { KeepBusinessComponent } from './keep-business/keep-business.component';
import { PartnerPopupComponent } from './partner-popup/partner-popup.component';
import { ReferralComponent } from './referral/referral.component';
import { RegisterStep1Component } from './register-step1/register-step1.component';
import { RegisterStep2Component } from './register-step2/register-step2.component';
import { RegisterStep3Component } from './register-step3/register-step3.component';
import { SuccessComponent } from './success/success.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: '', redirectTo: 'keep-business', pathMatch: 'full' },
    { path: 'keep-business', component: KeepBusinessComponent },
    { path: 'certifications', component: CertificationsComponent },
    { path: 'success', component: SuccessComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'step1', component: RegisterStep1Component },
    { path: 'step2', component: RegisterStep2Component },
    { path: 'step3', component: RegisterStep3Component },
    { path: 'add-partner', component: AddPartnerComponent },
    { path: 'invite-success', component: InviteSuccessComponent },
    { path: 'partner-popup', component: PartnerPopupComponent },
    { path: 'referral', component: ReferralComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'document-detail', component: DocumentDetailComponent },
    { path: 'agreement', component: AgreementComponent },
    { path: 'conditions', component: ConditionsComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})

export class ScreensRoutingModule { }
