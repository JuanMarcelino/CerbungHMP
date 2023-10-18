import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileLainPageRoutingModule } from './profile-lain-routing.module';

import { ProfileLainPage } from './profile-lain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileLainPageRoutingModule
  ],
  declarations: [ProfileLainPage]
})
export class ProfileLainPageModule {}
