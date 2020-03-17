import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { ModelSchedule } from '../model/schedule.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// FireStore Service class for SchedulePerformance
export class CrudServiceSchedulePerformance {
  eventCollection: AngularFirestoreCollection<ModelSchedule>;

  constructor(
    private firestore: AngularFirestore
  ) { }

  // Create
  create_SchedulePerformance(record) {
    return this.firestore.collection('schedule-performance').add(record);
  }

  // Read All
  read_SchedulePerformance() {
    this.eventCollection = this.firestore.collection<ModelSchedule>('schedule-performance', ref => ref.orderBy('order'));
    return this.eventCollection.snapshotChanges();
  }

  // Read by Id
  read_SchedulePerformanceByID(recordID) {
    return this.firestore.collection('schedule-performance').doc(recordID).get();
    // return this.firestore.doc('schedule-performance/' + recordID);
  }

  // Update by Id
  update_SchedulePerformance(recordID, record) {
    this.firestore.doc('schedule-performance/' + recordID).update(record);
  }

  // Delete by Id
  delete_SchedulePerformance(record_id) {
    this.firestore.doc('schedule-performance/' + record_id).delete();
  }
}