import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/user';
import { IndividualProvider } from '../../providers/individual';
import { WelcomePage } from '../welcome/welcome';
import { ConfirmationPage } from '../confirmation/confirmation';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'page-signup-individual',
  templateUrl: 'signup-individual.html',
})

export class SignupIndividualPage {

  account: { name: string, email: string, region: string, promo: string, cb_sdg: any, cb_subscribe: any, language: string } = {
    name: '',
    email: '',
    region: '',
    promo: '',
    cb_sdg: true,
    cb_subscribe: true,
    language: 'en'
  };

  // ADDD LANGUAGE
  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
              public individual: IndividualProvider,
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
    console.log(this.account);
      this.individual.sendSignUp(this.account).subscribe((resp) => {
        this.navCtrl.push(ConfirmationPage);
      }, (err) => {
        console.error(err)
        //this.navCtrl.push(ConfirmationPage);
        let toast = this.toastCtrl.create({
          message: this.signupErrorString,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
  }
}
