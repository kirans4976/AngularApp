import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import { relative } from 'path';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  constructor(private router:Router,private route:ActivatedRoute) { }
  
  Departments = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Mongodb"},
    {"id":3, "name":"Node"}]
  ngOnInit() {
 
    this.route.paramMap.subscribe((params:ParamMap) => {

      let id = parseInt(params.get('id'));
      this.selectedId = id;
     }); 
  }
  Onselect(department)
  {
    //Router class for navigating
    // this.router.navigate(['/departments',department.id]);
    //ActivatedRoute for capturing id
    //Relative navigation:
    this.router.navigate([department.id],{relativeTo:this.route});

  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
