import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupNgoPage } from './signup-ngo';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SignupNgoPage,
  ],
  imports: [
      IonicPageModule.forChild(SignupNgoPage),
      TranslateModule
  ],
  exports: [
    SignupNgoPage
  ]
})
export class SignupNgoPageModule {}
