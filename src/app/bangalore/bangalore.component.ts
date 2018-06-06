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

  constructor(
    private location: Location,
    private router: Router,
    private meta: Meta,
    private titlee: Title,
    private service: BangaloreService,
    private route: ActivatedRoute
  ) {
    this.page = this.location.path();
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
        for (let j = 0; j < 100; j++) {
          let i = Math.floor(Math.random() * (menu['size'] - 1 + 1)) + 1;
          this.locationMenuList[j] = menu[i];
        }
      })
      const url = this.page;
      import('../json' + url + '.json').then(module => {
        let result = module;
        this.titlee.setTitle(result['title']);
        this.meta.addTags([
          { name: 'author', content: 'csquareeducation.com' },
          { name: 'description', content: result['description'] }
        ]);
        this.h1Des = result['h1Des'];
        this.t1 = result['t1'];
        this.t1Exp = result['t1Exp'];
        this.t1Url = result['t1Url'];
        this.t1Desp = result['t1Desp'];
        this.grade1 = result['grade1'];
        this.subjects1 = result['subjects1'];
        this.board1 = result['board1'];
        this.t2 = result['t2'];
        this.t2Exp = result['t2Exp'];
        this.t2Url = result['t2Url'];
        this.t2Desp = result['t2Desp'];
        this.t3 = result['t3'];
        this.t3Exp = result['t3Exp'];
        this.t3Url = result['t3Url'];
        this.t3Desp = result['t3Desp'];
        this.t4 = result['t4'];
        this.t4Exp = result['t4Exp'];
        this.t4Url = result['t4Url'];
        this.t4Desp = result['t4Desp'];
        this.t5 = result['t5'];
        this.t5Exp = result['t5Exp'];
        this.t5Url = result['t5Url'];
        this.t5Desp = result['t5Desp'];
        this.t6 = result['t6'];
        this.t6Exp = result['t6Exp'];
        this.t6Url = result['t6Url'];
        this.t6Desp = result['t6Desp'];
        this.t7 = result['t7'];
        this.t7Exp = result['t7Exp'];
        this.t7Url = result['t7Url'];
        this.t7Desp = result['t7Desp'];
        this.t8 = result['t8'];
        this.t8Exp = result['t8Exp'];
        this.t8Url = result['t8Url'];
        this.t8Desp = result['t8Desp'];
        this.t9 = result['t9'];
        this.t9Exp = result['t9Exp'];
        this.t9Url = result['t9Url'];
        this.t9Desp = result['t9Desp'];
        this.t10 = result['t10'];
        this.t10Exp = result['t10Exp'];
        this.t10Url = result['t10Url'];
        this.t10Desp = result['t10Desp'];
        this.t11 = result['t11'];
        this.t11Exp = result['t11Exp'];
        this.t11Url = result['t11Url'];
        this.t11Desp = result['t11Desp'];
        this.t12 = result['t12'];
        this.t12Exp = result['t12Exp'];
        this.t12Url = result['t12Url'];
        this.t12Desp = result['t12Desp'];
        this.t13 = result['t13'];
        this.t13Exp = result['t13Exp'];
        this.t13Url = result['t13Url'];
        this.t13Desp = result['t13Desp'];
        this.t14 = result['t14'];
        this.t14Exp = result['t14Exp'];
        this.t14Url = result['t14Url'];
        this.t14Desp = result['t14Desp'];
        this.t15 = result['t15'];
        this.t15Exp = result['t15Exp'];
        this.t15Url = result['t15Url'];
        this.t15Desp = result['t15Desp'];
      });
    }
  }

  buttonClick(data: any) {
    this.router.navigateByUrl(data);
    window.location.reload();
  }

}
