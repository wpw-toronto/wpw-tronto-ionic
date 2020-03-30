import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ScheduleEventPage } from './schedule-event.page';

import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';

// import { CrudServiceScheduleEvent } from './schedule-event.service';
import { ModelSchedule } from '../model/schedule.model'

@Component({
  templateUrl: 'schedule-event.page.html'
})
export class ListPage { }


describe('ScheduleEventPage', () => {
  let component: ScheduleEventPage;
  let fixture: ComponentFixture<ScheduleEventPage>;
  var originalTimeout;

  beforeEach(async(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    TestBed.configureTestingModule({
      declarations: [ ScheduleEventPage ],
      providers: [
        AngularFireAuth,
        AngularFirestore,
        // CrudServiceScheduleEvent,
      ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        AngularFireModule.initializeApp(environment.firebase), //ajout
        AngularFireAuthModule //ajout
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(function () {
    fixture = TestBed.createComponent(ScheduleEventPage);
    component = fixture.componentInstance;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    fixture.destroy();
    component = null;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have a title as Schedule - Event', async() => {
    fixture.detectChanges();
    if (fixture.componentInstance.afAuth.auth.currentUser) {
    } else {
      await fixture.componentInstance.afAuth.auth.signInWithEmailAndPassword('heons921@gmail.com', '123qweasd1!');
    }
   
    const page = fixture.nativeElement;
    const title = page.querySelectorAll('ion-title');
    expect(title[0].textContent).toContain('Schedule - Event');
  })

  it('should have schedule data from server', async () => {
    
    // Login
    fixture.detectChanges();
    await fixture.componentInstance.afAuth.auth.signInWithEmailAndPassword('heons921@gmail.com', '123qweasd1!');

    // Get event list from the server.
    fixture.detectChanges();
    await component.getEventList().then(() => {
      // let dataArray: ModelSchedule[] = [];
      // dataArray = component.eventListRawData;
      // expect(dataArray.length).toBeGreaterThan(0);

      const page = fixture.nativeElement;
      const eventList = page.querySelectorAll('.schedule-event');
      expect(eventList.length).toBeGreaterThan(0);
    });

    // Test1
    // await component.getEventList();
    // fixture.detectChanges();
    // let dataArray = component.eventListRawData;
    // expect(dataArray.length).toBeGreaterThan(0);

    // Test2
    // component.ngOnInit();
    // fixture.detectChanges();
    // let dataArray = component.eventListRawData;
    // expect(dataArray.length).toBeGreaterThan(0);
    
  });


  // it('should have schedule data from server', 
  //   inject([CrudServiceScheduleEvent], 
  //   async (crudServiceScheduleEvent) => {

  //   let dataArray: ModelSchedule[] = [];

  //   // Login
  //   fixture.detectChanges();
  //   if (fixture.componentInstance.afAuth.auth.currentUser) {
  //   } else {
  //     await fixture.componentInstance.afAuth.auth.signInWithEmailAndPassword('heons921@gmail.com', '123qweasd!');
  //     fixture.detectChanges();
  //   }

  //   // Test3
  //   // await component.getEventList();    
  //   // component.ngOnInit();
  //   // fixture.detectChanges();
  //   // crudServiceScheduleEvent.readAndSaveScheduleEvent();

  //   // dataArray = (component.eventList as unknown) as ModelSchedule[];
  //   // dataArray = component.eventListRawData;
  //   // dataArray = crudServiceScheduleEvent.eventListRawData;
  //   // crudServiceScheduleEvent.read_ScheduleEvent().subscribe(event => {this.dataArray = event});

  //   // expect(dataArray.length).toEqual(0);
  //   // expect(dataArray.length).toBeGreaterThan(0);
  //   // expect(component.eventList).toEqual(crudServiceScheduleEvent.eventList);


  //   // Test4
  //   // let scheduleEventService = fixture.debugElement.injector.get(CrudServiceScheduleEvent);
  //   // let eventService = scheduleEventService.read_ScheduleEvent();

  //   // eventService.subscribe(data => {
  //   //   let eventList = (data.map(e => {
  //   //     return {
  //   //       id: e.payload.doc.id,
  //   //       title: e.payload.doc.data()['title'],
  //   //       time_start: e.payload.doc.data()['time'],
  //   //       subitem: e.payload.doc.data()['subitem'],
  //   //     };
  //   //   }));

  //   //   expect(eventList.length).toBeGreaterThan(0);
  //   // });
    
  // }));


});
