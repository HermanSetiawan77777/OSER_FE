import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../_services';
import { JobServicesService } from '../_services';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Component({ templateUrl: 'services-add-edit.component.html' })
export class ServicesAddEditComponent implements OnInit {
  services = null;
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
    private alertService: AlertService
  ) {}

  ngOnInit() {
    const url = window.location.pathname;
    this.id = url.substring(url.lastIndexOf('/') + 1);
    const type = url.split('/')[3];

    if (type === 'edit') {
      this.isAddMode = false;
    }

    this.form = this.formBuilder.group({
      servicesname: ['', Validators.required],
      category: ['', Validators.required],
      duration: ['', Validators.required],
      price: ['', Validators.required],
      image: [''],
      remarks: ['']
    });

    if (!this.isAddMode) {
      this.servicesServices
        .detailServices(this.id)
        .pipe(first())
        .subscribe((services) => {
          this.services = services.message;
          if (
            this.services[0].Image !== undefined ||
            this.services[0].Image !== null
          ) {
            const imageId = this.services[0].Image.split('/')[1];
            this.imageSrc = `${environment.apiUrl}/files/ViewLicense/${imageId}`;
          }
          this.form.patchValue({
            category: this.services[0].Category,
            servicesname: this.services[0].ServicesName,
            price: this.services[0].Price,
            duration: this.services[0].Duration,
            remarks: this.services[0].Remarks,
          });
        });
    }
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() {
    return this.form.controls;
  }

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
      this.registerServices();
    } else {
      this.updateServices();
    }
  }

  private registerServices() {
    // @ts-ignore
    this.servicesServices
      .registerServices(this.form.value, this.fileImage)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Berhasil Membuat Services', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['/service'], { relativeTo: this.route });
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
        },
      });
  }

  private updateServices() {
    this.servicesServices
      .updateServices(this.id, this.form.value, this.fileImage)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Update successful', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['/service'], { relativeTo: this.route });
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
        },
      });
  }

  // tslint:disable-next-line:typedef
  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.fileImage = file;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        this.form.patchValue({
          fileSource: reader.result,
        });
      };
    }
  }
}
