import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  constructor() { }

  profileImgPlaceholder = '/assets/img/img-placeholder.svg';
  profileImg: any = this.profileImgPlaceholder;

  ngOnInit(): void {
  }

  SelectImage() {
    var that = this;
    document.getElementById('btnImg').click();
    document.getElementById('btnImg').onchange = function (e) {
      // fire the upload here
      const file = e.target['files'][0];
      if (FileReader && file && file.type.indexOf('image') >= 0) {
        var fr = new FileReader();
        fr.onload = function () {
          that.profileImg = fr.result;
        }
        fr.readAsDataURL(file);
      }
      else {
        that.profileImg = that.profileImgPlaceholder;
      }
    };
  }

}
