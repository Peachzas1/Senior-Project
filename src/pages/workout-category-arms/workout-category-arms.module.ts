import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutCategoryArmsPage } from './workout-category-arms';

@NgModule({
  declarations: [
    WorkoutCategoryArmsPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutCategoryArmsPage),
  ],
})
export class WorkoutCategoryArmsPageModule {}
