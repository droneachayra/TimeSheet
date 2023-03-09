import { Component , OnInit} from '@angular/core';import { ActivatedRoute } from '@angular/router';
import { ActivityComponent } from '../activity/activity.component';
import { EmployeeComponent } from '../employee/employee.component';
import { ProjectComponent } from '../project/project.component';
import { MongoClient } from 'mongodb';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.css']
})
export class ProjectComponentComponent implements OnInit {
  ProjectComponentForm!: FormGroup;
  data:any;
  // data: any[] = [];
  records!:any[];

// onSubmit(_t11: NgForm) {
// throw new Error('Method not implemented.');
// }

  // item:any;
  employeeService: any;
  dataService: any;
  // data!: any;
  
  constructor(
    private route: ActivatedRoute,
    private auth:AuthService,
    private fb: FormBuilder
    // private dataService: DataService
  ) {
    
    this.ProjectComponentForm = this.fb.group({
      'taskName': ['', Validators.required],
      'employeelist': ['', Validators.required],
      'filename': ['', Validators.required],
      'activity': ['', Validators.required]
    })
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.dataService.getData().subscribe((res: any[] | undefined) => {
    //   this.data = res;
    // });
    this.readEmployee();
    // this.item = this.dataService.getItemById(id);
  }
  readEmployee(){
    
    this.auth.getEmployees().subscribe((data) => {
     this.data = data;
     
    })   
    console.log(this.data); 
  }  
  readProjectComponent(){
    this.auth.getProjectComponent().subscribe((data) => {
     this.data = data;
     console.log(this.data);
    })    
  }  
  exporttoCSV(){
    var csv_data = [];
 
    // Get each row data
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) { 
      // Get each column data
      var cols = rows[i].querySelectorAll('td,th'); 
      // Stores each csv row data
      var csvrow = [];
      for (var j = 0; j < cols.length; j++) { 
        // Get the text data of each cell
        // of a row and push it to csvrow
        csvrow.push(cols[j].innerHTML);
      } 
      // Combine each column value with comma
      csv_data.push(csvrow.join(","));
    } 
    // Combine each row data with new line character
    var csv_data1 = csv_data.join('\n'); 
    // Call this function to download csv file 
    this.downloadCSVFile(csv_data1); 

  }
  downloadCSVFile(csv_data1: string) {
    throw new Error('Method not implemented.');
  }
  // app.get('/', function(req, res) {
  //   res.render('myComponent', { items: items });
  // });
  appendData(){
    const data = this.ProjectComponentForm.value;
    this.auth.projectComponent(data).subscribe(res => {
      if(res.success){
      }
    }, err => {
      alert(err)
    })
  }
}


//hey about that you now you know what its like to be  liek a heaplysepian 








