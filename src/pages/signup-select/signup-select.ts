import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { SignupIndividualPage } from '../signup-individual/signup-individual';
// import { SignupNgoPage } from '../signup-ngo/signup-ngo';
// import { SignupCorperationPage } from '../signup-corperation/signup-corperation';

@IonicPage()
@Component({
  selector: 'page-signup-select',
  templateUrl: 'signup-select.html',
})
export class SignupSelectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupSelectPage');
  }

  signupForm(user) {
    console.log(user)
    if(user==='ngo')
      this.navCtrl.push('SignupNgoPage');
    else if(user==='corperation')
      this.navCtrl.push('SignupCorperationPage');
    else
      this.navCtrl.push('SignupIndividualPage');
  }
}
