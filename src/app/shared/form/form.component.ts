import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormStudentModalComponent } from './form-student-modal/form-student-modal.component';
import { CommonModalComponent } from '../common-modal/common-modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.html',
  styleUrls: ['./form.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class FormComponent implements OnInit {
  page: any;
  url: any[] = [];
  index: any = 0;

  formData: FormGroup;
  public leadType: AbstractControl;

  type: any;

  constructor(private location: Location,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
    this.page = this.location.path();
    this.url = this.page.split('/');
    this.url[0] = 'home';
    this.initForm();
  }

  ngOnInit() {
  }

  buttonClick(data: any, i: any) {
    if (i == 0 || i == 1) {
      this.router.navigateByUrl("/" + data);
      window.location.reload();
    } else if (i == 3) {
      this.router.navigateByUrl('/bangalore/home-tutors-private-tutors/' + data);
      window.location.reload();
    } else if (i = 0) {
      this.router.navigateByUrl('/home');
    }
  }

  initForm() {
    this.formData = this.fb.group({
      'leadType': ['']
    })
    this.leadType = this.formData.controls['leadType'];
    this.leadType.valueChanges.subscribe(val => {
      if (val) {
        this.type = val;
        //  if(val == 'Parent'){
       // window.alert(val);
        // }
      }
    })
  }

  submit() {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      size: 'lg'
    };
    if(this.type == 'Tutor'){
      this.router.navigateByUrl('/tutorForm');
    } else if(this.type){
      const modal = this.modalService.open(FormStudentModalComponent, ngbModalOptions);
      modal.componentInstance.leadType = this.type;
    } else {
      const modal = this.modalService.open(CommonModalComponent, {size: 'lg'});
      modal.componentInstance.showHide = false;
      modal.componentInstance.modalHeader = "Warning";
      modal.componentInstance.modalContent = "Please select any one option to continue.";
    }

  }

}
