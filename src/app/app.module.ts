import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { AppComponent }                 from './app.component';
import { UsersComponent } from './user/users.component';


@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule ],
  declarations: [
    AppComponent,
    UsersComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/