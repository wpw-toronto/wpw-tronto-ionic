import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignoutPage } from './signout.page';

import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../environments/environment';

describe('SignoutPage', () => {
  let component: SignoutPage;
  let fixture: ComponentFixture<SignoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignoutPage ],
      providers: [
        AngularFireAuth,
      ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        AngularFireModule.initializeApp(environment.firebase), //ajout
        AngularFireAuthModule //ajout
      ]
    }).compileComponents();

    // fixture = TestBed.createComponent(SignoutPage);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  }));

  beforeEach(function () {
    fixture = TestBed.createComponent(SignoutPage);
    component = fixture.componentInstance;
  });

  afterEach(function () {
    fixture.destroy();
    component = null;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
