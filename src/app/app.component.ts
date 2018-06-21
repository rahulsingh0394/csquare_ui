import {Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>

  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  testBrowser: boolean;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: string){
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(){
    if(this.testBrowser == true){
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
    }
  }

}
