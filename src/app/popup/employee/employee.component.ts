import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class EmployeeComponent {

  EmployeeForm!: FormGroup;
  EmployeeEdit!: FormGroup;
  message:string='';
  isProcess:Boolean=false;
  className='d-none';
  data:any;
  id:any;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private fb: FormBuilder ,private auth: AuthService,private router:Router,private http:HttpClient ) { 
    config.backdrop = 'static';
		config.keyboard = false;
    this.EmployeeForm = this.fb.group({
      'id': ['', Validators.required],
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],

    })
    this.EmployeeEdit = this.fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],

    })
    this.readEmployee();
  }

  
  addData(){
    const data = this.EmployeeForm.value;
    this.auth.employee(data).subscribe(res => {
      if(res.success){
      }
    }, err => {
      alert(err)
    })
    this.modalService.dismissAll();

   location.reload();
  }

  open(content:any) {
		this.modalService.open(content);
	}

  readEmployee(){
    this.auth.getEmployees().subscribe((data) => {
     this.data = data;
    })    
  }  

  openEdit(id:any, content:any){
    this.id = id;
    this.modalService.open(content);
  }

  onEdit(){
    const data = this.EmployeeEdit.value;
    this.auth.editEmployee(this.id, data);
    this.EmployeeEdit.reset();
    this.modalService.dismissAll();
  }
  onDeleteE(data: any) {
    console.log(data);
    // Call the API to delete the activity data
    this.auth.deleteEmployee(data).subscribe(res => {
      if (res) {
        // Remove the deleted activity from the table
        const index = this.data.indexOf(data);
        if (index > -1) {
          this.data.splice(index, 1);
        }
      }
    }, err => {
      console.log(err);
    });
  }

  public exportToCsv() {
    const csvRows = [];
    const headers = ['Id', 'First Name', 'Last Name', 'Email', 'Password'];
    
    // Add headers to CSV rows
    csvRows.push(headers.join(','));
  
    // Add data rows to CSV rows
    this.data.forEach((item: { id: any; firstname: any; lastname: any; email: any; password: any; }) => {
      const row = [item.id, item.firstname, item.lastname, item.email, item.password];
      csvRows.push(row.join(','));
    });
  
    // Download the CSV file
    const csvData = csvRows.join('\n');
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'employees.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  

}


  // employee(){
  //   const data = this.EmployeeForm.value;
  //   delete data['confirm'];
  //   this.auth.employee(data).subscribe(res => {
  //     if(res.success){    
  //       this.isProcess=false;
  //       this.message="Account has been Created! ...";
  //       this.className="alert alert-success";
  //       this.router.navigate(['/login']);
  //     }else{    
  //       this.isProcess=false;
  //       this.message="server error..";
  //       this.className="alert alert-danger";
  //     }
  //     // alert("user register succ ....");
  //     // this.signupFrom.reset();
  //   }, err => {
  //     //alert('ssssddddd');
  //     alert(err)
  //   })
  // }