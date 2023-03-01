import { Component ,OnInit,Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
 

    @Output() activityInfo = new EventEmitter<string>();
    activityContent: string = '';
  
    // constructor() { }
  
    ngOnInit(): void {
    }
    
  
    // showContent(): void {
    //   // // Prompt the user for activity information
    //   // const activityInput = prompt('Enter activity information:');
    //   // if (activityInput) {
    //   //   // Add the activity information to the activityContent string
    //   //   this.activityContent += `${activityInput}<br>`;
    //   //   // Emit the activityContent string to the parent component
    //   //   this.activityInfo.emit(this.activityContent);
    //   // }
    // }
    constructor(private router: Router) {}

    showContent() {
    this.router.navigate(['/my-content']);
  }
  
  }
