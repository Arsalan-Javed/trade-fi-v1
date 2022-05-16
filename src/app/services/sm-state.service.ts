import { Injectable } from '@angular/core';
import { BaseService } from '@rosoftlab/core';
import { State } from '../models';
import { Datastore } from './datastore.service';

@Injectable({
  providedIn: 'root'
})
export class SmStateService extends BaseService<State> {

  constructor(datastore: Datastore) {
    super(datastore);
    this.setModelType(State);
  }


}
