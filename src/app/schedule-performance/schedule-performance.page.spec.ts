import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulePerformancePage } from './schedule-performance.page';

import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';


describe('SchedulePerformancePage', () => {
  let component: SchedulePerformancePage;
  let fixture: ComponentFixture<SchedulePerformancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulePerformancePage ],
      providers: [
        AngularFireAuth,
        AngularFirestore,
      ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        AngularFireModule.initializeApp(environment.firebase), //ajout
        AngularFireAuthModule //ajout
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulePerformancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title as Schedule - Performance', async () => {
    if (fixture.componentInstance.afAuth.auth.currentUser) {
    } else {
      await fixture.componentInstance.afAuth.auth.signInWithEmailAndPassword('heons921@gmail.com', '123qweasd!');
    }
    const page = fixture.nativeElement;
    const title = page.querySelectorAll('ion-title');
    expect(title[0].textContent).toContain('Schedule - Performance');
  })
});
