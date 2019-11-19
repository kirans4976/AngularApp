import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from './enrollment.service';


@Component({
  selector: 'app-ang-forms',
  templateUrl: './ang-forms.component.html',
  styleUrls: ['./ang-forms.component.css']
})
export class AngFormsComponent implements OnInit {

  constructor(private _enrollmentService:EnrollmentService) { }

  ngOnInit() {
  }
  topics = ['Angualar','React','Vue'];
  topicHasError=true;


// for bind the userModel data to the Form
  userModel= new User('Rob','rob@user.com',55555,'','morning',true);
  
  validateTopic(value)
  { 
    if(value === 'default')
    {
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false; 
    }

  }

  onSubmit(){
    debugger
    this._enrollmentService.enroll(this.userModel)
    .subscribe(data=> console.log('success',data),
    err=> console.log('Error',err))
    console.log(this.userModel); 
  }  
}
