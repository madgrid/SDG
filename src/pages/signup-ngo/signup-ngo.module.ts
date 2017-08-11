import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupNgoPage } from './signup-ngo';

@NgModule({
  declarations: [
    SignupNgoPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupNgoPage),
  ],
})
export class SignupNgoPageModule {}
