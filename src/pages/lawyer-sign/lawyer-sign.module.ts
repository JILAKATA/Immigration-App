import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LawyerSignPage } from './lawyer-sign';

@NgModule({
  declarations: [
    LawyerSignPage,
  ],
  imports: [
    IonicPageModule.forChild(LawyerSignPage),
  ],
})
export class LawyerSignPageModule {}
