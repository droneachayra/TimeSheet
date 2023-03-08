import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProjectComponent } from './popup/project/project.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"logout",component:LogoutComponent},
  {path:"**",component:DashboardComponent},
  {path:'project_component/:id', component:ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
