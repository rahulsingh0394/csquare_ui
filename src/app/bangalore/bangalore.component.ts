import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BangaloreService } from './bangalore.service';

@Component({
  selector: 'app-bangalore',
  templateUrl: './bangalore.component.html',
  styleUrls: ['./bangalore.component.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class BangaloreComponent implements OnInit {
  location: any;
  json: any;

  constructor(location: Location,
    private service: BangaloreService
  ) {
    this.location = location.path();
  }

  ngOnInit() {
  }

}
