import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Http } from '@angular/http';


@Component({
  selector: 'app-Class-wise-best-private-home-tutor',
  templateUrl: './Class-wise-best-private-home-tutor.html',
  styleUrls: ['./Class-wise-best-private-home-tutor.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class ClassWiseComponent implements OnInit {

  paramId: any;
  
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
  json: any;

  constructor(
    private location: Location,
    private router: Router,
    private meta: Meta,
    private title: Title,
    private route: ActivatedRoute,
    private http: Http,
    @Inject(PLATFORM_ID) private platformId: string) {
    this.testBrowser = isPlatformBrowser(platformId);
    this.http.get('assets/json' + location.path() + '.json').subscribe(res => {
      let result = res.json();
      title.setTitle(result['title']);
      meta.addTags([
        { name: 'author', content: 'www.csquareeducation.com' },
        { name: 'description', content: result['description'] }
      ]);
      if (this.testBrowser == true) {
        const width = window.screen.width;
        const height = window.screen.height;
        if (width <= 800 && height <= 800) {
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
        } else {
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
    });
  }

  ngOnInit() {
    
  }

  buttonClick(data: any) {
    this.router.navigateByUrl(data);
    window.location.reload();
  }

}
