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

    fixture = TestBed.createComponent(MapRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
