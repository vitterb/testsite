import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieTrstComponent } from './cookie-trst/cookie-trst.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    CookieTrstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGoogleAnalyticsModule.forRoot('4328127121')
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
