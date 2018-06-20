import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModalComponent } from './common-modal/common-modal.component';
import { LoggedInNavComponent } from './loggedInNav/loggedInNavbar.component';
import { LoggedInService, LoggedIn } from './loggedInNav/loggedInNavbar.service';
import { FilterPipeModule } from './pipes/filters/fliter.module';
import { BannerService} from './banner/banner.service';
import { LoadingModule } from 'ngx-loading';
import { BannerComponent } from './banner/banner.component';
import { FormComponent } from './form/form.component';
import { FormStudentModalComponent } from './form-student-modal/form-student-modal.component';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        ReactiveFormsModule,
        LoadingModule,
        FilterPipeModule,
        NguCarouselModule
        
    ],
    entryComponents: [
         CommonModalComponent,
         LoggedInNavComponent,
         BannerComponent,
         FormComponent,
         FormStudentModalComponent
      ],
    declarations: [
        CommonModalComponent,
         LoggedInNavComponent,
         BannerComponent,
         FormComponent,
         FormStudentModalComponent
     ],
    exports:[  
        CommonModalComponent,
        LoggedInNavComponent,
        BannerComponent,
        FormComponent,
        FormStudentModalComponent
    ],
    providers: [ 
        LoggedInService,
        BannerService,
        NgbActiveModal
    ]
})
export class SharedModule { }