import { Injectable } from '@angular/core';
import { BaseService } from '@rosoftlab/core';
import { Organization } from '../models/organization';
import { Datastore } from './datastore.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends BaseService<Organization> {

  constructor(datastore: Datastore) {
    super(datastore);
    this.setModelType(Organization);
  }
}
