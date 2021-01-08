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
      linkedin: ['', Validators.required],
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
        if (res.message[0].tanggallahir != undefined) {
          this.UserProfileModel.birthDate = new Date(
            res.message[0].tanggallahir
          )
            .toISOString()
            .slice(0, 10);
        }
        this.UserProfileModel.email = res.message[0].email;
        this.UserProfileModel.phone = res.message[0].phone;
        this.UserProfileModel.projectCompleted =
          res.message[0].ProjectCompleted;
        this.UserProfileModel.servicesCompleted =
          res.message[0].ServicesCompleted;
        if (res.message[0].createdDate != undefined) {
          this.UserProfileModel.createdDate = new Date(
            res.message[0].createdDate
          )
            .toISOString()
            .slice(0, 10);
        }
        this.UserProfileModel.remarks = res.message[0].Remarks;
        this.UserProfileModel.linkedIn = res.message[0].linkedin;

        this.form.patchValue({
          username: this.UserProfileModel.username,
          phone: this.UserProfileModel.phone,
          remarks: this.UserProfileModel.remarks,
          linkedin: this.UserProfileModel.linkedIn,
        });
        console.log(this.UserProfileModel);
      });
  }

  get f() {
    return this.form.controls;
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
      .updateProfile(this.userId, this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          Swal.fire('Memperbaharui berhasil !', '', 'success');
          this.ngOnInit();
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
