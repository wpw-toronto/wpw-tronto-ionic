import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { LoginpagePage } from './loginpage.page';

import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { environment } from '../../environments/environment';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};


describe('LoginpagePage', () => {
  let component: LoginpagePage;
  let fixture: ComponentFixture<LoginpagePage>;
  var originalTimeout;

  // jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  beforeEach(async(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    TestBed.configureTestingModule({
      declarations: [ LoginpagePage ],
      providers: [
        AngularFireAuth,
      ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        FirebaseUIModule.forRoot(firebaseUiAuthConfig)
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    // fixture = TestBed.createComponent(LoginpagePage);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  }));

  beforeEach(function () {
    fixture = TestBed.createComponent(LoginpagePage);
    component = fixture.componentInstance;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    fixture.destroy();
    component = null;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
