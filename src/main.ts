/*Now, you can see that the Angular application gets loaded as:
 main.ts  >>   app.Module.ts  >>  app.component.ts  >>  index.html  >>  app.component.html  */

/*Whenever ng-serve builds the application, it creates "bundles" and automatically
 adds these to index.html file at runtime. So, from these bundles, 
 the first code has to be executed from "main.ts" file, i.e., "main.ts" file 
 is the main file from where the execution of an Angular application starts.*/


import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Here, the bootstrap method starts the Angular application. It refers to AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
