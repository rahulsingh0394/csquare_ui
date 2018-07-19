import { Routes, RouterModule } from '@angular/router';
import { ClassWiseComponent } from './Class-wise-best-private-home-tutor.component';

const routes: Routes = [
    {
        path: '',
        component: ClassWiseComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home' },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Kindergarten', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class1', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class2', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class3', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class4', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class5', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class6', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class7', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class8', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class9', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class10', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_11_Arts', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_11_Commerce', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_11_Science', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_12_Arts', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_12_Commerce', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_12_Science', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Intermediate', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/LKG', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Nursery', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/PUC1', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/PUC2', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/UKG', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_Metric', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class_SSLC', component: ClassWiseComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Engineering', component: ClassWiseComponent },
        ]
    }
];

export const routing = RouterModule.forChild(routes);