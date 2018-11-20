import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FatsPage } from './fats';

@NgModule({
  declarations: [
    FatsPage,
  ],
  imports: [
    IonicPageModule.forChild(FatsPage),
  ],
})
export class FatsPageModule {}
