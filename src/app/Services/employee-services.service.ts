import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { IEmployee } from '../employee';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import  {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

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


  private _url:string = "/assets/employee.json"; // here error can be raised
  constructor(private http:HttpClient) { 


  }
  // this service class is binding in binding & directives component
  getEmployees():Observable<IEmployee[]>{
    // return [
    //   {"id":1,"name":"Andrew","age":30},
    //   {"id":2,"name":"Kiran","age":25},
    //   {"id":3,"name":"pavan","age":27},
    //   {"id":4,"name":"venkat","age":26}
    // ];

    return this.http.get<IEmployee[]>(this._url).pipe(
    catchError(this.handlerError));
  }

  handlerError(error:HttpErrorResponse)
  {
    return throwError(error.message || "ServerError");
  }
}
