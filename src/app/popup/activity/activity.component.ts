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
  records!: any[];
  data:any;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private fb: FormBuilder, private auth: AuthService) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
    this.ActivityForm = this.fb.group({
      'id': ['', Validators.required],
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
  onEdit(id:any){
    // const item = this.data.find((d:any) => d.id === id);
    // this.ActivityForm.setValue(item);
    // this.modalService.open(this.content).result.then((result) => {
    //   if (result === 'save') {
    //     const data = this.ActivityForm.value;
    //     this.auth.updateActivity(data).subscribe(res => {
    //       if (res.success) {
    //         const index = this.data.findIndex((d:any) => d.id === data.id);
    //         if (index > -1) {
    //           this.data[index] = data;
    //         }
    //       }
    //     }, err => {
    //       console.log(err);
    //     });
    //   }
    //   this.ActivityForm.reset();
    // }, (reason) => {
    //   this.ActivityForm.reset();
    // });
  }
  
  showEditor(){
    
  }
  

}

// deleteActivity(item: any) {
  //   // Call the API to delete the activity data
  //   this.auth.deleteActivity(item.id).subscribe(res => {
  //     if (res.success) {
  //       // Remove the deleted activity from the table
  //       const index = this.data.indexOf(item);
  //       if (index > -1) {
  //         this.data.splice(index, 1);
  //       }
  //     }
  //   }, err => {
  //     console.log(err);
  //   });
  // }
  // deleteActivity(id:any) {
  //   // Call the API to delete the activity data
  //   this.auth.deleteActivity(id).subscribe(res => {
  //     if (res.success) {
  //       // Remove the deleted activity from the table
  //       const index = this.data.indexOf(id);
  //       if (index > -1) {
  //         this.data.splice(index, 1);
  //       }
  //     }
  //   }, err => {
  //     console.log(err);
  //   });
  // }

