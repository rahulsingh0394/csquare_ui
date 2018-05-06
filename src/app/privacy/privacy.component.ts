import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.html',
  styleUrls: ['./privacy.scss'],
  providers: [NgbCarouselConfig],
})

export class PrivacyComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() { }

}
