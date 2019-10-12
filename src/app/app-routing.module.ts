import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { BindingComponent } from './binding/binding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



/* For handling invalid routes >> wilcard Routes
Wild card route must be at last path because router will match from top */
const routes: Routes = [
  //{path:'',component:DirectivesComponent},
  {path:'',redirectTo:'/directives',pathMatch:'full'}, // pathMatch:prefix
   { path:'directives',component:DirectivesComponent },
  {path: 'bindings',component:BindingComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DirectivesComponent,BindingComponent,PageNotFoundComponent];
