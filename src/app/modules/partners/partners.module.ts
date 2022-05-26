import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MissingTranslationHandler, TranslateModule } from "@ngx-translate/core";
import { BlockUIModule } from "ng-block-ui";
import { MyMissingTranslationHandler } from "src/app/handler/my-missing-translation-handler";
import { SharedModule } from "src/app/shared/shared-module.module";
import { PartnersRoutingModule } from "./partners-routing";
import { PartnersComponent } from "./partners.component";
import { ActivePartnersComponent } from './active-partners/active-partners.component';
import { PendingInvitesComponent } from './pending-invites/pending-invites.component';
import { BlacklistComponent } from './blacklist/blacklist.component';

@NgModule({
    declarations: [
        PartnersComponent,
        ActivePartnersComponent,
        PendingInvitesComponent,
        BlacklistComponent
    ],
    imports: [
        CommonModule,
        PartnersRoutingModule,
        SharedModule,
        TranslateModule.forChild({
            missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
            useDefaultLang: false,
        }),
        BlockUIModule.forRoot(),
    ]
})
export class PartnersModule { }
