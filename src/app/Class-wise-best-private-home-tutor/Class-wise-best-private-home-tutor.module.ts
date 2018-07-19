import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { SharedModule } from '../shared/shared.module';
import {routing} from './Class-wise-best-private-home-tutor.routing';
import {ClassWiseComponent} from './Class-wise-best-private-home-tutor.component';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    SharedModule,
    ScrollToModule,
    LoadingModule,
    NgbModule.forRoot(),
   routing
  ],
  declarations: [
    
    ClassWiseComponent,
],
  providers: [
  ],
  entryComponents: [
    ]

})
export class ClassWiseModule {
}
