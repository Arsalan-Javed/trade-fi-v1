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

}
