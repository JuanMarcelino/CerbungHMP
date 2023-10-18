import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  user_name=""
  inPassword=""
  alertButtons=['OK']
  constructor() { }

  ngOnInit() {
  }

}
