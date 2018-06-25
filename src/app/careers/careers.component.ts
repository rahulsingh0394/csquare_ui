import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.html',
  styleUrls: ['./careers.scss']
})

export class CareersComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('Careers at CsquareEducation for different Position');

    meta.addTags([
        { name: 'author', content: 'www.csquareeducation.com' },
        { name: 'description', content: 'Want a home private tutor job in india or Want a BDA/ sales executive jobs. Check vacancies for available position in CsquareEducation Careers Page.' }
    ]);
  }

  ngOnInit() { }

}
