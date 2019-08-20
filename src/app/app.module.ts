import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {NavbarComponent} from './navbar/navbar.component';
import {WorkdaysListComponent} from './workdays-list/workdays-list.component';
import {WorkdayComponent} from './workdays-list/workday/workday.component';
import {WorkdayFormComponent} from './workdays-list/workday-form/workday-form.component';
import {registerLocaleData} from '@angular/common';
import localeNl from '@angular/common/locales/nl';

registerLocaleData(localeNl, 'nl');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkdaysListComponent,
    WorkdayComponent,
    WorkdayFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'jourly'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
