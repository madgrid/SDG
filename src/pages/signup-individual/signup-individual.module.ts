import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupIndividualPage } from './signup-individual';

@NgModule({
  declarations: [
    SignupIndividualPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupIndividualPage),
  ],
})
export class SignupIndividualPageModule {}
