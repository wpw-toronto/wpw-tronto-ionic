import { Component, OnInit } from '@angular/core';
import { CrudServiceScheduleEvent } from './schedule-event.service';
import { ModelSchedule } from '../model/schedule.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-schedule-event',
  templateUrl: './schedule-event.page.html',
  styleUrls: ['./schedule-event.page.scss'],
})




export class ScheduleEventPage implements OnInit {

  public eventList: Observable<ModelSchedule[]>;
  public eventService;

  //change the color on the basis of event passed
  getTimeHighlight(event_time){
    // var cars = ['08:00 AM', '10:00 AM', '12:15 PM', '02:00 PM', '03:45 PM', '04:00 PM'];

    var reduced_time = 0;
    var increased_time = 0;
    var startTime,endTime;

    // var input   = curr_time,
    // matches = input.toLowerCase().match(/(\d{1,2}):(\d{2}) ([ap]m)/),
    // time_output  = (parseInt(matches[1]) + (matches[3] == 'pm' ? 12 : 0)) + ':' + matches[2] ;

    // if (reduced_time == 0) {

    //   var theReducedTime = new Date();
    //   // Set Hours, minutes, seconds and miliseconds
    //   theReducedTime.setHours(theReducedTime.getHours(), theReducedTime.getMinutes());
    //   //add 30 minutes --> 10:30
    //   theReducedTime.setMinutes(theReducedTime.getMinutes() - 30);
    //   startTime = this.get12Hr(theReducedTime.getHours() + ":" + theReducedTime.getMinutes());
    // }
    // if (increased_time == 0) {
    //   var theAddTime = new Date();
    //   theAddTime.setHours(theReducedTime.getHours(), theReducedTime.getMinutes());
    //   // add 1 hour --> 11:00
    //   theAddTime.setMinutes(theAddTime.getMinutes() + 30);
    //   endTime = this.get12Hr(theAddTime.getHours() + ":" + theAddTime.getMinutes());
    // }
    var current_Time = new Date();
      // Set Hours, minutes, seconds and miliseconds
    current_Time = this.get12Hr(current_Time.getHours() + ":" + current_Time.getMinutes());
    //alert(current_Time);
    // 09:40AM 
    // 08:00 AM Event time
    // && 
    //     this.get24Hr(event_time) < this.get24Hr(endTime)) 
    if (this.get24Hr(event_time) < this.get24Hr(current_Time) ){
      //in between these two times
      //alert("Yes")
      return 'tertiary';
    } else {
      //alert('No');
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
    console.log(time +" - "+hours);
    return hours;
  }
  
  constructor(private crudService: CrudServiceScheduleEvent) { 
    console.log(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
  }

  ngOnInit() {
    this.eventService = this.crudService.read_ScheduleEvent();
    this.eventService.subscribe(data => {
      this.eventList = (data.map(e => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          time_start: e.payload.doc.data()['time'],
          subitem: e.payload.doc.data()['subitem'],
        };
      }));
      
      // console.log(this.eventList);
      // console.log(data);
    });

  }

}
