import { Component, OnInit } from '@angular/core';
import { AccountService, AlertService } from '@app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from '../_models/userProfile';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: 'profile.component.html',
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  userProfile: UserProfile;
  userId: string;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      remarks: ['', Validators.required],
    });

    const userProfile = JSON.parse(localStorage.getItem('userProfile'));

    this.accountService
      .viewProfile(userProfile.userid)
      .pipe(first())
      .subscribe((res) => {
        this.userProfile = res.message;
        console.log(this.userProfile);
      });

    this.form.patchValue({
      username: userProfile.username,
      email: userProfile.email,
      phone: userProfile.phone,
      projectCompleted: userProfile.projectCompleted,
      //servicesCompleted: userProfile.servicesCompleted,
      createdDate: userProfile.createdDate,
      remarks: userProfile.remarks,
    });
  }

  get f() {
    return this.form.controls;
  }
}
