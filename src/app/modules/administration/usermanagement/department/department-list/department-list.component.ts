import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {GenericTableComponent} from '@rosoftlab/core';
import {Department} from 'src/app/models';
import {DepartmentService} from 'src/app/services/department.service';
import {DepartmentFormComponent} from '../department-form/department-form.component';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements AfterViewInit {
  @ViewChild('departmentList', { static: false }) table: GenericTableComponent<Department>
  departmentRef: Department;

  ngAfterViewInit() {
    this.table.selectedObject.subscribe(
      selectedDepartment => {
        this.departmentRef = selectedDepartment;
      }
    )
  }

  constructor(
    public departmentService: DepartmentService,
    public dialog: MatDialog) {
  }

  addForm() {
    this.openDialog(null);
  }

  openDialog(model: Department) {
    var config = new MatDialogConfig();
    config.data = model;
    config.autoFocus = true;
    config.disableClose = true;
    const dialogRef = this.dialog.open(DepartmentFormComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result !== null && result !== undefined) {
        this.table.updateElement(result);
      }
    });
  }

  editModel(model: Department) {
    this.openDialog(model);
  }

  deleteSelectedDepartment(): void {
    this.table.deleteObject(this.departmentRef);
  }
}
