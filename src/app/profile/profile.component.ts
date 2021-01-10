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
  tempWorkcat: string[];
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
    this.tempWorkcat = [];

    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      remarks: ['', Validators.required],
      linkedIn: ['', Validators.required],
      audio: [],
      games: [],
      website: [],
      modelling: [],
    });

    let sessionProfile = JSON.parse(localStorage.getItem('userProfile'));
    console.log(sessionProfile);

    this.UserProfileModel.id = sessionProfile.userid;
    this.UserProfileModel.username = sessionProfile.username;
    this.UserProfileModel.password = sessionProfile.password;
    this.UserProfileModel.gender = sessionProfile.gender;
    this.UserProfileModel.birthDate = sessionProfile.tanggallahir;
    this.UserProfileModel.email = sessionProfile.email;
    this.UserProfileModel.phone = sessionProfile.phone;
    this.UserProfileModel.linkedIn = sessionProfile.linkedIn;
    this.UserProfileModel.projectCompleted = sessionProfile.ProjectCompleted;
    this.UserProfileModel.servicesCompleted = sessionProfile.ServicesCompleted;
    this.UserProfileModel.createdDate = sessionProfile.createdDate;
    this.UserProfileModel.remarks = sessionProfile.remarks;

    this.UserProfileModel.audio = sessionProfile.Audio == '1' ? true : false;
    this.UserProfileModel.games = sessionProfile.Games == '1' ? true : false;
    this.UserProfileModel.website =
      sessionProfile.Website == '1' ? true : false;
    this.UserProfileModel.modelling =
      sessionProfile.Modelling == '1' ? true : false;

    console.log(this.UserProfileModel);
    this.form.patchValue({
      username: this.UserProfileModel.username,
      password: this.UserProfileModel.password,
      phone: this.UserProfileModel.phone,
      remarks: this.UserProfileModel.remarks,
      linkedIn: this.UserProfileModel.linkedIn,
      audio: this.UserProfileModel.audio,
      games: this.UserProfileModel.games,
      website: this.UserProfileModel.website,
      modelling: this.UserProfileModel.modelling,
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    console.log(this.form.value);
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.UserProfileUpdateModel.username = this.form.value.username;
    this.UserProfileUpdateModel.password = this.form.value.password;
    this.UserProfileUpdateModel.phone = this.form.value.phone;
    this.UserProfileUpdateModel.remarks = this.form.value.remarks;
    this.UserProfileUpdateModel.linkedin = this.form.value.linkedIn;

    if (this.form.value.audio == true) {
      this.tempWorkcat.push('Audio, Video, Photography');
    }
    if (this.form.value.games == true) {
      this.tempWorkcat.push('Games Development');
    }
    if (this.form.value.website == true) {
      this.tempWorkcat.push('Website Development');
    }
    if (this.form.value.modelling == true) {
      this.tempWorkcat.push('3D modeling & Animation');
    }

    this.UserProfileUpdateModel.workcat = this.tempWorkcat.join(';');

    console.log(this.tempWorkcat);
    console.log(this.UserProfileUpdateModel);
    console.log(this.UserProfileModel.id);
    this.accountService
      .updateProfile(this.UserProfileModel.id, this.UserProfileUpdateModel)
      .pipe(first())
      .subscribe({
        next: () => {
          this.login();
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

  login() {
    this.accountService
      .login(this.UserProfileModel.email, this.UserProfileUpdateModel.password)
      .pipe(first())
      .subscribe({
        next: () => {
          this.ngOnInit();
          Swal.fire('Memperbaharui berhasil !', '', 'success');
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
        },
      });
  }
}
