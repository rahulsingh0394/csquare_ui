import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import { HttpModule } from '@angular/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { BannerComponent } from './shared/banner/banner.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FilterPipeModule } from './shared/pipes/filters/fliter.module';
import { StudentComponent } from './studentForm/student.component';
import { StudentService } from './studentForm/student.service';
import { TutorComponent } from './tutorForm/tutor.component';
import { TutorService } from './tutorForm/tutor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // BannerComponent,
    NavbarComponent,
    FooterComponent,
    StudentComponent,
    TutorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingModule,
    HttpModule,
    TransferHttpCacheModule,
    AngularMultiSelectModule,
    SharedModule,
    FilterPipeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', loadChildren: './about/about.module#AboutModule' },
      { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
      { path: 'careers', loadChildren: './careers/careers.module#CareersModule' },
      { path: 'media', loadChildren: './media/media.module#MediaModule' },
      { path: 'parents-review', loadChildren: './parents/parents.module#ParentsModule' },
      { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyModule' },
      { path: 'question', loadChildren: './question/ques.module#QuesModule' },
      { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
      { path: 'studentForm', component: StudentComponent },
      { path: 'tutorForm', component: TutorComponent },
      { path: 'terms', loadChildren: './terms/terms.module#TermsModule'},
      { path: 'tutors-review', loadChildren: './tutors/tutors.module#TutorsModule' },
      { path: 'admin-app',      loadChildren: './admin-app/admin-app.module#AdminAppModule' },
    ]),
  ],
  providers: [StudentService, TutorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
