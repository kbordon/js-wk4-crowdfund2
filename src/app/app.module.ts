import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { routing } from './app.routing';
import { ViewAllComponent } from './view-all/view-all.component';
import { VentureDetailComponent } from './venture-detail/venture-detail.component';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FilterTypePipe } from './filter-type.pipe';
import { FilterProgressPipe } from './filter-progress.pipe';
import { PledgeComponent } from './pledge/pledge.component';
import { AddVentureComponent } from './add-venture/add-venture.component';
import { AdminComponent } from './admin/admin.component';
import { EditVentureComponent } from './edit-venture/edit-venture.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ViewAllComponent,
    VentureDetailComponent,
    FilterTypePipe,
    FilterProgressPipe,
    PledgeComponent,
    AddVentureComponent,
    AdminComponent,
    EditVentureComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
