import { HttpClient ,HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signup(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/auth/register',data)
  }
  
  signin(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/auth/login',data)
  }
  
  getLogout():Observable<any>{
    let headers = {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
    return this.http.get('http://localhost:8080/auth/profile',{headers:headers})
  }
    
  activity(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/auth/activity',data)
  }

  employee(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/auth/employee',data)
  }

  project(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/auth/project',data)
  }

  getActivity() {
    return this.http.get('http://localhost:8080/auth/getActivity');
  }

  getEmployees() {
    return this.http.get('http://localhost:8080/auth/getEmployee');
  }

  getProject() {
    return this.http.get('http://localhost:8080/auth/getProject');
  }
}
