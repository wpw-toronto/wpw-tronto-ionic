import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schedule-event',
  templateUrl: './schedule-event.page.html',
  styleUrls: ['./schedule-event.page.scss'],
})


export class ScheduleEventPage implements OnInit {

  schedules: Observable<any>;
  list_event;

  constructor(
    public http: HttpClient
  )
  { 
    this.schedules = this.http.get('https://nothing');
    this.schedules.subscribe(data => {
      console.log('my data: ', data);
      this.list_event = data;
    })
    // this.list_event = "";
  }

  ngOnInit() {
  }

}
