import {Location} from '@angular/common';
import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {BaseFormEditComponent, DialogService} from '@rosoftlab/core';
import {Observable} from 'rxjs';
import {Department} from 'src/app/models';
import {DepartmentService} from 'src/app/services/department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent extends BaseFormEditComponent<Department> implements OnInit {
  public receivedModel: Department;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Department,
    public dialogRef: MatDialogRef<DepartmentFormComponent>,
    protected fb: FormBuilder,
    protected router: Router,
    protected route: ActivatedRoute,
    protected modelService: DepartmentService,
    protected dialogService: DialogService,
    protected translate: TranslateService,
    protected location: Location,
  ) {
    super(fb, router, route, modelService, dialogService, translate, location);
    this.changeUrlRoute = false;
    this.cancelRoute = 'administration/department';
    this.receivedModel = data;
  }

  ngOnInit() {
    this.initForm(null, null, this.receivedModel);
  }

  public afterSave(model: Department): Observable<Department> {
    return new Observable((observer) => {
      this.dialogRef.close(model);
      observer.next(model);
      observer.complete();
    });
  }
}
