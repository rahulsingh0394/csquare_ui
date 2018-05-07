import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, AbstractControl, Validator, FormBuilder } from '@angular/forms';
import { AdminAppService } from '../../../admin-app.service';
import { EventService } from '../event.service';

@Component({
  selector: 'add-tutor-model',
  styleUrls: ['./tutor-model.component.scss'],
  templateUrl: './tutor-model.component.html'
})

export class TutorModelComponent implements OnInit {

  showHide: boolean;
  studentData: any;
  studentManagementForm: FormGroup;
  public firstName: AbstractControl;
  public lastName: AbstractControl;
  public phone: AbstractControl;
  public email: AbstractControl;
  public gender: AbstractControl;
  public city: AbstractControl;
  public location: AbstractControl;
  cityList: any [] = [];
  locationList: any [] = [];
  attendenceTabClicked: boolean;
  events: any [] = [];

  
  constructor(private activeModal: NgbActiveModal,
  private fb: FormBuilder, private service: AdminAppService,
private eventService: EventService ){ 
    this.service.getAllRefCites().subscribe(res =>{
      this.cityList = res;
    });
    this.initForm();
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
    });
     ;
    if(this.studentData){
      this.city.setValue(this.studentData.city);
      this.location.setValue(this.studentData.location);
      this.studentManagementForm.patchValue(this.studentData);
      this.studentManagementForm.disable();
    }
    
   }

   clearEvents() {
    this.events = [];
  }
  loadEvents() {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }

  cancelModal() {
    this.activeModal.close('N');
  }

  okModal() {
    this.activeModal.close('Y');
  }

  clickButton(event: any){
     
  }

  eventClick(event: any){
     
    
  }

  private initForm() {
    this.studentManagementForm = this.fb.group({
      'firstName': [''],
      'lastName': [''],
      'phone': [''],
      'email': [''],
      'gender': [''],
      'city': [''],
      'location': ['']
    })
    this.firstName = this.studentManagementForm.controls['firstName'];
    this.lastName = this.studentManagementForm.controls['lastName'];
    this.phone = this.studentManagementForm.controls['phone'];
    this.email = this.studentManagementForm.controls['email'];
    this.gender = this.studentManagementForm.controls['gender'];
    this.city = this.studentManagementForm.controls['city'];
    this.location = this.studentManagementForm.controls['location'];

    this.city.valueChanges.subscribe(val =>{
      if(val){
        this.service.searchLocationByCity(val).subscribe(data=>{
          this.locationList = data;
        })
      }
    })

  }

  
}
