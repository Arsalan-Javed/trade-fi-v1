import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit(): void {
  }

  close(){
    this.router.navigate(['/screens/documents']);
  }


}
