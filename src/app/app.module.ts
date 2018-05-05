import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import { HttpModule } from '@angular/http';


import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { BannerComponent } from './shared/banner/banner.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FilterPipeModule } from './shared/pipes/filters/fliter.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   // BannerComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingModule,
    HttpModule,
    TransferHttpCacheModule,
    SharedModule,
    FilterPipeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'about', loadChildren: './about/about.module#AboutModule' },
      { path: 'question',      loadChildren: './question/ques.module#QuesModule' },
      { path: 'contact',      loadChildren: './contact/contact.module#ContactModule' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
