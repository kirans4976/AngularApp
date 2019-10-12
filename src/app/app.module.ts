import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//import { DirectivesComponent } from './directives/directives.component';

import {FormsModule} from '@angular/forms'; //for using  ngModel in app-directives component
//import { BindingComponent } from './binding/binding.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component'; //for using  ngModel in app-directives component
import {EmployeeServicesService} from './Services/employee-services.service';
import {HttpClientModule} from '@angular/common/http';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents, // instead of  importing binding & directives components, we will bind routingComponents const
    ComponentInteractionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeServicesService],
  /*AppModule, which looks into the app folders. You can see in the "app.module" file 
  that a bootstrap array which is basically a list of all the components analyzes
   the index.html file.*/
  bootstrap: [AppComponent]
})
export class AppModule { }
