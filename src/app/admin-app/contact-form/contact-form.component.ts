import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { AdminAppService } from '../admin-app.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalComponent } from '../../shared/common-modal/common-modal.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {

  leadList: any[] = [];  
  cityList: any[] = [];
  leadStatusList: any[] = [];  
  userType: boolean = false;
  source: LocalDataSource = new LocalDataSource();
  offset: any = 0;
  limit: any = 500;
  settings: any;
  sessionId: any;
  loading: any;


  prepareSettings() {
    return {
      actions: {
        position: 'right',
        edit: false,
        delete: true,
        add: false,
        },
        mode: 'external',
        add: {
          addButtonContent: '<i class="fa fa-plus-square-o"></i>',
          createButtonContent: '<i class="ion-checkmark"></i>',
          cancelButtonContent: '<i class="fa fa-ban"></i>',
          confirmCreate: false,
        },
        edit: {
          editButtonContent: '<i class="fa fa-pencil"></i>',
          saveButtonContent: '<i class="fa fa-check"></i>',
          cancelButtonContent: '<i class="fa fa-ban"></i>',
          confirmSave: false,
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
           name: {
            title: 'Name',
            type: 'string',
          },
          phone: {
              title: 'Phone',
              type: 'string',
          },
          email: {
              title: 'Email',
              type: 'string'
          },
          message: {
              title: 'Message',
              type: 'string'
          }
        }
    }
  }
    

  constructor(config: NgbCarouselConfig,
    private service: AdminAppService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal )
     {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;

  }
  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
      this.sessionId = params['id'];
        this.service.getAllContact().subscribe((data) => {
          this.settings = this.prepareSettings();
          this.source.load(data);
          this.loading = false;
        });
    });
  }

  onDeleteConfirm(data: any): void {
     ;
    const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
              activeModal.componentInstance.showHide = true;
              activeModal.componentInstance.modalHeader = 'Alert';
              activeModal.componentInstance.modalContent = 'Are You Sure You Want To Delete?';
              activeModal.result.then ((res) => {
                if (res == 'Y') {
                  this.service.deleteContact(data.data.pK).subscribe(enquiry=>{
                    
                })
                const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
                activeModal.componentInstance.showHide = true;
                activeModal.componentInstance.modalHeader = 'Alert';
                activeModal.componentInstance.modalContent = 'Lead Successfully Deleted!';
                this.source.remove(data.data);                
                } else if (res == 'N') {
                }
              });
            
  }
}
