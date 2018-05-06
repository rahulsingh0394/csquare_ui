import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class ContactService {

  // url = "http://localhost:8083/addLead";
  constructor(private http: Http) { }
  // addLead(data: any): Observable<any> {
  //     return this.http.post(this.url, data).map(req => req.json());
  // }
  // addLead(partyData: any): Observable<any> {
  //   return this.http.post('/addLead', partyData).map(req => req.json());
  // }
  contactUs(data: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/contactUs`, data, options).map(req => req.json());
  }

}
export interface Contact {

}
