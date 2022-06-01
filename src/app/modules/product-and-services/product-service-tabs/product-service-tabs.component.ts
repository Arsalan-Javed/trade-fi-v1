import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-service-tabs',
  templateUrl: './product-service-tabs.component.html',
  styleUrls: ['./product-service-tabs.component.scss']
})
export class ProductServiceTabsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goBackToList() {
    if (this.router.url.indexOf('/products-and-services/product-setup') >= 0) {
      this.router.navigate(['/products-and-services/products']);
    }
    else if (this.router.url.indexOf('/products-and-services/service-setup') >= 0) {
      this.router.navigate(['/products-and-services/services']);
    }
  }

}
