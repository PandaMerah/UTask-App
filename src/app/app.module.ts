import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsService } from './core/tabs.service';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
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
    useClass: IonicRouteStrategy},

],
  bootstrap: [AppComponent],
})
export class AppModule {}
