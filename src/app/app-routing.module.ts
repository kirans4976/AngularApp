import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { BindingComponent } from './binding/binding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { AngFormsComponent } from './ang-forms/ang-forms.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../authentication/login/login.component';



/* For handling invalid routes >> wilcard Routes
Wild card route must be at last path because router will match from top */
const routes: Routes = [
  //{path:'',component:DirectivesComponent},
  //{path:'',redirectTo:'/directives',pathMatch:'full'}, // pathMatch:prefix 
  {path:'',redirectTo:'/home',pathMatch:'full'}, // pathMatch:prefix
   { path:'directives',component:DirectivesComponent },
   /*if we change below route from departments to departments-list then it must be changes in all
   occurances, because this is absolute path , hence we will change to navigate routing */
   {path:'departments-list',component:DepartmentListComponent},
   {path:'departments-list/:id',component:DepartmentDetailComponent,
   /*we had a new req to add overview & contact info in depart-detail comp, 
   we will do this by child routing*/
    children:[
      {path:'overview',component:DepartmentOverviewComponent},
      {path:'contact',component:DepartmentContactComponent},
  ]
   },
   {path:'AngTDF',component:AngFormsComponent},
   {path:'AngReactiveForms',component:ContactComponent},
  {path: 'bindings',component:BindingComponent},
  {path: 'ang-forms',component:AngFormsComponent},
  {path:'home',component:HomeComponent},
  {path:'**',component:PageNotFoundComponent}, // Wildcard routing for handling unmatched(routes not present) routes
  { path: 'Auth', component: LoginComponent ,
   children : [
     { path: 'login', loadChildren: './authentication/authentication.module#AuthenticationModule'}]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//DBT: Routing components should be removed or added
export class AppRoutingModule { }

//Adding LoginComponent to below array
export const routingComponents = [DirectivesComponent,BindingComponent,PageNotFoundComponent,AngFormsComponent
,DepartmentDetailComponent,DepartmentListComponent,DepartmentContactComponent,DepartmentOverviewComponent,LoginComponent];
