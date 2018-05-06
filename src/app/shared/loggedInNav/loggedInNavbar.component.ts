import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalComponent } from '../../shared/common-modal/common-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoggedIn, LoggedInService } from './loggedInNavbar.service';
import { Router, Params, ActivatedRoute } from '@angular/router';



@Component({
    selector: 'app-loggedInNavbar',
    templateUrl: './loggedInNavbar.component.html',
    styleUrls: ['./loggedInNavbar.component.scss'],
    providers: [NgbPopoverConfig]
})
export class LoggedInNavComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    greeting = {};
    name = 'World';
    @ViewChild('p') public popover: NgbPopover;

    userPic: string;
    userName: string;
    userEmail: string;
    userId: any;
    @Input() sessionId: any;
    home: boolean;
    studentForm: boolean;
    tutorForm: boolean;
    about: boolean;
    question: boolean;
    contact: boolean;
    signup: boolean;
    blog: boolean;
    payment: boolean;
    profile: boolean;
    lead: boolean;
    userManagement: boolean;
    studentManagement: boolean;
    tutorManagement: boolean;
    tutorSearch: boolean;

    constructor(public location: Location,
        private route: ActivatedRoute,
        private element: ElementRef,
        private service: LoggedInService,
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

        this.route.params.subscribe((params: Params) => {
            this.sessionId = params['id'];
        })
        this.service.getUserBySessionId(this.sessionId).subscribe(res => {
            this.service.getUserById(res.userId).subscribe(data => {
                this.home = false;
                this.about = false;
                this.signup = false;
                this.studentForm = false;
                this.tutorForm = false;
                this.profile = true;


                this.userName = data.firstName + ' ' + data.lastName;
                this.userEmail = data.email;
                this.userPic = 'assets/img/he.jpg';
                if (data.user_role == '2') {
                    //admin
                    this.lead = true;
                    this.studentManagement = true;
                    this.tutorManagement = true;
                    this.tutorSearch = true;
                    this.userManagement = true;
                } else if (data.user_role == '1') {
                    //tutor
                    this.payment = true;
                    this.blog = true;
                } else {
                    //student
                    this.question = true;
                    this.contact = true;
                }

            })
        })

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

    logout() {
        this.service.logout(this.sessionId).subscribe(res => {
            if (res) {
                const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
                activeModal.componentInstance.showHide = false;
                activeModal.componentInstance.modalHeader = 'Suucess';
                activeModal.componentInstance.modalContent = 'Logged Out Successfully.';
                this.router.navigateByUrl('/home');
            }
        })
    }

    buttonClick(data: any) {
        this.router.navigateByUrl('admin-app' + data + '/' + this.sessionId);
    }

}
