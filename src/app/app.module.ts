import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { SharedModule } from './shared/shared.module';
import { BannerComponent } from './shared/banner/banner.component';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    NgbModule.forRoot(),
    JWBootstrapSwitchModule,
    SharedModule,
    ScrollToModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingModule,
    HttpModule,
    TransferHttpCacheModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'banner', component: BannerComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
