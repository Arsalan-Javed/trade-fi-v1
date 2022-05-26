import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-partners',
  templateUrl: './active-partners.component.html',
  styleUrls: ['./active-partners.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-10%)' }),
        animate('100ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('100ms ease-in', style({ transform: 'translateY(-10%)' }))
      ])
    ])
  ]
})
export class ActivePartnersComponent implements OnInit {

  constructor() { }

  collapsible = [false];
  data = [{
    partner_name: 'Schaeffler',
    person_of_contact: 'Georg Schaeffler',
    location: 'Germany',
    nr_of_contacts: '0',
    industry: 'Automotive',
    location2: 'Romania',
    email: 'office@schaeffler.com',
    phone: '+40 742 395 186',
    reputation_score: '4.98'
  },
  {
    partner_name: 'Schaeffler',
    person_of_contact: 'Georg Schaeffler',
    location: 'Germany',
    nr_of_contacts: '0',
    industry: 'Automotive',
    location2: 'Romania',
    email: 'office@schaeffler.com',
    phone: '+40 742 395 186',
    reputation_score: '4.98'
  },
  {
    partner_name: 'Schaeffler',
    person_of_contact: 'Georg Schaeffler',
    location: 'Germany',
    nr_of_contacts: '0',
    industry: 'Automotive',
    location2: 'Romania',
    email: 'office@schaeffler.com',
    phone: '+40 742 395 186',
    reputation_score: '4.98'
  }];
  ngOnInit(): void {
  }

}
