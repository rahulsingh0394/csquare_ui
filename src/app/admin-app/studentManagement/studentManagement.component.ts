import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { AdminAppService } from '../admin-app.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { CommonModalComponent } from '../../shared/common-modal/common-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'admin-app-studentManagement',
    templateUrl: './studentManagement.html',
    styleUrls: ['./studentManagement.scss'],
    providers: [NgbCarouselConfig],
})

export class StudentManagementComponent implements OnInit {

  locationList: any[] = [];  
  cityList: any[] = []; 
  source: LocalDataSource = new LocalDataSource();
  offset: any = -1;
  limit: any = -1;
  settings: any;
  sessionId: any;
  loading: any;
  
  prepareSetting() {
    return {
      actions: {
      position: 'right',
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
  

  constructor(config: NgbCarouselConfig,
    private service: AdminAppService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,)
     {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    this.loading = true;
        this.service.getAllStudents(this.offset, this.limit).subscribe((data) => {
          this.service.getAllRefCites().subscribe(res=>{
            res.forEach(element => {
              this.cityList.push({value: element.pK, title: element.city_name});
            });
            this.settings = this.prepareSetting();
            this.source.load(data);
            this.loading = false;
          })
        });
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.sessionId = params['id'];
    });
  }
  handleEdit(data: any) {
       ;
    const leadData = data.data;
        this.router.navigateByUrl('/admin-app/editStudentManagement/' + this.sessionId + '/' +leadData.pK);
  }
  handleCreate() {
    this.router.navigateByUrl('/admin-app/createStudentManagement/' + this.sessionId);
  }

  onDeleteConfirm(data: any) {
    const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
    activeModal.componentInstance.showHide = true;
    activeModal.componentInstance.modalHeader = 'Alert';
    activeModal.componentInstance.modalContent = 'Are you sure want to Delete?';
    activeModal.result.then ((res) => {
      if (res == 'Y') {
        this.service.deleteStudent(data.data.pK).subscribe(response=>{
         
        })
        const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
                activeModal.componentInstance.showHide = true;
                activeModal.componentInstance.modalHeader = 'Alert';
                activeModal.componentInstance.modalContent = 'Student Successfully Deleted!';
               this.source.remove(data.data);
              //  this.service.getAllStudents(this.offset, this.limit).subscribe(res =>{
              //    this.settings = this.prepareSetting();
              //    this.source.load(res);
              //  })
      } else if (res == 'N') {
        // What action should be performed on cancel of model goes here.
      }
    });
  }

  // getLocation(value: any){
  //    ;
  //  let name;
  //  this.locationList.forEach(item =>{
  //    if (item.pk == value ){
  //     name = item.location_name;
  //    }
  //  })
  //  return name;

  // }
  getCityById( value: any ) {
    //  ;
    const len: number = this.cityList.length;
    for (let i = 0; i < len; i++) {
      if (this.cityList[i].value === value) {
        return this.cityList[i].title;
      }
    }
    return value;
  }

}
