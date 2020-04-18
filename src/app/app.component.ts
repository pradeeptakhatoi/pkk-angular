import { Component }       from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class='wrapper'>
      <h1 class='center'>Welcome to Angular Application</h1>  
      <app-users></app-users>    
    </div>
  `,
  providers:  []
})
export class AppComponent {
  questions: any[];

  constructor() {
    
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/