import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    readMore: any = 'Show More...';
    isCollapsedS1: any;
    constructor(
        meta: Meta, title: Title) {

        title.setTitle('About us :CsquareEducation');

        meta.addTags([
            { name: 'author', content: 'www.csquareeducation.com' },
            { name: 'description', content: 'CsquareEducation is home tutoring & Online Classes service provider with very dedicated and qualified team. We are working towands enhancement of education in India.' }
        ]);
    }
    ngOnInit() {
    }

    public myfunc(event: Event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
    }

    changeButton(){
        if(this.readMore == 'Show More...'){
            this.readMore = 'Show Less...';
        } else {
            this.readMore = 'Show More...';
        }
    }

}
