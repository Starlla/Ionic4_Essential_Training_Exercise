import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient} from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Camera} from '@ionic-native/camera/ngx';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule, AngularFireModule.initializeApp(environment.firebase),
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    Camera,
    SocialSharing,
    StatusBar,
    SplashScreen,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
