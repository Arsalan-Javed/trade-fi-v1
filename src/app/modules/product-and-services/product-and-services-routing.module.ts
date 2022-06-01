import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/shared/authguard";
import { ProductServiceTabsComponent } from "./product-service-tabs/product-service-tabs.component";
import { ProductSetupComponent } from "./product-setup/product-setup.component";
import { ProductsComponent } from "./products/products.component";
import { ServiceSetupComponent } from "./service-setup/service-setup.component";
import { ServicesComponent } from "./services/services.component";
const routes: Routes = [
    {
        path: '', component: ProductServiceTabsComponent, canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'products', pathMatch: 'full' },
            { path: 'products', component: ProductsComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'product-setup', component: ProductSetupComponent },
            { path: 'service-setup', component: ServiceSetupComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductAndServicesRoutingModule { }
