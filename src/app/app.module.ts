import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GoogleauthenticatorComponent } from './googledoc/googleauthenticator/googleauthenticator.component';



@NgModule({
  declarations: [
    AppComponent,
    GoogleauthenticatorComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
