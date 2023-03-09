import { Component } from '@angular/core';
import { ActivityComponent } from './popup/activity/activity.component';
import { EmployeeComponent } from './popup/employee/employee.component';
import { ProjectComponent } from './popup/project/project.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TimesheetTest';
}
