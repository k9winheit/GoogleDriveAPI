import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '../authenticator.service';

@Component({
  selector: 'app-googleauthenticator',
  templateUrl: './googleauthenticator.component.html',
  styleUrls: ['./googleauthenticator.component.css']
})
export class GoogleauthenticatorComponent implements OnInit {

  public authIsLoaded: boolean = true;
  public isLoggedIn: boolean = false;


  constructor(private _authService: AuthenticatorService) { }

  ngOnInit() {
    this.initClient();
  }

  initClient(){
    this._authService.initClient().then((auth: any) => {
     
    });
  }

  signIn() {
   this._authService.signIn();
  }

}
