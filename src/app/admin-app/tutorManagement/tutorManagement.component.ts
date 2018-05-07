import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { AdminAppService } from '../admin-app.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Router,Params, ActivatedRoute } from '@angular/router';
import { CommonModalComponent } from '../../shared/common-modal/common-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'admin-app-tutorManagement',
    templateUrl: './tutorManagement.html',
    styleUrls: ['./tutorManagement.scss'],
    providers: [NgbCarouselConfig],
})

export class TutorManagementComponent implements OnInit {

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
          location:{
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

  constructor(config: NgbCarouselConfig,
    private service: AdminAppService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,)
     {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
   // this.service.
  this.service.getAllRefLocations().subscribe(resp=>{
    resp.forEach(element => {
      this.locationList.push({value: element.pk, title: element.location_name});
    });
  })
  this.service.getAllRefCites().subscribe(res=>{
    res.forEach(element => {
      this.cityList.push({value: element.pK, title: element.city_name});
    });
  })
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.sessionId = params['id'];
    });
    this.loading = true;
    this.service.getAllTutors(this.offset, this.limit).subscribe((data) => {
      this.settings = this.prepareSetting();
      this.source.load(data);
      this.loading = false;
    });
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
    activeModal.result.then ((res) => {
      if (res == 'Y') {
        this.service.deleteTutor(data.data.pK).subscribe(response=>{
         
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

  getCityById( value: any ) {
    //  ;
    let name :any;
    const len: number = this.cityList.length;
    for (let i = 0; i < len; i++) {
      if (this.cityList[i].value === value) {
        name = this.cityList[i].title;
        return name;
      }
    }
    return name;
  }

  getLocationById( value: any ) {
    //  ;
    let name : any;
    const len: number = this.locationList.length;
    for (let i = 0; i < len; i++) {
      if (this.locationList[i].value === value) {
        name = this.locationList[i].title;
        return name;
      }
    }
    return name;
  }

}
