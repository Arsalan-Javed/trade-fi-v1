import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  viewDetails() {
    this.router.navigate(['/screens/agreement']);
  }

  addSetup() {
    this.router.navigate(['/screens/document-detail']);
  }

}
