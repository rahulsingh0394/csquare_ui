import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BangaloreService } from './bangalore.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Http } from '@angular/http';


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
  tutorDetails: any[] = [];

  testBrowser: any;
  deviceInfo = null;
  show: boolean = false;
  loading: any = true;

  constructor(
    private location: Location,
    private router: Router,
    private meta: Meta,
    private title: Title,
    private service: BangaloreService,
    private route: ActivatedRoute,
    private http: Http,
    @Inject(PLATFORM_ID) private platformId: string) {
    this.testBrowser = isPlatformBrowser(platformId);
    this.page = location.path();
    import('assets/json' + location.path() + '.json').then(module => {
      let result = module;
      title.setTitle(result['title']);
      meta.addTags([
        { name: 'author', content: 'www.csquareeducation.com' },
        { name: 'description', content: result['description'] }
      ]);
    });
  }

  ngOnInit() {
    const url = this.page;
    if (this.testBrowser == true) {
      const width = window.screen.width;
      const height = window.screen.height;
      if (width <= 800 && height <= 800) {
        this.http.get('assets/json' + url + '.json').subscribe(data => {
          const result = data.json();
          this.h1Des = result['h1Des'];
          let i = 1;
          for (i = 1; i <= 5; i++) {
            let data = {};
            data['name'] = result['t' + i];
            data['exp'] = result['t' + i + 'Exp'];
            data['url'] = result['t' + i + 'Url'];
            data['desp'] = result['t' + i + 'Desp'];
            this.tutorDetails.push(data);
            this.show = true;
          }
        });
      } else {
        this.http.get('assets/json' + url + '.json').subscribe(data => {
          const result = data.json();
          this.h1Des = result['h1Des'];
          let i = 1;
          for (i = 1; i <= 15; i++) {
            let data = {};
            data['name'] = result['t' + i];
            data['exp'] = result['t' + i + 'Exp'];
            data['url'] = result['t' + i + 'Url'];
            data['desp'] = result['t' + i + 'Desp'];
            this.tutorDetails.push(data);
            this.show = true;
          }
        });
        this.http.get('assets/json/bangalore/menu_for_class.json').subscribe(data => {
          const menu = data.json();
          for (let i = 0; i < menu['size']; i++) {
            this.classMenuList[i] = menu[i + 1];
          }
        });

        this.http.get('assets/json/bangalore/menu_for_syllabus.json').subscribe(data => {
          const menu = data.json();
          for (let i = 0; i < menu['size']; i++) {
            this.syllabusMenuList[i] = menu[i + 1];
          }
        });

        this.http.get('assets/json/bangalore/menu_for_subjects.json').subscribe(data => {
          const menu = data.json();
          for (let i = 0; i < menu['size']; i++) {
            this.subjectMenuList[i] = menu[i + 1];
          }
        });

        this.http.get('assets/json/bangalore/menu_for_location.json').subscribe(data => {
          const menu = data.json();
          for (let j = 0; j < 90; j++) {
            let i = Math.floor(Math.random() * (menu['size'] - 1 + 1)) + 1;
            this.locationMenuList[j] = menu[i];
          }
        });

      }
    }
  }

  buttonClick(data: any) {
    this.router.navigateByUrl(data);
    window.location.reload();
  }

}
