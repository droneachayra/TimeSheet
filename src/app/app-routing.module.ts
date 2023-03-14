import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProjectComponentComponent } from './popup/project-component/project-component.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"logout",component:LogoutComponent},
  {path:"dashboard", component:DashboardComponent, canActivate: [AuthGuardService]},
  {path: "project_component/:id", component:ProjectComponentComponent},
  {path: "project_component/:procode", component:ProjectComponentComponent},

  {path:"**",component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
