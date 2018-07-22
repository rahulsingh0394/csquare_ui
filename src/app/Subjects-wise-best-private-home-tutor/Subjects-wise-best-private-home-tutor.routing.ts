import { Routes, RouterModule } from '@angular/router';
import { SubjectsWiseComponent } from './Subjects-wise-best-private-home-tutor.component';

const routes: Routes = [
    {
        path: '',
        component: SubjectsWiseComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home' },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Account', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Biology', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Business_Studies', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Chemistry', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/English', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/French', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Geography', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/German', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Hindi', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/History', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Kannada', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Mathematics', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Maths', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Physics', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Sanskrit', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Science', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Social_Science', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Spoken_English', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Spoken_Hindi', component: SubjectsWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Subjects-wise-best-private-home-tutor/Spoken_Kannada', component: SubjectsWiseComponent },

            
        ]
    }
];

export const routing = RouterModule.forChild(routes);