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
  activeButton!: string;
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
    this.activeButton = 'activity';
  }
  
  showEmployee() {
    this.activeButton = 'employee';
  }
  
  showProject() {
    this.activeButton = 'project';
  }
  
}
