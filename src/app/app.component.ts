import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
   <app-product></app-product>
  </div>
  `
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
