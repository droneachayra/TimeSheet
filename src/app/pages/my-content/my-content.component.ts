import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-content',
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.css']
})
export class MyContentComponent   implements OnInit {
  http: any;
  // 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  activityData: string[] = [];

  addActivity(activity: string) {
    if (activity.trim() !== '') {
      this.activityData.push(activity);
      this.http.post('/api/activity', { name: activity }).subscribe((response: any) => {
            console.log(response);
           this.activityData.push(activity);
           });
    }
  }
  // activityData: string[] = [];

  // constructor(private http: HttpClient) {}

  // addActivity(activity: string) {
  //   this.http.post('/api/activity', { name: activity }).subscribe((response) => {
  //     console.log(response);
  //     this.activityData.push(activity);
  //   });
  // }
  }

