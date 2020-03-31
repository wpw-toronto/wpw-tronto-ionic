import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodtruckPage } from './foodtruck.page';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';

describe('FoodtruckPage', () => {
  let component: FoodtruckPage;
  let fixture: ComponentFixture<FoodtruckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodtruckPage ],
      providers: [
        AngularFireAuth,
        AngularFirestore,
      ],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule
      ]
    }).compileComponents();
  }));

  beforeEach(function () {
    fixture = TestBed.createComponent(FoodtruckPage);
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

  it('should have a title as Food Truck', async () => {
    fixture.detectChanges();
    const page = fixture.nativeElement;
    const title = page.querySelectorAll('ion-title');
    expect(title[0].textContent).toContain('Food Truck');
  })


  it('should have foodtruck images data from server', async () => {
    // // Login
    fixture.detectChanges();
    await fixture.componentInstance.afAuth.auth.signInWithEmailAndPassword('heons921@gmail.com', '123qweasd1!');

    // Get image list from the server.
    fixture.detectChanges();
    await component.getImages().then(() => {
      fixture.detectChanges();
      expect(component.getLoadedImgsSrc().length).toBeGreaterThan(0);
    });
  });


  it('should have foodtruck list data from server', async () => {
    // // Login
    fixture.detectChanges();
    await fixture.componentInstance.afAuth.auth.signInWithEmailAndPassword('heons921@gmail.com', '123qweasd1!');

    // Get foodtruck list from the server.
    fixture.detectChanges();
    await component.getFoodtruckList().then(() => {
      fixture.detectChanges();
      const page = fixture.nativeElement;
      const foodtruckList = page.querySelectorAll('.foodtruck-list');
      expect(foodtruckList.length).toBeGreaterThan(0);
    });
  });


});
