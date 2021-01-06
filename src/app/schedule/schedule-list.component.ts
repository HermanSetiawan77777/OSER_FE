import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ScheduleServices } from '../_services/schedule.services';

@Component({
  templateUrl: 'schedule-list.component.html',
})
export class ScheduleListComponent implements OnInit {
  schedules = null;
  users: null;

  constructor(private scheduleService: ScheduleServices) {}

  ngOnInit() {
    const userId = localStorage.getItem('userid').slice(1, -1);
    this.scheduleService
      .getScheduleByUserId(userId)
      .pipe(first())
      .subscribe((schedule) => {
        console.log(schedule);
        this.schedules = schedule.message;
      });
  }
}
