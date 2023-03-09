import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { Router } from 'express';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
    data:any;
  constructor(private auth:AuthService,private router: Router){ }
  ngOnInit():void{
    this.getLogout()
  }
  
  getLogout(){
    //this.router.navigate(["../header"])
    this.auth.getLogout().subscribe(res=> {
      if(res.success){
        this.data=res.data;
        this.router.navigate(["/dashboard"])
       // alert(this.data)
      }else{
        this.logout();
      }
    },err=>{
  
    })
  }
  logout(){
    localStorage.clear()
    this.router.navigate(["/dashboard"])
  }
  }
  
