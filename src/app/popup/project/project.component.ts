import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class ProjectComponent {
  ProjectForm!: FormGroup;
  data:any;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private fb: FormBuilder, private auth: AuthService) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
    this.ProjectForm = this.fb.group({
      'id': ['', Validators.required],
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
  }

  open(content:any) {
		this.modalService.open(content);
	}

  readProject(){
    this.auth.getProject().subscribe((data) => {
     this.data = data;
    })    
  }  

}
