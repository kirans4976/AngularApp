import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
//title = 'AngularApp';
  //show : boolean = false;
  
  imgUrl="https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";
  isDisabled=true;
  
  ngOnInit() {
  }

}
