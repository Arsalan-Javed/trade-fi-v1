import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/shared/authguard";
import { ProductServiceTabsComponent } from "./product-service-tabs/product-service-tabs.component";
import { ProductsComponent } from "./products/products.component";
import { ServicesComponent } from "./services/services.component";
const routes: Routes = [
    {
        path: '', component: ProductServiceTabsComponent, canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'products', pathMatch: 'full' },
            { path: 'products', component: ProductsComponent },
            { path: 'services', component: ServicesComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductAndServicesRoutingModule { }
