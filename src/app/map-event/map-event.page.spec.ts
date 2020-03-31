import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapEventPage } from './map-event.page';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../environments/environment';

describe('MapEventPage', () => {
  let component: MapEventPage;
  let fixture: ComponentFixture<MapEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapEventPage],
      providers: [
        AngularFireAuth,
      ],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule
      ]
    }).compileComponents();
  }));

  beforeEach(function () {
    fixture = TestBed.createComponent(MapEventPage);
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

  it('should have a title as Map of the event', async () => {
    fixture.detectChanges();
    const page = fixture.nativeElement;
    const title = page.querySelectorAll('ion-title');
    expect(title[0].textContent).toContain('Map of the event');
  });

  it('should have map image data from server', async () => {
    // Login
    fixture.detectChanges();
    await fixture.componentInstance.afAuth.auth.signInWithEmailAndPassword('heons921@gmail.com', '123qweasd1!');

    // Get event list from the server.
    fixture.detectChanges();
    await component.getMapImage().then(() => {
      fixture.detectChanges();
      expect(component.getLoadedImgSrc()).toBeTruthy();      
    });
  });



});
