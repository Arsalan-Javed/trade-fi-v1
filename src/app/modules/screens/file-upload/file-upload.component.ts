import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-file',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  @Input('view') view = 'p' // 'l'

  error: string;
  dragAreaClass: string;
  isDrop = false;
  fileName = '';
  fileId = 'btnfile-' + Math.floor(Math.random() * 10000) + 1;
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }

  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }

  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.isDrop = true;
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.isDrop = true;
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.isDrop = false;
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.isDrop = false;
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.isDrop = false;
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      let files: FileList = event.dataTransfer.files;
      this.saveFiles(files);
    }
  }

  saveFiles(files: FileList) {

    if (files.length > 1) this.error = "Only one file at time allow";
    else {
      this.error = "";
      if (files.length > 0) {
        this.fileName = files[0].name;
        console.log(files[0].size, files[0].name, files[0].type);
      }

    }
  }

  browseFile() {
    document.getElementById(this.fileId).click();
  }

}
