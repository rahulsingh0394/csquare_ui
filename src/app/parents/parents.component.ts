import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parents-review',
  templateUrl: './parents.html',
  styleUrls: ['./parents.scss'],
  providers: [NgbCarouselConfig],
})

export class ParentsComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() { }

}
