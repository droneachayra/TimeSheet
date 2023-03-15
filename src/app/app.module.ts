import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './include/header/header.component';
import { FooterComponent } from './include/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule }from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { EmployeeComponent } from './popup/employee/employee.component';
import { ProjectComponent } from './popup/project/project.component';
import { ActivityComponent } from './popup/activity/activity.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentComponent } from './component/component.component';
import { ProjectComponentComponent } from './popup/project-component/project-component.component';
import { LogincheckService } from './service/logincheck.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    DashboardComponent,
    EmployeeComponent,
    ProjectComponent,
    ActivityComponent,
    ComponentComponent,
    ProjectComponentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    NgbModule
  ],
  providers: [HeaderComponent, LogincheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
