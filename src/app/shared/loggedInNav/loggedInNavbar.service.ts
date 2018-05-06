import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoggedInService {


  constructor(private http: Http) { }


  getUserBySessionId(id: any): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions();
    options.headers = headers;
    return this.http.get(`${environment.serverUrl}/getUserBySessionId/` + id, options).map(req => req.json());
  }

  getUserById(id: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getUserById/` + id, options).map(req => req.json());
  }

  logout(id: any): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions();
    options.headers = headers;
    return this.http.post(`${environment.serverUrl}/logout/` + id, options);
  }
}

export interface LoggedIn {

}
