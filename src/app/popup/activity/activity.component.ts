import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'D:/Timesheet/src/app/service/auth.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class ActivityComponent {

  ActivityForm!: FormGroup;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private fb: FormBuilder, private auth: AuthService) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
    this.ActivityForm = this.fb.group({
      'id': ['', Validators.required],
      'name': ['', Validators.required],
      'code': ['', Validators.required]
    })
	}

  addData(){
    const data = this.ActivityForm.value;
    this.auth.activity(data).subscribe(res => {
      if(res.success){
      }
    }, err => {
      //alert('ssssddddd');
      alert(err)
    })
  }

  open(content:any) {
		this.modalService.open(content);
	}
}
