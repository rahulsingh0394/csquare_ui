import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AdminAppService } from '../../admin-app.service';

@Component({
  selector: 'app-student-logged-in',
  templateUrl: './student-logged-in.component.html',
  styleUrls: ['./student-logged-in.component.scss']
})
export class StudentLoggedInComponent implements OnInit {

  sessionId: any;
  studentIdParam: any;
  name: any;
  profilePic: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AdminAppService
  ) {
    this.route.params.subscribe((params: Params) => {
      this.studentIdParam = params['pk'];
      this.sessionId = params['id'];

      this.service.getUserById(this.studentIdParam).subscribe(data => {
        console.log(data);
        this.name = data.firstName;
      });
    })
  }

  ngOnInit() {
  }

}
