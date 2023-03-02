import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  activityform!: FormGroup;
  message:string='';
  isProcess:Boolean=false;
  className='d-none';
  activityvis:boolean = false;
  employeevis:boolean = false;
  projectvis:boolean = false;

  constructor(private fb: FormBuilder ,private auth: AuthService,private router:Router) {
  }

  ngOnInit():void{
  }

  showActivity() {
    this.activityvis = !this.activityvis;
  }
  showEmployee() {
    this.employeevis = !this.employeevis;
  }
  showProject() {
    this.projectvis = !this.projectvis;
  }

}
