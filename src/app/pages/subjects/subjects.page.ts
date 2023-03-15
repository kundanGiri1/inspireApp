import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {

 subj=['DBMS','AI','Computer Networks','TOC','Cloud Computing','DSA','DLD','DBMS','AI','Computer Networks','TOC','DBMS','AI','Computer Networks','TOC','Cloud Computing','DSA','DLD','DBMS','AI','Computer Networks','TOC','Cloud Computing','DSA','DLD','Cloud Computing','DSA','DLD']
  userdetail: any
  
  constructor(
  private router: Router,
  ) { 
      console.log(this.router.getCurrentNavigation()?.extras.state)
  }
 

  ngOnInit() {
  }
  selectSub(sub:any)
  {
    console.log(sub)
    console.warn(this.userdetail)
    this.router.navigate(['/pyq']);
  }

}
