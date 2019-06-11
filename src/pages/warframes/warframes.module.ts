import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WarframesPage } from './warframes';

@NgModule({
  declarations: [
    WarframesPage,
  ],
  imports: [
    IonicPageModule.forChild(WarframesPage),
  ],
})
export class WarframesPageModule {}
