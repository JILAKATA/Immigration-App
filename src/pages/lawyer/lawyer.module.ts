import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LawyerPage } from './lawyer';

@NgModule({
  declarations: [
    LawyerPage,
  ],
  imports: [
    IonicPageModule.forChild(LawyerPage),
  ],
})
export class LawyerPageModule {}
