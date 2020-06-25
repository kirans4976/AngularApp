import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PersonalData, ContactRequest } from '../models/contact-request';
import {phoneNumberValidator} from '../validators/phone-validators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
// constructor() {
//     this.contactForm = this.createFormGroup();
// }

//form builder:
constructor(private formBuilder: FormBuilder) {
  this.contactForm = this.createFormGroup();  //createFormGroupWithBuilderAndModel(formBuilder);
}

  

  countries = ['USA', 'Germany', 'Italy', 'France'];

requestTypes = ['Claim', 'Feedback', 'Help Request'];

  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl('kirans4976@gm',[Validators.required,Validators.email]), // form validation
        // mobile: new FormControl('',[Validators.required,phoneNumberValidator]),
        mobile: new FormControl(''),
        country: new FormControl()
       }),
      requestType: new FormControl(),
      text: new FormControl()
    });
  }
  ngOnInit() {
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      personalData: formBuilder.group({
        email: 'defaul@email.com',
        mobile: '',
        country: ''
      }),
      requestType: '',
      text: ''
    });
  }

  //passing class to formbuilder
  createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
    debugger
    return formBuilder.group({
      personalData: formBuilder.group(new PersonalData()), //[Validators.required] not working
      requestType: '',
      text: ''
    });
  }

  onSubmit() {
    debugger
    // Make sure to create a deep copy of the form-model
    const result: ContactRequest = Object.assign({}, this.contactForm.value);
    result.personalData = Object.assign({}, result.personalData);

    // Do useful stuff with the gathered data
    console.log(result);
  }

  revert() {
    debugger
    // Resets to blank object
    this.contactForm.reset();

    // Resets to provided model
    this.contactForm.reset({ personalData: new PersonalData(), requestType: '', text: '' });
  }

  get mobile() {
    return this.contactForm.get('mobile');
  }
  
  get email() {
    return this.contactForm.get('email');
  }
}
