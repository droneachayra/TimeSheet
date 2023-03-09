// import { HttpClient ,HttpHandler } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
  

//   constructor(private http:HttpClient) { }

//   signup(data:any):Observable<any>{
//     return this.http.post('http://localhost:8080/auth/register',data)
//   }
  
//   signin(data:any):Observable<any>{
//     return this.http.post('http://localhost:8080/auth/login',data)
//   }
  
//   getLogout():Observable<any>{
//     let headers = {
//       'Authorization': "Bearer " + localStorage.getItem('token')
//     }
//     return this.http.get('http://localhost:8080/auth/profile',{headers:headers})
//   }
    
//   activity(data:any):Observable<any>{
//     return this.http.post('http://localhost:8080/auth/activity',data)
//   }

//   employee(data:any):Observable<any>{
//     return this.http.post('http://localhost:8080/auth/employee',data)
//   }

//   project(data:any):Observable<any>{
//     return this.http.post('http://localhost:8080/auth/project',data)
//   }

//   getActivity() {
//     return this.http.get('http://localhost:8080/auth/getActivity');
//   }

//   getEmployees() {
//     return this.http.get('http://localhost:8080/auth/getEmployee');
//   }

//   getProject() {
//     return this.http.get('http://localhost:8080/auth/getProject');
//   }
//   onDelete(id: any) {
//   // throw new Error('Method not implemented.');
//       return this.http.delete('http://localhost:8080/auth/delete',id);
//   }
//   // updateActivity(id:any){
//   //   return this.http.get('http://localhost:8080/auth/DeleteActivity');

//   // }
  

// }


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getprojectComponent() {
    throw new Error('Method not implemented.');
  }
  updateActivity(data: any) {
    throw new Error('Method not implemented.');
  }
  
  private readonly apiUrl = 'http://localhost:8080/auth/';
  modalService: any;

  constructor(private http:HttpClient) { }

  private getAuthHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
  }

  signup(data:any):Observable<any>{
    const url = `${this.apiUrl}register`;
    return this.http.post(url, data);
  }
  
  signin(data:any):Observable<any>{
    const url = `${this.apiUrl}login`;
    return this.http.post(url, data);
  }
  
  getLogout():Observable<any>{
    const url = `${this.apiUrl}profile`;
    const headers = this.getAuthHeaders();
    return this.http.get(url, { headers });
  }
    
  activity(data:any):Observable<any>{
    const url = `${this.apiUrl}activity`;
    const headers = this.getAuthHeaders();
    return this.http.post(url, data, { headers });
  }

  employee(data:any):Observable<any>{
    const url = `${this.apiUrl}employee`;
    const headers = this.getAuthHeaders();
    return this.http.post(url, data, { headers });
  }

  project(data:any):Observable<any>{
    const url = `${this.apiUrl}project`;
    const headers = this.getAuthHeaders();
    return this.http.post(url, data, { headers });
  }
  projectComponent(data:any):Observable<any>{
    const url = `${this.apiUrl}projectComponent`;
    const headers = this.getAuthHeaders();
    return this.http.post(url, data, { headers });
  }


  getActivity() {
    const url = `${this.apiUrl}getActivity`;
    return this.http.get(url);
  }

  getEmployees() {
    const url = `${this.apiUrl}getEmployee`;
    return this.http.get(url);
  }

  getProject() {
    const url = `${this.apiUrl}getProject`;
    return this.http.get(url);
  } 
  getProjectComponent() {
    const url = `${this.apiUrl}getProjectComponent`;
    return this.http.get(url);
  } 
  
  deleteActivity(item: any) {
    const url = `${this.apiUrl}deleteActivity/${item.id}`;
    return this.http.delete(url);
  }
  deleteEmployee(item: any) {
    const url = `${this.apiUrl}deleteEmployee/${item.id}`;
    return this.http.delete(url);
  }
  deleteProject(item: any) {
    const url = `${this.apiUrl}deleteProject/${item.id}`;
    return this.http.delete(url);
  }

  
  editActivity(id: any, data: any) {
    const url = `${this.apiUrl}editactivity/${id}`;
    console.log(url)
    return this.http.put(url, data).subscribe(response => {},
    err => {
      console.log(err);
    });
  }
  
  editEmployee(id: any, data: any) {
    const url = `${this.apiUrl}editemployee/${id}`;
    console.log(url)
    return this.http.put(url, data).subscribe(response => {},
    err => {
      console.log(err);
    });
  }

  editProject(id: any, data: any) {
    const url = `${this.apiUrl}editproject/${id}`;
    console.log(url)
    return this.http.put(url, data).subscribe(response => {},
    err => {
      console.log(err);
    });
  }

  
  }
  

