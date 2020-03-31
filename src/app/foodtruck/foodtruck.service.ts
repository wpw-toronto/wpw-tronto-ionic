import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { ModelFoodtruck } from '../model/foodtruck.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// FireStore Service class for Foodtruck
export class CrudServiceFoodtruck {
  dataCollection: AngularFirestoreCollection<ModelFoodtruck>;
  dataService;
  dataList;
  dataListRawData: ModelFoodtruck[]; 

  constructor(
    private firestore: AngularFirestore
  ) { }

  // Create
  create_Foodtruck(record) {
    return this.firestore.collection('foodtruck').add(record);
  }

  // Read all
  read_Foodtruck() {
    this.dataCollection = this.firestore.collection<ModelFoodtruck>('foodtruck', ref => ref.orderBy('order'));
    return this.dataCollection.snapshotChanges();
  }

  async readAndSaveFoodtruck() {
    // Get data from the server
    this.dataService = this.read_Foodtruck();
    await this.dataService.subscribe(data => {
      this.dataList = (data.map(e => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          sub_title: e.payload.doc.data()['sub_title'],
          description: e.payload.doc.data()['description'],
          image_url: e.payload.doc.data()['image_url'],
        };
      }));

      this.dataListRawData = this.dataList as ModelFoodtruck[];
    });
  }

  // Read by Id
  read_FoodtruckByID(recordID) {
    return this.firestore.collection('foodtruck').doc(recordID).get();
    // return this.firestore.doc('foodtruck/' + recordID);
  }

  // Update by Id
  update_Foodtruck(recordID, record) {
    this.firestore.doc('foodtruck/' + recordID).update(record);
  }

  // Delete by Id
  delete_Foodtruck(record_id) {
    this.firestore.doc('foodtruck/' + record_id).delete();
  }
}