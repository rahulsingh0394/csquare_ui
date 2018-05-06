import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class BannerService {

  //url: string;
  //url = "https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";
  constructor(private http: Http) {
    // let url = `${environment.serverUrl}/addLead`;

  }
  // addLead(data: any): Observable<any> {
  //     return this.http.post(this.url, data).map(req => req.json());
  // }
  // addLead(partyData: any): Observable<any> {
  //   return this.http.post('/addLead', partyData).map(req => req.json());
  // }

  addLead(data: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/addLead`, data, options);
  }
  getLeadById(id: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getLeadById/` + id, options).map(req => req.json());
  }
  getAllLeads(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllLeads`, options).map(req => req.json());
  }
  getAllRefCites(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllRefCites/-1/-1`, options).map(req => req.json());
  }
  getAllRefGrades(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllRefGrades`, options).map(req => req.json());
  }
  searchLocationByCity(city: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/searchLocationByCity/` + city, options).map(req => req.json());
  }
}
export interface Banner {

}
