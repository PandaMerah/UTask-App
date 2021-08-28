import { IonicNativePlugin } from '@ionic-native/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';
import { TabsService } from './core/tabs.service';
// navigation module goes here
import { HomePageModule } from './pages/home/home.module';
import { SettingsPageModule } from './pages/settings/settings.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,IonicStorageModule.forRoot(),
    HomePageModule,
    SettingsPageModule
  ],
  providers: [
    TabsService,
    {provide:
    RouteReuseStrategy,
    useClass: IonicRouteStrategy,
  },
  LottieSplashScreen,
  IonicNativePlugin
],
  bootstrap: [AppComponent],
})
export class AppModule {}
