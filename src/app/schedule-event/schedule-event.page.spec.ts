import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Component } from '@angular/core';

import { ScheduleEventPage } from './schedule-event.page';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

@Component({
  templateUrl: 'schedule-event.page.html'
})
export class ListPage { }

describe('ScheduleEventPage', () => {
  let component: ScheduleEventPage;
  let fixture: ComponentFixture<ScheduleEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleEventPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title as Schedule - Event', () => {
    const page = fixture.nativeElement;
    const title = page.querySelectorAll('ion-title');
    expect(title[0].textContent).toContain('Schedule - Event');
  })

  it('should get schedule from server', async () => {
    const fixture = await TestBed.createComponent(ScheduleEventPage);
    await fixture.detectChanges();
    expect(fixture.componentInstance.list_event).toBeDefined();
  })
});
