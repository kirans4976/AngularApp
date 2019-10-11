import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';

import {FormsModule} from '@angular/forms'; //for using  ngModel in app-directives component
import { BindingComponent } from './binding/binding.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component'; //for using  ngModel in app-directives component

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    BindingComponent,
    ComponentInteractionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  /*AppModule, which looks into the app folders. You can see in the "app.module" file 
  that a bootstrap array which is basically a list of all the components analyzes
   the index.html file.*/
  bootstrap: [AppComponent]
})
export class AppModule { }
