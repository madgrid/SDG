import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmationPage } from './confirmation';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ConfirmationPage,
  ],
  imports: [
      IonicPageModule.forChild(ConfirmationPage),
      TranslateModule
  ],
  exports: [
    ConfirmationPage
  ]
})
export class ConfirmationPageModule {}
