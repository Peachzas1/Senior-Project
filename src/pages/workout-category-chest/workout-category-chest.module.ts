import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutCategoryChestPage } from './workout-category-chest';

@NgModule({
  declarations: [
    WorkoutCategoryChestPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutCategoryChestPage),
  ],
})
export class WorkoutCategoryChestPageModule {}
