import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.html',
  styleUrls: ['./careers.scss'],
  providers: [NgbCarouselConfig],
})

export class CareersComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() { }

}
