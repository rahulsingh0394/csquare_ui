import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { SharedModule } from '../shared/shared.module';
import {routing} from './contact.routing';
import {ContactComponent} from './contact.component';
import { ContactService, Contact } from './contact.service';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    SharedModule,
    ScrollToModule,
    NgbModule.forRoot(),
    routing,   
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyBgDkEqzA4rL-mb0Ha2GD2OJNmei-De2e0'
  }),
  ],
  declarations: [
    
    ContactComponent,
],
  providers: [
    ContactService
  ],
  entryComponents: [
    ]

})
export class ContactModule {
}
