import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class EmployeeComponent implements OnInit {

  EmployeeForm!: FormGroup;
  EmployeeEdit!: FormGroup;
  message:string='';
  isProcess:Boolean=false;
  className='d-none';
  data:any;
  id:any;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private fb: FormBuilder ,private auth: AuthService,private router:Router) { 
    config.backdrop = 'static';
		config.keyboard = false;
    this.EmployeeForm = this.fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['', Validators.required],
    })
    this.EmployeeEdit = this.fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['', Validators.required],
    })
    this.readEmployee();
  }

  ngOnInit() {
    
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

  addData(){
    const data = this.EmployeeForm.value;
    this.auth.employee(data).subscribe(res => {
      if(res.success){
      }
    }, err => {
      alert(err)
    })
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
    this.auth.editActivity(this.id, data)
    this.EmployeeEdit.reset();
    this.modalService.dismissAll()
  }

}