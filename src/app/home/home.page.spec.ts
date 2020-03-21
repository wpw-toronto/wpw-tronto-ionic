import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../environments/environment';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase), //ajout
        AngularFireAuthModule //ajout
      ]
    }).compileComponents();

    // fixture = TestBed.createComponent(HomePage);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  }));

  beforeEach(function () {
    fixture = TestBed.createComponent(HomePage);
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
