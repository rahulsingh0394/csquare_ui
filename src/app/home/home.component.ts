import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { NguCarousel } from '@ngu/carousel';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [NgbCarouselConfig]
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    public carouselOne: NguCarousel;
    isCollapsedS1: any;
    isCollapsedS2: any;
    isCollapsedS3: any;
    usersCount = 0;
    studentCount = 0;
    tutorCount = 0;
    constructor(private router: Router, config: NgbCarouselConfig,
        meta: Meta, title: Title) {
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        title.setTitle('Best private home Tuition Tutor, Teacher & Online Classes for Math, Science');

        meta.addTags([
            { name: 'author', content: 'csquareeducation.com' },
            { name: 'description', content: 'Best ✓Qualified ✓Experienced ✓certified ✓trusted private tutor at your home. Services: personal tuition teacher, Online Classes for ICSE, CBSE, State, IGCSE board for Math, Science, English, Geometry, Social, Chemistry, Physic, Hindi along with 10th & 12th board exam previous year question paper ...' }
        ]);
    }
    ngOnInit() {

        this.carouselOne = {
            grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
              visible: true
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
          }
        this.usersCount = 6200;
        this.studentCount = 200;
        this.tutorCount = 6000;
    }

    buttonClick(data: any) {
        this.router.navigateByUrl(data);
    }

    public myfunc(event: Event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
     }
}
