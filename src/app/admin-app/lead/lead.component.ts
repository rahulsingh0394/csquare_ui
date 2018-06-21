import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AdminAppService } from '../admin-app.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalComponent } from '../../shared/common-modal/common-modal.component';
@Component({
  selector: 'admin-app-lead',
  templateUrl: './lead.html',
  styleUrls: ['./lead.scss'],
  providers: [NgbCarouselConfig],
})

export class LeadComponent implements OnInit {

  leadList: any[] = [];
  cityList: any[] = [];
  leadStatusList: any[] = [];
  userType: boolean = false;
  source: LocalDataSource = new LocalDataSource();
  offset: any = -1;
  limit: any = -1;
  settings: any;
  sessionId: any;
  loading: any;
  leadType: any[] = [];

  prepareSettings() {
    return {
      actions: {
        position: 'right',
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
        isstudent: {
          title: 'Is Student',
          type: 'boolean'
        },
        istutor: {
          title: 'Is Tutor',
          type: 'boolean'
        },
        email: {
          title: 'Email',
          type: 'string'
        },
        phone: {
          title: 'Phone',
          type: 'string'
        },
        leadStatus: {
          title: 'Lead Status',
          filter: {
            type: 'list',
            config: {
              selectText: 'Show All',
              list: this.leadStatusList,
            },
          },
          valuePrepareFunction: value => this.getLeadStatus(value),
        }
      }
    }
  }


  constructor(config: NgbCarouselConfig,
    private service: AdminAppService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    ;
    this.service.getAllRefCites().subscribe(res => {
      res.forEach(element => {
        this.cityList.push({ value: element.pK, title: element.city_name });
      });
    })

    this.service.getAllLeadStatus().subscribe(resp => {
      resp.forEach(element => {
        this.leadStatusList.push({ value: element.pk, title: element.currentStatus });
      });
    })
    this.leadType[0] = { value: true, title: 'Tutor' };
    this.leadType[1] = { value: true, title: 'Student' };

  }
  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
      this.sessionId = params['id'];
      this.service.getAllLeads(this.offset, this.limit).subscribe((data) => {
        this.leadList = data;
        this.settings = this.prepareSettings();
        this.source.load(data);
        this.loading = false;
      });
    });
  }
  handleEdit(data: any) {
    ;
    const leadData = data.data;
    this.router.navigateByUrl('/admin-app/editLead/' + this.sessionId + '/' + leadData.pK);
  }
  handleCreate() {
    this.router.navigateByUrl('/admin-app/createLead/' + this.sessionId);
  }

  onDeleteConfirm(data: any): void {
    ;
    const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
    activeModal.componentInstance.showHide = true;
    activeModal.componentInstance.modalHeader = 'Alert';
    activeModal.componentInstance.modalContent = 'Are You Sure You Want To Delete?';
    activeModal.result.then((res) => {
      if (res == 'Y') {
        this.service.deleteLead(data.data.pK).subscribe(enquiry => {

        })
        const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
        activeModal.componentInstance.showHide = true;
        activeModal.componentInstance.modalHeader = 'Alert';
        activeModal.componentInstance.modalContent = 'Lead Successfully Deleted!';
        this.source.remove(data.data);
        // this.service.getAllLeads(this.offset, this.limit).subscribe(data=>{
        //   this.settings = this.prepareSettings();
        //   this.source.load(data);

        // })

      } else if (res == 'N') {
      }
    });

  }

  getLeadType(value: any) {
    const index = this.leadList.findIndex(item => {
      if (item.pK == value) {
        return true;
      }
    })
    if (index >= 0) {
      if (this.leadList[index].isstudent == true) {
        return this.leadType[1].title;
      } else if (this.leadList[index].istutor == true) {
        return this.leadType[0].title;
      }
    }
  }
  getLeadStatus(value: any) {
    const len: number = this.leadStatusList.length;
    for (let i = 0; i < len; i++) {
      if (this.leadStatusList[i].value === value) {
        return this.leadStatusList[i].title;
      }
    }
    return value;
  }

  getCityById(value: any) {
    const len: number = this.cityList.length;
    for (let i = 0; i < len; i++) {
      if (this.cityList[i].value === value) {
        return this.cityList[i].title;
      }
    }
    return value;
  }


}
