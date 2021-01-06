import { Component, OnInit } from '@angular/core';
import { ScheduleServices } from '../_services/schedule.services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-schedule-by-owner',
  templateUrl: 'schedule-list-by-owner.component.html',
})
export class ScheduleListByOwnerComponent implements OnInit {
  schedules = null;
  users: null;

  constructor(private scheduleService: ScheduleServices) {}

  ngOnInit() {
    const userId = localStorage.getItem('userid').slice(1, -1);
    this.scheduleService
      .getScheduleByOwnerId(userId)
      .pipe(first())
      .subscribe((schedule) => {
        console.log(schedule);
        this.schedules = schedule.message;
      });
  }
}
