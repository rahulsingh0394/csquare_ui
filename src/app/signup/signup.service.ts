import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class SignUpService {


  constructor(private http: Http) { }


  login(data: any): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions();
    options.headers = headers;
    return this.http.post(`${environment.serverUrl}/login`, data, options).map(req => req.json());
  }
}
export interface SignUp {

}
