import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileLainPage } from './profile-lain.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileLainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileLainPageRoutingModule {}
