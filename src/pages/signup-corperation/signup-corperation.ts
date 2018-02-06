import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { CorperationProvider } from '../../providers/corperation/corperation';
// import { ConfirmationPage } from '../confirmation/confirmation';

import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-signup-corperation',
  templateUrl: 'signup-corperation.html',
})
export class SignupCorperationPage {

  account: { name: string, email: string, website: string, region: string, promo: string, cb_sdg: any, cb_subscribe: any, language: string } = {
    name: '',
    email: '',
    website: '',
    region: '',
    promo: '',
    cb_sdg: true,
    cb_subscribe: true,
    language: 'en'
  };


  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public corperation: CorperationProvider,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }


  convertCheckbox(sdg, subscribe) {
    if (sdg == true)
      this.account.cb_sdg = 1;
    else if (sdg == false)
      this.account.cb_sdg = 0;

    if(subscribe == true)
      this.account.cb_subscribe = 1;
    else if (subscribe == false)
      this.account.cb_subscribe = 0;
  }

  doSignup() {
    // TODO: wrap in promise
    this.convertCheckbox(this.account.cb_sdg, this.account.cb_subscribe);

    // TODO: put in seperate function
    this.corperation.sendSignUp(this.account).subscribe((resp) => {
      this.navCtrl.push('ConfirmationPage');
    }, (err) => {
      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
