import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatelistaPage } from './catelista';

@NgModule({
  declarations: [
    CatelistaPage,
  ],
  imports: [
    IonicPageModule.forChild(CatelistaPage),
  ],
})
export class CatelistaPageModule {}
