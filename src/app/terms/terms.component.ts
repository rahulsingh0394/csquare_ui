import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.html',
  styleUrls: ['./terms.scss'],
  providers: [NgbCarouselConfig],
})

export class TermsComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() { }

}
