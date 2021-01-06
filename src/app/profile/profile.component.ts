import { Component, OnInit } from '@angular/core';
import { AccountService, AlertService } from '@app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { J } from '@angular/cdk/keycodes';

@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit{
  form: FormGroup;
  userId: string;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private accountService: AccountService,private alertService: AlertService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      remarks: ['', Validators.required],
    });

    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    console.log(userProfile);
    this.form.patchValue({
            username: userProfile.username,
            password: userProfile.password,
            email: userProfile.email,
            phone: userProfile.phone,
            remarks: userProfile.remarks,
          });

    console.log(this.form.value);
  }
  get f() { return this.form.controls; }
}

