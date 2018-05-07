import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
//import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ScrollToModule } from 'ng2-scroll-to-el';
import {routing} from './home-tuition.routing';
import {HomeTuitionComponent} from './home-tuition.component';
//import {HttpModule} from '@angular/http';
import { LoadingModule } from 'ngx-loading';
import { FilterPipeModule } from '../../shared/pipes/filters/fliter.module';
import { HomeTuitionInBangaloreComponent } from './home-tuition-in-bangalore/home-tuition-in-bangalore.component';

@NgModule({
  imports: [
    //BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    ScrollToModule,
    NgbModule.forRoot(),
   // NgbCarouselConfig,
   routing,
   LoadingModule,
   FilterPipeModule
  ],
  declarations: [
    
    HomeTuitionComponent,
    HomeTuitionInBangaloreComponent
  ],
  providers: [
  ],
  entryComponents: [
    
    ]

})
export class HomeTuitionModule {
}
