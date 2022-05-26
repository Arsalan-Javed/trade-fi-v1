import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-invites',
  templateUrl: './pending-invites.component.html',
  styleUrls: ['./pending-invites.component.scss']
})
export class PendingInvitesComponent implements OnInit {

  constructor() { }

  selectedTab = 'customer';

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
