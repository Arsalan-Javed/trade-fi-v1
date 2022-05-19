import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-file',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  @Input('view') view = 'p' // 'l'
  ngOnInit(): void {
  }

}
