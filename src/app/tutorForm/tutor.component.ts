import { Tutor, TutorService } from './tutor.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpModule, Http, Response } from '@angular/http';
import { CommonModalComponent } from '../shared/common-modal/common-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { SortPipe } from '../shared/pipes/filters/filter.pipe';

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
  selector: 'app-tutorForm',
  templateUrl: './tutor.html',
  styleUrls: ['./tutor.scss']
})

export class TutorComponent implements OnInit {
  tutorForm: FormGroup;
  enquiryId: string;
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
  public istutor: AbstractControl;
  public leadGradeList: AbstractControl;
  public leadSubjectList: AbstractControl;
  public location: AbstractControl;
  locationList: any[] = [];
  subjectDis = [];
  selectedItems = [];
  gradeDis = [];
  syllabusDis = [];
  selected = [];
  selectedSyllabus = [];
  settingForSyllabus = {};
  settings = {};
  setting = {};
  gradeList: leadGrade[] = [];
  subjectList: leadSubject[] = [];
  syllabusList: leadSyllabus[] = [];
  cityList: any[] = [];
  locationSearchList: any[] = [];
  public leadSyllabusList: AbstractControl;
  public locationName: AbstractControl;
  message: any;
  public leadStatus: AbstractControl;
  loading: boolean = false;
  qualififcationList: any[] = [];
  public qualification: AbstractControl;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.locationSearchList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  constructor(private fb: FormBuilder, private router: Router, private service: TutorService, private http: Http,
    private route: ActivatedRoute, private modalService: NgbModal) {
    this.service.getAllRefCites().subscribe(data => {
      this.cityList = data;
    });
    this.qualififcationList = ['Under Graduate', 'BA', 'BBM', 'BCOM', 'BCA', 'BSC',
      'Engg', 'MTech', 'Mcom', 'MBA', 'MA', 'MCA', 'MSC', 'Others']
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
      data.sort(function (name1, name2) {
        if (name1.sortorder < name2.sortorder) {
          return -1;
        } else if (name1.sortorder > name2.sortorder) {
          return 1;
        } else {
          return 0;
        }
      });
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
    this.gradeList = [];
    this.subjectList = [];
    this.syllabusList = [];
    ;
    this.selected.forEach(item => {
      const grade = new leadGrade();
      grade.gradeId = item.id;
      this.gradeList.push(grade);
    });
    this.leadGradeList.setValue(this.gradeList);
    this.selectedItems.forEach(item => {
      const sub = new leadSubject();
      sub.subjectId = item.id;
      this.subjectList.push(sub);
    });
    this.leadSubjectList.setValue(this.subjectList);
    this.selectedSyllabus.forEach(item => {
      const sub = new leadSyllabus();
      sub.syllabusId = item.id;
      this.syllabusList.push(sub);
    });
    this.leadSyllabusList.setValue(this.syllabusList);
  }

  OnItemDeSelect(item: any) {
    this.gradeList = [];
    this.subjectList = [];
    this.syllabusList = [];
    ;
    this.selected.forEach(item => {
      const newItem = new leadGrade();
      newItem.gradeId = item.id;
      this.gradeList.push(newItem);
    });
    this.leadGradeList.setValue(this.gradeList);
    this.selectedItems.forEach(item => {
      const newItem = new leadSubject();
      newItem.subjectId = item.id;
      this.subjectList.push(newItem);
    });
    this.leadSubjectList.setValue(this.subjectList);
    this.selectedSyllabus.forEach(item => {
      const sub = new leadSyllabus();
      sub.syllabusId = item.id;
      this.syllabusList.push(sub);
    });
    this.leadSyllabusList.setValue(this.syllabusList);
  }
  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }
  submit() {
    const formValue: any = this.tutorForm.value;
    this.validationMessage();
    if (this.message) {
      const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
      activeModal.componentInstance.showHide = false;
      activeModal.componentInstance.modalHeader = "Warning";
      activeModal.componentInstance.modalContent = this.message;
    } else {
      // //  this.spinnerService.hide();
      this.loading = true;
      this.service.addLead(formValue).subscribe(enquiry => {
        if (enquiry._body == "Email already exists") {
          const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
          activeModal.componentInstance.showHide = true;
          activeModal.componentInstance.modalHeader = 'Alert';
          activeModal.componentInstance.modalContent = 'Hello ' + this.firstName.value + ' ' + this.lastName.value + '. This email already exists. Check your email to get credentials for login.';
          //  //  this.spinnerService.hide();
          this.loading = false;
        } else {
          const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
          activeModal.componentInstance.showHide = true;
          activeModal.componentInstance.modalHeader = 'Success';
          activeModal.componentInstance.modalContent = 'Thank you ' + this.firstName.value + ' ' + this.lastName.value + ' for contacting us we will reach you shortly!';
          //  //  this.spinnerService.hide();
          this.loading = false;
          this.router.navigateByUrl('/home');
        }
      });
    }
  };
  cancel() {
    const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
    activeModal.componentInstance.showHide = true;
    activeModal.componentInstance.modalHeader = 'Alert';
    activeModal.componentInstance.modalContent = 'Are you sure want to Cancel?';
    activeModal.result.then((res) => {
      if (res == 'Y') {
        this.tutorForm.reset();
      } else if (res == 'N') {
        // What action should be performed on cancel of model goes here.
      }
    });
  }
  private initForm() {
    this.tutorForm = this.fb.group({

      'firstName': ['', Validators.compose([Validators.required])],
      'phone': ['', Validators.compose([Validators.required, Validators.maxLength(10),
      Validators.minLength(10), Validators.pattern('[0-9]*')])],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'grade': ['', Validators.compose([Validators.required])],
      'lastName': ['', Validators.compose([Validators.required])],
      'comment': [''],
      'gender': ['', Validators.compose([Validators.required])],
      'address': ['', Validators.compose([Validators.required])],
      'city': ['', Validators.compose([Validators.required])],
      'subjects': ['', Validators.compose([Validators.required])],
      'syllabus': ['', Validators.compose([Validators.required])],
      'leadGradeList': [''],
      'istutor': [true],
      'leadSubjectList': [''],
      'leadSyllabusList': [''],
      'location': [''],
      'locationName': [''],
      'leadStatus': ['1'],
      'qualification': [''],

    });

    this.firstName = this.tutorForm.controls['firstName'];
    this.phone = this.tutorForm.controls['phone'];
    this.email = this.tutorForm.controls['email'];
    this.grade = this.tutorForm.controls['grade'];
    this.lastName = this.tutorForm.controls['lastName'];
    this.comment = this.tutorForm.controls['comment'];
    this.gender = this.tutorForm.controls['gender'];
    this.address = this.tutorForm.controls['address'];
    this.city = this.tutorForm.controls['city'];
    this.subjects = this.tutorForm.controls['subjects'];
    this.syllabus = this.tutorForm.controls['syllabus'];
    this.leadSubjectList = this.tutorForm.controls['leadSubjectList'];
    this.leadGradeList = this.tutorForm.controls['leadGradeList'];
    this.leadSyllabusList = this.tutorForm.controls['leadSyllabusList'];
    this.location = this.tutorForm.controls['location'];
    this.locationName = this.tutorForm.controls['locationName'];
    this.leadStatus = this.tutorForm.controls['leadStatus'];
    this.qualification = this.tutorForm.controls['qualification'];

    this.city.valueChanges.subscribe(val => {
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
    ;
    this.router.navigateByUrl(data);
  }

  validationMessage() {
    ;
    if (!this.firstName.value) {
      this.message = 'Please Provide First Name.';
    } else if (!this.lastName.value) {
      this.message = 'Please Provide Last Name.';
    } else if (!this.phone.value) {
      this.message = 'Please Provide Phone Number.';
    } else if (!this.gender.value) {
      this.message = 'Please Select Your Gender.';
    } else if (this.grade.value.length == 0) {
      this.message = 'Please Select Your Grade.';
    } else if (!this.email.value) {
      this.message = 'Please Provide Your Email.';
    } else if (!this.city.value) {
      this.message = 'Please Select Your City.';
    } else if (!this.location.value) {
      this.message = 'Please Select Your Location.';
    } else if (this.subjects.value.length == 0) {
      this.message = 'Please Select Subjects.';
    } else if (this.syllabus.value.length == 0) {
      ;
      this.message = 'Please Select Syllabus.';
    } else {
      this.message = "";
    }
  }
}
