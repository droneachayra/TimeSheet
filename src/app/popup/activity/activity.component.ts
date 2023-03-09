import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class ActivityComponent {

  ActivityForm!: FormGroup;
  ActivityEdit!: FormGroup;
  records!: any[];
  data:any;
  id:any;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private fb: FormBuilder, private auth: AuthService) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
    this.ActivityForm = this.fb.group({
      'id': ['', Validators.required],
      'name': ['', Validators.required],
      'code': ['', Validators.required]
    })
    this.ActivityEdit = this.fb.group({
      'name': ['', Validators.required],
      'code': ['', Validators.required]
    })
    this.readActivity();
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
    this.modalService.dismissAll()
  }

  readActivity(){
    this.auth.getActivity().subscribe((data) => {
     this.data = data;
    })    
  }  

  open(content:any) {
		this.modalService.open(content);
	}
  // editActivity(item: any) {
  //   // Open the modal with the form pre-populated with the activity data
  //   this.modalService.open(this.content);
  //   this.ActivityForm.setValue(item);
  // }
  content(content: any) {
    throw new Error('Method not implemented.');

  }
  onDelete(id:any){
  
  }

  openEdit(id:any, content:any){
    this.id = id;
    this.modalService.open(content);
  }

  onEdit(){
    const data = this.ActivityEdit.value;
    this.auth.editActivity(this.id, data)
    this.ActivityEdit.reset();
    this.modalService.dismissAll()
  }

}
