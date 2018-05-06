import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tutors-review',
    templateUrl: './tutors.html',
    styleUrls: ['./tutors.scss'],
    providers: [NgbCarouselConfig],
})

export class TutorsComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() {}

}
