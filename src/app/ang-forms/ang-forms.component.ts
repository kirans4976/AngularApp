import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-ang-forms',
  templateUrl: './ang-forms.component.html',
  styleUrls: ['./ang-forms.component.css']
})
export class AngFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topics = ['Angualar','React','Vue'];

  userModel= new User('Rob','rob@user.com',55555,'','morning',true);
  // for bind the userModel data to the Form

  
}
