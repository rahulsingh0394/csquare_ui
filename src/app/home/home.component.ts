import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';

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
        this.usersCount = 6000;
        this.studentCount = 200;
        this.tutorCount = 5800;
    }

    buttonClick(data: any) {
        this.router.navigateByUrl(data);
    }

}
