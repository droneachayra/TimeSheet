import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { LogincheckService } from 'src/app/service/logincheck.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  islogged: boolean = false;

  constructor(private auth:AuthService, private logincheck: LogincheckService, private router:Router){
    this.logincheck.isUserLoggedIn.subscribe( value => {
      this.islogged = value;
  });
  }

  ngOnInit(){
    if(this.auth.isLoggedIn()){
      this.islogged = true;
    }
  }

  logout(){
    localStorage.clear();
    alert("Are you sure you want to logout?");
    this.logincheck.isUserLoggedIn.next(false);
    this.router.navigate(['/login']);
  }
  
}
