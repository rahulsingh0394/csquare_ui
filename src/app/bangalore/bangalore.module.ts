import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
//import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
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
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.rotatingPlane,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
        backdropBorderRadius: '1px',
        primaryColour: '#5e50ad', 
        secondaryColour: '#6CFB0D', 
        tertiaryColour: '#0D5FFB'
    }),
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
