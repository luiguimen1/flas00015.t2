import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CateverPage } from './catever';

@NgModule({
  declarations: [
    CateverPage,
  ],
  imports: [
    IonicPageModule.forChild(CateverPage),
  ],
})
export class CateverPageModule {}
