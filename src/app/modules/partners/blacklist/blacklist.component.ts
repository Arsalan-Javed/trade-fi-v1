import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.scss']
})
export class BlacklistComponent implements OnInit {

  constructor() { }

  IsEmpty = false;
  ngOnInit(): void {

    if (localStorage.getItem('IsEmpty') == 'true') {
      this.IsEmpty = true;
      localStorage.setItem('IsEmpty', 'false');
    }
    else {
      this.IsEmpty = false;
      localStorage.setItem('IsEmpty', 'true');
    }

  }

}
