import { Component, OnInit } from '@angular/core';
import { CrudServiceScheduleEvent } from './schedule-event.service';
import { ModelSchedule } from '../model/schedule.model'
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-schedule-event',
  templateUrl: './schedule-event.page.html',
  styleUrls: ['./schedule-event.page.scss'],
})

export class ScheduleEventPage implements OnInit {

  public eventList: Observable<ModelSchedule[]>;
  // public eventList;
  public eventListRawData: ModelSchedule[];
  public eventService;

  //change the color on the basis of event passed
  getTimeHighlight(event_time){
    var current_Time = new Date();
      // Set Hours, minutes, seconds and miliseconds
    current_Time = this.get12Hr(current_Time.getHours() + ":" + current_Time.getMinutes());
    if (this.get24Hr(event_time) < this.get24Hr(current_Time) ){
      //in between these two times
      return 'tertiary';
    } else {
      return 'primary';
    }
  }

  get12Hr(time24){
    var tmpArr = time24.split(':'), time12;
    if(+tmpArr[0] == 12) {
      time12 = tmpArr[0] + ':' + tmpArr[1] + ' pm';
    } else {
      if(+tmpArr[0] == 0o0) {
        time12 = '12:' + tmpArr[1] + ' am';
      } else {
        if(+tmpArr[0] > 12) {
          time12 = (+tmpArr[0]-12) + ':' + tmpArr[1] + ' PM';
        } else {
          time12 = (+tmpArr[0]) + ':' + tmpArr[1] + ' AM';
        }
      }
    }
    return time12;
  }

  get24Hr(time){
    var hours = Number(time.match(/^(\d+)/)[1]);
    var AMPM = time.match(/\s(.*)$/)[1];
    if(AMPM == "PM" && hours<12) hours = hours+12;
    if(AMPM == "AM" && hours==12) hours = hours-12;

    var minutes = Number(time.match(/:(\d+)/)[1]);
    hours = hours*100+minutes;
    // console.log(time +" - "+hours);
    return hours;
  }
  
  constructor(
    private crudService: CrudServiceScheduleEvent,
    public afAuth: AngularFireAuth
    ) { 
    // console.log(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
  }

  async getEventList() {
    // Get data from the server
    this.eventService = this.crudService.read_ScheduleEvent();
    await this.eventService.subscribe(data => {
      this.eventList = (data.map(e => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          time_start: e.payload.doc.data()['time'],
          subitem: e.payload.doc.data()['subitem'],
        };
      }));
      // this.eventListRawData = this.eventList as unknown as ModelSchedule[];
      this.eventListRawData = this.eventList as unknown as ModelSchedule[];
    });
  }

  ngOnInit() {
    this.getEventList();
  }

}
