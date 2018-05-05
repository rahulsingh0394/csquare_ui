import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-banner></app-banner>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
