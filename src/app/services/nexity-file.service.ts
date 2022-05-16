import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '@rosoftlab/core';
import { Observable } from 'rxjs';
import { Datastore } from 'src/app/services/datastore.service';
import { NexityFile } from '../models/nexity-file';
@Injectable({
  providedIn: 'root'
})
export class NexityFileService extends BaseService<NexityFile> {
  constructor(datastore: Datastore,
    private httpClient: HttpClient) {
    super(datastore);
    this.setModelType(NexityFile);
  }
  getFileUrl(fileId: string): Observable<any> {
    const url = `${this.datastore.buildUrl(NexityFile)}/${fileId}/fileurl`;
    return this.httpClient.get<any>(url);
  }
}
