import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Changelog } from './changelog/changelog';
import { Download } from './download/download';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private changelogUrl = './assets/json/changelog.json';
  private downloadUrl = './assets/json/download.json';

  constructor( private httpClient:HttpClient ) { }

  fetchDownloadData() : Observable<Download[]>{
    return this.httpClient.get<Download[]>(this.downloadUrl)
  }

  getVersionDetails() : Observable<Changelog[]>{
    return this.httpClient.get<Changelog[]>(this.changelogUrl)
  }
  
}
