import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ReviewServices } from '../_services/review.services';

@Component({
  templateUrl: 'list-component.html',
})
export class ListComponent implements OnInit {
  reviews = [];
  userId: string;
  loading = false;
  submitted = false;

  constructor(private reviewService: ReviewServices) {}

  ngOnInit() {
    this.userId = localStorage.getItem('userid').slice(1, -1);
    this.reviewService
      .viewReviewByOwner(this.userId)
      .pipe(first())
      .subscribe((res) => {
        this.reviews = res.message;
        console.log(this.reviews);
        console.log(res);
      });
  }
}
