import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserlistaPage } from './userlista';

@NgModule({
  declarations: [
    UserlistaPage,
  ],
  imports: [
    IonicPageModule.forChild(UserlistaPage),
  ],
})
export class UserlistaPageModule {}
