import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']

})
export class BindingComponent implements OnInit {

  constructor() { }

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
