import { Injectable } from '@angular/core';
import { BaseService } from '@rosoftlab/core';
import { SmObjectLog } from '../models/sm-object-log';
import { Datastore } from './datastore.service';

@Injectable({
  providedIn: 'root'
})
export class SmObjectLogService extends BaseService<SmObjectLog> {

  constructor(datastore: Datastore) {
    super(datastore);
    this.setModelType(SmObjectLog);
  }

}
