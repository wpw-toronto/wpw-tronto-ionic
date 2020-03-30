import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapRoutePage } from './map-route.page';

describe('MapRoutePage', () => {
  let component: MapRoutePage;
  let fixture: ComponentFixture<MapRoutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapRoutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(function () {
    fixture = TestBed.createComponent(MapRoutePage);
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

  it('should have a title as Map of the Route', async () => {
    fixture.detectChanges();
    const page = fixture.nativeElement;
    const title = page.querySelectorAll('ion-title');
    expect(title[0].textContent).toContain('Map of the Route');
  })
});
