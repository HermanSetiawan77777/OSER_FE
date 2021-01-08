import { Component, OnInit } from '@angular/core';
import { AlertService, JobServicesService } from '../_services';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ReviewServices } from '../_services/review.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { newReviewModel } from '../_models/newReviewModel';

@Component({
  templateUrl: 'review.component.html',
})
export class ReviewComponent implements OnInit {
  form: FormGroup;
  userId: string;
  schedules = null;
  loading = false;
  submitted = false;
  reviewModel: newReviewModel;

  constructor(
    private formBuilder: FormBuilder,
    private reviewService: ReviewServices,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reviewModel = new newReviewModel();

    this.reviewModel.ownerid = sessionStorage.getItem('onwerId');
    this.reviewModel.category = sessionStorage.getItem('category');
    this.reviewModel.assignmentid = sessionStorage.getItem('assigmentId');

    this.form = this.formBuilder.group({
      review: ['', Validators.required],
      rate: [''],
    });
  }
  onSubmit() {
    this.loading = true;
    this.submitted = true;
    this.reviewModel.review = this.form.value.review;
    this.reviewModel.rate = this.form.value.rate;
    console.log(this.reviewModel);
    this.reviewService
      .insertReview(this.reviewModel)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Berhasil membuat ulasan', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['/schedule'], { relativeTo: this.route });
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
          this.submitted = false;
        },
      });
  }

  get f() {
    return this.form.controls;
  }
}
