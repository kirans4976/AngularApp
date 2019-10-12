import { Component, OnInit } from '@angular/core';
import { EmployeeServicesService } from '../Services/employee-services.service';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public employees =[];
  constructor(private _employeeService:EmployeeServicesService) { }
  public errorMsg;
  ngOnInit() {
  //this.employees =  this._employeeService.getEmployees();
   this._employeeService.getEmployees().subscribe(data => this.employees = data
    , error => this.errorMsg = error
    );
  }
  show : boolean = false;// decalring variable which is used in .html file
  title: string ="Top 10 Movies" ;  
  //The array is of Movie type, can use any[] as an alternative
  movies: Movie[] =[  
    {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},  
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},  
    {title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},  
    {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},  
]  

items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];  
selectedValue: string= 'One';  
}   
class Movie {  
title : string;  
director : string;  
cast : string;  
releaseDate : string;  
}  

class item {  
  name: string;  
  val: number;  
}  
