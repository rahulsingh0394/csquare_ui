import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class StudentService {

  constructor(private http: Http) { }

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
  getAllRefSubjects(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllRefSubjects`, options).map(req => req.json());
  }
  getAllRefSyllabus(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllRefSyllabus`, options).map(req => req.json());
  }
  searchLocationByCity(city: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/searchLocationByCity/` + city, options).map(req => req.json());
  }
}
export interface Student {

}
