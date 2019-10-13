import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { BindingComponent } from './binding/binding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';



/* For handling invalid routes >> wilcard Routes
Wild card route must be at last path because router will match from top */
const routes: Routes = [
  //{path:'',component:DirectivesComponent},
  {path:'',redirectTo:'/directives',pathMatch:'full'}, // pathMatch:prefix
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
  {path: 'bindings',component:BindingComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DirectivesComponent,BindingComponent,PageNotFoundComponent
,DepartmentDetailComponent,DepartmentListComponent,DepartmentContactComponent,DepartmentOverviewComponent];
