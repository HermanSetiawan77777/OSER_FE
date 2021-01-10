import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, AlertService } from '../_services';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: 'verify-email.component.html',
})
export class VerifyEmailComponent implements OnInit {
  form: FormGroup;
  form2: FormGroup;
  loading = false;
  submitted = false;
  code: string;
  userId: string;

  step1 = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
    });
    this.form2 = this.formBuilder.group({
      code: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  get f2() {
    return this.form2.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService
      .verifyCode(this.form.value.email)
      .pipe(first())
      .subscribe({
        next: (res) => {
          this.alertService.success(
            'Silahkan Check Email Anda Untuk Kode Verifikasi'
          );
          this.code = res.message[0].Code;
          this.userId = res.message[0].UserID;
          this.submitted = false;
          this.loading = false;
          this.step1 = true;
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
          this.step1 = false;
        },
      });
  }

  onSubmit2() {
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form2.invalid) {
      return;
    }
    if (this.code != this.form2.value.code) {
      this.alertService.error('kode verifikasi salah');
      return;
    }
    console.log('c');
    this.loading = true;
    this.accountService
      .userActivation(this.userId)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success(
            'Email anda berhasil di verifikasi, silahkan login kembali',
            {
              keepAfterRouteChange: true,
            }
          );
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
        },
      });
  }
}
