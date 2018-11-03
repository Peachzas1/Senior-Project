import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutCategoryCardioPage } from './workout-category-cardio';

@NgModule({
  declarations: [
    WorkoutCategoryCardioPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutCategoryCardioPage),
  ],
})
export class WorkoutCategoryCardioPageModule {}
