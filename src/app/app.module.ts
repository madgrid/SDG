import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { SignupSelectPage } from '../pages/signup-select/signup-select';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignupIndividualPage } from '../pages/signup-individual/signup-individual';
import { SignupNgoPage } from '../pages/signup-ngo/signup-ngo';
import { SignupCorperationPage } from '../pages/signup-corperation/signup-corperation';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { ContentPage } from '../pages/content/content';
import { MenuPage } from '../pages/menu/menu';

import { Api } from '../providers/api';
import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/settings';
import { User } from '../providers/user';
import { IndividualProvider } from '../providers/individual';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgoProvider } from '../providers/ngo/ngo';
import { CorperationProvider } from '../providers/corperation/corperation';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    SignupSelectPage,
    SignupNgoPage,
    SignupIndividualPage,
    SignupCorperationPage,
    TutorialPage,
    WelcomePage,
    ConfirmationPage,
    ContentPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignupSelectPage,
    SignupNgoPage,
    SignupIndividualPage,
    SignupCorperationPage,
    TutorialPage,
    WelcomePage,
    ConfirmationPage,
    ContentPage,
    MenuPage
  ],
  providers: [
    IndividualProvider,
    Api,
    Items,
    User,
    Camera,
    GoogleMaps,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NgoProvider,
    CorperationProvider,
  ]
})
export class AppModule { }
