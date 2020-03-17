import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { ModelSchedule } from '../model/schedule.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// FireStore Service class for ScheduleEvent
export class CrudServiceScheduleEvent {
  eventCollection: AngularFirestoreCollection<ModelSchedule>;

  constructor(
    private firestore: AngularFirestore
  ) { }

  // Create
  create_ScheduleEvent(record) {
    return this.firestore.collection('schedule-event').add(record);
  }

  // Read all
  read_ScheduleEvent() {
    this.eventCollection = this.firestore.collection<ModelSchedule>('schedule-event', ref => ref.orderBy('order'));
    return this.eventCollection.snapshotChanges();
  }

  // Read by Id
  read_ScheduleEventByID(recordID) {
    return this.firestore.collection('schedule-event').doc(recordID).get();
    // return this.firestore.doc('schedule-event/' + recordID);
  }

  // Update by Id
  update_ScheduleEvent(recordID, record) {
    this.firestore.doc('schedule-event/' + recordID).update(record);
  }

  // Delete by Id
  delete_ScheduleEvent(record_id) {
    this.firestore.doc('schedule-event/' + record_id).delete();
  }
}