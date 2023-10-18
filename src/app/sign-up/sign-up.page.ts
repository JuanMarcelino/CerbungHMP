import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  urlPhoto = ""
  user_name=""
  inPassword = ""
  inKonfirmPassword="" 
  cbSix = false
  cbSpecial = false
  cbNumber = false
  alertButtons=['OK']
  constructor() { }

  ngOnInit() {
  }
  checkPassword(){
    if(this.inPassword.length >= 6) this.cbSix = true
    else this.cbSix = false
    if(this.inPassword.match(/[0-9]/)) this.cbNumber = true
    else this.cbNumber = false
    if(this.inPassword.match(/[!\@\#\$\%\^\&\*]/)) this.cbSpecial = true
    else this.cbSpecial = false
  }
}
