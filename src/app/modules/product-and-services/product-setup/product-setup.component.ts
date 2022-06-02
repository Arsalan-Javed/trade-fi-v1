import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-setup',
  templateUrl: './product-setup.component.html',
  styleUrls: ['./product-setup.component.scss']
})
export class ProductSetupComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.router.navigate(['/products-and-services/products']);
  }

}
