import { Component , OnInit} from '@angular/core';import { ActivatedRoute } from '@angular/router';
import { ActivityComponent } from '../activity/activity.component';
import { EmployeeComponent } from '../employee/employee.component';
import { ProjectComponent } from '../project/project.component';
import { MongoClient } from 'mongodb';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.css']
})
export class ProjectComponentComponent  {
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
    private fb: FormBuilder,
    private http:HttpClient
    // private dataService: DataService
  ) {
    
    this.ProjectComponentForm = this.fb.group({
      'taskName': ['', Validators.required],
      'employeelist': ['', Validators.required],
      'filename': ['', Validators.required],
      'activity': ['', Validators.required]
    })
  }

  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   // this.dataService.getData().subscribe((res: any[] | undefined) => {
  //   //   this.data = res;
  //   // });
  //   this.readEmployee();
  //   // this.item = this.dataService.getItemById(id);
  // }
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

  exportToExcel(): void {
    const worksheet = XLSX.utils.json_to_sheet(this.data);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'data');
  }
  
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: 'application/octet-stream'});
    const url = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.xlsx`;
    link.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      link.remove();
    }, 100);
  }
  

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








