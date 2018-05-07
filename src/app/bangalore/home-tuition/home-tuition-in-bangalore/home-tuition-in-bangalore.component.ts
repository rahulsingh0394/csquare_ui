import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BangaloreService } from '../../bangalore.service';
import { Router } from '@angular/router';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'home-tuition-in-bangalore',
  templateUrl: './home-tuition-in-bangalore.html',
  styleUrls: ['./home-tuition-in-bangalore.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class HomeTuitionInBangaloreComponent implements OnInit {
  location: any;
  t1: string;
   t1Exp: string;
   t1Desp: string;
   t1Url: string;
   t2: string;
   t2Url: string;
   t2Exp: string;
   t2Desp: string;
   t3: string;
   t3Url: string;
   t3Exp: string;
   t3Desp: string;
   t4: string;
   t4Url: string;
   t4Exp: string;
   t4Desp: string;
   t5: string;
   t5Url: string;
   t5Exp: string;
   t5Desp: string;
   t6: string;
   t6Url: string;
   t6Exp: string;
   t6Desp: string;
   t7: string;
   t7Url: string;
   t7Exp: string;
   t7Desp: string;
   t8: string;
   t8Url: string;
   t8Exp: string;
   t8Desp: string;
   t9: string;
   t9Url: string;
   t9Exp: string;
   t9Desp: string;
   t10: string;
   t10Url: string;
   t10Exp: string;
   t10Desp: string;
   area: string;
   grade: string;
   page: any;
   keyword: string;
   

  constructor(
    location: Location, private router: Router,meta: Meta, titlee: Title,
    private service: BangaloreService) {
      this.location = location.path();
      console.log(this.location);
      this.service.getJSON(this.location).subscribe(result => {
        titlee.setTitle(result.title);

        meta.addTags([
          { name: 'author',   content: 'csquareeducation.com'},
          { name: 'description', content: result.description}
        ]);
        this.area = result.area;
        this.keyword = result.keyword;
        this.t1 = result.t1;
        this.t1Exp = result.t1Exp;
        this.t1Url = result.t1Url;
        this.t1Desp = result.t1Desp;
        this.t2 = result.t2;
        this.t2Exp = result.t2Exp;
        this.t2Url = result.t2Url;
        this.t2Desp = result.t2Desp;
        this.t3 = result.t3;
        this.t3Exp = result.t3Exp;
        this.t3Url = result.t3Url;
        this.t3Desp = result.t3Desp;
        this.t4 = result.t4;
        this.t4Exp = result.t4Exp;
        this.t4Url = result.t4Url;
        this.t4Desp = result.t4Desp;
        this.t5 = result.t5;
        this.t5Exp = result.t5Exp;
        this.t5Url = result.t5Url;
        this.t5Desp = result.t5Desp;
        this.t6 = result.t6;
        this.t6Exp = result.t6Exp;
        this.t6Url = result.t6Url;
        this.t6Desp = result.t6Desp;
  
      })
     }

  ngOnInit() {
    
  }

  buttonClick(data: any){
    this.router.navigateByUrl(data);
  }

}
