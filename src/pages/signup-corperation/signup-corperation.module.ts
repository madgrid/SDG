import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupCorperationPage } from './signup-corperation';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SignupCorperationPage,
  ],
  imports: [
      IonicPageModule.forChild(SignupCorperationPage),
      TranslateModule
  ],
  exports: [
    SignupCorperationPage
  ]
})
export class SignupCorperationPageModule {}
