import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminAppComponent } from './admin-app.component';
import { LeadComponent } from './lead/lead.component';
import { EditLeadComponent } from './lead/editLead/editLead.component';
import { StudentManagementComponent } from './studentManagement/studentManagement.component';
import { EditStudentManagementComponent } from './studentManagement/editStudentManagement/editStudentManagement.component';
import { TutorManagementComponent } from './tutorManagement/tutorManagement.component';
import { EditTutorManagementComponent } from './tutorManagement/editTutorManagement/editTutorManagement.component';
import { TutorSearchComponent } from './tutorSearch/tutorSearch.component';
import { UserComponent } from './userManagement/userManagement.component';
import { EditUserComponent } from './userManagement/editUserManagement/editUserManagement.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { StudentLoggedInComponent } from './parent/student-logged-in/student-logged-in.component';
import { TutorLoggedInComponent } from './tutor/tutor-logged-in/tutor-logged-in.component';


const routes: Routes = [
    {
        path: '',
        component: AdminAppComponent,
        children: [
            { path: 'lead/:id', component: LeadComponent },
            { path: 'editLead/:id/:pk', component: EditLeadComponent },
            { path: 'createLead/:id', component: EditLeadComponent },
            { path: 'studentManagement/:id', component: StudentManagementComponent },
            { path: 'editStudentManagement/:id/:pk', component: EditStudentManagementComponent },
            { path: 'createStudentManagement/:id', component: EditStudentManagementComponent },
            { path: 'tutorManagement/:id', component: TutorManagementComponent },
            { path: 'editTutorManagement/:id/:pk', component: EditTutorManagementComponent },
            { path: 'createTutorManagement/:id', component: EditTutorManagementComponent },
            { path: 'tutorSearch/:id', component: TutorSearchComponent },
            { path: 'studentTutorAssign/:id/:pk', component: TutorSearchComponent },
            { path: 'userManagement/:id', component: UserComponent },
            { path: 'editUserManagement/:id/:pk', component: EditUserComponent },
            { path: 'createUserManagement/:id', component: EditUserComponent },
            { path: 'userContact/:id', component: ContactFormComponent },
            { path: 'parent/student-logged-in/:id/:pk', component: StudentLoggedInComponent },
            { path: 'tutor/tutor-logged-in/:id/:pk', component: TutorLoggedInComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home' }
        ]
    }
];

export const AdminAppRoutingModule = RouterModule.forChild(routes);