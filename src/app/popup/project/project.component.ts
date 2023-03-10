import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from 'src/app/service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class ProjectComponent {
  ProjectForm!: FormGroup;
  ProjectEdit!: FormGroup;
  data:any;
  id:any;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private fb: FormBuilder, private auth: AuthService,private http:HttpClient) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
    this.ProjectForm = this.fb.group({
      'id': ['', Validators.required],
      'procode': ['', Validators.required],
      'name': ['', Validators.required],
      'status': ['', Validators.required],
      'starttime': ['', Validators.required],
      'endtime': ['', Validators.required]
    })
    this.ProjectEdit = this.fb.group({
      'name': ['', Validators.required],
      'status': ['', Validators.required],
      'starttime': ['', Validators.required],
      'endtime': ['', Validators.required]
    })
    this.readProject();
	}

  addData(){
    const data = this.ProjectForm.value;
    this.auth.project(data).subscribe(res => {
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

  readProject(){
    this.auth.getProject().subscribe((data) => {
     this.data = data;
    })    
  }  

  openEdit(id:any, content:any){
    this.id = id;
    this.modalService.open(content);
  }

  onEdit(){
    const data = this.ProjectEdit.value;
    this.auth.editProject(this.id, data)
    this.ProjectEdit.reset();
    this.modalService.dismissAll()
  }
  onDelete(data: any) {
    console.log(data);
    // Call the API to delete the activity data
    this.auth.deleteProject(data).subscribe(res => {
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

}
