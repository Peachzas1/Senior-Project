import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FitnessPlanPage } from './fitness-plan';

@NgModule({
  declarations: [
    FitnessPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(FitnessPlanPage),
  ],
})
export class FitnessPlanPageModule {}
