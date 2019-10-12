import { Injectable } from '@angular/core';

/*when u dont register service with injector it is just class for angular
there are multiple places u can register a service but is imp because
angular has hirarchical di 

AppModule,Appcompnet,Emplist,EmpDetail

if we register in empDetail, it will be used in empDetail & its child
if we register in AppComponet, it will be used in AppComponet & its child
if we register in AppModiule, it will be used in throughout the components in app module
it is preffered to register in appModule

in providers section in appModule 
and import employee service
*/

/* @injector because when this service as dependencies of anther service,here there is no such req
hence it is not must, for class we must have component decorator & for service we will have @injector
 */
@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {

  constructor() { }
  // this service class is binding in binding & directives component
  getEmployees(){
    return [
      {"id":1,"name":"Andrew","age":30},
      {"id":2,"name":"Kiran","age":25},
      {"id":3,"name":"pavan","age":27},
      {"id":4,"name":"venkat","age":26}
    ];
  }
}
