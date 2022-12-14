import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddyurlserviceService {
baseUrl = "http://localhost:4200/";



  constructor(private httpClient: HttpClient) { }

  getShortUrl(id: string): Observable<Object>{
    debugger;
    return this.httpClient.get('https://addyapi.azurewebsites.net/api/addy/' + id, {responseType: 'text'});
  }


}
