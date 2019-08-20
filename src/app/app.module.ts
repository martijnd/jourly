import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {NavbarComponent} from './navbar/navbar.component';
import { WorkdaysListComponent } from './workdays-list/workdays-list.component';
import { WorkdayComponent } from './workdays-list/workday/workday.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkdaysListComponent,
    WorkdayComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'jourly'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
