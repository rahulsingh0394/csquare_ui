//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModalComponent } from './common-modal/common-modal.component';
import { LoggedInNavComponent } from './loggedInNav/loggedInNavbar.component';
import { LoggedInService, LoggedIn } from './loggedInNav/loggedInNavbar.service';
import { FilterPipeModule } from './pipes/filters/fliter.module';
import {Banner, BannerService} from './banner/banner.service';
import { LoadingModule } from 'ngx-loading';
import { BannerComponent } from './banner/banner.component';

@NgModule({
    imports: [
        CommonModule,
       // BrowserModule,
        FormsModule,
        RouterModule,
        NgbModule,
        ReactiveFormsModule,
        LoadingModule,
        FilterPipeModule
        
    ],
    entryComponents: [
         CommonModalComponent,
         LoggedInNavComponent,
         BannerComponent
      ],
    declarations: [
        CommonModalComponent,
         LoggedInNavComponent,
         BannerComponent
     ],
    exports:[  
        CommonModalComponent,
        LoggedInNavComponent,
        BannerComponent
    ],
    providers: [ 
        LoggedInService,
        BannerService 
    ]
})
export class SharedModule { }