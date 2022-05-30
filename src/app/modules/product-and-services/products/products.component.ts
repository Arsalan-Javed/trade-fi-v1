import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

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

}
