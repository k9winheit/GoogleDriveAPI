import { Injectable, NgZone, Output } from '@angular/core';


const CLIENT_ID = "902958378598-dfcefsm9rkt13jtj1nclf5iskppne1a6.apps.googleusercontent.com";
const API_KEY = "AIzaSyC7uDuqqSOKXCLr0p6VdN04gIf7p_Lz_Aw";
// const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
// var SCOPES = 'https://www.googleapis.com/auth/drive';

const DISCOVERY_DOCS = ["https://docs.googleapis.com/$discovery/rest?version=v1"];
var SCOPES = 'https://www.googleapis.com/auth/documents '+ 'https://www.googleapis.com/auth/drive ';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  public auth2: any;
  googleAuth: gapi.auth2.GoogleAuth;
  googleUser: gapi.auth2.GoogleUser;

  constructor(private zone: NgZone) { }


  // loadAuth2(): void {
  //   gapi.load('auth2', () => {
  //     gapi.auth2.init({
  //       client_id: 'yourClientId',
  //       fetch_basic_profile: true
  //     }).then((auth) => {
  //       this.zone.run(() => {
  //         this.auth2 = auth;
  //        // this.isLoaded$.next(true);
  //       });
  //     },
  //     );
  //   });
  // }
  isSignedIn() {
    return this.googleAuth.isSignedIn.get();
  }


  signIn() {
    return this.googleAuth.signIn({
      prompt: 'consent'
    }).then((googleUser: gapi.auth2.GoogleUser) => {
      console.log(googleUser);
      return googleUser.isSignedIn();
      this.authDoc();
    });
  }

  signOut() {
    this.googleAuth.signOut();
  }

  initClient() {
    return new Promise((resolve, reject) => {
      gapi.load('client', () => {
        return gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        }).then(() => {
          this.googleAuth = gapi.auth2.getAuthInstance();          
          resolve();
        });
      });
    });
  }

  authDoc() {
    gapi.auth.authorize({ client_id: CLIENT_ID, scope: SCOPES, immediate: true }, authResult => {
      if (authResult && !authResult.error) {
        console.log("This is true");
        /* handle succesfull authorization */
       
      } else {
        /* handle authorization error */
      }
    });

  }

createDoc(){

  return new Promise((resolve, reject) => {
    gapi.client.load('drive', 'v3', () => {

      var fileMetadata = {
        'name': 'sssssssssoooiiisssshkaAPP',
        'mimeType': 'application/vnd.google-apps.document',
      };
  
      gapi.client.drive.files.create({
        resource: fileMetadata
      }).then((success) => {
        console.log(success.result.id);
       return gapi.client.drive.files.get({
          fileId: success.result.id,
          fields: 'webViewLink'
        }).then((success_test => {
          //var webContentLink = success.result.webViewLink;         
          resolve(success_test);
        }))
      });
  
    });
  })

  
}


}
