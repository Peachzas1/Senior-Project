import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProteinPage } from './protein';

@NgModule({
  declarations: [
    ProteinPage,
  ],
  imports: [
    IonicPageModule.forChild(ProteinPage),
  ],
})
export class ProteinPageModule {}
