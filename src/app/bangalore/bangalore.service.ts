import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class BangaloreService {

  // url = "http://localhost:8083/addLead";
  constructor(private http: Http) { 
  }
  public getJSON(path: any): Observable<any> {
    return this.http.get("../../assets/"+path+".json").map(req => req.json());
}

}
export interface Contact {

}
