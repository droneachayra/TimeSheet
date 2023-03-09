import { Component , OnInit} from '@angular/core';
// import { ProjectComponent } from '../project/project.component';
import { ActivatedRoute } from '@angular/router';
import { ActivityComponent } from '../activity/activity.component';
import { EmployeeComponent } from '../employee/employee.component';
import { ProjectComponent } from '../project/project.component';
import { MongoClient } from 'mongodb';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.css']
})
export class ProjectComponentComponent implements OnInit {

  item:any;
  constructor(
    private route: ActivatedRoute,
    // private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.item = this.dataService.getItemById(id);
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
}






