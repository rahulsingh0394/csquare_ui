import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BangaloreService } from './bangalore.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";


@Component({
  selector: 'app-bangalore',
  templateUrl: './bangalore.component.html',
  styleUrls: ['./bangalore.component.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class BangaloreComponent implements OnInit {

  paramId: any;
  t1: string;
  t1Exp: string;
  t1Desp: string;
  t1Url: string;
  grade1: string;
  subjects1: string;
  board1: string;
  t2: string;
  t2Url: string;
  t2Exp: string;
  t2Desp: string;
  t3: string;
  t3Url: string;
  t3Exp: string;
  t3Desp: string;
  t4: string;
  t4Url: string;
  t4Exp: string;
  t4Desp: string;
  t5: string;
  t5Url: string;
  t5Exp: string;
  t5Desp: string;
  t6: string;
  t6Url: string;
  t6Exp: string;
  t6Desp: string;
  t7: string;
  t7Url: string;
  t7Exp: string;
  t7Desp: string;
  t8: string;
  t8Url: string;
  t8Exp: string;
  t8Desp: string;
  t9: string;
  t9Url: string;
  t9Exp: string;
  t9Desp: string;
  t10: string;
  t10Url: string;
  t10Exp: string;
  t10Desp: string;
  t11: string;
  t11Url: string;
  t11Exp: string;
  t11Desp: string;
  t12: string;
  t12Url: string;
  t12Exp: string;
  t12Desp: string;
  t13: string;
  t13Url: string;
  t13Exp: string;
  t13Desp: string;
  t14: string;
  t14Url: string;
  t14Exp: string;
  t14Desp: string;
  t15: string;
  t15Url: string;
  t15Exp: string;
  t15Desp: string;
  page: any;
  h1Des: any;

  classMenuList: any[] = [];
  syllabusMenuList: any[] = [];
  subjectMenuList: any[] = [];
  locationMenuList: any[] = [];
  tutorDetails: any [] = [];

  constructor(
    private location: Location,
    private router: Router,
    private meta: Meta,
    private title: Title,
    private service: BangaloreService,
    private route: ActivatedRoute
  ) {
    this.page = this.location.path();
    this.title.setTitle('Best Home/Private Tuition Tutor in bangalore for CBSE, ISCE & State Board');
        this.meta.addTags([
          { name: 'author', content: 'csquareeducation.com' },
          { name: 'description', content: 'Best ✓Qualified ✓Experienced ✓certified ✓trusted private tutor at your home in bangalore. Services: personal tuition teacher, Online Classes for ICSE, CBSE, State, IGCSE board for Math, Science, English, Geometry, Social, Chemistry, Physic, Hindi.' }
        ]);
  }

  ngOnInit() {

    if (this.page) {
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
      const url = this.page;
      import('../json' + url + '.json').then(module => {
        let result = module;
        this.title.setTitle(result['title']);
        this.meta.addTags([
          { name: 'author', content: 'csquareeducation.com' },
          { name: 'description', content: result['description'] }
        ]);
        this.h1Des = result['h1Des'];
        let i = 1;
        for(i = 1; i <= 15; i++){
          let data = {};
          data['name'] = result['t'+i];
          data['exp'] = result['t'+i+'Exp'];
          data['url'] = result['t'+i+'Url'];
          data['desp'] = result['t'+i+'Desp'];
          this.tutorDetails.push(data);
        }
      });
    }
  }

  buttonClick(data: any) {
    this.router.navigateByUrl(data);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

}
