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
  EmployeeEdit!:FormGroup;
  message:string='';
  isProcess:Boolean=false;
  className='d-none';
  data:any;
  _id:any;
  id: any;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private fb: FormBuilder ,private auth: AuthService,private router:Router) { 
    config.backdrop = 'static';
		config.keyboard = false;
    this.EmployeeForm = this.fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['', Validators.required],
    })
    this.readEmployee();
  }

  ngOnInit() {
    
  }

  

  addData(){
    const data = this.EmployeeForm.value;
    this.auth.employee(data).subscribe(res => {
      if(res.success){
      }
    }, err => {
      alert(err)
    })
  }
  onDelete(data:any){

  }

  
  readEmployee(){
    this.auth.getEmployees().subscribe((data) => {
     this.data = data;
    })    
  }  
  open(content:any) {
		this.modalService.open(content);
	}


  content(content: any) {
    throw new Error('Method not implemented.');

  }

  editEmployee(item: any) {
    // Open the modal with the form pre-populated with the activity data
    this.modalService.open(this.content);
    this.EmployeeForm.setValue(item);
  }

  openEdit(id: any, content: any){
    this.id = id;
    const item = this.data.find((d: any) => d._id === id);
    this.EmployeeEdit.setValue(item);
    this.modalService.open(content);

  }
  // onEdit() {
  //   const data = this.EmployeeEdit.value;
  //   this.auth.editActivity(this.id, data).subscribe((response: any) => {
  //     const index = this.data.findIndex((d: any) => d._id === this.id);
  //     this.data[index] = response.data;
  //     this.EmployeeEdit.reset();
  //     this.modalService.dismissAll();
  //   });
  // }
  
}