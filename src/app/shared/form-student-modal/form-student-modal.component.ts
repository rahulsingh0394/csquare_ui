import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { SortPipe } from '../pipes/filters/filter.pipe';
import { BannerService } from '../banner/banner.service';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { setTimeout } from 'timers';

class leadGrade {
  gradeId: string;
  pk: string;
  leadId: string;
}

@Component({
  selector: 'add-form-student-modal',
  styleUrls: ['./form-student-modal.component.scss'],
  templateUrl: './form-student-modal.component.html',
})

export class FormStudentModalComponent implements OnInit {

  showHide: boolean = false;
  fromWhere: any;
  num: number = 1;
  ok: any = 'Get Started';
  leadType: any;
  enquiryForm: FormGroup;
  public location: AbstractControl;
  public city: AbstractControl;
  public locationName: AbstractControl;
  public firstName: AbstractControl;
  public phone: AbstractControl;
  public email: AbstractControl;
  public grade: AbstractControl;
  public isstudent: AbstractControl;
  public istutor: AbstractControl;
  cityList: any[] = [];

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.locationSearchList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  locationList: any[] = [];
  locationSearchList: any[] = [];
  gradeList: any[] = [];
  gradeL: any[] = [];

  locationDis: boolean = false;
  nameDis: boolean = false;
  public loading = false;
  showCity: boolean = false;
  error: any;


  constructor(
    public fb: FormBuilder,
    private activeModal: NgbActiveModal,
    private service: BannerService
  ) {
    this.service.getAllRefCites().subscribe(data => {
      this.cityList = data;
    })
    this.service.getAllRefGrades().subscribe(data => {
      this.gradeList = data;
    })
    this.initForm();
  }

  ngOnInit() {
    if(this.fromWhere == 'Home'){
      this.showCity = true;
    } else if (this.fromWhere == 'Bangalore'){
      this.showCity = false;
      this.city.setValue(5);
      this.service.searchLocationByCity(this.city.value).subscribe(result => {
        this.locationList = result;
        if (this.location.value) {
          this.service.getRefLocationById(this.location.value).subscribe(ele => {
            this.locationName.setValue((ele.pincode + ' ( ' + ele.location_name + ' )'))
          })
        }
        let i = 0;
        this.locationList.forEach(element =>{
          this.locationSearchList[i] = (element.pincode + ' ( ' + element.location_name + ' )');
          i++;
        })
      })
    }
   }


  cancelModal() {
    this.activeModal.close('N');
  }

  okModal() {
    if(this.num == 1){
      if(this.showCity == false){
        this.num++;
        this.num++;
        this.ok = 'Next';
      } else {
        this.num++;
        this.ok = 'Next';
      }
    } else {
      if(this.num < 7){
        this.num++;
        this.ok = 'Next';
      }
    }
    //this.activeModal.close('Y');
  }

  back() {
    if (this.num >= 4) {
      this.num--;
    } else if(this.num == 3){
      if(this.showCity == false){
        this.num--;
        this.num--;
      } else {
        this.num--;
      }
    } else if(this.num == 2){
      this.num--;
    }
    if (this.num == 1) {
      this.ok = 'Get Started';
    }
  }

  private initForm() {
    this.enquiryForm = this.fb.group({

        'city': ['', Validators.compose([Validators.required])],
        'location': [''],
        'locationName': [''],
        'firstName': ['', Validators.compose([Validators.required])],
        'phone': ['', Validators.compose([Validators.required, Validators.maxLength(10),
        Validators.minLength(10)])],
        'email': ['', Validators.compose([Validators.required])],
        'leadGradeList': [this.gradeL],
        'grade': ['', Validators.compose([Validators.required])],
        'isstudent': [true],
        'istutor': [false],

    });

    this.city = this.enquiryForm.controls['city'];
    this.location = this.enquiryForm.controls['location'];
    this.locationName = this.enquiryForm.controls['locationName'];
    this.firstName = this.enquiryForm.controls['firstName'];
    this.phone = this.enquiryForm.controls['phone'];
    this.isstudent = this.enquiryForm.controls['isstudent'];
    this.istutor = this.enquiryForm.controls['istutor'];
    this.email = this.enquiryForm.controls['email'];
    this.grade = this.enquiryForm.controls['grade'];

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

    this.grade.valueChanges.subscribe(val => {
      const newItem = new leadGrade();
      newItem.gradeId = val;
      this.gradeL.push(newItem);
    })

  }

  submit(){
    const formData = this.enquiryForm.value;
    this.loading = true;
    this.service.addLead(formData).subscribe(enquiry => {
      this.loading = false;
      if(enquiry._body == 'Email Successfully Created'){
        setTimeout(() => {
          this.activeModal.close('Y');
        }, 10000);
        this.error = 'Thank you ' + this.firstName.value + ' for contacting CsquareEducation. Our representative  will contact you soon.' 
      } else {
        setTimeout(() => {
          this.activeModal.close('Y');
        }, 10000);
        this.error = 'Hello ' + this.email.value + ' . This email already exists. Please try with some another emaial ID.'

      }
    });
  }
}
