import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/authguard';
import { CertificationsComponent } from './certifications/certifications.component';
import { KeepBusinessComponent } from './keep-business/keep-business.component';
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
    { path: 'step3', component: RegisterStep3Component }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})

export class ScreensRoutingModule { }