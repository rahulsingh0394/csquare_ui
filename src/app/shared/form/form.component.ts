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

  buttonClick(data: any, i: any) {
    if (i == 0 || i == 1) {
      this.router.navigateByUrl("/" + data);
      window.location.reload();
    } else if (i == 3) {
      this.router.navigateByUrl('/bangalore/home-tutors-private-tutors/' + data);
      window.location.reload();
    } else if (i = 0) {
      this.router.navigateByUrl('/home');
    }
  }

  submit() {

  }

}
