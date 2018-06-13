import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToService } from 'ng2-scroll-to-el';
import { Component, OnInit, Renderer } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  Http } from '@angular/http';
import { CommonModalComponent } from '../../shared/common-modal/common-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HostListener, ElementRef } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { BannerService } from './banner.service';
import {TweenMax, Bounce, Elastic, Power2} from "gsap";


class leadGrade {
    gradeId: string;
    pk: string;
    leadId: string;
}

@Component({
    selector: 'app-banner',
    templateUrl: './banner.html',
    styleUrls: ['./banner.scss'],
})

export class BannerComponent implements OnInit {
    page = 4;
    page1 = 5;
    date: { year: number, month: number };
    model: NgbDateStruct;

    message: any;
    enquiryForm: FormGroup;
    public city: AbstractControl;
    public firstName: AbstractControl;
    public phone: AbstractControl;
    public email: AbstractControl;
    public grade: AbstractControl;
    public isstudent: AbstractControl;
    public istutor: AbstractControl;
    public lead: AbstractControl;

    cityList: any[] = [];
    gradeList: any[] = [];
    gradeL: any[] = [];
    nameDis: boolean = false;
    phoneDis: boolean = false;
    isPrev: boolean = false;
    count: number = 0;
    isNext: boolean = false;
    isSubmit: boolean = false;
    loading: any;
    btnName: any;

    constructor(private scrollService: ScrollToService,
        private router: Router,
        private renderer: Renderer, config: NgbCarouselConfig,
        private fb: FormBuilder,
        private http: Http,
        private route: ActivatedRoute,
        private modalService: NgbModal,
        public el: ElementRef,
        private service: BannerService
    ) {
        config.interval = 3000;
        config.wrap = true;
        config.keyboard = true;

        this.service.getAllRefCites().subscribe(data => {
            this.cityList = data;
        })
        this.service.getAllRefGrades().subscribe(data => {
            this.gradeList = data;
        })
        this.initForm();
        this.count = 0;
    }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
        TweenMax.from(document.getElementById("main"), 2, {opacity: 0});
        TweenMax.from(document.getElementById("1"), 2, {y: -1200, rotation: 90, ease: Power2.easeOut, delay: 1});
        TweenMax.from(document.getElementById("2"), 2, {y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.1});
        TweenMax.from(document.getElementById("3"), 2, {y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.2});
        TweenMax.from(document.getElementById("4"), 2, {y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.3});
        TweenMax.from(document.getElementById("5"), 2, {y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.4});
        TweenMax.from(document.getElementById("6"), 2, {y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.5});
        TweenMax.from(document.getElementById("7"), 2, {y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.6});
        TweenMax.from(document.getElementById("8"), 2, {y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.7});
        TweenMax.from(document.getElementById("9"), 2, {y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.8});
        TweenMax.from(document.getElementById("10"), 2, {y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.9});
        TweenMax.from(document.getElementById("11"), 2, {y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.0});
        TweenMax.from(document.getElementById("12"), 2, {y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.1});
        TweenMax.from(document.getElementById("13"), 2, {y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.2});
        TweenMax.from(document.getElementById("14"), 2, {y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.3});
        TweenMax.from(document.getElementById("15"), 2, {y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.4});
        TweenMax.from(document.getElementById("16"), 2, {y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.5});
        TweenMax.from(document.getElementById("h2"), 2, {x: -1200, ease:Elastic.easeOut, delay: 2});
        TweenMax.from(document.getElementById("icon"), 2, {x: -1200, ease:Bounce.easeOut, delay: 2});
    }

    scrollElement(element, duration) {
        this.scrollService.scrollTo(element, duration);
    }
    buttonClick(data: any) {
        ;
        this.router.navigateByUrl(data);
    }
    private initForm() {
        this.enquiryForm = this.fb.group({

            'city': ['', Validators.compose([Validators.required])],
            'firstName': ['', Validators.compose([Validators.required])],
            'phone': ['', Validators.compose([Validators.required, Validators.maxLength(10),
            Validators.minLength(10)])],
            'email': ['', Validators.compose([Validators.required])],
            'leadGradeList': [this.gradeL],
            'grade': ['', Validators.compose([Validators.required])],
            'isstudent': ['', Validators.compose([Validators.required])],
            'istutor': ['', Validators.compose([Validators.required])],
            'lead': [''],

        });

        this.city = this.enquiryForm.controls['city'];
        this.firstName = this.enquiryForm.controls['firstName'];
        this.phone = this.enquiryForm.controls['phone'];
        this.isstudent = this.enquiryForm.controls['isstudent'];
        this.istutor = this.enquiryForm.controls['istutor'];
        this.email = this.enquiryForm.controls['email'];
        this.grade = this.enquiryForm.controls['grade'];
        this.lead = this.enquiryForm.controls['lead'];

        this.city.valueChanges.subscribe(val => {
            if (val) {
                this.next2();
            }
        });
        this.firstName.valueChanges.subscribe(val => {
            if (val) {
                this.isSubmit = true;
                this.btnName = 'Next';
            }
        })
        this.grade.valueChanges.subscribe(val => {
            if (val) {
                this.next2();
            }
        })
        this.lead.valueChanges.subscribe(val => {
            if (val == 1) {
                this.isstudent.setValue(true);
                this.istutor.setValue(false);
                this.next2();
            } else {
                this.isstudent.setValue(false);
                this.istutor.setValue(true);
                this.next2();
            }
        })

    }
    next2() {
        if (this.count == 7) {
            console.log(this.count);
            this.validationMessage();
            if (this.message) {
                const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
                activeModal.componentInstance.showHide = true;
                activeModal.componentInstance.modalHeader = 'Alert';
                activeModal.componentInstance.modalContent = this.message;
            } else {
                const formValue: any = this.enquiryForm.value;
                console.log(formValue);
                ////  this.spinnerService.hide();
                // this.loading = true;
                // this.service.addLead(formValue).subscribe(enquiry => {
                //     if (enquiry._body) {
                //         if (enquiry._body == "Email already exists") {
                //             const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
                //             activeModal.componentInstance.showHide = true;
                //             activeModal.componentInstance.modalHeader = 'Alert';
                //             activeModal.componentInstance.modalContent = 'Hello ' + this.firstName.value + '. This email already exists. Check your email to get credentials for login.';
                //             ////  this.spinnerService.hide();
                //             this.loading = false;
                //         } else {
                //             const activeModal2 = this.modalService.open(CommonModalComponent, { size: 'lg' });
                //             activeModal2.componentInstance.showHide = true;
                //             activeModal2.componentInstance.modalHeader = 'Success';
                //             activeModal2.componentInstance.modalContent = 'Thank you ' + this.firstName.value + ' for contacting us we will reach you shortly!';
                //             this.enquiryForm.reset();
                //             this.count = 0;
                //             this.isNext = false;
                //             this.loading = false;
                //         }
                //     }
                // });
            }
        }
        else {
            if (this.count == 6) {
                this.btnName = 'Submit';
            }
            this.count++;
        }
    }

    back(count: any) {
        if (this.count > 0) {
            this.count--;
            this.isNext = true;
        }
    }
    next(count: any) {
        if (this.count < 7) {
            this.count++;
        } else {
            this.count--;
        }
    }
    validationMessage() {
        if (!this.firstName.value) {
            this.message = 'Please Provide First Name.';
        } else if (!this.phone.value) {
            this.message = 'Please Provide Phone Number.';
        }  else if (!this.grade.value) {
            this.message = 'Please Select Your Grade.';
        } else if (!this.email.value) {
            this.message = 'Please Provide Your Email.';
        } else if (!this.city.value) {
            this.message = 'Please Select Your City.';
        } else if (this.lead.value == "") {
            this.message = 'Please Select Tutor Or Student';
        } else {
            this.message = "";
        }
    }
}
