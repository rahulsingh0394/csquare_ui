import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class AdminAppService {


  constructor(private http: Http) { }

  //All Ref Api Calls
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
  getAllRefSyllabus(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllRefSyllabus`, options).map(req => req.json());
  }
  getAllRefSubjects(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllRefSubjects`, options).map(req => req.json());
  }
  searchLocationByCity(city: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/searchLocationByCity/` + city, options).map(req => req.json());
  }
  getUserStatusById(id: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getUserStatusById/` + id, options).map(req => req.json());
  }
  getAllUserRoles(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllUserRoles`, options).map(req => req.json());
  }
  getAllUserStatus(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllUserStatus`, options).map(req => req.json());
  }
  getAllLeadStatus(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllLeadStatus`, options).map(req => req.json());
  }
  getRefLocationById(id: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getRefLocationById/` + id, options).map(req => req.json());
  }
  getAllRefLocations(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllRefLocations`, options).map(req => req.json());
  }


  //All Ref Api Calls Ends

  //All User Api Calls

  getAllUsers(offset: any, limit: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllUsers/` + offset + `/` + limit, options).map(req => req.json());
  }
  getUserById(id: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getUserById/` + id, options).map(req => req.json());
  }
  addUser(data: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/addUser`, data, options).map(req => req.json());
  }
  updateUser(data: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/updateUser`, data, options).map(req => req.json());
  }
  deleteUser(userId: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/deleteUser/` + userId, options);
  }

  //All User Api Calls Ends

  //All Lead Api Calls 

  getAllLeads(offset: any, limit: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllLeads/` + offset + `/` + limit, options).map(req => req.json());
  }
  getLeadById(id: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getLeadById/` + id, options).map(req => req.json());
  }
  addLead(data: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/addLead`, data, options);
  }
  updateLead(data: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/updateLead`, data, options).map(req => req.json());
  }
  deleteLead(leadId: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/deleteLead/` + leadId, options);
  }

  //All Lead Api Calls Ends

  //All Student Api Calls 

  getAllStudents(offset: any, limit: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllStudents/` + offset + `/` + limit, options).map(req => req.json());
  }
  getStudentById(id: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getStudentById/` + id, options).map(req => req.json());
  }
  addStudent(data: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/addStudent`, data, options).map(req => req.json());
  }
  updateStudent(data: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/updateStudent`, data, options).map(req => req.json());
  }
  deleteStudent(studentId: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/deleteStudent/` + studentId, options);
  }
  deleteStudentTutor(studentId: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/deleteStudentTutor/` + studentId, options);
  }
  getStudentByTutorId(id: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getStudentByTutorId/` + id, options).map(req => req.json());
  }

  //All Student Api Calls Ends

  //All Tutor Api Calls 

  getAllTutors(offset: any, limit: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllTutors/` + offset + `/` + limit, options).map(req => req.json());
  }
  getTutorById(id: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getTutorById/` + id, options).map(req => req.json());
  }
  addTutor(data: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/addTutor`, data, options).map(req => req.json());
  }
  updateTutor(data: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/updateTutor`, data, options).map(req => req.json());
  }
  deleteTutor(tutorId: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/deleteTutor/` + tutorId, options);
  }

  //All Tutor Api Calls Ends

  //All Tutor Search Api Calls
  searchTutor(data: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/searchTutor/-1/-1/true`, data, options).map(req => req.json());
  }

  //All Tutor Search Api Calls Ends

  //All Contact Api Calls

  deleteContact(id: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/deleteContact/`, id, options);
  }

  getAllContact(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllContact`, options).map(req => req.json());
  }

  //All Contact Api Calls Ends
}
export interface AdminApp {

}
