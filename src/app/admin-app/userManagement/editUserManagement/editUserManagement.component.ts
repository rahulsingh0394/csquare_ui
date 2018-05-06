import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AdminAppService } from '../../admin-app.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, Http, Response } from '@angular/http';
import { CommonModalComponent } from '../../../shared/common-modal/common-modal.component';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'admin-app-editUserManagement',
  templateUrl: './editUserManagement.html',
  styleUrls: ['./editUserManagement.scss'],
  providers: [NgbCarouselConfig],
})

export class EditUserComponent implements OnInit {

  leadIdParam: any;
  leadForm: FormGroup;
  leadData: any;
  public pK: AbstractControl;
  public firstName: AbstractControl;
  public lastName: AbstractControl;
  public phone: AbstractControl;
  public email: AbstractControl;
  public comment: AbstractControl;
  public gender: AbstractControl;
  public address: AbstractControl;
  public city: AbstractControl;
  public istutor: AbstractControl;
  public isstudent: AbstractControl;
  cityList: any[] = [];
  public userType: AbstractControl;
  public password: AbstractControl;
  public userName: AbstractControl;
  public user_status: AbstractControl;
  public location: AbstractControl;
  public user_role: AbstractControl;
  public isActive: AbstractControl;
  public alternate_phone: AbstractControl;
  locationList: any[] = [];
  statusList: any[] = [];
  userStatusList: any[] = [];
  userRoleList: any[] = [];

  locationSearchList: any[] = [];
  public locationName: AbstractControl;
  sessionId: any;
  loading: any;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.locationSearchList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AdminAppService,
    private fb: FormBuilder,
    private http: Http,
    private modalService: NgbModal) {
    this.service.getAllRefCites().subscribe(data => {
      this.cityList = data;
    })
    this.service.getAllLeadStatus().subscribe(data => {
      this.statusList = data;
    })
    this.service.getAllUserStatus().subscribe(data => {
      this.userStatusList = data;
    })
    this.service.getAllUserRoles().subscribe(data => {
      this.userRoleList = data;
    })
    this.initForm();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.leadIdParam = params['pk'];
      this.sessionId = params['id'];
      if (this.leadIdParam) {
        this.loading = true;
        this.service.getUserById(this.leadIdParam).subscribe(data => {
          if (data.user_status != null) {
            this.user_status.setValue(data.user_status);
          }
          if (data.user_role != null) {
            this.user_role.setValue(data.user_role);
          }
          this.location.setValue(data.location);
          this.leadForm.patchValue(data);
          this.loading = false;
        })
      }
    })
  }

  submit() {
    if (this.isstudent.value == true) {
      this.userType.setValue('Student');
    }
    if (this.istutor.value == true) {
      this.userType.setValue('Tutor');
    }
    const formValue: any = this.leadForm.value;
    if (!this.leadIdParam) {
      // if(this.leadForm.valid) {
      //  this.spinnerService.hide();
      this.service.addUser(formValue).subscribe(enquiry => {
        const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
        activeModal.componentInstance.showHide = true;
        activeModal.componentInstance.modalHeader = 'Alert';
        activeModal.componentInstance.modalContent = 'Congrats! Lead has been created Successfully';
        //  this.spinnerService.hide();
        this.router.navigateByUrl('/admin-app/userManagement/' + this.sessionId);
      });
      // } else{
      //   const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
      //   activeModal.componentInstance.showHide = true;
      //   activeModal.componentInstance.modalHeader = 'Alert';
      //   activeModal.componentInstance.modalContent = 'Please Fill the form and then submit!';
      // } 
    } else {
      this.pK.setValue(this.leadIdParam);
      //if(this.leadForm.valid) {
      //  this.spinnerService.hide();
      this.service.updateUser(formValue).subscribe(enquiry => {
        const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
        activeModal.componentInstance.showHide = true;
        activeModal.componentInstance.modalHeader = 'Alert';
        activeModal.componentInstance.modalContent = 'User has been Successfully Updated!';
        //  this.spinnerService.hide();
        this.router.navigateByUrl('/admin-app/userManagement/' + this.sessionId);
      });
      // } else{
      //   const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
      //   activeModal.componentInstance.showHide = true;
      //   activeModal.componentInstance.modalHeader = 'Alert';
      //   activeModal.componentInstance.modalContent = 'Please Fill the form and then submit!';
      // } 
    }

  }
  cancel() {
    const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
    activeModal.componentInstance.showHide = true;
    activeModal.componentInstance.modalHeader = 'Alert';
    activeModal.componentInstance.modalContent = 'Are you sure want to Cancel?';
    activeModal.result.then((res) => {
      if (res == 'Y') {
        this.leadForm.reset();
      } else if (res == 'N') {
      }
    });
  }
  private initForm() {
    this.leadForm = this.fb.group({
      'pK': [null],
      'firstName': ['', Validators.compose([Validators.required])],
      'phone': ['', Validators.compose([Validators.required, Validators.maxLength(10),
      Validators.minLength(10), Validators.pattern('[0-9]*')])],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'lastName': ['', Validators.compose([Validators.required])],
      'comment': [''],
      'gender': ['', Validators.compose([Validators.required])],
      'address': ['', Validators.compose([Validators.required])],
      'city': ['', Validators.compose([Validators.required])],
      'userType': [''],
      'istutor': [''],
      'isstudent': [''],
      'password': [''],
      'userName': [''],
      'user_status': [null],
      'alternate_phone': [''],
      'isActive': [''],
      'location': [''],
      'user_role': [null],
      'locationName': [''],


    });
    this.pK = this.leadForm.controls['pK'];
    this.firstName = this.leadForm.controls['firstName'];
    this.phone = this.leadForm.controls['phone'];
    this.email = this.leadForm.controls['email'];
    this.lastName = this.leadForm.controls['lastName'];
    this.comment = this.leadForm.controls['comment'];
    this.gender = this.leadForm.controls['gender'];
    this.address = this.leadForm.controls['address'];
    this.city = this.leadForm.controls['city'];
    this.userType = this.leadForm.controls['userType'];
    this.istutor = this.leadForm.controls['istutor'];
    this.isstudent = this.leadForm.controls['isstudent'];
    this.alternate_phone = this.leadForm.controls['alternate_phone'];
    this.location = this.leadForm.controls['location'];
    this.user_role = this.leadForm.controls['user_role'];
    this.user_status = this.leadForm.controls['user_status'];
    this.userName = this.leadForm.controls['userName'];
    this.isActive = this.leadForm.controls['isActive'];
    this.password = this.leadForm.controls['password'];
    this.locationName = this.leadForm.controls['locationName'];

    this.city.valueChanges.subscribe(val => {
      if (this.location.value) {

        this.service.getRefLocationById(this.location.value).subscribe(ele => {
          this.locationName.setValue((ele.pincode + ' ( ' + ele.location_name + ' )'))
        })
      }
      this.locationName.reset();
      this.locationList = [];
      this.locationSearchList = [];
      this.service.searchLocationByCity(val).subscribe(data => {
        this.locationList = data;
        let i = 0;
        data.forEach(element => {
          this.locationSearchList[i] = (element.pincode + ' ( ' + element.location_name + ' )');
          i++;
        });
      })
    });

    this.locationName.valueChanges.subscribe(val => {

      this.locationList.forEach(element => {
        if ((element.pincode + ' ( ' + element.location_name + ' )') == val) {
          this.location.setValue(element.pk);
        }
      });
    })
  }
  buttonClick(data: any) {

    this.router.navigateByUrl('/admin-app' + data + '/' + this.sessionId);
  }
}

