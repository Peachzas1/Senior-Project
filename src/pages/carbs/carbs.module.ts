import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarbsPage } from './carbs';

@NgModule({
  declarations: [
    CarbsPage,
  ],
  imports: [
    IonicPageModule.forChild(CarbsPage),
  ],
})
export class CarbsPageModule {}
