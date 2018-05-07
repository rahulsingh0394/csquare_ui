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
import { TutorModelComponent } from './tutor-model/tutor-model.component';

class searchItem {
  fieldName: any;
  fieldValue: any;
}

class tutorGrade {
  gradeId: string;
  pk: string;
  tutor_Id: string;
}

class tutorSubject {
  pk: string;
  subjectId: string;
  tutorId: string;
}
class tutorSyllabus {
  pk: string;
  syllabusId: string;
  tutorId: string;
}
class listItem {
  id: string;
  itemName: string;
}

@Component({
  selector: 'app-tutor-logged-in',
  templateUrl: './tutor-logged-in.component.html',
  styleUrls: ['./tutor-logged-in.component.scss']
})
export class TutorLoggedInComponent implements OnInit {

  userId: any;
  tutorIdParam: any;
  tutorManagementForm: FormGroup;
  tutorData: any;
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
  //  public istutor: AbstractControl;
  //  public isstudent: AbstractControl;
  public tutorGradeList: AbstractControl;
  public tutorSubjectList: AbstractControl;
  public category: AbstractControl;
  public followUpRequired: AbstractControl;
  public interviewTime: AbstractControl;
  public is_interested_for_home_tuition: AbstractControl;
  public roundCleared: AbstractControl;
  public interviewDate: AbstractControl;
  public is_trusted_tutor: AbstractControl;
  public verified: AbstractControl;
  public packageInHrs: AbstractControl;
  public hourlyRate: AbstractControl;
  public registrationFee: AbstractControl;
  public studentTotalFee: AbstractControl;
  public isRegistrationPaid: AbstractControl;
  public tutionRequiredForMonths: AbstractControl;
  public csquareIncome: AbstractControl;
  public qualification: AbstractControl;
  public experience_in_years: AbstractControl;
  public prefferedTiming: AbstractControl;
  public prefferedDays: AbstractControl;
  public location: AbstractControl;

  public have_vechile: AbstractControl;
  public alternate_phone: AbstractControl;
  public aadhar_verified: AbstractControl;
  public verify_without_aadhar: AbstractControl;
  imgUrl: any;
  name: any;

  subjectDis = [];
  selectedItems = [];
  gradeDis = [];
  syllabusDis = [];
  selected = [];
  selectedSyllabus = [];
  settingForSyllabus = {};
  settings = {};
  setting = {};
  gradeList: tutorGrade[] = [];
  subjectList: tutorSubject[] = [];
  syllabusList: tutorSyllabus[] = [];
  cityList: any[] = [];
  public tutorSyllabusList: AbstractControl;
  fileToUpload: any;

  locationSearchList: any[] = [];
  qualififcationList: any[] = [];
  public locationName: AbstractControl;
  sessionId: any;
  teachTab: any;
  doctab: any;
  verifiedTab: any;
  attendenceTabClicked: boolean = false;
  message: any;
  source: LocalDataSource = new LocalDataSource();
  settingsForTable: any;
  loading: any;

  prepareSetting() {
    return {
      actions: {
        position: 'right',
        add: false,
        edit: false,
        delete: false
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
        perPage: 50
      },
      columns: {
        firstName: {
          title: 'First Name',
          type: 'string',
        },
        lastName: {
          title: 'Last Name',
          type: 'string',
        },
        city: {
          title: 'City',
          filter: {
            type: 'list',
            config: {
              selectText: 'Show All',
              list: this.cityList,
            },
          },
          valuePrepareFunction: value => this.getCityById(value),
        },
        location: {
          title: 'Area',
          filter: {
            type: 'list',
            config: {
              selectText: 'Show All',
              list: this.locationList,
            },
          },
          valuePrepareFunction: value => this.getLocationById(value),
        },

        email: {
          title: 'Email',
          type: 'string'
        },
        phone: {
          title: 'Phone',
          type: 'string'
        },
      }
    };
  }
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
    this.loading = true;
    this.service.getAllRefCites().subscribe(res => {
      res.forEach(element => {
        this.cityList.push({ value: element.pK, title: element.city_name });
      });
    })

    this.service.getAllRefLocations().subscribe(resp => {
      resp.forEach(element => {
        this.locationList.push({ value: element.pk, title: element.location_name });
      });
    })
    this.route.params.subscribe((params: Params) => {
      this.userId = params['pk'];

      this.service.getUserById(this.userId).subscribe(data => {
        let formData: any[] = [];
        const newSearch = new searchItem;
        newSearch.fieldName = 'email';
        newSearch.fieldValue = data.email;
        formData[0] = newSearch;
        if (this.imgUrl) {

        } else {
          this.imgUrl = 'assets/img/he.jpg';
        }
        this.service.searchTutor(formData).subscribe(res => {
          let data: any = res[0];
          this.location.setValue(data.location);
          this.selectedItems = [];
          this.selectedSyllabus = [];
          this.selected = [];
          data.tutorGradeList.forEach(ele => {
            const newItem = new listItem();
            newItem.id = ele.gradeId;
            this.gradeDis.forEach(res => {
              if (res.id == ele.gradeId) {
                newItem.itemName = res.itemName
              }
            });
            this.selected.push(newItem);
          });
          data.tutorSubjectList.forEach(ele => {
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
          data.tutorSyllabusList.forEach(ele => {
            const newItem = new listItem();
            newItem.id = ele.syllabusId;
            this.syllabusDis.forEach(res => {
              if (res.id == ele.syllabusId) {
                newItem.itemName = res.itemName
              }
            });
            this.selectedSyllabus.push(newItem);
          });
          this.tutorIdParam = data.pK;
          this.name = data.firstName;
          this.tutorManagementForm.patchValue(data);
          this.generalValidation();
          this.teachingValidation();
          this.service.getStudentByTutorId(this.tutorIdParam).subscribe(result => {
            this.settingsForTable = this.prepareSetting();
            this.source.load(result);
            this.loading = false;
          })
        })
      })
    })

    this.qualififcationList = ['Under Graduate', 'BA', 'BBM', 'BCOM', 'BCA', 'BSC',
      'Engg', 'MTech', 'Mcom', 'MBA', 'MA', 'MCA', 'MSC', 'Others']
    this.initForm();

  }
  onSelect(event: any) {
    const activeModel = this.modalService.open(TutorModelComponent, { size: 'lg' });
    activeModel.componentInstance.showHide = true;
    activeModel.componentInstance.studentData = event.data;
    activeModel.componentInstance.attendenceTabClicked = this.attendenceTabClicked;
  }
  getCityById(value: any) {
    //  ;
    let name: any;
    const len: number = this.cityList.length;
    for (let i = 0; i < len; i++) {
      if (this.cityList[i].value === value) {
        name = this.cityList[i].title;
        return name;
      }
    }
    return name;
  }

  getLocationById(value: any) {
    //  ;
    let name: any;
    const len: number = this.locationList.length;
    for (let i = 0; i < len; i++) {
      if (this.locationList[i].value === value) {
        name = this.locationList[i].title;
        return name;
      }
    }
    return name;
  }
  handleEdit(data: any) {
    ;
    const leadData = data.data;
    this.router.navigateByUrl('/admin-app/editTutorManagement/' + this.sessionId + '/' + leadData.pK);
  }
  handleCreate() {
    this.router.navigateByUrl('/admin-app/createTutorManagement/' + this.sessionId);
  }

  onDeleteConfirm(data: any) {
    const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
    activeModal.componentInstance.showHide = true;
    activeModal.componentInstance.modalHeader = 'Alert';
    activeModal.componentInstance.modalContent = 'Are you sure want to Delete?';
    activeModal.result.then((res) => {
      if (res == 'Y') {
        this.service.deleteTutor(data.data.pK).subscribe(response => {

        })
        const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
        activeModal.componentInstance.showHide = true;
        activeModal.componentInstance.modalHeader = 'Alert';
        activeModal.componentInstance.modalContent = 'Tutor Successfully Deleted!';
        this.source.remove(data.data);
        // this.service.getAllTutors(this.offset, this.limit).subscribe(res=>{
        //   this.settings = this.prepareSetting();
        //   this.source.load(res);
        // })
      } else if (res == 'N') {
        // What action should be performed on cancel of model goes here.
      }
    });
  }
  ngOnInit() {
    this.service.getAllRefSubjects().subscribe(data => {
      this.subjectDis = [];
      data.forEach(ele => {
        const newList = new listItem();
        newList.id = ele.pk;
        newList.itemName = ele.subject;
        this.subjectDis.push(newList);
      });
    });
    this.settings = {
      text: "Preffered Subjects",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
    };
    this.service.getAllRefSyllabus().subscribe(data => {
      this.syllabusDis = [];
      data.forEach(ele => {
        const newList = new listItem();
        newList.id = ele.pk;
        newList.itemName = ele.syllabus_name;
        this.syllabusDis.push(newList);
      });
    });
    this.settingForSyllabus = {
      text: "Preffered Syllabus",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
    };
    this.service.getAllRefGrades().subscribe(data => {
      this.gradeDis = [];
      data.forEach(element => {
        const newItem = new listItem();
        newItem.id = element.pk;
        newItem.itemName = element.grade;
        this.gradeDis.push(newItem);
      });
    });
    this.setting = {
      text: "Grade",
      classes: "myclass custom-class"
    };
  }

  onItemSelect(item: any) {
    ;
    this.gradeList = [];
    this.subjectList = [];
    this.syllabusList = [];
    ;
    this.selected.forEach(item => {
      const grade = new tutorGrade();
      grade.gradeId = item.id;
      this.gradeList.push(grade);
    });
    this.tutorGradeList.setValue(this.gradeList);
    this.selectedItems.forEach(item => {
      const sub = new tutorSubject();
      sub.subjectId = item.id;
      this.subjectList.push(sub);
    });
    this.tutorSubjectList.setValue(this.subjectList);
    this.selectedSyllabus.forEach(item => {
      const sub = new tutorSyllabus();
      sub.syllabusId = item.id;
      this.syllabusList.push(sub);
    });
    this.tutorSyllabusList.setValue(this.syllabusList);
  }

  OnItemDeSelect(item: any) {
    this.gradeList = [];
    this.subjectList = [];
    this.syllabusList = [];
    ;
    this.selected.forEach(item => {
      const newItem = new tutorGrade();
      newItem.gradeId = item.id;
      this.gradeList.push(newItem);
    });
    this.tutorGradeList.setValue(this.gradeList);
    this.selectedItems.forEach(item => {
      const newItem = new tutorSubject();
      newItem.subjectId = item.id;
      this.subjectList.push(newItem);
    });
    this.tutorSubjectList.setValue(this.subjectList);
    this.selectedSyllabus.forEach(item => {
      const sub = new tutorSyllabus();
      sub.syllabusId = item.id;
      this.syllabusList.push(sub);
    });
    this.tutorSyllabusList.setValue(this.syllabusList);
  }

  handleFileInput(event: any) {

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        // this.fileToUpload = event.target.value;
      }
    }
  }

  submit() {
    const formValue: any = this.tutorManagementForm.value;
    if (this.tutorIdParam) {
      this.pK.setValue(this.tutorIdParam);
      if (this.tutorManagementForm.valid) {
        this.loading = true;
        this.service.updateTutor(formValue).subscribe(enquiry => {
          const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
          activeModal.componentInstance.showHide = true;
          activeModal.componentInstance.modalHeader = 'Alert';
          activeModal.componentInstance.modalContent = 'Thank You! This Student has been Successfully Updated.';
          this.loading = false;
          // this.router.navigateByUrl('/admin-app/tutorManagement/' + this.sessionId);
        });
      } else {
        const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
        activeModal.componentInstance.showHide = true;
        activeModal.componentInstance.modalHeader = 'Alert';
        activeModal.componentInstance.modalContent = 'Please Fill the form and then submit!';
      }
    }

  }
  cancel() {
    const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
    activeModal.componentInstance.showHide = true;
    activeModal.componentInstance.modalHeader = 'Alert';
    activeModal.componentInstance.modalContent = 'Are you sure want to Cancel?';
    activeModal.result.then((res) => {
      if (res == 'Y') {
        this.tutorManagementForm.reset();
      } else if (res == 'N') {
      }
    });
  }
  private initForm() {
    this.tutorManagementForm = this.fb.group({
      'pK': [null],
      'firstName': ['', Validators.compose([Validators.required])],
      'phone': ['', Validators.compose([Validators.required, Validators.maxLength(10),
      Validators.minLength(10), Validators.pattern('[0-9]*')])],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'grade': [''],
      'lastName': ['', Validators.compose([Validators.required])],
      //'comment': [''],
      'gender': ['', Validators.compose([Validators.required])],
      'address': ['', Validators.compose([Validators.required])],
      'city': ['', Validators.compose([Validators.required])],
      'subjects': [''],
      'syllabus': [''],
      'tutorGradeList': [''],
      // // 'istutor': [''],
      // // 'isstudent': [''],
      'tutorSubjectList': [''],
      'tutorSyllabusList': [''],
      // 'category': [''],
      // 'followUpRequired': [''],
      // 'interviewTime': [''],
      // 'is_interested_for_home_tuition': [''],
      // 'roundCleared': [''],
      // 'interviewDate': [''],
      // 'is_trusted_tutor': [''],
      // 'verified': [''],
      // 'packageInHrs': [''],
      // 'hourlyRate': [''],
      // 'registrationFee': [''],
      // 'studentTotalFee': [''],
      // 'isRegistrationPaid': [''],
      // 'tutionRequiredForMonths': [''],
      // 'csquareIncome': [''],
      'qualification': [''],
      'experience_in_years': [''],
      'prefferedTiming': [''],
      'prefferedDays': [''],
      'location': [''],
      'locationName': [''],

    });
    this.pK = this.tutorManagementForm.controls['pK'];
    this.firstName = this.tutorManagementForm.controls['firstName'];
    this.phone = this.tutorManagementForm.controls['phone'];
    this.email = this.tutorManagementForm.controls['email'];
    this.grade = this.tutorManagementForm.controls['grade'];
    this.lastName = this.tutorManagementForm.controls['lastName'];
    //this.comment = this.tutorManagementForm.controls['comment'];
    this.gender = this.tutorManagementForm.controls['gender'];
    this.address = this.tutorManagementForm.controls['address'];
    this.city = this.tutorManagementForm.controls['city'];
    this.subjects = this.tutorManagementForm.controls['subjects'];
    this.syllabus = this.tutorManagementForm.controls['syllabus'];
    this.tutorSubjectList = this.tutorManagementForm.controls['tutorSubjectList'];
    this.tutorGradeList = this.tutorManagementForm.controls['tutorGradeList'];
    this.tutorSyllabusList = this.tutorManagementForm.controls['tutorSyllabusList'];
    // //  this.istutor = this.tutorManagementForm.controls['istutor'];
    // //  this.isstudent = this.tutorManagementForm.controls['isstudent'];
    // this.category = this.tutorManagementForm.controls['category'];
    // this.followUpRequired = this.tutorManagementForm.controls['followUpRequired'];
    // this.interviewTime = this.tutorManagementForm.controls['interviewTime'];
    // this.is_interested_for_home_tuition = this.tutorManagementForm.controls['is_interested_for_home_tuition'];
    // this.roundCleared = this.tutorManagementForm.controls['roundCleared'];
    // this.interviewDate = this.tutorManagementForm.controls['interviewDate'];
    // this.is_trusted_tutor = this.tutorManagementForm.controls['is_trusted_tutor'];
    // this.verified = this.tutorManagementForm.controls['verified'];
    // this.packageInHrs = this.tutorManagementForm.controls['packageInHrs'];
    // this.hourlyRate = this.tutorManagementForm.controls['hourlyRate'];
    // this.registrationFee = this.tutorManagementForm.controls['registrationFee'];
    // this.studentTotalFee = this.tutorManagementForm.controls['studentTotalFee'];
    // this.isRegistrationPaid = this.tutorManagementForm.controls['isRegistrationPaid'];
    // this.tutionRequiredForMonths = this.tutorManagementForm.controls['tutionRequiredForMonths'];
    // this.csquareIncome = this.tutorManagementForm.controls['csquareIncome'];
    this.qualification = this.tutorManagementForm.controls['qualification'];
    this.experience_in_years = this.tutorManagementForm.controls['experience_in_years'];
    this.prefferedTiming = this.tutorManagementForm.controls['prefferedTiming'];
    this.prefferedDays = this.tutorManagementForm.controls['prefferedDays'];
    this.location = this.tutorManagementForm.controls['location'];
    this.locationName = this.tutorManagementForm.controls['locationName'];

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

  generalValidation() {
    if (!this.firstName.value) {
      this.teachTab = false;
      this.doctab = false;
      this.verifiedTab = false;
    } else if (!this.lastName.value) {
      this.teachTab = false;
      this.doctab = false;
      this.verifiedTab = false;
    } else if (!this.email.value) {
      this.teachTab = false;
      this.doctab = false;
      this.verifiedTab = false;
    } else if (!this.city.value) {
      this.teachTab = false;
      this.doctab = false;
      this.verifiedTab = false;
    } else if (!this.phone.value) {
      this.teachTab = false;
      this.doctab = false;
      this.verifiedTab = false;
    } else if (!this.gender.value) {
      this.teachTab = false;
      this.doctab = false;
      this.verifiedTab = false;
    } else if (!this.location.value) {
      this.teachTab = false;
      this.doctab = false;
      this.verifiedTab = false;
    } else {
      this.teachTab = true;
      this.doctab = false;
      this.verifiedTab = false;
    }
  }

  teachingValidation() {

    if (!this.qualification.value) {
      this.doctab = false;
      this.verifiedTab = false;
    } else if (!this.experience_in_years.value) {
      this.doctab = false;
      this.verifiedTab = false;
    } else if (!this.tutorSyllabusList.value.length) {
      this.doctab = false;
      this.verifiedTab = false;
    } else if (!this.tutorGradeList.value.length) {
      this.doctab = false;
      this.verifiedTab = false;
    } else if (!this.tutorSubjectList.value.length) {
      this.doctab = false;
      this.verifiedTab = false;
    } else if (!this.prefferedTiming.value) {
      this.doctab = false;
      this.verifiedTab = false;
    } else if (!this.prefferedDays.value) {
      this.doctab = false;
      this.verifiedTab = false;
    } else {
      this.doctab = true;
      this.verifiedTab = false;
    }
  }

  attendence() {
    this.attendenceTabClicked = true;
  }

  studentTab() {
    this.attendenceTabClicked = false;
  }

}