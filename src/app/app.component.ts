import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'AngularApp';
  //show : boolean = false;
  
  imgUrl="https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";
  isDisabled=true;
  public message = "";
}
