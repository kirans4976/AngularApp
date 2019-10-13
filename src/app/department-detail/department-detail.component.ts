import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';


@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  public departmentId;
  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));

    /* snapshot will not work when we goback in same component,Angular does initialize nginit
     when in same component hence we will use parammap observable */

     // the parammap is am obsevable, hence we will get data when we subscribe it
    
     this.route.paramMap.subscribe((params:ParamMap) => {

      let id = parseInt(params.get('id'));
      this.departmentId = id;
     });
    
  }
  
  goPrevious(){
    debugger
    let previousId = this.departmentId -1;
    this.router.navigate(['/departments',previousId]);
  }


  goNext(){
    debugger
    let nextId = this.departmentId +1;
    this.router.navigate(['/departments',nextId]);
  }

  goToDepartmentDetails(){

    let selectedId = this.departmentId ? this.departmentId : null;
    //Optional Route 
    //this.router.navigate(['/departments',{id:selectedId}]);
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route})
    }

    showOverview(){
      this.router.navigate(['overview'],{relativeTo:this.route});
    }

    showContact(){
      this.router.navigate(['contact'],{relativeTo:this.route});
    }
}
