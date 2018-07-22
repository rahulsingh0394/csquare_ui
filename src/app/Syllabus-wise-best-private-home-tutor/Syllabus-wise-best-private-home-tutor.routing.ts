import { Routes, RouterModule } from '@angular/router';
import { SyllabusWiseComponent } from './Syllabus-wise-best-private-home-tutor.component';

const routes: Routes = [
    {
        path: '',
        component: SyllabusWiseComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home' },
            { path: 'bangalore/home-tutors-private-tutors/Syllabus-wise-best-private-home-tutor', component: SyllabusWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Syllabus-wise-best-private-home-tutor/CBSE', component: SyllabusWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Syllabus-wise-best-private-home-tutor/IB_IGCSE', component: SyllabusWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Syllabus-wise-best-private-home-tutor/ICSE', component: SyllabusWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Syllabus-wise-best-private-home-tutor/State_Board', component: SyllabusWiseComponent },
            
        ]
    }
];

export const routing = RouterModule.forChild(routes);