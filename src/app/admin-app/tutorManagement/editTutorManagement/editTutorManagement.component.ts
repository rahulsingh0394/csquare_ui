import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { AdminAppService } from '../../admin-app.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, Http, Response } from '@angular/http';
import { CommonModalComponent } from '../../../shared/common-modal/common-modal.component';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

class tutorGrade{
  gradeId: string;
  pk: string;
  tutor_Id: string;
}

class tutorSubject{
  pk: string;
  subjectId: string;
  tutorId: string;
}
class tutorSyllabus{
  pk: string;
  syllabusId: string;
  tutorId: string;
}
class listItem{
  id: string;
  itemName: string;
}

@Component({
    selector: 'admin-app-editTutorManagement',
    templateUrl: './editTutorManagement.html',
    styleUrls: ['./editTutorManagement.scss'],
    providers: [NgbCarouselConfig],
})

export class EditTutorManagementComponent implements OnInit {

    tutorIdParam: any;
    tutorManagementForm: FormGroup;
    tutorData: any;
    locationList:any [] =[];
    source: LocalDataSource = new LocalDataSource();
    settingsStudentTable: any;
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
   public tutorStudentList: AbstractControl;

   public have_vechile: AbstractControl;
   public alternate_phone: AbstractControl;
   public aadhar_verified: AbstractControl;
   public verify_without_aadhar: AbstractControl;

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
   qualififcationList: any [] = [];

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
    private http:Http,
    private modalService: NgbModal    ) {
      this.service.getAllRefCites().subscribe(data=>{
        this.cityList = data;
      });
      this.qualififcationList = [ 'Under Graduate', 'BA', 'BBM', 'BCOM', 'BCA', 'BSC',
        'Engg', 'MTech', 'Mcom', 'MBA', 'MA', 'MCA', 'MSC', 'Others']
        this.initForm();
    }

    ngOnInit() {
      this.service.getAllRefSubjects().subscribe(data=>{
        this.subjectDis = [];
        data.sort( function(name1, name2) {
          if ( name1.sortorder < name2.sortorder ){
            return -1;
          }else if( name1.sortorder > name2.sortorder ){
              return 1;
          }else{
            return 0;	
          }
      });
        data.forEach(ele=>{
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
      this.service.getAllRefSyllabus().subscribe(data=>{
        this.syllabusDis = [];
        data.forEach(ele=>{
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
      this.service.getAllRefGrades().subscribe(data=>{
        this.gradeDis = [];
        data.sort( function(name1, name2) {
          if ( name1.sortorder < name2.sortorder ){
            return -1;
          }else if( name1.sortorder > name2.sortorder ){
              return 1;
          }else{
            return 0;	
          }
      });
        data.forEach(element=>{
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
            this.tutorIdParam = params['pk'];
            this.sessionId = params['id'];
            if (this.tutorIdParam) {
              this.loading = true;
                this.service.getTutorById(this.tutorIdParam).subscribe(data => {
                  this.selectedItems = [];
                  this.selectedSyllabus = [];
                  this.selected = [];
                  data.tutorGradeList.forEach(ele =>{
                    const newItem = new listItem();
                    newItem.id = ele.gradeId;
                    this.gradeDis.forEach(res =>{
                      if(res.id == ele.gradeId) {
                        newItem.itemName = res.itemName
                      }
                    });        
                    this.selected.push(newItem);
                  });
                  data.tutorSubjectList.forEach(ele =>{
                     ;
                    const newItem = new listItem();
                    newItem.id = ele.subjectId;
                    this.subjectDis.forEach(res =>{
                      if(res.id == ele.subjectId) {
                        newItem.itemName = res.itemName
                      }
                    });
                    this.selectedItems.push(newItem);
                  });
                  data.tutorSyllabusList.forEach(ele =>{
                    const newItem = new listItem();
                    newItem.id = ele.syllabusId;
                    this.syllabusDis.forEach(res =>{
                      if(res.id == ele.syllabusId) {
                        newItem.itemName = res.itemName
                      }
                    });
                    this.selectedSyllabus.push(newItem);
                  });
                  this.location.setValue(data.location);
                   this.tutorManagementForm.patchValue(data);
                   this.loading = false;
            });
             
            this.service.getStudentByTutorId(this.tutorIdParam).subscribe(result =>{
               
              this.settingsStudentTable = this.prepareSetting();
              this.source.load(result);
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
              this.selected.forEach(item =>{
                const grade =new tutorGrade();
                grade.gradeId = item.id;
                this.gradeList.push(grade);
            });  
            this.tutorGradeList.setValue(this.gradeList);  
              this.selectedItems.forEach(item =>{
                const sub = new tutorSubject();
                sub.subjectId = item.id;
                this.subjectList.push(sub);
              });
              this.tutorSubjectList.setValue(this.subjectList);
              this.selectedSyllabus.forEach(item =>{
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
                this.selected.forEach(item =>{
                  const newItem =new tutorGrade();
                  newItem.gradeId = item.id;
                  this.gradeList.push(newItem);
              });    
              this.tutorGradeList.setValue(this.gradeList);
                this.selectedItems.forEach(item =>{
                  const newItem = new tutorSubject();
                  newItem.subjectId = item.id;
                  this.subjectList.push(newItem);
                });
                this.tutorSubjectList.setValue(this.subjectList);
                this.selectedSyllabus.forEach(item =>{
                  const sub = new tutorSyllabus();
                  sub.syllabusId = item.id;
                  this.syllabusList.push(sub);
                });
                this.tutorSyllabusList.setValue(this.syllabusList);
            }

            submit() {
              this.grade.setValue('');
              this.syllabus.setValue('');
              this.subjects.setValue('');
              const formValue: any = this.tutorManagementForm.value;
              if (!this.tutorIdParam){
               // if(this.tutorManagementForm.valid) {
                  this.loading = true;
                  this.service.addTutor(formValue).subscribe(enquiry => {
                    const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
                    activeModal.componentInstance.showHide = true;
                    activeModal.componentInstance.modalHeader = 'Alert';
                    activeModal.componentInstance.modalContent = 'Congrats! Student has been Successfully Created.';
                    this.loading = false;
                    this.router.navigateByUrl('/admin-app/tutorManagement/' + this.sessionId);
                  });
                // } else{
                //   const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
                //   activeModal.componentInstance.showHide = true;
                //   activeModal.componentInstance.modalHeader = 'Alert';
                //   activeModal.componentInstance.modalContent = 'Please Fill the form and then submit!';
                // }  
              } else {
                this.pK.setValue(this.tutorIdParam);
               // if(this.tutorManagementForm.valid) {
                  this.loading = true;
                  this.service.updateTutor(formValue).subscribe(enquiry => {
                    const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
                    activeModal.componentInstance.showHide = true;
                    activeModal.componentInstance.modalHeader = 'Alert';
                    activeModal.componentInstance.modalContent = 'Thank You! This Student has been Successfully Updated.';
                    this.loading = false;
                    this.router.navigateByUrl('/admin-app/tutorManagement/' + this.sessionId);
                  });
                // } else{
                //   const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
                //   activeModal.componentInstance.showHide = true;
                //   activeModal.componentInstance.modalHeader = 'Alert';
                //   activeModal.componentInstance.modalContent = 'Please Fill the form and then submit!';
                // }
              }
                     
            }
      cancel(){
        const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
        activeModal.componentInstance.showHide = true;
        activeModal.componentInstance.modalHeader = 'Alert';
        activeModal.componentInstance.modalContent = 'Are you sure want to Cancel?';
        activeModal.result.then ((res) => {
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
          'phone': ['', Validators.compose([Validators.required,Validators.maxLength(10),
            Validators.minLength(10),Validators.pattern('[0-9]*')])],
          'email': ['', Validators.compose([Validators.required,Validators.email])],
          'grade': [''],
          'lastName': ['', Validators.compose([Validators.required])],
          'comment': [''],
          'gender': ['', Validators.compose([Validators.required])],
          'address': ['', Validators.compose([Validators.required])],
          'city': ['', Validators.compose([Validators.required])],
          'subjects': [''],
          'syllabus': [''],
          'tutorGradeList': [''],
          // 'istutor': [''],
          // 'isstudent': [''],
          'tutorSubjectList': [''], 
          'tutorSyllabusList': [''],
          'category': [''],
          'followUpRequired': [''],
          'interviewTime': [''],
          'is_interested_for_home_tuition': [''],
          'roundCleared': [''],
          'interviewDate': [''],
          'is_trusted_tutor': [''],
          'verified': [''],
          'packageInHrs': [''],
          'hourlyRate': [''],
          'registrationFee': [''],
          'studentTotalFee': [''],
          'isRegistrationPaid': [''],
          'tutionRequiredForMonths': [''],
          'csquareIncome': [''],
          'qualification': [''],
          'experience_in_years': [''],
          'prefferedTiming': [''],
          'prefferedDays': [''],
          'location': [''],
          'locationName': [''],
          'tutorStudentList': [''],

         });
         this.pK = this.tutorManagementForm.controls['pK'];
         this.firstName = this.tutorManagementForm.controls['firstName'];
         this.phone = this.tutorManagementForm.controls['phone'];
         this.email = this.tutorManagementForm.controls['email'];
         this.grade = this.tutorManagementForm.controls['grade'];
         this.lastName = this.tutorManagementForm.controls['lastName'];
         this.comment = this.tutorManagementForm.controls['comment'];
         this.gender = this.tutorManagementForm.controls['gender'];
         this.address = this.tutorManagementForm.controls['address'];
         this.city = this.tutorManagementForm.controls['city'];
         this.subjects = this.tutorManagementForm.controls['subjects'];
         this.syllabus = this.tutorManagementForm.controls['syllabus'];
         this.tutorSubjectList = this.tutorManagementForm.controls['tutorSubjectList'];
         this.tutorGradeList = this.tutorManagementForm.controls['tutorGradeList'];
         this.tutorSyllabusList = this.tutorManagementForm.controls['tutorSyllabusList'];
        //  this.istutor = this.tutorManagementForm.controls['istutor'];
        //  this.isstudent = this.tutorManagementForm.controls['isstudent'];
         this.category = this.tutorManagementForm.controls['category'];
         this.followUpRequired = this.tutorManagementForm.controls['followUpRequired'];
         this.interviewTime = this.tutorManagementForm.controls['interviewTime'];
         this.is_interested_for_home_tuition = this.tutorManagementForm.controls['is_interested_for_home_tuition'];
         this.roundCleared = this.tutorManagementForm.controls['roundCleared'];
         this.interviewDate = this.tutorManagementForm.controls['interviewDate'];
         this.is_trusted_tutor = this.tutorManagementForm.controls['is_trusted_tutor'];
         this.verified = this.tutorManagementForm.controls['verified'];
         this.packageInHrs = this.tutorManagementForm.controls['packageInHrs'];
         this.hourlyRate = this.tutorManagementForm.controls['hourlyRate'];
         this.registrationFee = this.tutorManagementForm.controls['registrationFee'];
         this.studentTotalFee = this.tutorManagementForm.controls['studentTotalFee'];
         this.isRegistrationPaid = this.tutorManagementForm.controls['isRegistrationPaid'];
         this.tutionRequiredForMonths = this.tutorManagementForm.controls['tutionRequiredForMonths'];
         this.csquareIncome = this.tutorManagementForm.controls['csquareIncome'];
         this.qualification = this.tutorManagementForm.controls['qualification'];
         this.experience_in_years = this.tutorManagementForm.controls['experience_in_years'];
         this.prefferedTiming = this.tutorManagementForm.controls['prefferedTiming'];
         this.prefferedDays = this.tutorManagementForm.controls['prefferedDays'];
         this.location = this.tutorManagementForm.controls['location'];
         this.locationName = this.tutorManagementForm.controls['locationName'];
         this.tutorStudentList = this.tutorManagementForm.controls['tutorStudentList'];
         
         this.city.valueChanges.subscribe(val =>{
           if(this.location.value){
            this.service.getRefLocationById(this.location.value).subscribe(ele =>{
              this.locationName.setValue((ele.pincode + ' ( ' +ele.location_name+ ' )'))
            })
           }
          this.locationName.reset();
          this.locationList = [];
          this.locationSearchList = [];
          this.service.searchLocationByCity(val).subscribe(data=>{
            this.locationList = data;
            let i = 0;
            data.forEach(element => {
              this.locationSearchList[i] = (element.pincode + ' ( ' +element.location_name+ ' )');
              i++;
            });
          })
        });

        this.locationName.valueChanges.subscribe(val=>{
           ;
          this.locationList.forEach(element => {
            if((element.pincode + ' ( ' +element.location_name+ ' )') == val){
              this.location.setValue(element.pk);
            }
          });
        })
    }

    back(data: any){
      this.router.navigateByUrl('/admin-app' +data + '/' + this.sessionId);
    }  


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
          followUpDate:{
            title: 'Follow Up Date',
            type: 'date',
          },
          converted:{
            title: 'Is Converted',
            type: 'string'
          },
          email: {
              title: 'Email',
              type: 'string'
          },
          phone: {
              title: 'Phone',
              type: 'string'
          }
        }
      };
    }

    getCityById( value: any ) {
      //  ;
      const len: number = this.cityList.length;
      for (let i = 0; i < len; i++) {
        if (this.cityList[i].pK === value) {
          return this.cityList[i].city_name;
        }
      }
      return value;
    }

  }

