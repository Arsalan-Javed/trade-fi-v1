import { Injectable } from '@angular/core';
import { BaseService } from '@rosoftlab/core';
import { Datastore } from 'src/app/services/datastore.service';
import { Department } from '../models';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends BaseService<Department> {
  constructor(datastore: Datastore) {
    super(datastore);
    this.setModelType(Department);
  }
}
