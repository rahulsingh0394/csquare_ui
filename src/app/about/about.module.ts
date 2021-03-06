import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { SharedModule } from '../shared/shared.module';
import {routing} from './about.routing';
import {AboutComponent} from './about.component';

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
   routing
  ],
  declarations: [
    
    AboutComponent,
],
  providers: [
  ],
  entryComponents: [
    ]

})
export class AboutModule {
}
