import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '../authenticator.service';

@Component({
  selector: 'app-googleauthenticator',
  templateUrl: './googleauthenticator.component.html',
  styleUrls: ['./googleauthenticator.component.css']
})
export class GoogleauthenticatorComponent implements OnInit {

  public authIsLoaded: boolean = false;
  public isLoggedIn: boolean = false;


  constructor(private _authService: AuthenticatorService) { }

  ngOnInit() {
    this.initClient();
  }

  initClient() {
    this._authService.initClient().then((auth: any) => {
      this.authIsLoaded = true;
      this.isUserSignedIn()
    });
  }

  async signIn() {
    await this._authService.signIn();
    this.isUserSignedIn();
  }

  async signOut() {
    await this._authService.signOut();
    this.isUserSignedIn();
  }

  createDoc() {
    this._authService.createDoc();
  }

  isUserSignedIn(): void {

    this.isLoggedIn = this._authService.isSignedIn();
  }

}
