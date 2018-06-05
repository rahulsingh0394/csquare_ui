import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
//import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BangaloreComponent } from './bangalore.component';
// import * as data from '../json/bangalore/menu_for_class.json';

// const word = (<any>data);
// for (let i = 0; i < data['size']; i++){
//     this.classMenuList[i] = data[i+1];
//   }
const routes: Routes = [
    {
        path: '',
        component: BangaloreComponent,
        children: [

            //Routing for class wise pages
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Kindergarten', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class1', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class2', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class3', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class4', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class5', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class6', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class7', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class8', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class9', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class10', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_11_Arts', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_11_Commerce', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_11_Science', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_12_Arts', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_12_Commerce', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_12_Science', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Intermediate', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/LKG', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Nursery', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/PUC1', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/PUC2', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/UKG', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_Metric', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_SSLC', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Class-wise-best-private-home-tutor/Engineering', component: BangaloreComponent },

            //Routing By Syllabus Wise Pages
            { path: 'home-tutors-private-tutors/Syllabus-wise-best-private-home-tutor', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Syllabus-wise-best-private-home-tutor/CBSE', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Syllabus-wise-best-private-home-tutor/ICSE', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Syllabus-wise-best-private-home-tutor/State_Board', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Syllabus-wise-best-private-home-tutor/IB_IGCSE', component: BangaloreComponent },

            //Routing By Subject Wise Pages 
            { path: 'home-tutors-private-tutors/Subjects-wise-best-private-home-tutor', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Account', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Biology', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Business_Studies', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Chemistry', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/English', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Geography', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Hindi', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/History', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Mathematics', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Maths', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Physics', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Science', component: BangaloreComponent },
            { path: 'home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Social_Science', component: BangaloreComponent },

        ]
    }
];

export const routing = RouterModule.forChild(routes);