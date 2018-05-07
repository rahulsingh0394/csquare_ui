import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource } from 'ng2-smart-table';
import { AdminAppService } from '../../admin-app.service';

@Component({
  selector: 'tutor-modal',
  styleUrls: ['./tutor-modal.component.scss'],
  templateUrl: './tutor-modal.html'
})

export class TutorModalComponent implements OnInit {

  modalHeader: string;
  cityList: any[] = [];
  tutorList: any[] = [];
  allLocations: any[] = [];
  source: LocalDataSource = new LocalDataSource();
  settings: any;
  name: any;

  prepareSettings() {
    return {
      actions: {
        position: 'right',
        edit: false,
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
        perPage: 10
      },
      columns: {
        email: {
          title: 'Email',
          type: 'string'
        },
        city: {
          title: 'City',
          type: 'string',
          valuePrepareFunction: value => this.getCity(value),
        },
        location: {
          title: 'Area',
          type: 'string',
          valuePrepareFunction: value => this.getLocation(value),
        },
        phone: {
          title: 'Phone',
          type: 'string'
        },
        gender: {
          title: 'Gender',
          type: 'string'
        },
        verified: {
          title: 'Is Verified?',
          type: 'boolean'
        },
        is_trusted_tutor: {
          title: 'Trusted Tutor?',
          type: 'boolean'
        }
      }
    };
  }

  constructor(private activeModal: NgbActiveModal,
    private service: AdminAppService, ) {
    this.settings = this.prepareSettings();
  }

  getCity(value: any) {
    let status;
    this.cityList.forEach(item => {
      if (item.pK == value) {
        status = item.city_name;
      }
    })
    return status;
  }

  getLocation(value: any) {
    let name;
    this.allLocations.forEach(item => {
      if (item.pk == value) {
        name = item.location_name;
      }
    })
    return name;

  }

  ngOnInit() {
    ;

    // this.source.load(this.tutorList);
  }

  onDeleteConfirm(event: any) {
    let index = 0;
    this.tutorList.forEach(element => {
      if (element.pK == event.data.pK) {
        this.tutorList.splice(index, 1);
        index++;
      } else {
        index++;
      }
    });
    this.settings = this.prepareSettings();
    this.source.load(this.tutorList);
  }


  cancelModal() {
    this.activeModal.close('N');
  }

  okModal() {
    this.activeModal.close(this.tutorList);
  }
}
