import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../_services';
import { JobServicesService } from '../_services';
import { Observable } from 'rxjs';

@Component({ templateUrl: 'services-add-edit.component.html' })
export class ServicesAddEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  isAddMode = true;
  loading = false;
  imageSrc: string;
  submitted = false;
  fileImage: File;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private servicesServices: JobServicesService,
    private alertService: AlertService,
  ) {}

  ngOnInit() {
    const url = window.location.pathname;
    this.id  = url.substring(url.lastIndexOf('/') + 1);
    const type  = url.split('/')[3];
    if (type === 'edit'){
      this.isAddMode = false;
    }
    console.log(this.isAddMode);
    console.log(type);
    this.form = this.formBuilder.group({
      servicesname: ['', Validators.required],
      category: ['', Validators.required],
      duration: ['', Validators.required],
      price: ['', Validators.required],
      remarks: ['', Validators.required],
      image: ['', Validators.required]
    });

    // if (!this.isAddMode) {
    //   this.servicesServices.getById(this.id)
    //     .pipe(first())
    //     .subscribe(x => this.form.patchValue(x));
    // }
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.form.controls; }

  // stop here if form is invalid
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      console.log('save');
      this.registerServices();
    } else {
      console.log('edit');
      this.updateServices();
    }
  }

   private registerServices() {
    // @ts-ignore
     this.servicesServices.registerServices(this.form.value, this.fileImage)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Berhasil Membuat Services', { keepAfterRouteChange: true });
          this.router.navigate(['/service'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  private updateServices() {
    this.servicesServices.updateServices(this.id, this.form.value, this.fileImage)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Update successful', { keepAfterRouteChange: true });
          this.router.navigate(['/service'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  // tslint:disable-next-line:typedef
  onFileChange(event) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.fileImage = file;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.form.patchValue({
          fileSource: reader.result
        });

      };

    }
  }
}


