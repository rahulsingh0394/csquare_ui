import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-media',
  templateUrl: './media.html',
  styleUrls: ['./media.scss'],
  providers: [NgbCarouselConfig],
})

export class MediaComponent implements OnInit {

  constructor(config: NgbCarouselConfig,private meta: Meta,private title: Title) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    this.title.setTitle('CsquareEducation In Media and News');
    this.meta.addTags([
      { name: 'author', content: 'www.csquareeducation.com' },
      { name: 'description', content: 'CsquareEducation in media and news for achivements and success. We provide home tuition, private tuition, question paper for CBSE, ICSE, State Boards. We also provide Home tutor jobs.'  }
    ]);
  }

  ngOnInit() { }

}
