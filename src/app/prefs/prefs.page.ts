import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prefs',
  templateUrl: './prefs.page.html',
  styleUrls: ['./prefs.page.scss'],
})
export class PrefsPage implements OnInit {
  nama_user=""
  oldPassword=""
  newPassword=""
  retypeNewPassword=""
  btnCPass=""
  alertButtons=['OK']
  constructor() { }

  ngOnInit() {

    
  }

}
