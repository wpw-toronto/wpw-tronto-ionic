import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ScheduleEventPage } from './schedule-event.page';

import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';

@Component({
  templateUrl: 'schedule-event.page.html'
})
export class ListPage { }

describe('ScheduleEventPage', () => {
  let component: ScheduleEventPage;
  let fixture: ComponentFixture<ScheduleEventPage>;
  var originalTimeout;

  beforeEach(async(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    TestBed.configureTestingModule({
      declarations: [ ScheduleEventPage ],
      providers: [
        AngularFireAuth,
        AngularFirestore,
      ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        AngularFireModule.initializeApp(environment.firebase), //ajout
        AngularFireAuthModule //ajout
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    // fixture = TestBed.createComponent(ScheduleEventPage);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  }));

  beforeEach(function () {
    fixture = TestBed.createComponent(ScheduleEventPage);
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

  it('should have a title as Schedule - Event', async() => {
    fixture.detectChanges();
    if (fixture.componentInstance.afAuth.auth.currentUser) {
    } else {
      await fixture.componentInstance.afAuth.auth.signInWithEmailAndPassword('heons921@gmail.com', '123qweasd!');
    }
   
    const page = fixture.nativeElement;
    const title = page.querySelectorAll('ion-title');
    expect(title[0].textContent).toContain('Schedule - Event');
  })
});
