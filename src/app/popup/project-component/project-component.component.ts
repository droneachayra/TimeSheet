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
// import { ChangeEvent } from '@angular/core';


@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.css']
})
export class ProjectComponentComponent implements OnInit  {
  ProjectComponentForm!: FormGroup;
  data:any;
  emp:any;
  proj:any;
  id:any;
  records!:any[];
  act:any;
  employeeService: any;
 
  input: any;
  ProjectForm: any;
  // data!: any;
  
  constructor(
    private route: ActivatedRoute,
    private auth:AuthService,
    private fb: FormBuilder,
    private http:HttpClient
    // private dataService: DataService
  ) {
    
    this.ProjectComponentForm = this.fb.group({
      'taskName': ['', Validators.requiredTrue],
      'filename': ['', Validators.required],
      'activitylist': ['', Validators.requiredTrue],
      'employeelist': ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.getProjectComponent();

    this.auth.getEmployees().subscribe((data) => {
      this.emp = data;
    })  
    this.auth.getProject().subscribe((data) => {
      this.proj = data;
      console.log(data);      
    }) 
    this.auth.getActivity().subscribe((data) => {
      this.act = data;
    }) 

    this.id = this.route.snapshot.params['id']

  }
  appendData(){
    const data = this.ProjectComponentForm.value;
   
    this.auth.projectComponent(data).subscribe(res => {
      if(res.success){
      location.reload();
      }

    }, err => {
      alert(err)
    })
    
 
  }
  getProjectComponent(){
    
    this.auth.getProjectComponent().subscribe((data) => {
     this.data = data;
     console.log(data);
    })  
    console.log(this.data);

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
  
  // onFileSelected(event: Event) {
  //   const fileInput = event.target as HTMLInputElement;
  //   if (fileInput && fileInput.files && fileInput.files.length > 0) {
  //     const file = fileInput.files[0];
  //     // Do something with the file
  //   }
  // }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const csvData = reader.result as string;
      // Process the CSV data and store it in your component
    };
  }

}



//hey about that you now you know what its like to be  liek a heaplysepian 








