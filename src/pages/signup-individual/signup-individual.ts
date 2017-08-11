import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { MainPage } from '../../pages/pages';
import { User } from '../../providers/user';
import { IndividualProvider } from '../../providers/individual';
import { WelcomePage } from '../welcome/welcome';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'page-signup-individual',
  templateUrl: 'signup-individual.html',
})
export class SignupIndividualPage {

  account: { name: string, email: string, gender: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    gender: 'male'
  };

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

  doSignup() {
    // Attempt to login in through our User service
    console.log(this.account);
    this.individual.sendSignUp(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
      console.log(resp);
      console.log(this.account);
    }, (err) => {
      console.log(err)
      console.log(this.account);
      //this.navCtrl.push(MainPage); // TODO: Remove this when you add your signup endpoint

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
