import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
//import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BangaloreComponent } from './bangalore.component';

const routes: Routes = [
    {
        path: '',
        component: BangaloreComponent,
        children: [
            // { path: 'banner',      component: BannerComponent },
            // { path: 'common-template',      component: CommonTemplateComponent },
            { path: 'home-tuition', loadChildren: './home-tuition/home-tuition.module#HomeTuitionModule' },
            // { path: 'home-tutor', loadChildren: './home-tutor/home-tutor.module#HomeTutorModule'},
            // { path: 'private-tuition', loadChildren: './private-tuition/private-tuition.module#PrivateTuitionModule'},
            // { path: 'private-tutor', loadChildren: './private-tutor/private-tutor.module#PrivateTutorModule'},
            { path: '', redirectTo: 'home-tuition', pathMatch: 'full' },
            { path: '**', redirectTo: 'home-tuition' }
        ]
    }
];

export const routing = RouterModule.forChild(routes);