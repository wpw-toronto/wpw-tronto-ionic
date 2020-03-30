import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapEventPage } from './map-event.page';

describe('MapEventPage', () => {
  let component: MapEventPage;
  let fixture: ComponentFixture<MapEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapEventPage ],
      imports: [IonicModule.forRoot()]
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
  })
});
