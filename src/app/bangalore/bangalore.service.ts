import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BangaloreService {

  // url = "http://localhost:8083/addLead";
  constructor(private http: HttpClient) { 
  }
  public getJSON(path: any) {
    return this.http.get("assets/"+path+".json");
}

}
export interface Bangalore {

}
