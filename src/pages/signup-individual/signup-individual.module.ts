import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupIndividualPage } from './signup-individual';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SignupIndividualPage,
  ],
  imports: [
      IonicPageModule.forChild(SignupIndividualPage),
      TranslateModule
  ],
  exports: [
    SignupIndividualPage
  ]
})
export class SignupIndividualPageModule {}
