import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { saveAs as importedSaveAs } from "file-saver";
import { FileInput } from 'ngx-material-file-input';
import { NexityFileService } from 'src/app/services/nexity-file.service';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @ViewChild('#removableInput', { static: false }) removableInput: MatInput
  @Input() parentForm: FormGroup;
  @Input() placeholder: string;
  @Input() accept: string;
  @Input() allowFileDelete: boolean = true;
  @Input() fileIdProperty: string = null;
  constructor(private fileService: NexityFileService) {
  }

  ngOnInit() {
    if (this.parentForm) {
      if (!this.parentForm.controls['file']) {
        this.parentForm.addControl('file', new FormControl())
      }
      this.parentForm.controls['file'].valueChanges.subscribe(f => {
        if (f) {
          this.parentForm.controls['fileChanged'].setValue(true);
          this.parentForm.controls['fileDeleted'].setValue(false);
        } else {
          this.parentForm.controls['fileChanged'].setValue(false);
          this.parentForm.controls['fileDeleted'].setValue(true);
        }
        // console.log(f);
      });
    }
  }
  downloadFile(e) {
    e.stopPropagation();
    const fileInput = this.parentForm?.controls['file'].value as FileInput;
    const fileId = this.getFileId(this.fileIdProperty);
    if (fileInput && fileId) {
      this.downloadExternalFile(fileInput, fileId);
    } else if (fileInput) {
      this.downloadLocalFile(fileInput);
    }
  }
  downloadExternalFile(fileInput: FileInput, fileId: string) {
    this.fileService.getFileUrl(fileId).subscribe({
      next: (result: any) => {
        // console.log(result.url);
        const fileName = fileInput?.files[0].name;
        importedSaveAs(result.url, fileName);
      }
    })
  }
  downloadLocalFile(fileInput: FileInput) {
    const fileName = fileInput?.files[0].name;
    const file = fileInput?.files[0];
    if (fileName && file) {
      importedSaveAs(file, fileName);
    }
  }
  private getFileId(property: string): string {
    if (property.indexOf('.') === -1) {
      return this.parentForm?.controls[property].value as string;
    } else {
      const props = property.split('.');
      const prop = this.parentForm?.controls[props[0]].value
      return prop[props[1]] as string;
    }
  }
  allowDelete(): boolean {
    if (this.parentForm?.controls['file']) {
      const x = this.parentForm?.controls['file'].value as FileInput;
      return x?.files?.length > 0 && this.allowFileDelete;
    }
    return false;
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);

  // }
}
