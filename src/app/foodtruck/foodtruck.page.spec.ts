import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodtruckPage } from './foodtruck.page';

describe('FoodtruckPage', () => {
  let component: FoodtruckPage;
  let fixture: ComponentFixture<FoodtruckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodtruckPage ],
      imports: [IonicModule.forRoot()]
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
});
