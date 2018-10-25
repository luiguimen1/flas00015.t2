import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdlistaPage } from './prodlista';

@NgModule({
  declarations: [
    ProdlistaPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdlistaPage),
  ],
})
export class ProdlistaPageModule {}
