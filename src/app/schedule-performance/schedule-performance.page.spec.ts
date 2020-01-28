import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulePerformancePage } from './schedule-performance.page';

describe('SchedulePerformancePage', () => {
  let component: SchedulePerformancePage;
  let fixture: ComponentFixture<SchedulePerformancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulePerformancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulePerformancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
