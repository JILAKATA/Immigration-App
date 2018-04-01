import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserClientPage } from './user-client';

@NgModule({
  declarations: [
    UserClientPage,
  ],
  imports: [
    IonicPageModule.forChild(UserClientPage),
  ],
})
export class UserClientPageModule {}
