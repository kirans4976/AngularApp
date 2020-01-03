import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//import { DirectivesComponent } from './directives/directives.component';

import {FormsModule} from '@angular/forms'; //for using  ngModel in app-directives component
//import { BindingComponent } from './binding/binding.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component'; //for using  ngModel in app-directives component
import {EmployeeServicesService} from './Services/employee-services.service';
import {HttpClientModule} from '@angular/common/http';
import { AngFormsComponent } from './ang-forms/ang-forms.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
// import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
// import { DepartmentContactComponent } from './department-contact/department-contact.component';
// import { DepartmentDetailComponent } from './department-detail/department-detail.component';
// import { DepartmentListComponent } from './department-list/department-list.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {AuthenticationModule} from '../authentication/authentication.module';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents, // instead of  importing binding & directives components, we will bind routingComponents const
    ComponentInteractionComponent, AngFormsComponent, ContactComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    // commented for lazy loading
   // AuthenticationModule // impoorted authenticated module 
  ],
  providers: [EmployeeServicesService],
  /*AppModule, which looks into the app folders. You can see in the "app.module" file 
  that a bootstrap array which is basically a list of all the components analyzes
   the index.html file.*/
  bootstrap: [AppComponent]
  
})
export class AppModule { }
