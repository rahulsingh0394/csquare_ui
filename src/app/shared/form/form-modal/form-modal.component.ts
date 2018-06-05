import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-form-modal',
  styleUrls: ['./form-modal.component.scss'],
  templateUrl: './form-modal.component.html'
})

export class FormModalComponent implements OnInit {

  modalHeader: string;

  showHide: boolean = false;

  modalContent: string;

  num: number = 1;

  ok: any = 'Get Started';


  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() { }


  cancelModal() {
    this.activeModal.close('N');
  }

  okModal() {
    this.num ++;

    //this.activeModal.close('Y');
  }
}
