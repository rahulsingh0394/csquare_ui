import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
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
    detail1: boolean = false;
    detail2: boolean = false;
    detail3: boolean = false;
    detail4: boolean = false;
    time1: any = 30;
    time2: any = 30;
    time3: any = 30;
    time4: any = 30;
    i: any = 1;
    j: any = 1;
    k: any = 1;
    l: any = 1;
    private sub: Subscription;

    constructor(private router: Router, config: NgbCarouselConfig,
        meta: Meta, title: Title) {
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        title.setTitle('Best Private Home Tuition Tutor, Teacher & Online Classes all over India');

        meta.addTags([
            { name: 'author', content: 'csquareeducation.com' },
            { name: 'description', content: 'Best ✓Qualified ✓Experienced ✓certified ✓trusted private tutor at your home. Services: personal tuition teacher, Online Classes for ICSE, CBSE, State, IGCSE board for Math, Science, English, Geometry, Social, Chemistry, Physic, Hindi along with 10th & 12th board exam previous year question paper ...' }
        ]);
    }
    ngOnInit() {

        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
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

    firstStep1() {
        this.detail2 = false;
        this.detail3 = false;
        this.detail4 = false;
        this.time2 = 0;
        this.time3 = 0;
        this.time4 = 0;
        if (this.i == 1 && this.j == 1 && this.k == 1 && this.l == 1) {
            let timer = Observable.timer(0, 1000);
            this.sub = timer.subscribe(t =>
                this.timer1(t)
            );
            this.i++;
        } else {
            this.sub.unsubscribe();
            this.time1 = 30;
            let timer = Observable.timer(0, 1000);
            this.sub = timer.subscribe(t =>
                this.timer1(t)
            );
            this.i++;
        }

    }

    timer1(t: any) {
        if (this.time1 > 0) {
            this.time1 = 30 - t;
            this.detail1 = true;
        } else {
            this.time1 = 30;
            this.detail1 = false;
            this.sub.unsubscribe();
        }
    }

    firstStep2() {
        this.detail1 = false;
        this.detail3 = false;
        this.detail4 = false;
        this.time1 = 0;
        this.time3 = 0;
        this.time4 = 0;
        if (this.i == 1 && this.j == 1 && this.k == 1 && this.l == 1) {
            let timer = Observable.timer(0, 1000);
            this.sub = timer.subscribe(t =>
                this.timer2(t)
            );
            this.j++;
        } else {
            this.sub.unsubscribe();
            this.time2 = 30;
            let timer = Observable.timer(0, 1000);
            this.sub = timer.subscribe(t =>
                this.timer2(t)
            );
            this.j++;
        }

    }

    timer2(t: any) {
        if (this.time2 > 0) {
            this.time2 = 30 - t;
            this.detail2 = true;
        } else {
            this.time2 = 30;
            this.detail2 = false;
            this.sub.unsubscribe();
        }
    }

    firstStep3() {
        this.detail1 = false;
        this.detail2 = false;
        this.detail4 = false;
        this.time2 = 0;
        this.time1 = 0;
        this.time4 = 0;
        if (this.i == 1 && this.j == 1 && this.k == 1 && this.l == 1) {
            let timer = Observable.timer(0, 1000);
            this.sub = timer.subscribe(t =>
                this.timer3(t)
            );
            this.k++;
        } else {
            this.sub.unsubscribe();
            this.time3 = 30;
            let timer = Observable.timer(0, 1000);
            this.sub = timer.subscribe(t =>
                this.timer3(t)
            );
            this.k++;
        }
    }

    timer3(t: any) {
        if (this.time3 > 0) {
            this.time3 = 30 - t;
            this.detail3 = true;
        } else {
            this.time3 = 30;
            this.detail3 = false;
            this.sub.unsubscribe();
        }
    }

    firstStep4() {
        this.detail1 = false;
        this.detail2 = false;
        this.detail3 = false;
        this.time2 = 0;
        this.time3 = 0;
        this.time1 = 0;
        if (this.i == 1 && this.j == 1 && this.k == 1 && this.l == 1) {
            let timer = Observable.timer(0, 1000);
            this.sub = timer.subscribe(t =>
                this.timer4(t)
            );
            this.l++;
        } else {
            this.sub.unsubscribe();
            this.time4 = 30;
            let timer = Observable.timer(0, 1000);
            this.sub = timer.subscribe(t =>
                this.timer4(t)
            );
            this.l++;
        }
    }

    timer4(t: any) {
        if (this.time4 > 0) {
            this.time4 = 30 - t;
            this.detail4 = true;
        } else {
            this.time4 = 30;
            this.detail4 = false;
            this.sub.unsubscribe();
        }
    }

}
