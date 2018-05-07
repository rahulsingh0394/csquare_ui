import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AdminAppService } from '../admin-app.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { TutorModalComponent } from '../tutorSearch/tutor-modal/tutor-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { CommonModalComponent } from '../../shared/common-modal/common-modal.component';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

class searchItem {
  fieldName: any;
  fieldValue: any;
  fieldType: any;
}

class tutorAssign {
  tutorId: any;
}

@Component({
  selector: 'admin-app-tutorSearch',
  templateUrl: './tutorSearch.html',
  styleUrls: ['./tutorSearch.scss'],
  providers: [NgbCarouselConfig],
})

export class TutorSearchComponent implements OnInit {

  tutorSearchForm: FormGroup;
  studentIdParam: any;
  public city: AbstractControl;
  public location: AbstractControl;
  public grade: AbstractControl;
  public gender: AbstractControl;
  public is_trusted_tutor: AbstractControl;
  public verified: AbstractControl;
  public phone: AbstractControl;
  public email: AbstractControl;
  searchForm: searchItem[] = [];
  student: any;
  studentTutor: any[] = [];
  locationSearchList: any[] = [];
  locationList: any[] = [];
  public locationName: AbstractControl;
  sessionId: any;
  showAssign: boolean = false;
  loading: any;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.locationSearchList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));


  leadList: any[] = [];
  cityList: any[] = [];
  gradeList: any[] = [];
  allLocations: any[] = [];
  source: LocalDataSource = new LocalDataSource();
  settings = {
    selectMode: 'multi',
    actions: {
      position: 'right',
      edit: false,
      delete: false,
      add: false,
    },
    mode: 'external',
    add: {
      addButtonContent: '<i class="fa fa-plus-square-o"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="fa fa-ban"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="fa fa-pencil"></i>',
      saveButtonContent: '<i class="fa fa-check"></i>',
      cancelButtonContent: '<i class="fa fa-ban"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash"></i>',
      confirmDelete: true
    },
    pager: {
      display: true,
      perPage: 20
    },
    columns: {
      email: {
        title: 'Email',
        type: 'string'
      },
      city: {
        title: 'City',
        type: 'string',
        valuePrepareFunction: value => this.getCity(value),
      },
      location: {
        title: 'Area',
        type: 'string',
        valuePrepareFunction: value => this.getLocation(value),
      },
      phone: {
        title: 'Phone',
        type: 'string'
      },
      gender: {
        title: 'Gender',
        type: 'string'
      },
      verified: {
        title: 'Is Verified?',
        type: 'boolean'
      },
      is_trusted_tutor: {
        title: 'Trusted Tutor?',
        type: 'boolean'
      }
    }
  };

  constructor(config: NgbCarouselConfig,
    private service: AdminAppService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private modalService: NgbModal, ) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    // this.service.

    this.service.getAllRefCites().subscribe(data => {
      this.cityList = data;
    })
    this.service.getAllRefGrades().subscribe(data => {
      this.gradeList = data;
    })
    this.service.getAllRefLocations().subscribe(data => {
      this.allLocations = data;
    })
    this.initForm();
    this.locationName.disable();
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.sessionId = params['id'];
      this.studentIdParam = params['pk'];
      if (this.studentIdParam) {
        this.showAssign = true;
        this.service.getStudentById(this.studentIdParam).subscribe(data => {
          this.student = data;
        })
      }
    });
  }

  getCity(value: any) {
    let status;
    this.cityList.forEach(item => {
      if (item.pK == value) {
        status = item.city_name;
      }
    })
    return status;
  }

  getLocation(value: any) {
    let name;
    this.allLocations.forEach(item => {
      if (item.pk == value) {
        name = item.location_name;
      }
    })
    return name;

  }

  onUserRowSelect(event: any) {
    if (this.student.studentTutorList.length == 0) {
      const newTutor = new tutorAssign;
      newTutor.tutorId = event.data.pK
      this.student.studentTutorList.push(newTutor);
      this.studentTutor.push(event.data);
    }
    else {
      let flag = 0;
      this.student.studentTutorList.forEach(element => {
        if (element.tutorId != event.data.pK) {
          flag = 0;
        } else {
          flag = 1;
        }
      });
      if (flag == 0) {
        const newTutor = new tutorAssign;
        newTutor.tutorId = event.data.pK;
        this.student.studentTutorList.push(newTutor);
        this.studentTutor.push(event.data);
      }
    }
  }

  preview() {
    ;
    const activeModal = this.modalService.open(TutorModalComponent, { size: 'lg' });
    activeModal.componentInstance.modalHeader = 'All Assigned Tutor To';
    activeModal.componentInstance.cityList = this.cityList;
    activeModal.componentInstance.allLocations = this.locationList;
    activeModal.componentInstance.name = this.student.firstName + ' ' + this.student.lastName;
    activeModal.componentInstance.tutorList = this.studentTutor;
    activeModal.componentInstance.source.load(this.studentTutor);
    activeModal.result.then(res => {
      if (res == 'N') {

      } else {
        ;
        this.studentTutor = res;
        let flag = 0;
        this.studentTutor.forEach(ele => {
          if (this.student.studentTutorList.length == 0) {
            const newTutor = new tutorAssign;
            newTutor.tutorId = ele.pK;
            this.student.studentTutorList.push(newTutor);
          } else {
            this.student.studentTutorList.forEach(e => {
              if (e.tutorId == ele.pK) {
                flag = 1;
              } else {
              }
            })
            if (flag == 0) {
              const newTutor = new tutorAssign;
              newTutor.tutorId = ele.pK;
              this.student.studentTutorList.push(newTutor);
            }
          }
        })
      }
    })
  }

  searchTutor() {
    ;
    this.loading = true;
    this.searchForm = [];
    let i = 0;
    if (this.city.value) {
      const newSearch = new searchItem;
      newSearch.fieldName = 'city';
      newSearch.fieldValue = this.city.value;
      this.searchForm[i] = (newSearch);
      i++;
    }
    if (this.location.value) {
      const newSearch = new searchItem;
      newSearch.fieldName = 'location';
      newSearch.fieldValue = this.location.value;
      this.searchForm[i] = (newSearch);
      i++;
    }
    if (this.grade.value) {
      const newSearch = new searchItem;
      newSearch.fieldName = 'grade';
      newSearch.fieldValue = this.grade.value;
      this.searchForm[i] = (newSearch);
      i++;
    }
    if (this.gender.value) {
      const newSearch = new searchItem;
      newSearch.fieldName = 'gender';
      newSearch.fieldValue = this.gender.value;
      this.searchForm[i] = (newSearch);
      i++;
    }
    if (this.phone.value) {
      const newSearch = new searchItem;
      newSearch.fieldName = 'phone';
      newSearch.fieldValue = this.phone.value;
      this.searchForm[i] = (newSearch);
      i++;
    }
    if (this.email.value) {
      const newSearch = new searchItem;
      newSearch.fieldName = 'email';
      newSearch.fieldValue = this.email.value;
      this.searchForm[i] = (newSearch);
      i++;
    }
    if (this.is_trusted_tutor.value == true) {
      const newSearch = new searchItem;
      newSearch.fieldName = 'is_trusted_tutor';
      newSearch.fieldValue = this.is_trusted_tutor.value;
      this.searchForm[i] = (newSearch);
      i++;
    }
    if (this.verified.value == true) {
      const newSearch = new searchItem;
      newSearch.fieldName = 'verified';
      newSearch.fieldValue = this.verified.value;
      this.searchForm[i] = (newSearch);
      i++;
    }
    this.service.searchTutor(this.searchForm).subscribe(data => {
      this.source.load(data);
      this.loading = false;
    })
  }

  assignTutor() {
    ;
    this.loading = true;
    this.service.updateStudent(this.student).subscribe(res => {
      this.loading = false;
      const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
      activeModal.componentInstance.showHide = true;
      activeModal.componentInstance.modalHeader = 'Success';
      activeModal.componentInstance.modalContent = 'Tutor Successfully Added to: ' + this.student.firstName + ' ' + this.student.lastName;
      activeModal.result.then(res => {
        if (res == 'Y') {
          this.router.navigateByUrl('/admin-app/editStudentManagement/' + this.sessionId + '/' + this.studentIdParam);
        } else {
          this.router.navigateByUrl('/admin-app/editStudentManagement/' + this.sessionId + '/' + this.studentIdParam);
        }
      })
    })
  }

  private initForm() {
    this.tutorSearchForm = this.fb.group({
      'city': [''],
      'location': [''],
      'grade': [''],
      'gender': [''],
      'is_trusted_tutor': [''],
      'verified': [''],
      'phone': [''],
      'email': [''],
      'locationName': [''],
    })

    this.city = this.tutorSearchForm.controls['city'];
    this.location = this.tutorSearchForm.controls['location'];
    this.grade = this.tutorSearchForm.controls['grade'];
    this.gender = this.tutorSearchForm.controls['gender'];
    this.is_trusted_tutor = this.tutorSearchForm.controls['is_trusted_tutor'];
    this.verified = this.tutorSearchForm.controls['verified'];
    this.phone = this.tutorSearchForm.controls['phone'];
    this.email = this.tutorSearchForm.controls['email'];
    this.locationName = this.tutorSearchForm.controls['locationName'];

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
      this.locationName.enable();
    });

    this.locationName.valueChanges.subscribe(val => {
      ;
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
