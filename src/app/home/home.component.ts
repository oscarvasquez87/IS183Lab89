import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('id_token');
    console.log('from login ogOnInit token: ', token);
    if (token == null) {
      this.loggedIn = true;
      this.router.navigate(['login']);
    } else {
      this.loggedIn = true;
    }
  }

}
