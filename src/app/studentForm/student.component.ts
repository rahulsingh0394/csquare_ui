import { Student, StudentService } from './student.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpModule, Http, Response } from '@angular/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
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
  selector: 'app-studentForm',
  templateUrl: './student.html',
  styleUrls: ['./student.scss']
})

export class StudentComponent implements OnInit {
  studentForm: FormGroup;
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
  public isstudent: AbstractControl;
  public leadGradeList: AbstractControl;
  public leadSubjectList: AbstractControl;
  public leadSyllabusList: AbstractControl;
  public location: AbstractControl;
  locationList: any[] = [];
  syllabusList: any[] = [];
  itemList = [];
  selectedItems = [];
  item = [];
  selected = [];
  settings = {};
  setting = {};
  gradeList: leadGrade[] = [];
  subjectList: leadSubject[] = [];
  syllabusL: leadSyllabus[] = [];
  cityList: any[] = [];
  gradeL: any[] = [];
  locationSearchList: any[] = [];
  public locationName: AbstractControl;
  message: any;
  public leadStatus: AbstractControl;
  public loading = false;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.locationSearchList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));


  constructor(private fb: FormBuilder, private router: Router, private service: StudentService, private http: Http,
    private route: ActivatedRoute, private modalService: NgbModal) {
    this.service.getAllRefCites().subscribe(data => {
      this.cityList = data;
    })
    this.service.getAllRefSyllabus().subscribe(data => {
      this.syllabusList = data;
    })
    this.service.getAllRefGrades().subscribe(data => {
      this.gradeList = data;
    })
    this.initForm();
  }

  ngOnInit() {
    this.service.getAllRefSubjects().subscribe(data => {
      this.itemList = [];
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
        this.itemList.push(newList);
      });
    });
    this.settings = {
      text: "Preffered Subjects",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
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
    this.subjectList = [];
    this.selectedItems.forEach(item => {
      const sub = new leadSubject();
      sub.subjectId = item.id;
      this.subjectList.push(sub);
    });
    this.leadSubjectList.setValue(this.subjectList);
  }

  OnItemDeSelect(item: any) {
    this.subjectList = [];
    this.selectedItems.forEach(item => {
      const newItem = new leadSubject();
      newItem.subjectId = item.id;
      this.subjectList.push(newItem);
    });
    this.leadSubjectList.setValue(this.subjectList);
  }
  public myfunc(event: Event) {
  }
  submit() {
    const formValue: any = this.studentForm.value;
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
          // //  this.spinnerService.hide();
          this.loading = false;
          this.router.navigateByUrl('/home');
        }
      });
    }
  }
  cancel() {
    const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
    activeModal.componentInstance.showHide = true;
    activeModal.componentInstance.modalHeader = 'Alert';
    activeModal.componentInstance.modalContent = 'Are you sure want to Cancel?';
    activeModal.result.then((res) => {
      if (res == 'Y') {
        this.studentForm.reset();
      } else if (res == 'N') {
      }
    });
  }
  private initForm() {
    this.studentForm = this.fb.group({
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
      'leadGradeList': [this.gradeL],
      'isstudent': [true],
      'leadSubjectList': [''],
      'leadSyllabusList': [this.syllabusL],
      'location': ['', Validators.compose([Validators.required])],
      'locationName': [''],
      'leadStatus': ['1'],
    });

    this.firstName = this.studentForm.controls['firstName'];
    this.phone = this.studentForm.controls['phone'];
    this.email = this.studentForm.controls['email'];
    this.grade = this.studentForm.controls['grade'];
    this.lastName = this.studentForm.controls['lastName'];
    this.comment = this.studentForm.controls['comment'];
    this.gender = this.studentForm.controls['gender'];
    this.address = this.studentForm.controls['address'];
    this.city = this.studentForm.controls['city'];
    this.subjects = this.studentForm.controls['subjects'];
    this.syllabus = this.studentForm.controls['syllabus'];
    this.leadSubjectList = this.studentForm.controls['leadSubjectList'];
    this.leadGradeList = this.studentForm.controls['leadGradeList'];
    this.leadSyllabusList = this.studentForm.controls['leadSyllabusList'];
    this.location = this.studentForm.controls['location'];
    this.locationName = this.studentForm.controls['locationName'];
    this.leadStatus = this.studentForm.controls['leadStatus'];

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

    this.syllabus.valueChanges.subscribe(val => {
      const newItem = new leadSyllabus();
      newItem.syllabusId = val;
      this.syllabusL.push(newItem);
    })
    this.grade.valueChanges.subscribe(val => {
      const newItem = new leadGrade();
      newItem.gradeId = val;
      this.gradeL.push(newItem);
    })
  }

  buttonClick(data: any) {
    ;
    this.router.navigateByUrl(data);
  }

  validationMessage() {
    if (!this.firstName.value) {
      this.message = 'Please Provide First Name.';
    } else if (!this.lastName.value) {
      this.message = 'Please Provide Last Name.';
    } else if (!this.phone.value) {
      this.message = 'Please Provide Phone Number.';
    } else if (!this.gender.value) {
      this.message = 'Please Select Your Gender.';
    } else if (!this.grade.value) {
      this.message = 'Please Select Your Grade.';
    } else if (!this.email.value) {
      this.message = 'Please Provide Your Email.';
    } else if (!this.city.value) {
      this.message = 'Please Select Your City.';
    } else if (!this.location.value) {
      this.message = 'Please Select Your Location.';
    } else if (this.subjects.value.length == 0) {
      this.message = 'Please Select Subjects.';
    } else if (!this.syllabus.value) {
      this.message = 'Please Select Syllabus.';
    } else {
      this.message = "";
    }
  }
}
