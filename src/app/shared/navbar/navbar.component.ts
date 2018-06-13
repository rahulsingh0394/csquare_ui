import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalComponent } from '../../shared/common-modal/common-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {TweenMax} from "gsap";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    providers: [NgbPopoverConfig]
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    greeting = {};
    name = 'World';
    @ViewChild('p') public popover: NgbPopover;

    showLink: object;

    constructor(public location: Location,
        private element: ElementRef,
        config: NgbPopoverConfig,
        private router: Router,
        private modalService: NgbModal) {
        this.sidebarVisible = false;
    }


    public changeGreeting(greeting: any): void {

        const isOpen = this.popover.isOpen();
        ;

        if (isOpen == false) {
            this.popover.close();
            if (greeting !== this.greeting || !isOpen) {
                this.greeting = greeting;
                this.popover.open(greeting);
            }
        }
        if (isOpen == true) {
            this.popover.close();
        }
    }

    ngOnInit() {
        TweenMax.from(document.getElementById("nav"), 0.5, {opacity: 0, y: -50, delay: 1});
        TweenMax.staggerFrom(document.getElementsByClassName("labelBtn"), 0.5, {opacity: 0, y: -50, delay: 1.5}, 0.2);
        TweenMax.staggerFrom(document.getElementsByClassName("nav-item"), 0.5, {opacity: 0, y: -50, delay: 2}, 0.2);

        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];

        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    refresh() {
        if (this.showLink) {
            this.ngOnInit();
        }
    }

    buttonClick(data: any) {
        this.router.navigateByUrl(data);
    }

}
