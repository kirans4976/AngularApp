import { Component, OnInit } from '@angular/core';
import { EmployeeServicesService } from '../Services/employee-services.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']

})
export class BindingComponent implements OnInit {

  public employees=[];
public errorMsg;
  ngOnInit(){
// to fetch the data from service we will use ngOnint life cycle hook 
    //this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees().subscribe(data => this.employees = data
      , error => this.errorMsg = error);
  }
  constructor(private _employeeService:EmployeeServicesService) { }

  public successClass = "text-success";
  public hasError = true;
  public isSpecial=true;
  LogMessage(msg)
  {
    alert(msg);
  }
  public MessageText={
    "text-success":!this.hasError,
    "text-danger": this.hasError,
    "text-special":this.isSpecial
  }

  public StyleBinding={
    color:"Orange",
    fontStyle:"italic"
  }
 
}
