import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '../authenticator.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-googleauthenticator',
  templateUrl: './googleauthenticator.component.html',
  styleUrls: ['./googleauthenticator.component.css']
})
export class GoogleauthenticatorComponent implements OnInit {

  public authIsLoaded: boolean = false;
  public isLoggedIn: boolean = false;
  public isdocUrl: boolean = false;
  public docUrl : any;


  constructor(private _authService: AuthenticatorService,private sanitizer: DomSanitizer) { }

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

    this._authService.createDoc().then((response: any) => {
      this.docUrl = this.sanitizer.bypassSecurityTrustResourceUrl(response.result.webViewLink);
      console.log(response);
      this.isdocUrl = true;
      //console.log(response.result.webViewLink);
  }

  isUserSignedIn(): void {

    this.isLoggedIn = this._authService.isSignedIn();
    })

  }

}
