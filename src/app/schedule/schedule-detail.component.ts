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
  reviewStatus = false;

  acceptBtn = false;
  finnishBtn = false;
  cancelBtn = false;
  reviewBtn = false;
  paymentbtn = false;

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
      }else if (this.schedules[0].StatusNo == 1) {
      if (this.schedules[0].Category=='jasa') {
        this.finnishBtn = true;
      }
    }else if (this.schedules[0].StatusNo == 2) {
        this.paymentbtn = true;
      }
    } else {
      if (this.schedules[0].StatusNo == 0) {
        this.cancelBtn = true;
      } else if (this.schedules[0].StatusNo == 1) {
        if (this.schedules[0].Category=='proyek') {
          this.finnishBtn = true;
        }
      } else if (this.schedules[0].StatusNo == 2) {
        this.reviewBtn = true;
        this.paymentbtn = true;
      }
    }
    if (this.schedules[0].Review == 'false') {
      this.reviewStatus = true;
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
      .updateScheduleStatus(this.schedules[0]._id, status)
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

  giveReview() {
    sessionStorage.setItem('onwerId', this.schedules[0].OwnerID);
    sessionStorage.setItem('category', this.schedules[0].Category);
    sessionStorage.setItem('assigmentId', this.schedules[0]._id);

    this.router.navigate(['/review'], { relativeTo: this.route });
  }
}
