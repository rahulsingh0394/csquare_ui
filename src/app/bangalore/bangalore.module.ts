import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
//import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { LoadingModule } from 'ngx-loading';
import { HttpClientModule } from '@angular/common/http';

import { FilterPipeModule } from '../shared/pipes/filters/fliter.module';
import { SharedModule } from '../shared/shared.module';
import { routing } from './bangalore.routing';
import { BangaloreComponent } from './bangalore.component';
import { BangaloreService } from './bangalore.service';

@NgModule({
  imports: [
    //BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    SharedModule,
    ScrollToModule,
    NgbModule.forRoot(),
    // NgbCarouselConfig,
    routing,
    LoadingModule,
    HttpClientModule,
    FilterPipeModule
  ],
  declarations: [

    BangaloreComponent,

    // PrivateTutorComponent,

    //PrivateTutorInBangaloreComponent,
  ],
  providers: [
    BangaloreService
  ],
  entryComponents: [
  ]

})
export class BangaloreModule {
}
