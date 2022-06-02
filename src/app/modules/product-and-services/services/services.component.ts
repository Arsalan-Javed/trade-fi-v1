import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  AddSetUp() {
    this.router.navigate(['/products-and-services/service-setup']);
  }

  viewPermissions() {
    this.router.navigate(['/screens/conditions'], { queryParams: { from: 'services' } });
  }

}
