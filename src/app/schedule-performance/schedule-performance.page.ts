import { Component, OnInit } from '@angular/core';
import { CrudServiceSchedulePerformance } from './schedule-performance.service';
import { ModelSchedule } from '../model/schedule.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-schedule-performance',
  templateUrl: './schedule-performance.page.html',
  styleUrls: ['./schedule-performance.page.scss'],
})

export class SchedulePerformancePage implements OnInit {

  public performanceList: Observable<ModelSchedule[]>;
  public performanceService;

  //change the color on the basis of event passed
  getTimeHighlight(start_time, end_time){
    
    var current_time = new Date();
    current_time = this.get12Hr(current_time.getHours() + ":" + current_time.getMinutes());
    
    if (this.get24Hr(current_time) > this.get24Hr(start_time) &&
        this.get24Hr(current_time) < this.get24Hr(end_time)){
      return 'tertiary';
    } else {
      return 'primary';
    }
  }

  get12Hr(time24) {
    var tmpArr = time24.split(':'), time12;
    if (+tmpArr[0] == 12) {
      time12 = tmpArr[0] + ':' + tmpArr[1] + ' pm';
    } else {
      if (+tmpArr[0] == 0o0) {
        time12 = '12:' + tmpArr[1] + ' am';
      } else {
        if (+tmpArr[0] > 12) {
          time12 = (+tmpArr[0] - 12) + ':' + tmpArr[1] + ' PM';
        } else {
          time12 = (+tmpArr[0]) + ':' + tmpArr[1] + ' AM';
        }
      }
    }
    return time12;
  }

  get24Hr(time) {
    var hours = Number(time.match(/^(\d+)/)[1]);
    var AMPM = time.match(/\s(.*)$/)[1];
    if (AMPM == "PM" && hours < 12) hours = hours + 12;
    if (AMPM == "AM" && hours == 12) hours = hours - 12;

    var minutes = Number(time.match(/:(\d+)/)[1]);
    hours = hours * 100 + minutes;
    console.log(time + " - " + hours);
    return hours;
  }

  constructor(private crudService: CrudServiceSchedulePerformance) { }

  ngOnInit() {
    this.performanceService = this.crudService.read_SchedulePerformance();
    this.performanceService.subscribe(data => {
      this.performanceList = (data.map(e => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          time_start: e.payload.doc.data()['time_start'],
          time_end: e.payload.doc.data()['time_end'],
          subitem: e.payload.doc.data()['subitem'],
        };
      }));
    });
  }

}
