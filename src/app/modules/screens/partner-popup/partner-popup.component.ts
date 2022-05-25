import { Component, OnInit } from '@angular/core';
import { RadioButtonItem } from 'src/app/shared/components/custom-radio-button/custom-radio-button.component';

@Component({
  selector: 'app-partner-popup',
  templateUrl: './partner-popup.component.html',
  styleUrls: ['./partner-popup.component.scss']
})
export class PartnerPopupComponent implements OnInit {

  constructor() { }

  items: RadioButtonItem[] = [
    { name: 'Email', value: 'email' },
    { name: 'Phone', value: 'phone' }
  ];

  selectedItem: any = 'email';
  selectedTab = 'invite';

  ngOnInit(): void {
  }

}
