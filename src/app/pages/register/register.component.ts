import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupFrom!: FormGroup;
  message:string='';
  isProcess:Boolean=false;
  className='d-none';

  constructor(private fb: FormBuilder ,private auth: AuthService,private router:Router) {
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
  delete data['confirm'];
   this.auth.signup(data).subscribe(res => {
   if(res.success){
    
       this.isProcess=false;
       this.message="Account has been Created! ...";
       this.className="alert alert-success";
       this.router.navigate(['/login']);
   }else{
    
      this.isProcess=false;
      this.message="server error..";
       this.className="alert alert-danger";
     }
    // alert("user register succ ....");
    // this.signupFrom.reset();
 }, err => {
     //alert('ssssddddd');
     alert(err)
   })
}
}
