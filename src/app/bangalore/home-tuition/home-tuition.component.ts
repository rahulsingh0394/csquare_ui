import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BangaloreService } from '../bangalore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-tuition',
  templateUrl: './home-tuition.component.html',
  styleUrls: ['./home-tuition.component.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class HomeTuitionComponent implements OnInit {
 
   

  constructor(
    location: Location, private router: Router,
    private service: BangaloreService) {
     
     }

  ngOnInit() {
  
  }

}
