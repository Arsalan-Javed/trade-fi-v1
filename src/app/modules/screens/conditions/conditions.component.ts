import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})
export class ConditionsComponent implements OnInit {

  from = 'products';
  constructor(private router: Router, private activeRoute: ActivatedRoute,) { }

  ngOnInit(): void {

    this.activeRoute.queryParamMap.subscribe((params) => {
      this.from = params.get('from');
    });

  }

  close() {

    if (this.from) {
      this.router.navigate(['/products-and-services/' + this.from]);
    }
  }

}
