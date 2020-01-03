import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help/help.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [HelpComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule
  ],
  // here exports section must be added components as we are exporting components to the other module
  exports: [LoginComponent, RegisterComponent, HelpComponent] 
})
export class AuthenticationModule { }
