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
  selector: 'admin-app-editLead',
  templateUrl: './editLead.html',
  styleUrls: ['./editLead.scss'],
  providers: [NgbCarouselConfig],
})

export class EditLeadComponent implements OnInit {

  leadIdParam: any;
  leadForm: FormGroup;
  leadData: any;
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
  public istutor: AbstractControl;
  public isstudent: AbstractControl;
  public leadGradeList: AbstractControl;
  public leadSubjectList: AbstractControl;
  public leadStatus: AbstractControl;
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
  leadStatusList: any[] = [];
  public leadSyllabusList: AbstractControl;
  public location: AbstractControl;
  loading: any;

  locationSearchList: any[] = [];
  locationList: any[] = [];
  public locationName: AbstractControl;
  sessionId: any;
  qualififcationList: any[] = [];
  public qualification: AbstractControl;

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
      this.leadStatusList = data;
    })
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
    this.route.params.subscribe((params: Params) => {

      this.leadIdParam = params['pk'];
      this.sessionId = params['id'];
      if (this.leadIdParam) {
        this.loading = true;
        this.service.getLeadById(this.leadIdParam).subscribe(data => {
          this.selectedItems = [];
          this.selectedSyllabus = [];
          this.selected = [];
          data.leadGradeList.forEach(ele => {
            const newItem = new listItem();
            newItem.id = ele.gradeId;
            this.gradeDis.forEach(res => {
              if (res.id == ele.gradeId) {
                newItem.itemName = res.itemName
              }
            });
            this.selected.push(newItem);
          });
          data.leadSubjectList.forEach(ele => {
            const newItem = new listItem();
            newItem.id = ele.subjectId;
            this.subjectDis.forEach(res => {
              if (res.id == ele.subjectId) {
                newItem.itemName = res.itemName
              }
            });
            this.selectedItems.push(newItem);
          });
          data.leadSyllabusList.forEach(ele => {
            const newItem = new listItem();
            newItem.id = ele.syllabusId;
            this.syllabusDis.forEach(res => {
              if (res.id == ele.syllabusId) {
                newItem.itemName = res.itemName
              }
            });
            this.selectedSyllabus.push(newItem);
          });
          this.leadForm.patchValue(data);
          this.loading = false;
          //  if(data.isstudent == true){
          //    this.isstudent.setValue('1');
          //  } else {
          //    this.istutor.setValue('2');
          //  }  
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

  submit() {
    if (!this.isstudent.value) {
      this.isstudent.setValue(false);
    }
    if (!this.istutor.value) {
      this.istutor.setValue(false);
    }
    const formValue: any = this.leadForm.value;
    if (!this.leadIdParam) {
      // if(this.leadForm.valid) {
      this.loading = true;
      this.service.addLead(formValue).subscribe(enquiry => {
        const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
        activeModal.componentInstance.showHide = true;
        activeModal.componentInstance.modalHeader = 'Alert';
        activeModal.componentInstance.modalContent = 'Congrats! Lead has been created Successfully';
        this.loading = false;
        this.router.navigateByUrl('/admin-app/lead/' + this.sessionId);
      });
      // } else{
      //   const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
      //   activeModal.componentInstance.showHide = true;
      //   activeModal.componentInstance.modalHeader = 'Alert';
      //   activeModal.componentInstance.modalContent = 'Please Fill the form and then submit!';
      // } 
    } else {
      this.pK.setValue(this.leadIdParam);
      // if(this.leadForm.valid) {
      this.loading = true;
      this.service.updateLead(formValue).subscribe(enquiry => {
        const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
        activeModal.componentInstance.showHide = true;
        activeModal.componentInstance.modalHeader = 'Alert';
        activeModal.componentInstance.modalContent = 'Lead has been Successfully Updated!';
        this.loading = false;
        this.router.navigateByUrl('/admin-app/lead/' + this.sessionId);
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
      'grade': ['this.gradeString', Validators.compose([Validators.required])],
      'lastName': ['', Validators.compose([Validators.required])],
      'comment': [''],
      'gender': ['', Validators.compose([Validators.required])],
      'address': ['', Validators.compose([Validators.required])],
      'city': ['', Validators.compose([Validators.required])],
      'subjects': ['this.subjectString', Validators.compose([Validators.required])],
      'syllabus': ['', Validators.compose([Validators.required])],
      'leadGradeList': [''],
      'istutor': [''],
      'isstudent': [''],
      'leadSubjectList': [''],
      'leadSyllabusList': [''],
      'leadStatus': [''],
      'location': [''],
      'locationName': [''],
      'qualification': ['']

    });
    this.pK = this.leadForm.controls['pK'];
    this.firstName = this.leadForm.controls['firstName'];
    this.phone = this.leadForm.controls['phone'];
    this.email = this.leadForm.controls['email'];
    this.grade = this.leadForm.controls['grade'];
    this.lastName = this.leadForm.controls['lastName'];
    this.comment = this.leadForm.controls['comment'];
    this.gender = this.leadForm.controls['gender'];
    this.address = this.leadForm.controls['address'];
    this.city = this.leadForm.controls['city'];
    this.subjects = this.leadForm.controls['subjects'];
    this.syllabus = this.leadForm.controls['syllabus'];
    this.leadSubjectList = this.leadForm.controls['leadSubjectList'];
    this.leadGradeList = this.leadForm.controls['leadGradeList'];
    this.leadSyllabusList = this.leadForm.controls['leadSyllabusList'];
    this.istutor = this.leadForm.controls['istutor'];
    this.isstudent = this.leadForm.controls['isstudent'];
    this.leadStatus = this.leadForm.controls['leadStatus'];
    this.location = this.leadForm.controls['location'];
    this.locationName = this.leadForm.controls['locationName'];
    this.qualification = this.leadForm.controls['qualification'];

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

