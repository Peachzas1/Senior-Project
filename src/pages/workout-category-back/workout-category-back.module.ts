import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutCategoryBackPage } from './workout-category-back';

@NgModule({
  declarations: [
    WorkoutCategoryBackPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutCategoryBackPage),
  ],
})
export class WorkoutCategoryBackPageModule {}
