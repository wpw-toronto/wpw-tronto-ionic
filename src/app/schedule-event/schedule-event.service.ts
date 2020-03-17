import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { ScheduleEvent } from '../model/schedule.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceScheduleEvent {
  eventCollection: AngularFirestoreCollection<ScheduleEvent>;
  eventList: Observable<ScheduleEvent[]>;

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_ScheduleEvent(record) {
    return this.firestore.collection('schedule-event').add(record);
  }

  read_ScheduleEvent() {
    this.eventCollection = this.firestore.collection<ScheduleEvent>('schedule-event', ref => ref.orderBy('order'));
    // this.eventList = this.eventCollection.snapshotChanges();
    return this.eventCollection.snapshotChanges();
  }

  read_ScheduleEventByID(recordID) {
    return this.firestore.collection('schedule-event').doc(recordID).get();
    // return this.firestore.doc('schedule-event/' + recordID);
  }

  update_ScheduleEvent(recordID, record) {
    this.firestore.doc('schedule-event/' + recordID).update(record);
  }

  delete_ScheduleEvent(record_id) {
    this.firestore.doc('schedule-event/' + record_id).delete();
  }
}