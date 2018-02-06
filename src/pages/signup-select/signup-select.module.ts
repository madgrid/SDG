import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupSelectPage } from './signup-select';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SignupSelectPage,
  ],
  imports: [
      IonicPageModule.forChild(SignupSelectPage),
      TranslateModule
  ],
  exports: [
    SignupSelectPage
  ]
})
export class SignupSelectPageModule {}
