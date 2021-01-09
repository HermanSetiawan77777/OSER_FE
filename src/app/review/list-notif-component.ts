import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ReviewServices } from '../_services/review.services';

@Component({
  templateUrl: 'list-notif-component.html',
})
export class ListNotifComponent implements OnInit {
  userId: string;
  notifs = [];
  loading = false;
  submitted = false;

  constructor(private reviewService: ReviewServices) {}

  ngOnInit() {
    this.userId = localStorage.getItem('userid').slice(1, -1);

    this.reviewService
      .viewNotif(this.userId)
      .pipe(first())
      .subscribe((res) => {
        this.notifs = res.message;
      });
  }
}
