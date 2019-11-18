import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleauthenticatorComponent } from './googleauthenticator.component';

describe('GoogleauthenticatorComponent', () => {
  let component: GoogleauthenticatorComponent;
  let fixture: ComponentFixture<GoogleauthenticatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleauthenticatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleauthenticatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
