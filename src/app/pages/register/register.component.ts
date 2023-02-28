import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupFrom!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupFrom = this.fb.group({
      'displayName': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }

ngOnInit():void{

}
signup() {
 // this.isProcess=true;
  const data = this.signupFrom.value;
  delete data['confirm']
  // this.auth.signup(data).subscribe(res => {
  //   if(res.success){
  //    // alert('ssss');
  //     this.isProcess=false;
  //     this.message="account has been created...";
  //     this.className="alert alert-success";
  //   }else{
  //    // alert('dddd');
  //     this.isProcess=false;
  //     this.message="server error..";
  //     this.className="alert alert-danger";
  //   }
  //  // alert("user register succ ....");
  //  // this.signupFrom.reset();
  // }, err => {
  //   //alert('ssssddddd');
  //   alert(err)
  // })
}
}
