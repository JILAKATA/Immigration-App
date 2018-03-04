import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LawyerLogPage } from './lawyer-log';

@NgModule({
  declarations: [
    LawyerLogPage,
  ],
  imports: [
    IonicPageModule.forChild(LawyerLogPage),
  ],
})
export class LawyerLogPageModule {}
