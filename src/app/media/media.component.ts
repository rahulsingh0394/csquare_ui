import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-media',
  templateUrl: './media.html',
  styleUrls: ['./media.scss'],
  providers: [NgbCarouselConfig],
})

export class MediaComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() { }

}
