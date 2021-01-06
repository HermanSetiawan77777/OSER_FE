import { Component, OnInit } from '@angular/core';
import { AlertService, JobServicesService } from '../_services';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ScheduleServices } from '../_services/schedule.services';

@Component({
  templateUrl: 'schedule-detail.component.html',
})
export class ScheduleDetailComponent implements OnInit {
  userId: string;
  schedules = null;
  loading: false;
  imageSrc: string;

  acceptBtn = false;
  finnishBtn = false;
  cancelBtn = false;

  constructor(
    private scheduleServices: ScheduleServices,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const url = window.location.pathname;
    const scheduleId = url.substring(url.lastIndexOf('/') + 1);
    this.userId = localStorage.getItem('userid').slice(1, -1);
    this.scheduleServices
      .getScheduleDetail(scheduleId)
      .pipe(first())
      .subscribe((schedules) => {
        this.schedules = schedules.message;
        console.log(this.schedules);
        console.log(
          `schedule id :${this.schedules[0].OwnerID} user id ${this.userId}`
        );

        if (this.schedules[0].Image != undefined) {
          const imageId = this.schedules[0].Image.split('/')[1];
          this.imageSrc = `${environment.apiUrl}/files/ViewLicense/${imageId}`;
        }
        this.btnValidation();
      });
  }

  btnValidation() {
    if (this.schedules[0].OwnerID == this.userId) {
      if (this.schedules[0].StatusNo == 0) {
        this.acceptBtn = true;
        this.cancelBtn = true;
      }
    } else {
      if (this.schedules[0].StatusNo == 0) {
        this.cancelBtn = true;
      } else if (this.schedules[0].StatusNo == 1) {
        this.finnishBtn = true;
      }
    }
  }

  updateScheduleStatus(status: string) {
    if (status == 'cancel') {
      if (this.schedules[0].OwnerID == this.userId) {
        status = '99';
      } else {
        status = '98';
      }
    }
    this.scheduleServices
      .UpdateScheduleStatus(this.schedules[0]._id, status)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Schedule Updated', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['/schedule'], { relativeTo: this.route });
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
        },
      });
  }
}
