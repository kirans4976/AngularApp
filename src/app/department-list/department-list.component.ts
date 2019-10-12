import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private router:Router) { }
  Departments = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Mongodb"},
    {"id":3, "name":"Node"}]
  ngOnInit() {
    
  }
  Onselect(department)
  {
    this.router.navigate(['/departments',department.id])

  }

}
