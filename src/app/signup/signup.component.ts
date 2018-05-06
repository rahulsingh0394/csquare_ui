import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SignUp, SignUpService } from './signup.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, Http, Response } from '@angular/http';
import { CommonModalComponent } from '../shared/common-modal/common-modal.component';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    signUpForm: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public confirmPassword: AbstractControl;
    loading: boolean = false;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private service: SignUpService,
        private fb: FormBuilder,
        private http: Http,
        private modalService: NgbModal,
        private element: ElementRef
    ) {
        this.initForm();
    }

    ngOnInit() { }

    submit() {
        const formValue: any = this.signUpForm.value;
        ////  this.spinnerService.hide();
        this.loading = true;
        this.service.login(formValue).subscribe(res => {
            if (res.sessionId != null) {
                ;
                // //  this.spinnerService.hide();
                this.loading = false;
                if (res.userRole == '2') {
                    //admin
                    this.router.navigateByUrl('/admin-app/lead/' + res.sessionId);
                } else if (res.userRole == '1') {
                    ;
                    //tutor
                    this.router.navigateByUrl('/admin-app/tutor/tutor-logged-in/' + res.sessionId + '/' + res.userId);
                } else {
                    //student
                    this.router.navigateByUrl('/admin-app/parent/student-logged-in/' + res.sessionId + '/' + res.userId);
                }
            }
            else {
                const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
                activeModal.componentInstance.showHide = true;
                activeModal.componentInstance.modalHeader = 'Alert';
                activeModal.componentInstance.modalContent = 'Email Or Password is Incorrect.';
            }
        })
    }

    private initForm() {
        this.signUpForm = this.fb.group({
            'email': [''],
            'password': ['']
        });
        this.email = this.signUpForm.controls['email'];
        this.password = this.signUpForm.controls['password'];

    }
    buttonClick(data: any) {
        const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
        activeModal.componentInstance.showHide = true;
        activeModal.componentInstance.modalHeader = 'Alert';
        activeModal.componentInstance.modalContent = 'Are You Sure You Want To Cancel?';
        activeModal.result.then(res => {
            if (res == 'Y') {
                this.router.navigateByUrl(data);
            }
            else {

            }
        })
    }

    back(data: any) {
        this.router.navigateByUrl(data);
    }
}

