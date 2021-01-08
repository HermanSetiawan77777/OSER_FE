import { Component, OnInit } from '@angular/core';
import { AccountService, AlertService } from '@app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfilePage } from '../_models/userProfilePage';
import { UserProfileUpdateModel } from '../_models/UserProfileUpdateModel';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  templateUrl: 'profile.component.html',
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  userId: string;
  submitted = false;
  loading = false;
  imgSrc =
    'https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.png';
  UserProfileModel: UserProfilePage;
  UserProfileUpdateModel: UserProfileUpdateModel;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.UserProfileModel = new UserProfilePage();
    this.UserProfileUpdateModel = new UserProfileUpdateModel();

    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      remarks: ['', Validators.required],
      linkedIn: ['', Validators.required],
    });

    const userProfileLocal = JSON.parse(localStorage.getItem('userProfile'));
    this.userId = userProfileLocal.userid;

    this.accountService
      .viewProfile(this.userId)
      .pipe(first())
      .subscribe((res) => {
        console.log(res);
        this.UserProfileModel.id = res.message[0].id;
        this.UserProfileModel.username = res.message[0].username;
        this.UserProfileModel.gender = res.message[0].gender;
        this.UserProfileModel.birthDate = res.message[0].birthDate;
        this.UserProfileModel.email = res.message[0].email;
        this.UserProfileModel.phone = res.message[0].phone;
        this.UserProfileModel.projectCompleted =
          res.message[0].ProjectCompleted;
        this.UserProfileModel.servicesCompleted =
          res.message[0].ServicesCompleted;
        this.UserProfileModel.createdDate = new Date(res.message[0].createdDate)
          .toISOString()
          .slice(0, 10);
        this.UserProfileModel.remarks = res.message[0].remarks;

        this.form.patchValue({
          username: this.UserProfileModel.username,
          phone: this.UserProfileModel.phone,
          remarks: this.UserProfileModel.remarks,
          linkedIn: this.UserProfileModel.linkedIn,
        });
        console.log(this.form.value);
        console.log(this.UserProfileModel);
        console.log(this.UserProfileModel.username);
      });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    console.log('a');
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    console.log('b');

    this.loading = true;

    this.accountService
      .updateProfile(this.userId, this.UserProfileUpdateModel)
      .pipe(first())
      .subscribe({
        next: () => {
          console.log('object');
          Swal.fire('Memperbaharui berhasil !', '', 'success');
          console.log('object');
          this.loading = false;
          this.submitted = false;
        },
        error: (error) => {
          Swal.fire('Memperbaharui Gagal !', error, 'failed');
          this.loading = false;
          this.submitted = false;
        },
      });
  }
}
