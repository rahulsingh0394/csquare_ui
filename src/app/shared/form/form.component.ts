import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.html',
  styleUrls: ['./form.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class FormComponent implements OnInit {
  page: any;
  url: any[] = [];
  index: any = 0;

  constructor(private location: Location,
    private router: Router,
    private route: ActivatedRoute) {
    this.page = this.location.path();
    this.url = this.page.split('/');
    this.url[0] = 'home';
  }

  ngOnInit() {
  }

  buttonClick(data: any) {
    debugger;
    this.router.navigateByUrl("/"+data);
  }

  submit(){
    
  }

}
