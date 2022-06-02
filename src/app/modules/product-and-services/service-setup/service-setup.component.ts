import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-setup',
  templateUrl: './service-setup.component.html',
  styleUrls: ['./service-setup.component.scss']
})
export class ServiceSetupComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.router.navigate(['/products-and-services/services']);
  }

}
