import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-parents-review',
  templateUrl: './parents.html',
  styleUrls: ['./parents.scss']
})

export class ParentsComponent implements OnInit {


  classMenuList: any[] = [];
  syllabusMenuList: any[] = [];
  subjectMenuList: any[] = [];
  locationMenuList: any[] = [];

  constructor(private router: Router, private meta: Meta, private title: Title) {
    this.title.setTitle('Parents and Students review for CsquareEducation');
    this.meta.addTags([
      { name: 'author', content: 'www.csquareeducation.com' },
      { name: 'description', content: 'See what Parent and Students enrolled with us have to say about our services. we are trying to deliver best home tuition or private tuition in india.' }
    ]);
  }

  ngOnInit() {
    import('../json/bangalore/menu_for_class.json').then(module => {
      let menu = module;
      for (let i = 0; i < menu['size']; i++) {
        this.classMenuList[i] = menu[i + 1];
      }
    })
    import('../json/bangalore/menu_for_syllabus.json').then(module => {
      let menu = module;
      for (let i = 0; i < menu['size']; i++) {
        this.syllabusMenuList[i] = menu[i + 1];
      }
    })
    import('../json/bangalore/menu_for_subjects.json').then(module => {
      let menu = module;
      for (let i = 0; i < menu['size']; i++) {
        this.subjectMenuList[i] = menu[i + 1];
      }
    })
    import('../json/bangalore/menu_for_location.json').then(module => {
      let menu = module;
      for (let j = 0; j < 90; j++) {
        let i = Math.floor(Math.random() * (menu['size'] - 1 + 1)) + 1;
        this.locationMenuList[j] = menu[i];
      }
    })
   }

   buttonClick(data: any) {
    this.router.navigateByUrl(data);
  }

}
