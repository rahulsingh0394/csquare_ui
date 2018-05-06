import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { SharedModule } from '../shared/shared.module';
import { routing } from './signup.routing';
import { SignupComponent } from './signup.component';
import { SignUpService, SignUp } from './signup.service';
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
    NgbModule.forRoot(),
    routing,
    LoadingModule
  ],
  declarations: [

    SignupComponent,
  ],
  providers: [
    SignUpService
  ],
  entryComponents: [
  ]

})
export class SignupModule {
}
