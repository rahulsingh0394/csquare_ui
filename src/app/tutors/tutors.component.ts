import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tutors-review',
  templateUrl: './tutors.html',
  styleUrls: ['./tutors.scss'],
})

export class TutorsComponent implements OnInit {

  classMenuList: any[] = [];
  syllabusMenuList: any[] = [];
  subjectMenuList: any[] = [];
  locationMenuList: any[] = [];

  constructor(private router: Router, private meta: Meta, private title: Title) {
    title.setTitle('Tutors review on CsquareEducation');

    meta.addTags([
      { name: 'author', content: 'www.csquareeducation.com' },
      { name: 'description', content: 'See what home tutor or private tutor or tuition teacher enrolled with CsquareEducation have to say about us. We provide best services for tutors so they can deliver best result to students.' }
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
