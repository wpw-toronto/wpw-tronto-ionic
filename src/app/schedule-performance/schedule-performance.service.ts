import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { ModelSchedule } from '../model/schedule.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceSchedulePerformance {
  eventCollection: AngularFirestoreCollection<ModelSchedule>;
  eventList: Observable<ModelSchedule[]>;

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_SchedulePerformance(record) {
    return this.firestore.collection('schedule-performance').add(record);
  }

  read_SchedulePerformance() {
    this.eventCollection = this.firestore.collection<ModelSchedule>('schedule-performance', ref => ref.orderBy('order'));
    // this.eventList = this.eventCollection.snapshotChanges();
    return this.eventCollection.snapshotChanges();
  }

  read_SchedulePerformanceByID(recordID) {
    return this.firestore.collection('schedule-performance').doc(recordID).get();
    // return this.firestore.doc('schedule-performance/' + recordID);
  }

  update_SchedulePerformance(recordID, record) {
    this.firestore.doc('schedule-performance/' + recordID).update(record);
  }

  delete_SchedulePerformance(record_id) {
    this.firestore.doc('schedule-performance/' + record_id).delete();
  }
}