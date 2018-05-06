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
import { SortPipe } from '../../../shared/pipes/filters/filter.pipe';

class tutorList {
  pk: any;
  name: any;
  phone: any;
  city: any;
  area: any;
  email: any;
  is_trusted_tutor: any;
  experience_in_years: any;
}

class leadGrade {
  gradeId: string;
  pk: string;
  leadId: string;
}

class leadSubject {
  pk: string;
  subjectId: string;
  leadId: string;
}
class leadSyllabus {
  pk: string;
  syllabusId: string;
  leadId: string;
}
class listItem {
  id: string;
  itemName: string;
}

@Component({
  selector: 'admin-app-editStudentManagement',
  templateUrl: './editStudentManagement.html',
  styleUrls: ['./editStudentManagement.scss'],
  providers: [NgbCarouselConfig],
})

export class EditStudentManagementComponent implements OnInit {

  leadIdParam: any;
  studentManagementForm: FormGroup;
  leadData: any;
  locationList: any[] = [];
  public pK: AbstractControl;
  public firstName: AbstractControl;
  public lastName: AbstractControl;
  public phone: AbstractControl;
  public email: AbstractControl;
  public grade: AbstractControl;
  public comment: AbstractControl;
  public gender: AbstractControl;
  public address: AbstractControl;
  public city: AbstractControl;
  public subjects: AbstractControl;
  public syllabus: AbstractControl;
  public studentSubjectList: AbstractControl;
  public parentName: AbstractControl;
  public existingClient: AbstractControl;
  public sourceOfLead: AbstractControl;
  public isHold: AbstractControl;
  public studentRecordOwner: AbstractControl;
  public parentsDocStatus: AbstractControl;
  public interested: AbstractControl;
  public notInterested: AbstractControl;
  public demoRequired: AbstractControl;
  public demoDate: AbstractControl;
  public converted: AbstractControl;
  public enrollmentDate: AbstractControl;
  public requiredFollowUp: AbstractControl;
  public callPreferredTime: AbstractControl;
  public followUpDate: AbstractControl;
  public pendingForConversion: AbstractControl;
  public isStopped: AbstractControl;
  public stoppedDate: AbstractControl;
  public parentAgreementStatus: AbstractControl;
  public tutorAgreementStatus: AbstractControl;
  public packageInHrs: AbstractControl;
  public hourlyRate: AbstractControl;
  public registrationFee: AbstractControl;
  public studentTotalFee: AbstractControl;
  public isRegistrationPaid: AbstractControl;
  public tutionRequiredForMonths: AbstractControl;
  public csquareIncome: AbstractControl;
  public location: AbstractControl;
  public studentTutorList: AbstractControl;
  source: LocalDataSource = new LocalDataSource();
  tutorStudentList: any[] = [];

  subjectDis = [];
  selectedItems = [];
  settings = {};
  gradeList: any[] = [];
  subjectList: leadSubject[] = [];
  syllabusList: any[] = [];
  cityList: any[] = [];
  tableSettings: any;
  sessionId: any;
  loading: any;


  locationSearchList: any[] = [];
  public locationName: AbstractControl;

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
    this.service.getAllRefGrades().subscribe(data => {
      this.gradeList = data;
    })
    this.service.getAllRefSyllabus().subscribe(data => {
      this.syllabusList = data;
    })
    this.initForm();
  }

  ngOnInit() {
    this.service.getAllRefSubjects().subscribe(data => {
      this.subjectDis = [];
      data.sort(function (name1, name2) {
        if (name1.sortorder < name2.sortorder) {
          return -1;
        } else if (name1.sortorder > name2.sortorder) {
          return 1;
        } else {
          return 0;
        }
      });
      data.forEach(ele => {
        const newList = new listItem();
        newList.id = ele.pk;
        newList.itemName = ele.subject;
        this.subjectDis.push(newList);
      });
    });
    this.settings = {
      text: "Preffered Subjects",
      classes: "myclass custom-class"
    };
    this.route.params.subscribe((params: Params) => {
      ;
      this.leadIdParam = params['pk'];
      this.sessionId = params['id'];
      if (this.leadIdParam) {
        this.loading = true;
        this.service.getStudentById(this.leadIdParam).subscribe(data => {
          this.selectedItems = [];
          data.studentSubjectList.forEach(ele => {
            ;
            const newItem = new listItem();
            newItem.id = ele.subjectId;
            this.subjectDis.forEach(res => {
              if (res.id == ele.subjectId) {
                newItem.itemName = res.itemName
              }
            });
            this.selectedItems.push(newItem);
          });
          this.location.setValue(data.location);
          data.studentTutorList.forEach(element => {
            this.getTutor(element.tutorId);
            this.settings = this.prepareSettings();
            this.source.load(this.tutorStudentList);
          })
          this.studentManagementForm.patchValue(data);
          this.loading = false;
        })
      }
    })
  }
  // onSelectAll(items: any) {
  //     this.grade.setValue(this.selected);
  //     this.subjects.setValue(this.selectedItems);
  // }

  // onDeSelectAll(items: any) {
  //     this.grade.setValue(this.selected);
  //     this.subjects.setValue(this.selectedItems);
  // }
  onItemSelect(item: any) {
    ;
    this.subjectList = [];
    this.selectedItems.forEach(item => {
      const sub = new leadSubject();
      sub.subjectId = item.id;
      this.subjectList.push(sub);
    });
    this.studentSubjectList.setValue(this.subjectList);
  }

  OnItemDeSelect(item: any) {
    this.subjectList = [];
    this.selectedItems.forEach(item => {
      const newItem = new leadSubject();
      newItem.subjectId = item.id;
      this.subjectList.push(newItem);
    });
    this.studentSubjectList.setValue(this.subjectList);
  }

  getTutor(data: any) {
    this.service.getTutorById(data).subscribe(resp => {
      const newTutor = new tutorList;
      newTutor.pk = resp.pK;
      newTutor.name = resp.firstName + ' ' + resp.lastName;
      newTutor.email = resp.email;
      newTutor.phone = resp.phone;
      newTutor.city = this.getCity(resp.city);
      newTutor.area = this.getLocation(resp.location);
      newTutor.is_trusted_tutor = resp.is_trusted_tutor;
      newTutor.experience_in_years = resp.experience_in_years;
      this.tutorStudentList.push(newTutor);
    })
  }


  prepareSettings() {
    return {
      actions: {
        position: 'right',
        edit: false,
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
        perPage: 10
      },
      columns: {
        name: {
          title: 'Name',
          type: 'string'
        },
        email: {
          title: 'Email',
          type: 'string'
        },
        phone: {
          title: 'Phone',
          type: 'string'
        },
        city: {
          title: 'City',
          type: 'string',
        },
        location: {
          title: 'Area',
          type: 'string',
        },
        experience_in_years: {
          title: 'Experience',
          type: 'boolean'
        },
        is_trusted_tutor: {
          title: 'Trusted Tutor?',
          type: 'boolean'
        }
      }
    };
  }

  submit() {
    const formValue: any = this.studentManagementForm.value;
    if (!this.leadIdParam) {
      //if(this.studentManagementForm.valid) {
      this.loading = true;
      this.service.addStudent(formValue).subscribe(enquiry => {
        const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
        activeModal.componentInstance.showHide = true;
        activeModal.componentInstance.modalHeader = 'Alert';
        activeModal.componentInstance.modalContent = 'Congrats! Student has been Successfully Created.';
        this.loading = false;
        this.router.navigateByUrl('/admin-app/studentManagement/' + this.sessionId);
      });
      // } else{
      //   const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
      //   activeModal.componentInstance.showHide = true;
      //   activeModal.componentInstance.modalHeader = 'Alert';
      //   activeModal.componentInstance.modalContent = 'Please Fill the form and then submit!';
      // }  
    } else {
      this.pK.setValue(this.leadIdParam);
      //if(this.studentManagementForm.valid) {
      this.loading = true;
      this.service.updateStudent(formValue).subscribe(enquiry => {
        const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
        activeModal.componentInstance.showHide = true;
        activeModal.componentInstance.modalHeader = 'Alert';
        activeModal.componentInstance.modalContent = 'Thank You! This Student has been Successfully Updated.';
        this.loading = false;
        this.router.navigateByUrl('/admin-app/studentManagement/' + this.sessionId);
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
        this.studentManagementForm.reset();
      } else if (res == 'N') {
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

  onDeleteConfirm(event: any) {
    ;
    const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
    activeModal.componentInstance.showHide = true;
    activeModal.componentInstance.modalHeader = 'Alert';
    activeModal.componentInstance.modalContent = 'Are you sure want to Delete?';
    activeModal.result.then((res) => {
      if (res == 'Y') {
        this.service.deleteStudentTutor(event.data.pk).subscribe(response => {

        })
        const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
        activeModal.componentInstance.showHide = true;
        activeModal.componentInstance.modalHeader = 'Alert';
        activeModal.componentInstance.modalContent = 'Tutor Successfully Removed!';
        this.source.remove(event.data);
        let index = 0;
        this.studentTutorList.value.forEach(element => {
          if (element.tutorId == event.data.pk) {
            this.studentTutorList.value.splice(index, 1);
            index++;
          } else {
            index++;
          }
        });
        //  this.service.getAllStudents(this.offset, this.limit).subscribe(res =>{
        //    this.settings = this.prepareSetting();
        //    this.source.load(res);
        //  })
      } else if (res == 'N') {
        // What action should be performed on cancel of model goes here.
      }
    });
  }

  getLocation(value: any) {
    let name;
    this.locationList.forEach(ele => {
      if (ele.pk == value) {
        name = ele.location_name;
      }
    })
    return name;

  }

  private initForm() {
    this.studentManagementForm = this.fb.group({
      'pK': [null],
      'firstName': ['', Validators.compose([Validators.required])],
      'phone': ['', Validators.compose([Validators.required, Validators.maxLength(10),
      Validators.minLength(10), Validators.pattern('[0-9]*')])],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'grade': ['this.gradeString'],
      'lastName': ['', Validators.compose([Validators.required])],
      'comment': [''],
      'gender': ['', Validators.compose([Validators.required])],
      'address': ['', Validators.compose([Validators.required])],
      'city': ['', Validators.compose([Validators.required])],
      'subjects': ['this.subjectString'],
      'syllabus': [''],
      'studentSubjectList': [''],
      'parentName': [''],
      'existingClient': [''],
      'sourceOfLead': [''],
      'isHold': [''],
      'studentRecordOwner': [''],
      'parentsDocStatus': [''],
      'interested': [''],
      'notInterested': [''],
      'demoRequired': [''],
      'demoDate': [''],
      'converted': [''],
      'enrollmentDate': [''],
      'requiredFollowUp': [''],
      'callPreferredTime': [''],
      'followUpDate': [''],
      'pendingForConversion': [''],
      'isStopped': [''],
      'stoppedDate': [''],
      'parentAgreementStatus': [''],
      'tutorAgreementStatus': [''],
      'packageInHrs': [''],
      'hourlyRate': [''],
      'registrationFee': [''],
      'studentTotalFee': [''],
      'isRegistrationPaid': [''],
      'tutionRequiredForMonths': [''],
      'csquareIncome': [''],
      'location': [''],
      'locationName': [''],
      'studentTutorList': [''],

    });
    this.pK = this.studentManagementForm.controls['pK'];
    this.firstName = this.studentManagementForm.controls['firstName'];
    this.phone = this.studentManagementForm.controls['phone'];
    this.email = this.studentManagementForm.controls['email'];
    this.grade = this.studentManagementForm.controls['grade'];
    this.lastName = this.studentManagementForm.controls['lastName'];
    this.comment = this.studentManagementForm.controls['comment'];
    this.gender = this.studentManagementForm.controls['gender'];
    this.address = this.studentManagementForm.controls['address'];
    this.city = this.studentManagementForm.controls['city'];
    this.subjects = this.studentManagementForm.controls['subjects'];
    this.syllabus = this.studentManagementForm.controls['syllabus'];
    this.studentSubjectList = this.studentManagementForm.controls['studentSubjectList'];
    this.parentName = this.studentManagementForm.controls['parentName'];
    this.existingClient = this.studentManagementForm.controls['existingClient'];
    this.sourceOfLead = this.studentManagementForm.controls['sourceOfLead'];
    this.isHold = this.studentManagementForm.controls['isHold'];
    this.studentRecordOwner = this.studentManagementForm.controls['studentRecordOwner'];
    this.parentsDocStatus = this.studentManagementForm.controls['parentsDocStatus'];
    this.interested = this.studentManagementForm.controls['interested'];
    this.notInterested = this.studentManagementForm.controls['notInterested'];
    this.demoRequired = this.studentManagementForm.controls['demoRequired'];
    this.demoDate = this.studentManagementForm.controls['demoDate'];
    this.converted = this.studentManagementForm.controls['converted'];
    this.enrollmentDate = this.studentManagementForm.controls['enrollmentDate'];
    this.requiredFollowUp = this.studentManagementForm.controls['requiredFollowUp'];
    this.callPreferredTime = this.studentManagementForm.controls['callPreferredTime'];
    this.followUpDate = this.studentManagementForm.controls['followUpDate'];
    this.pendingForConversion = this.studentManagementForm.controls['pendingForConversion'];
    this.isStopped = this.studentManagementForm.controls['isStopped'];
    this.stoppedDate = this.studentManagementForm.controls['stoppedDate'];
    this.parentAgreementStatus = this.studentManagementForm.controls['parentAgreementStatus'];
    this.tutorAgreementStatus = this.studentManagementForm.controls['tutorAgreementStatus'];
    this.packageInHrs = this.studentManagementForm.controls['packageInHrs'];
    this.hourlyRate = this.studentManagementForm.controls['hourlyRate'];
    this.registrationFee = this.studentManagementForm.controls['registrationFee'];
    this.studentTotalFee = this.studentManagementForm.controls['studentTotalFee'];
    this.isRegistrationPaid = this.studentManagementForm.controls['isRegistrationPaid'];
    this.tutionRequiredForMonths = this.studentManagementForm.controls['tutionRequiredForMonths'];
    this.csquareIncome = this.studentManagementForm.controls['csquareIncome'];
    this.studentTutorList = this.studentManagementForm.controls['studentTutorList'];
    this.location = this.studentManagementForm.controls['location'];
    this.locationName = this.studentManagementForm.controls['locationName'];

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
      ;
      this.locationList.forEach(element => {
        if ((element.pincode + ' ( ' + element.location_name + ' )') == val) {
          this.location.setValue(element.pk);
        }
      });
    })

  }

  back(data: any) {
    this.router.navigateByUrl('/admin-app' + data + '/' + this.sessionId);
  }

  routeToTutorSearch(data: any) {
    this.router.navigateByUrl('/admin-app' + data + '/' + this.sessionId + '/' + this.leadIdParam);
  }

}

