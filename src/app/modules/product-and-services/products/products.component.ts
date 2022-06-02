import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public router: Router) { }

  data = [{
    partner_name: 'Schaeffler',
    person_of_contact: 'Georg Schaeffler',
    status: 'Pending',
  }, {
    partner_name: 'Schaeffler',
    person_of_contact: 'Georg Schaeffler',
    status: 'Onboarding',
  }, {
    partner_name: 'Schaeffler',
    person_of_contact: 'Georg Schaeffler',
    status: 'Declined',
  }];

  ngOnInit(): void {
  }

  AddSetUp() {
    this.router.navigate(['/products-and-services/product-setup']);
  }

  viewPermissions() {
    this.router.navigate(['/screens/conditions'], { queryParams: { from: 'products' } });
  }

}
