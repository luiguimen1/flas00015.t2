import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserregisterPage } from './userregister';

@NgModule({
  declarations: [
    UserregisterPage,
  ],
  imports: [
    IonicPageModule.forChild(UserregisterPage),
  ],
})
export class UserregisterPageModule {}
