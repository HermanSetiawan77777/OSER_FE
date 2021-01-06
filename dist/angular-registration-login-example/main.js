(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Skripsi\FE ANgular\oser-skripsi-ver2\src\main.ts */"zUnb");


/***/ }),

/***/ "334H":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services-layout.component */ "CCOo");
/* harmony import */ var _services_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services-list.component */ "a56z");
/* harmony import */ var _services_add_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services-add-edit.component */ "9z4+");
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services-routing.module */ "fD4K");
/* harmony import */ var _services_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services.detail.component */ "ZfWw");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/shared.module */ "PCNd");
/* harmony import */ var _app_services_take_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/take-services.component */ "hu9Z");












class ServicesModule {
}
ServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicesModule });
ServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicesModule_Factory(t) { return new (t || ServicesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _services_routing_module__WEBPACK_IMPORTED_MODULE_6__["ServicesRoutingModule"],
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicesModule, { declarations: [_services_layout_component__WEBPACK_IMPORTED_MODULE_3__["ServicesLayoutComponent"],
        _services_list_component__WEBPACK_IMPORTED_MODULE_4__["ServicesListComponent"],
        _services_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["ServicesAddEditComponent"],
        _services_detail_component__WEBPACK_IMPORTED_MODULE_7__["ServicesDetailComponent"],
        _app_services_take_services_component__WEBPACK_IMPORTED_MODULE_10__["TakeServicesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _services_routing_module__WEBPACK_IMPORTED_MODULE_6__["ServicesRoutingModule"],
        ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]], exports: [_services_list_component__WEBPACK_IMPORTED_MODULE_4__["ServicesListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _services_routing_module__WEBPACK_IMPORTED_MODULE_6__["ServicesRoutingModule"],
                    ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
                    _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                ],
                exports: [
                    _services_list_component__WEBPACK_IMPORTED_MODULE_4__["ServicesListComponent"]
                ],
                declarations: [
                    _services_layout_component__WEBPACK_IMPORTED_MODULE_3__["ServicesLayoutComponent"],
                    _services_list_component__WEBPACK_IMPORTED_MODULE_4__["ServicesListComponent"],
                    _services_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["ServicesAddEditComponent"],
                    _services_detail_component__WEBPACK_IMPORTED_MODULE_7__["ServicesDetailComponent"],
                    _app_services_take_services_component__WEBPACK_IMPORTED_MODULE_10__["TakeServicesComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "5ZPe":
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








class AccountService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
    get accountValue() {
        return this.userSubject.value;
    }
    getById(id) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/account/${id}`, { headers: header });
    }
    login(email, password) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/user/login`, { email, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            /*console.log(this.temp);*/
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('userProfile', JSON.stringify(user.message[0]));
            localStorage.setItem('userid', JSON.stringify(user.message[0].userid));
            localStorage.setItem('token', JSON.stringify(user.message[0].token));
            this.userSubject.next(user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['']);
    }
    verifyCode(email) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/user/SendEmail`, { email });
    }
    userActivation(id) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/user/Activation/${id}`, { id });
    }
    register(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/user/register`, user);
    }
    forgotpassword(email) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/user/ForgetPW/${email}`, { email });
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "9J0k":
/*!************************************************!*\
  !*** ./src/app/projects/add-edit.component.ts ***!
  \************************************************/
/*! exports provided: AddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditComponent", function() { return AddEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");









function AddEditComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEditComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEditComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Judul Pekerjaan Harus Diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEditComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditComponent_div_8_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.name.errors == null ? null : ctx_r2.f.name.errors.required);
} }
function AddEditComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kategori Harus Diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEditComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditComponent_div_25_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.category.errors == null ? null : ctx_r3.f.category.errors.required);
} }
function AddEditComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEditComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditComponent_div_30_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.price.errors == null ? null : ctx_r4.f.price.errors.required);
} }
function AddEditComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tenggat Waktu Harus Diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEditComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditComponent_div_36_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.deadline.errors == null ? null : ctx_r5.f.deadline.errors.required);
} }
function AddEditComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Durasi Harus Diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEditComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditComponent_div_41_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.duration.errors == null ? null : ctx_r6.f.duration.errors.required);
} }
function AddEditComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gambar Harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEditComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditComponent_div_46_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.image.errors == null ? null : ctx_r7.f.image.errors.required);
} }
function AddEditComponent_img_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddEditComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email Harus Diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEditComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditComponent_div_52_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f.remarks.errors == null ? null : ctx_r9.f.remarks.errors.required);
} }
function AddEditComponent_span_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 33);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AddEditComponent {
    constructor(formBuilder, route, router, projectServices, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.projectServices = projectServices;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        console.log(this.id);
        this.isAddMode = !this.id;
        this.form = this.formBuilder.group({
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            deadline: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        if (!this.isAddMode) {
            /*this.projectServices.getById(this.id)
                .pipe(first())
                .subscribe(x => this.form.patchValue({
                  category: x.category,
                  name: x.name,
                  price: x.price,
                  deadline: x.deadline,
                  duration: x.duration,
                  remarks: x.remarks,
                  image: x.file,
                }));*/
        }
    }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        if (this.isAddMode) {
            this.registerProjects();
        }
        else {
            this.updateProjects();
        }
    }
    registerProjects() {
        console.log(this.fileImage);
        // @ts-ignore
        this.projectServices.registerProject(this.form.value, this.fileImage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe({
            next: () => {
                this.alertService.success('Berhasil Membuat Project', { keepAfterRouteChange: true });
                this.router.navigate(['/project'], { relativeTo: this.route });
            },
            error: error => {
                this.alertService.error(error);
                this.loading = false;
            }
        });
    }
    updateProjects() {
        console.log(this.form.value);
        // @ts-ignore
        this.projectServices.updateProject(this.form.value, this.id, this.fileImage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe({
            next: () => {
                this.alertService.success('Update successful', { keepAfterRouteChange: true });
                this.router.navigate(['/project'], { relativeTo: this.route });
            },
            error: error => {
                this.alertService.error(error);
                this.loading = false;
            }
        });
    }
    onFileChange(event) {
        const reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            this.fileImage = file;
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imageSrc = reader.result;
                this.form.patchValue({
                    fileSource: reader.result
                });
            };
        }
    }
}
AddEditComponent.ɵfac = function AddEditComponent_Factory(t) { return new (t || AddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["ProjectServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
AddEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEditComponent, selectors: [["ng-component"]], decls: 59, vars: 31, consts: [[4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col"], ["for", "name"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "category"], ["formControlName", "category", 1, "form-control", 3, "ngClass"], ["value", ""], ["value", "Audio, Video, Photography"], ["value", "Games Development"], ["value", "Website Development"], ["value", "3D modeling & Animation"], ["value", "others"], ["for", "price"], ["type", "price", "formControlName", "price", 1, "form-control", 3, "ngClass"], ["tooltip", "Berapa Lama Project Akan Muncul di List", "autoPlacement", "true", "for", "deadline"], ["type", "date", "formControlName", "deadline", "placeholder", "yyyy-MM-dd", 1, "form-control", 3, "ngClass"], ["tooltip", "Berapa Lama Project Akan Dikerjakan Oleh User", "autoPlacement", "true", "for", "duration"], ["type", "number", "formControlName", "duration", 1, "form-control", 3, "ngClass"], [1, "form-group"], ["for", "image"], ["formControlName", "image", "type", "file", 1, "form-control", 3, "change"], ["style", "height: 300px; width:500px", 3, "src", 4, "ngIf"], [2, "margin-bottom", "15px"], ["for", "remarks"], ["type", "text", "formControlName", "remarks", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "/project", 1, "btn", "btn-link"], [1, "invalid-feedback"], [2, "height", "300px", "width", "500px", 3, "src"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function AddEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddEditComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditComponent_h1_1_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddEditComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Judul Pekerjaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddEditComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Kategori");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Audio, Video, Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Games Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Website Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "3D modeling & Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddEditComponent_div_25_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Harga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddEditComponent_div_30_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Tenggat Waktu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AddEditComponent_div_36_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Durasi Pengerjaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AddEditComponent_div_41_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Masukan Gambar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddEditComponent_Template_input_change_45_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AddEditComponent_div_46_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AddEditComponent_img_47_Template, 1, 1, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Deskripsi Pekerjaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AddEditComponent_div_52_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AddEditComponent_span_55_Template, 1, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAddMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.submitted && (ctx.f.name.errors == null ? null : ctx.f.name.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.name.errors == null ? null : ctx.f.name.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.submitted && (ctx.f.category.errors == null ? null : ctx.f.category.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.category.errors == null ? null : ctx.f.category.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.submitted && (ctx.f.price.errors == null ? null : ctx.f.price.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.price.errors == null ? null : ctx.f.price.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.submitted && (ctx.f.deadline.errors == null ? null : ctx.f.deadline.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.deadline.errors == null ? null : ctx.f.deadline.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.submitted && (ctx.f.duration.errors == null ? null : ctx.f.duration.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.duration.errors == null ? null : ctx.f.duration.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.image.errors == null ? null : ctx.f.image.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx.submitted && (ctx.f.remarks.errors == null ? null : ctx.f.remarks.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.remarks.errors == null ? null : ctx.f.remarks.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__["TooltipDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ templateUrl: 'add-edit.component.html' }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["ProjectServices"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services */ "J9tS");
/* harmony import */ var _myproject_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myproject.component */ "DUJm");
/* harmony import */ var _myservices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myservices.component */ "YGWh");





class HomeComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.user = this.accountService.accountValue;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 8, vars: 0, consts: [[1, "p-4"], [1, "container"], [1, "container", 2, "margin-top", "30px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hi! Welcome To OSER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-myproject-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-myservices-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_myproject_component__WEBPACK_IMPORTED_MODULE_2__["MyprojectComponent"], _myservices_component__WEBPACK_IMPORTED_MODULE_3__["MyservicesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ templateUrl: 'home.component.html' }]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "9z4+":
/*!*********************************************************!*\
  !*** ./src/app/services/services-add-edit.component.ts ***!
  \*********************************************************/
/*! exports provided: ServicesAddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesAddEditComponent", function() { return ServicesAddEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");









function ServicesAddEditComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServicesAddEditComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServicesAddEditComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Judul Pekerjaan Harus Diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServicesAddEditComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServicesAddEditComponent_div_8_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.servicesname.errors == null ? null : ctx_r2.f.servicesname.errors.required);
} }
function ServicesAddEditComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kategori Harus Diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServicesAddEditComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServicesAddEditComponent_div_24_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.category.errors == null ? null : ctx_r3.f.category.errors.required);
} }
function ServicesAddEditComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Durasi Harus Diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServicesAddEditComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServicesAddEditComponent_div_30_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.duration.errors == null ? null : ctx_r4.f.duration.errors.required);
} }
function ServicesAddEditComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServicesAddEditComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServicesAddEditComponent_div_35_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.price.errors == null ? null : ctx_r5.f.price.errors.required);
} }
function ServicesAddEditComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gambar Harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServicesAddEditComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServicesAddEditComponent_div_40_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.image.errors == null ? null : ctx_r6.f.image.errors.required);
} }
function ServicesAddEditComponent_img_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 30);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ServicesAddEditComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email Harus Diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServicesAddEditComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServicesAddEditComponent_div_46_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.f.remarks.errors == null ? null : ctx_r8.f.remarks.errors.required);
} }
function ServicesAddEditComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 31);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ServicesAddEditComponent {
    constructor(formBuilder, route, router, servicesServices, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.servicesServices = servicesServices;
        this.alertService = alertService;
        this.isAddMode = true;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        const url = window.location.pathname;
        this.id = url.substring(url.lastIndexOf('/') + 1);
        const type = url.split('/')[3];
        if (type === 'edit') {
            this.isAddMode = false;
        }
        console.log(this.isAddMode);
        console.log(type);
        this.form = this.formBuilder.group({
            servicesname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
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
        }
        else {
            console.log('edit');
            this.updateServices();
        }
    }
    registerServices() {
        // @ts-ignore
        this.servicesServices.registerServices(this.form.value, this.fileImage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
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
    updateServices() {
        this.servicesServices.updateServices(this.id, this.form.value, this.fileImage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
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
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            this.fileImage = file;
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imageSrc = reader.result;
                this.form.patchValue({
                    fileSource: reader.result
                });
            };
        }
    }
}
ServicesAddEditComponent.ɵfac = function ServicesAddEditComponent_Factory(t) { return new (t || ServicesAddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["JobServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
ServicesAddEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesAddEditComponent, selectors: [["ng-component"]], decls: 53, vars: 27, consts: [[4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col"], ["for", "servicesname"], ["type", "text", "formControlName", "servicesname", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "category"], ["formControlName", "category", 1, "form-control", 3, "ngClass"], ["value", ""], ["value", "Audio, Video, Photography"], ["value", "Games Development"], ["value", "Website Development"], ["value", "3D modeling & Animation"], ["value", "others"], ["tooltip", "Berapa Lama Services Akan Dikerjakan oleh User", "autoPlacement", "true", "for", "duration"], ["type", "number", "formControlName", "duration", 1, "form-control", 3, "ngClass"], ["for", "price"], ["type", "price", "formControlName", "price", 1, "form-control", 3, "ngClass"], [1, "form-group"], ["for", "image"], ["formControlName", "image", "type", "file", 1, "form-control", 3, "change"], ["style", "height: 300px; width:500px", 3, "src", 4, "ngIf"], [2, "margin-bottom", "15px"], ["for", "remarks"], ["type", "text", "formControlName", "remarks", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "/service", 1, "btn", "btn-link"], [1, "invalid-feedback"], [2, "height", "300px", "width", "500px", 3, "src"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function ServicesAddEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ServicesAddEditComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServicesAddEditComponent_h1_1_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ServicesAddEditComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Judul Pekerjaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ServicesAddEditComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Kategori");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Audio, Video, Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Games Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Website Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "3D modeling & Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ServicesAddEditComponent_div_24_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Durasi Pengerjaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ServicesAddEditComponent_div_30_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Harga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ServicesAddEditComponent_div_35_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Masukan Gambar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServicesAddEditComponent_Template_input_change_39_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ServicesAddEditComponent_div_40_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ServicesAddEditComponent_img_41_Template, 1, 1, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Deskripsi Pekerjaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ServicesAddEditComponent_div_46_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ServicesAddEditComponent_span_49_Template, 1, 0, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAddMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.submitted && (ctx.f.servicesname.errors == null ? null : ctx.f.servicesname.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.servicesname.errors == null ? null : ctx.f.servicesname.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.submitted && (ctx.f.category.errors == null ? null : ctx.f.category.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.category.errors == null ? null : ctx.f.category.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.submitted && (ctx.f.duration.errors == null ? null : ctx.f.duration.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.duration.errors == null ? null : ctx.f.duration.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.submitted && (ctx.f.price.errors == null ? null : ctx.f.price.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.price.errors == null ? null : ctx.f.price.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.image.errors == null ? null : ctx.f.image.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.submitted && (ctx.f.remarks.errors == null ? null : ctx.f.remarks.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.remarks.errors == null ? null : ctx.f.remarks.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__["TooltipDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesAddEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ templateUrl: 'services-add-edit.component.html' }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["JobServicesService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://3.208.28.174:3003'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CAFG":
/*!************************************!*\
  !*** ./src/app/dashboard/index.ts ***!
  \************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard */ "GnWa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return _dashboard__WEBPACK_IMPORTED_MODULE_0__["Dashboard"]; });




/***/ }),

/***/ "CCOo":
/*!*******************************************************!*\
  !*** ./src/app/services/services-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: ServicesLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesLayoutComponent", function() { return ServicesLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ServicesLayoutComponent {
}
ServicesLayoutComponent.ɵfac = function ServicesLayoutComponent_Factory(t) { return new (t || ServicesLayoutComponent)(); };
ServicesLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesLayoutComponent, selectors: [["ng-component"]], decls: 3, vars: 0, consts: [[1, "p-4"], [1, "container"]], template: function ServicesLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ templateUrl: 'services-layout.component.html' }]
    }], null, null); })();


/***/ }),

/***/ "DUJm":
/*!*********************************************!*\
  !*** ./src/app/home/myproject.component.ts ***!
  \*********************************************/
/*! exports provided: MyprojectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprojectComponent", function() { return MyprojectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_modules_jw_paginate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node_modules/jw-paginate */ "TNpa");
/* harmony import */ var node_modules_jw_paginate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_modules_jw_paginate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "J9tS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/truncate.pipe */ "hjSY");



// @ts-ignore







function MyprojectComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyprojectComponent_tr_22_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const project_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteProjects(project_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Hapus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.OwnerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.ProjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rp.", project_r3.Price, ",-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, project_r3.Deadline));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", project_r3.Duration, " Hari");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 11, project_r3.Remarks, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../project/detail/", project_r3._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../project/edit/", project_r3._id, "");
} }
function MyprojectComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { active: a0 }; };
function MyprojectComponent_ul_25_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyprojectComponent_ul_25_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const page_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.setPage(page_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r6.pager.currentPage === page_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r7);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function MyprojectComponent_ul_25_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyprojectComponent_ul_25_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.setPage(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyprojectComponent_ul_25_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.setPage(ctx_r12.pager.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MyprojectComponent_ul_25_li_7_Template, 3, 4, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyprojectComponent_ul_25_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.setPage(ctx_r13.pager.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyprojectComponent_ul_25_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.setPage(ctx_r14.pager.totalPages); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r2.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r2.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r2.pager.currentPage === ctx_r2.pager.totalPages));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r2.pager.currentPage === ctx_r2.pager.totalPages));
} }
class MyprojectComponent {
    constructor(projectServices) {
        this.projectServices = projectServices;
        this.projects = [];
        this.pager = {};
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.initialPage = 1;
        this.itemsPerPage = 5;
        this.maxSize = 5;
    }
    ngOnInit() {
        const ownerId = localStorage.getItem('userid').slice(1, -1);
        this.projectServices.getMyProjects(ownerId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(projects => {
            // @ts-ignore
            this.projects = projects.message;
            if (this.projects !== [] && this.projects.length !== 0) {
                this.setPage(this.initialPage);
            }
        });
    }
    setPage(page) {
        console.log('a');
        // get new pager object for specified page
        this.pager = node_modules_jw_paginate__WEBPACK_IMPORTED_MODULE_3___default()(this.projects.length, page, this.itemsPerPage, this.maxSize);
        // get new page of items from items array
        this.pageOfItems = this.projects.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // call change page function in parent component
        this.changePage.emit(this.pageOfItems);
    }
    ngOnChanges(changes) {
        // reset page if items array has changed
        if (changes.items.currentValue !== changes.items.previousValue) {
            this.setPage(this.initialPage);
        }
    }
    onChangePage(pageOfItems) {
        // update current page of items
        console.log(pageOfItems);
        console.log('a');
        this.pageOfItems = pageOfItems;
    }
    // tslint:disable-next-line:typedef
    deleteProjects(id) {
        const user = this.projects.find(x => x._id === id);
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Apakah Anda Yakin?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Hapus',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Project Berhasil Di Hapus', 'success', this.projectServices.deleteProjects(id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                    .subscribe(() => {
                    this.projects = this.projects.filter(x => x._id !== id);
                }));
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancel', 'Hapus Project Dibatalkan', 'error');
            }
        });
    }
}
MyprojectComponent.ɵfac = function MyprojectComponent_Factory(t) { return new (t || MyprojectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["ProjectServices"])); };
MyprojectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyprojectComponent, selectors: [["app-myproject-component"]], outputs: { changePage: "changePage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 26, vars: 3, consts: [["routerLink", "../project/add", 1, "btn", "btn-sm", "btn-success", "mb-2"], [1, "table", "table-striped"], [2, "width", "15%"], ["tooltip", "Berapa Lama Project Akan Muncul di List", "autoPlacement", "true", 2, "width", "15%"], [2, "width", "30%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["class", "pagination", 4, "ngIf"], [2, "white-space", "nowrap"], [1, "btn", "btn-sm", "btn-info", "mr-1", 3, "routerLink"], [1, "btn", "btn-sm", "btn-primary", "mr-1", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", "btn-delete-user", 3, "click"], ["colspan", "4", 1, "text-center"], [1, "spinner-border", "spinner-border-lg", "align-center"], [1, "pagination"], [1, "page-item", "first-item", 3, "ngClass"], [1, "page-link", 3, "click"], [1, "page-item", "previous-item", 3, "ngClass"], ["class", "page-item number-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next-item", 3, "ngClass"], [1, "page-item", "last-item", 3, "ngClass"], [1, "page-item", "number-item", 3, "ngClass"]], template: function MyprojectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tambah Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nama Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Kategori");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nama Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Harga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tenggat Waktu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Durasi Pengerjaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Deskripsi Pekerjaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MyprojectComponent_tr_22_Template, 24, 14, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MyprojectComponent_tr_23_Template, 3, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MyprojectComponent_ul_25_Template, 14, 13, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageOfItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pager.pages && ctx.pager.pages.length);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _shared_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__["TruncatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyprojectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-myproject-component',
                templateUrl: 'myproject.component.html',
            }]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_4__["ProjectServices"] }]; }, { changePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Dgtq":
/*!**********************************!*\
  !*** ./src/app/_models/alert.ts ***!
  \**********************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "E9Ql":
/*!********************************************!*\
  !*** ./src/app/projects/list.component.ts ***!
  \********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jw_paginate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jw-paginate */ "TNpa");
/* harmony import */ var jw_paginate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jw_paginate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "J9tS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/truncate.pipe */ "hjSY");



// @ts-ignore







function ListComponent_tr_22_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "project/edit/", project_r3._id, "");
} }
function ListComponent_tr_22_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_tr_22_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deleteProjects(project_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ListComponent_tr_22_a_20_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ListComponent_tr_22_button_21_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.OwnerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.ProjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rp.", project_r3.Price, ",-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, project_r3.Deadline));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", project_r3.Duration, " Hari");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 12, project_r3.Remarks, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "project/detail/", project_r3._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userId === project_r3.OwnerID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userId === project_r3.OwnerID);
} }
function ListComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { active: a0 }; };
function ListComponent_ul_25_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_ul_25_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const page_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.setPageProject(page_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r10.pager.currentPage === page_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r11);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function ListComponent_ul_25_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_ul_25_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.setPageProject(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_ul_25_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.setPageProject(ctx_r16.pager.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListComponent_ul_25_li_7_Template, 3, 4, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_ul_25_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.setPageProject(ctx_r17.pager.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_ul_25_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.setPageProject(ctx_r18.pager.totalPages); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r2.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r2.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r2.pager.currentPage === ctx_r2.pager.totalPages));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r2.pager.currentPage === ctx_r2.pager.totalPages));
} }
class ListComponent {
    constructor(projectServices) {
        this.projectServices = projectServices;
        this.projects = [];
        this.pager = {};
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.initialPage = 1;
        this.itemsPerPage = 10;
        this.maxSize = 10;
    }
    ngOnInit() {
        this.userId = localStorage.getItem('userid').slice(1, -1);
        this.projectServices.getProjects()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(projects => {
            // @ts-ignore
            this.projects = projects.message;
            if (this.projects !== [] && this.projects.length !== 0) {
                this.setPageProject(this.initialPage);
            }
        });
    }
    setPageProject(page) {
        console.log('a');
        // get new pager object for specified page
        this.pager = jw_paginate__WEBPACK_IMPORTED_MODULE_3___default()(this.projects.length, page, this.itemsPerPage, this.maxSize);
        // get new page of items from items array
        this.pageOfItems = this.projects.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // call change page function in parent component
        this.changePage.emit(this.pageOfItems);
    }
    ngOnChanges(changes) {
        // reset page if items array has changed
        if (changes.items.currentValue !== changes.items.previousValue) {
            this.setPageProject(this.initialPage);
        }
    }
    onChangePage(pageOfItems) {
        // update current page of items
        console.log(pageOfItems);
        console.log('a');
        this.pageOfItems = pageOfItems;
    }
    deleteProjects(id) {
        const user = this.projects.find(x => x._id === id);
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Apakah Anda Yakin?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Hapus',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Project Berhasil Di Hapus', 'success', this.projectServices.deleteProjects(id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                    .subscribe(() => {
                    this.projects = this.projects.filter(x => x._id !== id);
                    location.reload();
                }));
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancel', 'Hapus Project Dibatalkan', 'error');
            }
        });
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["ProjectServices"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-project-list-component"]], outputs: { changePage: "changePage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 26, vars: 3, consts: [["routerLink", "project/add", 1, "btn", "btn-sm", "btn-success", "mb-2"], [1, "table", "table-striped"], [2, "width", "15%"], ["tooltip", "Berapa Lama Project Akan Muncul di List", "autoPlacement", "true", 2, "width", "15%"], [2, "width", "30%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["class", "pagination", 4, "ngIf"], [2, "white-space", "nowrap"], [1, "btn", "btn-sm", "btn-info", "mr-1", 3, "routerLink"], ["class", "btn btn-sm btn-primary mr-1", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-sm btn-danger btn-delete-user", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-primary", "mr-1", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", "btn-delete-user", 3, "click"], ["colspan", "4", 1, "text-center"], [1, "spinner-border", "spinner-border-lg", "align-center"], [1, "pagination"], [1, "page-item", "first-item", 3, "ngClass"], [1, "page-link", 3, "click"], [1, "page-item", "previous-item", 3, "ngClass"], ["class", "page-item number-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next-item", 3, "ngClass"], [1, "page-item", "last-item", 3, "ngClass"], [1, "page-item", "number-item", 3, "ngClass"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tambah Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nama Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Kategori");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nama Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Harga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tenggat Waktu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Durasi Pengerjaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Deskripsi Pekerjaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ListComponent_tr_22_Template, 22, 15, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ListComponent_tr_23_Template, 3, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ListComponent_ul_25_Template, 14, 13, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageOfItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pager.pages && ctx.pager.pages.length);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _shared_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__["TruncatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-list-component',
                templateUrl: 'list.component.html',
            }]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_4__["ProjectServices"] }]; }, { changePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "FvI+":
/*!***************************************************************!*\
  !*** ./src/app/request-price/request-price-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: RequestPriceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPriceRoutingModule", function() { return RequestPriceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _request_price_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-price.component */ "sKmM");
/* harmony import */ var _app_request_price_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/request-price/layout.component */ "NU1j");






const routes = [
    {
        path: '', component: _app_request_price_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            { path: '', component: _request_price_component__WEBPACK_IMPORTED_MODULE_2__["RequestPriceComponent"] },
        ]
    }
];
class RequestPriceRoutingModule {
}
RequestPriceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RequestPriceRoutingModule });
RequestPriceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RequestPriceRoutingModule_Factory(t) { return new (t || RequestPriceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RequestPriceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestPriceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "GHDz":
/*!*************************************!*\
  !*** ./src/app/_models/services.ts ***!
  \*************************************/
/*! exports provided: Services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
class Services {
}


/***/ }),

/***/ "GnWa":
/*!****************************************!*\
  !*** ./src/app/dashboard/dashboard.ts ***!
  \****************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class Dashboard {
}
Dashboard.ɵfac = function Dashboard_Factory(t) { return new (t || Dashboard)(); };
Dashboard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Dashboard, selectors: [["ng-component"]], decls: 160, vars: 0, consts: [[1, "is-preload"], ["id", "header"], ["routerLink", "../", 1, "logo", 2, "margin-left", "30px"], ["routerLink", "../account/login", "title", "", 2, "margin-right", "30px"], [1, "wrapper"], [1, "inner"], [1, "special"], [1, "font-weight-bold"], [1, "banner"], [1, "highlights"], [1, "content", "font-weight-bold"], ["id", "cta", 1, "wrapper"], [1, "content"]], template: function Dashboard_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " OSER (Online Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "OSER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "OSER - Online Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Oser adalah Website Freelance yang menyediakan macam pilihan freelance dan kalian dapat memilih pekerjaan yang anda inginkan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Pilihan yang terdapat di OSER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Terdapat beberapa macam pilihan Freelance di OSER yang dapat kalian pilih ataupun kalian yang menentukan sendiri pekerjaan macam apa yang kalian inginkan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Disini kalian dapat memilih pekerjaan yang sudah dibuat oleh user dan kalian dapat melakukan \"Nego\" harga yang anda inginkan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Disini kalian dapat melakukan request pekerjaan seperti apa yang kalian inginkan yang nantinya user dapat memberikan anda pekerjaan yang diinginkan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Schedule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Disini kalian dapat melihat pekerjaan apa saja yang sudah anda ambil atau anda buat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Langkah-Langkah Pengambilan Pengerjaan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pengambilan Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Step 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Pilih Pekerjaan yang anda inginkan yang terdapat di dalam list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Step 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Ambil Pekerjaan yang anda inginkan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Step 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Nego harga yang anda inginkan (bila menurut anda harga tidak sesuai) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Step 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Setelah selesai negosiasi harga, tinggal menunggu konfirmasi dari pemilik pekerjaan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Step 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Apabila sudah sesuai antara anda dengan pemilik pekerjaan, pekerjaan tersebut tinggal anda kerjakan selama batas waktu yang ditentukan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Step 6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Setelah pekerjaan selesai, lakukan Finish job dan kirimkan hasil pekerjaan anda ke pemilik pekerjaan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Pengambilan Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Step 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Pilih Pekerjaan yang anda inginkan yang terdapat di dalam list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Step 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Ambil Pekerjaan yang anda inginkan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Step 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Nego harga yang anda inginkan (bila menurut anda harga tidak sesuai) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Step 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Setelah selesai negosiasi harga, tinggal menunggu konfirmasi dari pemilik pekerjaan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Step 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Apabila sudah sesuai antara anda dengan pemilik pekerjaan, pekerjaan tersebut tinggal anda kerjakan selama batas waktu yang ditentukan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Step 6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Setelah pekerjaan selesai, lakukan Finish job dan kirimkan hasil pekerjaan anda ke pemilik pekerjaan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Raleway:200,300,400,500,600\");\n\n\n\nbody[_ngcontent-%COMP%] {\r\n  -ms-overflow-style: scrollbar; }\n@media screen and (max-width: 480px) {\r\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    min-width: 320px; } }\nhtml[_ngcontent-%COMP%] {\r\n  box-sizing: border-box; }\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n  box-sizing: inherit; }\nbody[_ngcontent-%COMP%] {\r\n  background: #ffffff; }\nbody.is-preload[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], body.is-preload[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, body.is-preload[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\r\n  animation: none !important;\r\n  transition: none !important; }\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline; }\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\r\n  display: block; }\nbody[_ngcontent-%COMP%] {\r\n  line-height: 1; }\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\r\n  list-style: none; }\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\r\n  quotes: none; }\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  content: none; }\ntable[_ngcontent-%COMP%] {\r\n  border-collapse: collapse;\r\n  border-spacing: 0; }\nbody[_ngcontent-%COMP%] {\r\n  -webkit-text-size-adjust: none; }\nmark[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  color: inherit; }\ninput[_ngcontent-%COMP%]::-moz-focus-inner {\r\n  border: 0;\r\n  padding: 0; }\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none; }\n\nhtml[_ngcontent-%COMP%] {\r\n  font-size: 13pt; }\n@media screen and (max-width: 1680px) {\r\n  html[_ngcontent-%COMP%] {\r\n    font-size: 11pt; } }\n@media screen and (max-width: 980px) {\r\n  html[_ngcontent-%COMP%] {\r\n    font-size: 12pt; } }\n@media screen and (max-width: 480px) {\r\n  html[_ngcontent-%COMP%] {\r\n    font-size: 11pt; } }\nbody[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  color: #444444; }\nbody[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  font-family: \"Raleway\", Arial, Helvetica, sans-serif;\r\n  font-weight: 400;\r\n  font-size: 1rem;\r\n  line-height: 1.65; }\na[_ngcontent-%COMP%] {\r\n  transition: color 0.2s ease-in-out;\r\n  text-decoration: underline; }\na[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none; }\nstrong[_ngcontent-%COMP%], b[_ngcontent-%COMP%] {\r\n  font-weight: 600; }\nem[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\r\n  font-style: italic; }\np[_ngcontent-%COMP%] {\r\n  margin: 0 0 2rem 0; }\nheader.special[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 4rem; }\nheader.special[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  max-width: 75%;\r\n  margin-left: auto;\r\n  margin-right: auto; }\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n  line-height: 1.5;\r\n  text-transform: uppercase;\r\n  margin: 0 0 1.5rem 0; }\nh1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n  text-decoration: none; }\nh1[_ngcontent-%COMP%] {\r\n  font-size: 3rem;\r\n  line-height: 1.2; }\nh2[_ngcontent-%COMP%] {\r\n  font-size: 2.25rem;\r\n  line-height: 1.3; }\nh3[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem; }\nh4[_ngcontent-%COMP%] {\r\n  font-size: 1rem; }\nh5[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem; }\nh6[_ngcontent-%COMP%] {\r\n  font-size: 0.7rem; }\n@media screen and (max-width: 736px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 2.75rem;\r\n    line-height: 1.3; }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 1.75rem;\r\n    line-height: 1.5; }\r\n\r\n  h3[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem; } }\nsub[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  position: relative;\r\n  top: 0.5rem; }\nsup[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  position: relative;\r\n  top: -0.5rem; }\nblockquote[_ngcontent-%COMP%] {\r\n  border-left: solid 0.5rem;\r\n  font-style: italic;\r\n  margin: 0 0 2rem 0;\r\n  padding: 1rem 0 1rem 2rem; }\ncode[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  border: solid 1px;\r\n  font-family: \"Courier New\", monospace;\r\n  font-size: 0.9rem;\r\n  margin: 0 0.25rem;\r\n  padding: 0.25rem 0.65rem; }\npre[_ngcontent-%COMP%] {\r\n  -webkit-overflow-scrolling: touch;\r\n  font-family: \"Courier New\", monospace;\r\n  font-size: 0.9rem;\r\n  margin: 0 0 2rem 0; }\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\r\n  display: block;\r\n  line-height: 1.75;\r\n  padding: 1rem 1.5rem;\r\n  overflow-x: auto; }\nhr[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  border-bottom: solid 1px;\r\n  margin: 2rem 0; }\nhr.major[_ngcontent-%COMP%] {\r\n  margin: 4rem 0; }\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  color: #555555; }\na[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\nstrong[_ngcontent-%COMP%], b[_ngcontent-%COMP%] {\r\n  color: #555555; }\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  color: #555555; }\nblockquote[_ngcontent-%COMP%] {\r\n  border-left-color: rgba(0, 0, 0, 0.25); }\ncode[_ngcontent-%COMP%] {\r\n  background: rgba(0, 0, 0, 0.075);\r\n  border-color: rgba(0, 0, 0, 0.25); }\nhr[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(0, 0, 0, 0.25); }\n\n.inner[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  width: 75rem;\r\n  max-width: calc(100% - 6rem); }\n@media screen and (max-width: 480px) {\r\n  .inner[_ngcontent-%COMP%] {\r\n    max-width: calc(100% - 3rem); } }\n\ninput[type=\"submit\"][_ngcontent-%COMP%], input[type=\"reset\"][_ngcontent-%COMP%], input[type=\"button\"][_ngcontent-%COMP%], button[_ngcontent-%COMP%], .button[_ngcontent-%COMP%] {\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;\r\n  border: 0;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-weight: 600;\r\n  height: 3.25rem;\r\n  line-height: 3.25rem;\r\n  padding: 0 1.75rem;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  white-space: nowrap; }\ninput[type=\"submit\"].small[_ngcontent-%COMP%], input[type=\"reset\"].small[_ngcontent-%COMP%], input[type=\"button\"].small[_ngcontent-%COMP%], button.small[_ngcontent-%COMP%], .button.small[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  height: 2.4375rem;\r\n  line-height: 2.4375rem;\r\n  padding: 0 1.25rem; }\ninput[type=\"submit\"].large[_ngcontent-%COMP%], input[type=\"reset\"].large[_ngcontent-%COMP%], input[type=\"button\"].large[_ngcontent-%COMP%], button.large[_ngcontent-%COMP%], .button.large[_ngcontent-%COMP%] {\r\n  font-size: 1.35rem;\r\n  height: 4.0625rem;\r\n  line-height: 4.0625rem;\r\n  padding: 0 2rem; }\ninput[type=\"submit\"].wide[_ngcontent-%COMP%], input[type=\"reset\"].wide[_ngcontent-%COMP%], input[type=\"button\"].wide[_ngcontent-%COMP%], button.wide[_ngcontent-%COMP%], .button.wide[_ngcontent-%COMP%] {\r\n  min-width: 13rem; }\ninput[type=\"submit\"].icon[_ngcontent-%COMP%]:before, input[type=\"reset\"].icon[_ngcontent-%COMP%]:before, input[type=\"button\"].icon[_ngcontent-%COMP%]:before, button.icon[_ngcontent-%COMP%]:before, .button.icon[_ngcontent-%COMP%]:before {\r\n  margin-right: 0.5rem; }\ninput[type=\"submit\"].fit[_ngcontent-%COMP%], input[type=\"reset\"].fit[_ngcontent-%COMP%], input[type=\"button\"].fit[_ngcontent-%COMP%], button.fit[_ngcontent-%COMP%], .button.fit[_ngcontent-%COMP%] {\r\n  width: 100%; }\ninput[type=\"submit\"].disabled[_ngcontent-%COMP%], input[type=\"submit\"][_ngcontent-%COMP%]:disabled, input[type=\"reset\"].disabled[_ngcontent-%COMP%], input[type=\"reset\"][_ngcontent-%COMP%]:disabled, input[type=\"button\"].disabled[_ngcontent-%COMP%], input[type=\"button\"][_ngcontent-%COMP%]:disabled, button.disabled[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:disabled, .button.disabled[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]:disabled {\r\n  pointer-events: none;\r\n  opacity: 0.25; }\ninput[type=\"submit\"][_ngcontent-%COMP%], input[type=\"reset\"][_ngcontent-%COMP%], input[type=\"button\"][_ngcontent-%COMP%], button[_ngcontent-%COMP%], .button[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset 0 0 0 1px #555555;\r\n  color: #555555 !important; }\ninput[type=\"submit\"][_ngcontent-%COMP%]:hover, input[type=\"reset\"][_ngcontent-%COMP%]:hover, input[type=\"button\"][_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 0 0 0 1px #ce1b28;\r\n  color: #ce1b28 !important; }\ninput[type=\"submit\"][_ngcontent-%COMP%]:hover:active, input[type=\"reset\"][_ngcontent-%COMP%]:hover:active, input[type=\"button\"][_ngcontent-%COMP%]:hover:active, button[_ngcontent-%COMP%]:hover:active, .button[_ngcontent-%COMP%]:hover:active {\r\n  background-color: rgba(206, 27, 40, 0.25); }\ninput[type=\"submit\"].primary[_ngcontent-%COMP%], input[type=\"reset\"].primary[_ngcontent-%COMP%], input[type=\"button\"].primary[_ngcontent-%COMP%], button.primary[_ngcontent-%COMP%], .button.primary[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n  background-color: #ce1b28;\r\n  color: #ffffff !important; }\ninput[type=\"submit\"].primary[_ngcontent-%COMP%]:hover, input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover, input[type=\"button\"].primary[_ngcontent-%COMP%]:hover, button.primary[_ngcontent-%COMP%]:hover, .button.primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #e2212f;\r\n  box-shadow: none; }\ninput[type=\"submit\"].primary[_ngcontent-%COMP%]:hover:active, input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover:active, input[type=\"button\"].primary[_ngcontent-%COMP%]:hover:active, button.primary[_ngcontent-%COMP%]:hover:active, .button.primary[_ngcontent-%COMP%]:hover:active {\r\n  background-color: #b71824; }\n\nform[_ngcontent-%COMP%] {\r\n  margin: 0 0 2rem 0; }\ninput[type=\"text\"][_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%], input[type=\"email\"][_ngcontent-%COMP%], input[type=\"tel\"][_ngcontent-%COMP%], input[type=\"search\"][_ngcontent-%COMP%], input[type=\"url\"][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  border-radius: 4px;\r\n  border: none;\r\n  border: solid 1px;\r\n  color: inherit;\r\n  display: block;\r\n  outline: 0;\r\n  padding: 0 1rem;\r\n  text-decoration: none;\r\n  width: 100%; }\ninput[type=\"text\"][_ngcontent-%COMP%]:invalid, input[type=\"password\"][_ngcontent-%COMP%]:invalid, input[type=\"email\"][_ngcontent-%COMP%]:invalid, input[type=\"tel\"][_ngcontent-%COMP%]:invalid, input[type=\"search\"][_ngcontent-%COMP%]:invalid, input[type=\"url\"][_ngcontent-%COMP%]:invalid, select[_ngcontent-%COMP%]:invalid, textarea[_ngcontent-%COMP%]:invalid {\r\n  box-shadow: none; }\nlabel[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  margin: 0 0 1rem 0; }\ninput[type=\"text\"][_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%], input[type=\"email\"][_ngcontent-%COMP%], input[type=\"tel\"][_ngcontent-%COMP%], input[type=\"search\"][_ngcontent-%COMP%], input[type=\"url\"][_ngcontent-%COMP%] {\r\n  height: 3.25rem; }\nselect[_ngcontent-%COMP%] {\r\n  background-size: 1.25rem;\r\n  background-repeat: no-repeat;\r\n  background-position: calc(100% - 1rem) center;\r\n  height: 3.25rem;\r\n  padding-right: 3.25rem;\r\n  text-overflow: ellipsis; }\nselect[_ngcontent-%COMP%]:focus::-ms-value {\r\n  background-color: transparent; }\nselect[_ngcontent-%COMP%]::-ms-expand {\r\n  display: none; }\ntextarea[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 1rem; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%], input[type=\"radio\"][_ngcontent-%COMP%] {\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  display: block;\r\n  float: left;\r\n  margin-right: -2rem;\r\n  opacity: 0;\r\n  width: 1rem;\r\n  z-index: -1; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  padding-left: 2.825rem;\r\n  padding-right: 0.875rem;\r\n  position: relative; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: FontAwesome;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  text-transform: none !important; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  border-radius: 4px;\r\n  border: solid 1px;\r\n  content: '';\r\n  display: inline-block;\r\n  height: 1.95rem;\r\n  left: 0;\r\n  line-height: 1.86875rem;\r\n  position: absolute;\r\n  text-align: center;\r\n  top: -0.1625rem;\r\n  width: 1.95rem; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  content: '\\f00c'; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  border-radius: 4px; }\ninput[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  border-radius: 100%; }\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  opacity: 1.0; }\n[_ngcontent-%COMP%]:-moz-placeholder {\r\n  opacity: 1.0; }\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n  opacity: 1.0; }\n[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  opacity: 1.0; }\nlabel[_ngcontent-%COMP%] {\r\n  color: #555555; }\ninput[type=\"text\"][_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%], input[type=\"email\"][_ngcontent-%COMP%], input[type=\"tel\"][_ngcontent-%COMP%], input[type=\"search\"][_ngcontent-%COMP%], input[type=\"url\"][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.075);\r\n  border-color: rgba(0, 0, 0, 0.25); }\ninput[type=\"text\"][_ngcontent-%COMP%]:focus, input[type=\"password\"][_ngcontent-%COMP%]:focus, input[type=\"email\"][_ngcontent-%COMP%]:focus, input[type=\"tel\"][_ngcontent-%COMP%]:focus, input[type=\"search\"][_ngcontent-%COMP%]:focus, input[type=\"url\"][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\nselect[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(0, 0, 0, 0.25)' /%3E%3C/svg%3E\"); }\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  color: #444444;\r\n  background-color: #ffffff; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  color: #444444; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  background: rgba(0, 0, 0, 0.075);\r\n  border-color: rgba(0, 0, 0, 0.25); }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  background-color: #ce1b28;\r\n  border-color: #ce1b28;\r\n  color: #ffffff; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, input[type=\"radio\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  color: #bbbbbb !important; }\n[_ngcontent-%COMP%]:-moz-placeholder {\r\n  color: #bbbbbb !important; }\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: #bbbbbb !important; }\n[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  color: #bbbbbb !important; }\n\nol[_ngcontent-%COMP%] {\r\n  list-style: decimal;\r\n  margin: 0 0 2rem 0;\r\n  padding-left: 1.25rem; }\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding-left: 0.25rem; }\nul[_ngcontent-%COMP%] {\r\n  list-style: disc;\r\n  margin: 0 0 2rem 0;\r\n  padding-left: 1rem; }\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding-left: 0.325rem; }\nul.plain[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding-left: 0; }\nul.plain[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin-bottom: 1rem; }\nul.plain[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  color: #ffffff;\r\n  display: inline-block;\r\n  margin-right: 1rem;\r\n  text-align: center;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  line-height: 2rem;\r\n  background: rgba(0, 0, 0, 0.5); }\nul.alt[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding-left: 0; }\nul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-top: solid 1px;\r\n  padding: 0.75rem 0; }\nul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\r\n  border-top: 0;\r\n  padding-top: 0; }\nul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n  padding-bottom: 0; }\ndl[_ngcontent-%COMP%] {\r\n  margin: 0 0 2rem 0; }\ndl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: 600;\r\n  margin: 0 0 1rem 0; }\ndl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\r\n  margin-left: 1.5rem; }\nul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(0, 0, 0, 0.25); }\n\n.table-wrapper[_ngcontent-%COMP%] {\r\n  -webkit-overflow-scrolling: touch;\r\n  overflow-x: auto; }\ntable[_ngcontent-%COMP%] {\r\n  margin: 0 0 2rem 0;\r\n  width: 100%; }\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border: solid 1px;\r\n  border-left: 0;\r\n  border-right: 0; }\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 0.75rem; }\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n  padding: 0 0.75rem 0.75rem 0.75rem;\r\n  text-align: left; }\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: solid 2px; }\ntable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\r\n  border-top: solid 2px; }\ntable.alt[_ngcontent-%COMP%] {\r\n  border-collapse: separate; }\ntable.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border: solid 1px;\r\n  border-left-width: 0;\r\n  border-top-width: 0; }\ntable.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\r\n  border-left-width: 1px; }\ntable.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\r\n  border-top-width: 1px; }\ntable.alt[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0; }\ntable.alt[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\r\n  border-top: 0; }\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-color: rgba(0, 0, 0, 0.25); }\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n  background-color: rgba(0, 0, 0, 0.075); }\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  color: #555555; }\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(0, 0, 0, 0.25); }\ntable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(0, 0, 0, 0.25); }\ntable.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-color: rgba(0, 0, 0, 0.25); }\n\n.highlights[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 2.5rem 0;\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -moz-align-items: -moz-stretch;\r\n  -ms-align-items: -ms-stretch;\r\n  align-items: stretch; }\n.highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  -ms-flex-shrink: 1;\r\n  flex-shrink: 1;\r\n  -moz-flex-grow: 0;\r\n  -ms-flex-grow: 0;\r\n  flex-grow: 0; }\n.highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  width: 33.3333333333%; }\n.highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  width: calc(33.3333333333% + 1rem); }\n.highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 3) {\r\n  padding-top: 0; }\n.highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 3) {\r\n  padding-bottom: 0; }\n.highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1) {\r\n  padding-left: 0; }\n.highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n  padding-right: 0; }\n.highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1), .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n  width: calc(33.3333333333% + -0.5rem); }\n.highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  height: 100%;\r\n  padding: 3rem;\r\n  text-align: center; }\n.highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  font-size: 5rem; }\n.highlights[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n  margin-bottom: 0; }\n@media screen and (max-width: 980px) {\r\n  .highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  .highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(33.3333333333% + 0.6666666667rem); }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 3) {\r\n    padding-top: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 3) {\r\n    padding-bottom: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1) {\r\n    padding-left: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding-right: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1), .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding: 1rem;\r\n    width: calc(50% + 1rem); }\r\n  .highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(50% + 1rem); }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 2) {\r\n    padding-top: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 2) {\r\n    padding-bottom: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n    padding-left: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    padding-right: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1), .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    width: calc(50% + 0rem); }\r\n  .highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 2rem; } }\n@media screen and (max-width: 736px) {\r\n  .highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  .highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(33.3333333333% + 0.6666666667rem); }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 3) {\r\n    padding-top: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 3) {\r\n    padding-bottom: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1) {\r\n    padding-left: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding-right: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1), .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding: 1rem;\r\n    width: calc(100% + 2rem); }\r\n  .highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(50% + 1rem); }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 2) {\r\n    padding-top: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 2) {\r\n    padding-bottom: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n    padding-left: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    padding-right: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1), .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    padding: 1rem;\r\n    width: calc(100% + 2rem); }\r\n  .highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(100% + 2rem); }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 1) {\r\n    padding-top: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 1) {\r\n    padding-bottom: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n + 1) {\r\n    padding-left: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n) {\r\n    padding-right: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n + 1), .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n) {\r\n    width: calc(100% + 1rem); } }\n.highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: url('img-06.jpg');\r\n  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.025); }\n\n.testimonials[_ngcontent-%COMP%] {\r\n  margin: 2.5rem 0;\r\n  width: 100%;\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -moz-align-items: -moz-stretch;\r\n  -ms-align-items: -ms-stretch;\r\n  align-items: stretch; }\n.testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  -ms-flex-shrink: 1;\r\n  flex-shrink: 1;\r\n  -moz-flex-grow: 0;\r\n  -ms-flex-grow: 0;\r\n  flex-grow: 0; }\n.testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  width: 33.3333333333%; }\n.testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  width: calc(33.3333333333% + 1rem); }\n.testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 3) {\r\n  padding-top: 0; }\n.testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 3) {\r\n  padding-bottom: 0; }\n.testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1) {\r\n  padding-left: 0; }\n.testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n  padding-right: 0; }\n.testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1), .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n  width: calc(33.3333333333% + -0.5rem); }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  height: 100%;\r\n  padding: 3rem; }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  -moz-align-items: center;\r\n  -ms-align-items: center;\r\n  align-items: center; }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n  margin: 0; }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  margin-right: 2rem;\r\n  width: 20%; }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 100%;\r\n  max-width: 100%; }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%] {\r\n  font-size: 0.75rem; }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\r\n  margin: 0; }\n.testimonials[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n  margin-bottom: 0; }\n@media screen and (max-width: 980px) {\r\n  .testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  .testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(33.3333333333% + 0.6666666667rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 3) {\r\n    padding-top: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 3) {\r\n    padding-bottom: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1) {\r\n    padding-left: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding-right: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1), .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding: 1rem;\r\n    width: calc(50% + 1rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(50% + 1rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 2) {\r\n    padding-top: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 2) {\r\n    padding-bottom: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n    padding-left: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    padding-right: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1), .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    width: calc(50% + 0rem); }\r\n  .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 2rem; } }\n@media screen and (max-width: 736px) {\r\n  .testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  .testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(33.3333333333% + 0.6666666667rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 3) {\r\n    padding-top: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 3) {\r\n    padding-bottom: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1) {\r\n    padding-left: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding-right: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1), .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding: 1rem;\r\n    width: calc(100% + 2rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(50% + 1rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 2) {\r\n    padding-top: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 2) {\r\n    padding-bottom: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n    padding-left: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    padding-right: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1), .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    padding: 1rem;\r\n    width: calc(100% + 2rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(100% + 2rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 1) {\r\n    padding-top: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 1) {\r\n    padding-bottom: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n + 1) {\r\n    padding-left: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n) {\r\n    padding-right: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n + 1), .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n) {\r\n    width: calc(100% + 1rem); } }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #ffffff;\r\n  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.025); }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n\nul.actions[_ngcontent-%COMP%] {\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  cursor: default;\r\n  list-style: none;\r\n  margin-left: -1rem;\r\n  padding-left: 0; }\nul.actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 0 0 0 1rem;\r\n  vertical-align: middle; }\nul.actions.special[_ngcontent-%COMP%] {\r\n  -moz-justify-content: center;\r\n  -ms-justify-content: center;\r\n  justify-content: center;\r\n  width: calc(100% + 1rem); }\nul.actions.stacked[_ngcontent-%COMP%] {\r\n  -moz-flex-direction: column;\r\n  flex-direction: column;\r\n  margin-left: 0; }\nul.actions.stacked[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 1.3rem 0 0 0; }\nul.actions.stacked[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\r\n  padding-top: 0; }\nul.actions.fit[_ngcontent-%COMP%] {\r\n  width: calc(100% + 1rem); }\nul.actions.fit[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  -moz-flex-grow: 1;\r\n  -ms-flex-grow: 1;\r\n  flex-grow: 1;\r\n  -ms-flex-shrink: 1;\r\n  flex-shrink: 1;\r\n  width: 100%; }\nul.actions.fit[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  width: 100%; }\nul.actions.fit.stacked[_ngcontent-%COMP%] {\r\n  width: 100%; }\n@media screen and (max-width: 480px) {\r\n  ul.actions[_ngcontent-%COMP%]:not(.fixed) {\r\n    -moz-flex-direction: column;\r\n    flex-direction: column;\r\n    margin-left: 0;\r\n    width: 100% !important; }\r\n  ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%] {\r\n    -moz-flex-grow: 1;\r\n    -ms-flex-grow: 1;\r\n    flex-grow: 1;\r\n    -ms-flex-shrink: 1;\r\n    flex-shrink: 1;\r\n    padding: 1rem 0 0 0;\r\n    text-align: center;\r\n    width: 100%; }\r\n  ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]:first-child {\r\n    padding-top: 0; }\r\n  ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%], ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%], ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=\"submit\"].icon[_ngcontent-%COMP%]:before, ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=\"reset\"].icon[_ngcontent-%COMP%]:before, ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=\"button\"].icon[_ngcontent-%COMP%]:before, ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   button.icon[_ngcontent-%COMP%]:before, ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   .button.icon[_ngcontent-%COMP%]:before {\r\n    margin-left: -0.5rem; } }\n\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  box-sizing: border-box; }\n.row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  box-sizing: border-box; }\n.row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n  margin-bottom: 0; }\n.row[_ngcontent-%COMP%]    > .imp[_ngcontent-%COMP%] {\r\n  order: -1; }\n.row[_ngcontent-%COMP%]    > .col-1[_ngcontent-%COMP%] {\r\n  width: 8.3333333333%; }\n.row[_ngcontent-%COMP%]    > .off-1[_ngcontent-%COMP%] {\r\n  margin-left: 8.3333333333%; }\n.row[_ngcontent-%COMP%]    > .col-2[_ngcontent-%COMP%] {\r\n  width: 16.6666666667%; }\n.row[_ngcontent-%COMP%]    > .off-2[_ngcontent-%COMP%] {\r\n  margin-left: 16.6666666667%; }\n.row[_ngcontent-%COMP%]    > .col-3[_ngcontent-%COMP%] {\r\n  width: 25%; }\n.row[_ngcontent-%COMP%]    > .off-3[_ngcontent-%COMP%] {\r\n  margin-left: 25%; }\n.row[_ngcontent-%COMP%]    > .col-4[_ngcontent-%COMP%] {\r\n  width: 33.3333333333%; }\n.row[_ngcontent-%COMP%]    > .off-4[_ngcontent-%COMP%] {\r\n  margin-left: 33.3333333333%; }\n.row[_ngcontent-%COMP%]    > .col-5[_ngcontent-%COMP%] {\r\n  width: 41.6666666667%; }\n.row[_ngcontent-%COMP%]    > .off-5[_ngcontent-%COMP%] {\r\n  margin-left: 41.6666666667%; }\n.row[_ngcontent-%COMP%]    > .col-6[_ngcontent-%COMP%] {\r\n  width: 50%; }\n.row[_ngcontent-%COMP%]    > .off-6[_ngcontent-%COMP%] {\r\n  margin-left: 50%; }\n.row[_ngcontent-%COMP%]    > .col-7[_ngcontent-%COMP%] {\r\n  width: 58.3333333333%; }\n.row[_ngcontent-%COMP%]    > .off-7[_ngcontent-%COMP%] {\r\n  margin-left: 58.3333333333%; }\n.row[_ngcontent-%COMP%]    > .col-8[_ngcontent-%COMP%] {\r\n  width: 66.6666666667%; }\n.row[_ngcontent-%COMP%]    > .off-8[_ngcontent-%COMP%] {\r\n  margin-left: 66.6666666667%; }\n.row[_ngcontent-%COMP%]    > .col-9[_ngcontent-%COMP%] {\r\n  width: 75%; }\n.row[_ngcontent-%COMP%]    > .off-9[_ngcontent-%COMP%] {\r\n  margin-left: 75%; }\n.row[_ngcontent-%COMP%]    > .col-10[_ngcontent-%COMP%] {\r\n  width: 83.3333333333%; }\n.row[_ngcontent-%COMP%]    > .off-10[_ngcontent-%COMP%] {\r\n  margin-left: 83.3333333333%; }\n.row[_ngcontent-%COMP%]    > .col-11[_ngcontent-%COMP%] {\r\n  width: 91.6666666667%; }\n.row[_ngcontent-%COMP%]    > .off-11[_ngcontent-%COMP%] {\r\n  margin-left: 91.6666666667%; }\n.row[_ngcontent-%COMP%]    > .col-12[_ngcontent-%COMP%] {\r\n  width: 100%; }\n.row[_ngcontent-%COMP%]    > .off-12[_ngcontent-%COMP%] {\r\n  margin-left: 100%; }\n.row.gtr-0[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-left: 0rem; }\n.row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 0 0 0 0rem; }\n.row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {\r\n  margin-top: 0rem; }\n.row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding-top: 0rem; }\n.row.gtr-25[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-left: -0.75rem; }\n.row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 0 0 0 0.75rem; }\n.row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {\r\n  margin-top: -0.75rem; }\n.row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding-top: 0.75rem; }\n.row.gtr-50[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-left: -1.5rem; }\n.row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 0 0 0 1.5rem; }\n.row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {\r\n  margin-top: -1.5rem; }\n.row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding-top: 1.5rem; }\n.row[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-left: -3rem; }\n.row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 0 0 0 3rem; }\n.row.gtr-uniform[_ngcontent-%COMP%] {\r\n  margin-top: -3rem; }\n.row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding-top: 3rem; }\n.row.gtr-150[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-left: -4.5rem; }\n.row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 0 0 0 4.5rem; }\n.row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {\r\n  margin-top: -4.5rem; }\n.row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding-top: 4.5rem; }\n.row.gtr-200[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-left: -6rem; }\n.row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 0 0 0 6rem; }\n.row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {\r\n  margin-top: -6rem; }\n.row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding-top: 6rem; }\n@media screen and (max-width: 1680px) {\r\n  .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    box-sizing: border-box; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    box-sizing: border-box; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0; }\r\n\r\n  .row[_ngcontent-%COMP%]    > .imp-xlarge[_ngcontent-%COMP%] {\r\n    order: -1; }\r\n  .row[_ngcontent-%COMP%]    > .col-1-xlarge[_ngcontent-%COMP%] {\r\n    width: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-1-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-2-xlarge[_ngcontent-%COMP%] {\r\n    width: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-2-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-3-xlarge[_ngcontent-%COMP%] {\r\n    width: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .off-3-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .col-4-xlarge[_ngcontent-%COMP%] {\r\n    width: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-4-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-5-xlarge[_ngcontent-%COMP%] {\r\n    width: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-5-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-6-xlarge[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .off-6-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .col-7-xlarge[_ngcontent-%COMP%] {\r\n    width: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-7-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-8-xlarge[_ngcontent-%COMP%] {\r\n    width: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-8-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-9-xlarge[_ngcontent-%COMP%] {\r\n    width: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .off-9-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .col-10-xlarge[_ngcontent-%COMP%] {\r\n    width: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-10-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-11-xlarge[_ngcontent-%COMP%] {\r\n    width: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-11-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-12-xlarge[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  .row[_ngcontent-%COMP%]    > .off-12-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 100%; }\r\n  .row.gtr-0[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: 0rem; }\r\n  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.75rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.75rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.75rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.75rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -1.5rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 1.5rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -1.5rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 1.5rem; }\r\n  .row[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -3rem; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 3rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -3rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 3rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -4.5rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 4.5rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -4.5rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 4.5rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -6rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 6rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -6rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 6rem; } }\n@media screen and (max-width: 1280px) {\r\n  .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    box-sizing: border-box; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    box-sizing: border-box; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0; }\r\n\r\n  .row[_ngcontent-%COMP%]    > .imp-large[_ngcontent-%COMP%] {\r\n    order: -1; }\r\n  .row[_ngcontent-%COMP%]    > .col-1-large[_ngcontent-%COMP%] {\r\n    width: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-1-large[_ngcontent-%COMP%] {\r\n    margin-left: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-2-large[_ngcontent-%COMP%] {\r\n    width: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-2-large[_ngcontent-%COMP%] {\r\n    margin-left: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-3-large[_ngcontent-%COMP%] {\r\n    width: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .off-3-large[_ngcontent-%COMP%] {\r\n    margin-left: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .col-4-large[_ngcontent-%COMP%] {\r\n    width: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-4-large[_ngcontent-%COMP%] {\r\n    margin-left: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-5-large[_ngcontent-%COMP%] {\r\n    width: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-5-large[_ngcontent-%COMP%] {\r\n    margin-left: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-6-large[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .off-6-large[_ngcontent-%COMP%] {\r\n    margin-left: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .col-7-large[_ngcontent-%COMP%] {\r\n    width: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-7-large[_ngcontent-%COMP%] {\r\n    margin-left: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-8-large[_ngcontent-%COMP%] {\r\n    width: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-8-large[_ngcontent-%COMP%] {\r\n    margin-left: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-9-large[_ngcontent-%COMP%] {\r\n    width: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .off-9-large[_ngcontent-%COMP%] {\r\n    margin-left: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .col-10-large[_ngcontent-%COMP%] {\r\n    width: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-10-large[_ngcontent-%COMP%] {\r\n    margin-left: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-11-large[_ngcontent-%COMP%] {\r\n    width: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-11-large[_ngcontent-%COMP%] {\r\n    margin-left: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-12-large[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  .row[_ngcontent-%COMP%]    > .off-12-large[_ngcontent-%COMP%] {\r\n    margin-left: 100%; }\r\n  .row.gtr-0[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: 0rem; }\r\n  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.375rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.375rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.375rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.375rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.75rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.75rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.75rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.75rem; }\r\n  .row[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -1.5rem; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 1.5rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -1.5rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 1.5rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -2.25rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 2.25rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -2.25rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 2.25rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -3rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 3rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -3rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 3rem; } }\n@media screen and (max-width: 980px) {\r\n  .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    box-sizing: border-box; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    box-sizing: border-box; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0; }\r\n\r\n  .row[_ngcontent-%COMP%]    > .imp-medium[_ngcontent-%COMP%] {\r\n    order: -1; }\r\n  .row[_ngcontent-%COMP%]    > .col-1-medium[_ngcontent-%COMP%] {\r\n    width: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-1-medium[_ngcontent-%COMP%] {\r\n    margin-left: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-2-medium[_ngcontent-%COMP%] {\r\n    width: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-2-medium[_ngcontent-%COMP%] {\r\n    margin-left: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-3-medium[_ngcontent-%COMP%] {\r\n    width: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .off-3-medium[_ngcontent-%COMP%] {\r\n    margin-left: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .col-4-medium[_ngcontent-%COMP%] {\r\n    width: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-4-medium[_ngcontent-%COMP%] {\r\n    margin-left: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-5-medium[_ngcontent-%COMP%] {\r\n    width: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-5-medium[_ngcontent-%COMP%] {\r\n    margin-left: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-6-medium[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .off-6-medium[_ngcontent-%COMP%] {\r\n    margin-left: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .col-7-medium[_ngcontent-%COMP%] {\r\n    width: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-7-medium[_ngcontent-%COMP%] {\r\n    margin-left: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-8-medium[_ngcontent-%COMP%] {\r\n    width: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-8-medium[_ngcontent-%COMP%] {\r\n    margin-left: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-9-medium[_ngcontent-%COMP%] {\r\n    width: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .off-9-medium[_ngcontent-%COMP%] {\r\n    margin-left: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .col-10-medium[_ngcontent-%COMP%] {\r\n    width: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-10-medium[_ngcontent-%COMP%] {\r\n    margin-left: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-11-medium[_ngcontent-%COMP%] {\r\n    width: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-11-medium[_ngcontent-%COMP%] {\r\n    margin-left: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-12-medium[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  .row[_ngcontent-%COMP%]    > .off-12-medium[_ngcontent-%COMP%] {\r\n    margin-left: 100%; }\r\n  .row.gtr-0[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: 0rem; }\r\n  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.375rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.375rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.375rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.375rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.75rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.75rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.75rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.75rem; }\r\n  .row[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -1.5rem; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 1.5rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -1.5rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 1.5rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -2.25rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 2.25rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -2.25rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 2.25rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -3rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 3rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -3rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 3rem; } }\n@media screen and (max-width: 736px) {\r\n  .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    box-sizing: border-box; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    box-sizing: border-box; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0; }\r\n\r\n  .row[_ngcontent-%COMP%]    > .imp-small[_ngcontent-%COMP%] {\r\n    order: -1; }\r\n  .row[_ngcontent-%COMP%]    > .col-1-small[_ngcontent-%COMP%] {\r\n    width: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-1-small[_ngcontent-%COMP%] {\r\n    margin-left: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-2-small[_ngcontent-%COMP%] {\r\n    width: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-2-small[_ngcontent-%COMP%] {\r\n    margin-left: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-3-small[_ngcontent-%COMP%] {\r\n    width: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .off-3-small[_ngcontent-%COMP%] {\r\n    margin-left: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .col-4-small[_ngcontent-%COMP%] {\r\n    width: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-4-small[_ngcontent-%COMP%] {\r\n    margin-left: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-5-small[_ngcontent-%COMP%] {\r\n    width: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-5-small[_ngcontent-%COMP%] {\r\n    margin-left: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-6-small[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .off-6-small[_ngcontent-%COMP%] {\r\n    margin-left: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .col-7-small[_ngcontent-%COMP%] {\r\n    width: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-7-small[_ngcontent-%COMP%] {\r\n    margin-left: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-8-small[_ngcontent-%COMP%] {\r\n    width: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-8-small[_ngcontent-%COMP%] {\r\n    margin-left: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-9-small[_ngcontent-%COMP%] {\r\n    width: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .off-9-small[_ngcontent-%COMP%] {\r\n    margin-left: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .col-10-small[_ngcontent-%COMP%] {\r\n    width: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-10-small[_ngcontent-%COMP%] {\r\n    margin-left: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-11-small[_ngcontent-%COMP%] {\r\n    width: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-11-small[_ngcontent-%COMP%] {\r\n    margin-left: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-12-small[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  .row[_ngcontent-%COMP%]    > .off-12-small[_ngcontent-%COMP%] {\r\n    margin-left: 100%; }\r\n  .row.gtr-0[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: 0rem; }\r\n  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.3125rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.3125rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.3125rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.3125rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.625rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.625rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.625rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.625rem; }\r\n  .row[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -1.25rem; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 1.25rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -1.25rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 1.25rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -1.875rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 1.875rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -1.875rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 1.875rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -2.5rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 2.5rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -2.5rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 2.5rem; } }\n@media screen and (max-width: 480px) {\r\n  .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    box-sizing: border-box; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    box-sizing: border-box; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0; }\r\n\r\n  .row[_ngcontent-%COMP%]    > .imp-xsmall[_ngcontent-%COMP%] {\r\n    order: -1; }\r\n  .row[_ngcontent-%COMP%]    > .col-1-xsmall[_ngcontent-%COMP%] {\r\n    width: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-1-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-2-xsmall[_ngcontent-%COMP%] {\r\n    width: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-2-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-3-xsmall[_ngcontent-%COMP%] {\r\n    width: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .off-3-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .col-4-xsmall[_ngcontent-%COMP%] {\r\n    width: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-4-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-5-xsmall[_ngcontent-%COMP%] {\r\n    width: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-5-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-6-xsmall[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .off-6-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .col-7-xsmall[_ngcontent-%COMP%] {\r\n    width: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-7-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-8-xsmall[_ngcontent-%COMP%] {\r\n    width: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-8-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-9-xsmall[_ngcontent-%COMP%] {\r\n    width: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .off-9-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .col-10-xsmall[_ngcontent-%COMP%] {\r\n    width: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-10-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-11-xsmall[_ngcontent-%COMP%] {\r\n    width: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-11-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-12-xsmall[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  .row[_ngcontent-%COMP%]    > .off-12-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 100%; }\r\n  .row.gtr-0[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: 0rem; }\r\n  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.3125rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.3125rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.3125rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.3125rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.625rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.625rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.625rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.625rem; }\r\n  .row[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -1.25rem; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 1.25rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -1.25rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 1.25rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -1.875rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 1.875rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -1.875rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 1.875rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -2.5rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 2.5rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -2.5rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 2.5rem; } }\n\n.icon[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  border-bottom: none;\r\n  position: relative; }\n.icon[_ngcontent-%COMP%]:before {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: FontAwesome;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  text-transform: none !important; }\n.icon[_ngcontent-%COMP%]    > .label[_ngcontent-%COMP%] {\r\n  display: none; }\n\nul.icons[_ngcontent-%COMP%] {\r\n  cursor: default;\r\n  list-style: none;\r\n  padding-left: 0; }\nul.icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 0 1rem 0 0; }\nul.icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n  padding-right: 0; }\nul.icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {\r\n  font-size: 2rem; }\n\n.image[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  border: 0;\r\n  display: inline-block;\r\n  position: relative; }\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  display: block; }\n.image.left[_ngcontent-%COMP%], .image.right[_ngcontent-%COMP%] {\r\n  max-width: 40%; }\n.image.left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .image.right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%; }\n.image.left[_ngcontent-%COMP%] {\r\n  float: left;\r\n  margin: 0 2rem 2rem 0;\r\n  top: 0.25rem; }\n.image.right[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin: 0 0 2rem 2rem;\r\n  top: 0.25rem; }\n.image.fit[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0 0 2rem 0;\r\n  width: 100%; }\n.image.fit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%; }\n.image.main[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0 0 3rem 0;\r\n  width: 100%; }\n.image.main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%; }\n\n.wrapper[_ngcontent-%COMP%] {\r\n  padding: 8rem 0 6rem 0 ;\r\n  position: relative;\r\n  z-index: 1; }\n@media screen and (max-width: 1280px) {\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    padding: 4rem 0 2rem 0 ; } }\n@media screen and (max-width: 736px) {\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    padding: 3rem 0 1rem 0 ; } }\n@media screen and (max-width: 480px) {\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    padding: 2rem 0 0.1rem 0 ; } }\n\n#banner[_ngcontent-%COMP%] {\r\n  -ms-flex-align: center;\r\n  -ms-flex-pack: center;\r\n  background-color: #111111;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  -moz-align-items: center;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  -moz-justify-content: center;\r\n  -ms-justify-content: center;\r\n  justify-content: center;\r\n  background-image: url('img-01.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border-top: 0;\r\n  display: -ms-flexbox;\r\n  height: 35rem !important;\r\n  min-height: 35rem;\r\n  overflow: hidden;\r\n  position: relative;\r\n  text-align: center;\r\n  width: 100%;\r\n}\n#banner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#banner[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n  border-left-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset 0 0 0 1px #ffffff;\r\n  color: #ffffff !important; }\n#banner[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 0 0 0 1px #ce1b28;\r\n  color: #ce1b28 !important; }\n#banner[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover:active {\r\n  background-color: rgba(206, 27, 40, 0.25); }\n#banner[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n  background-color: #ce1b28;\r\n  color: #ffffff !important; }\n#banner[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #e2212f;\r\n  box-shadow: none; }\n#banner[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover:active {\r\n  background-color: #b71824; }\n#banner[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#banner[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, #banner[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus, #banner[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]:focus, #banner[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%]:focus, #banner[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%]:focus, #banner[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%]:focus, #banner[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, #banner[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\n#banner[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(255, 255, 255, 0.25)' /%3E%3C/svg%3E\"); }\n#banner[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  background-color: #111111; }\n#banner[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5); }\n#banner[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, #banner[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, #banner[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  background-color: #ce1b28;\r\n  border-color: #ce1b28;\r\n  color: #ffffff; }\n#banner[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, #banner[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\n#banner[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#banner[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#banner[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#banner[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#banner[_ngcontent-%COMP%]   ul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n  background-color: rgba(255, 255, 255, 0.075); }\n#banner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#banner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   table.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   .highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #111111;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#banner[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #111111;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#banner[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#banner[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%] {\r\n  transform: scale(1.0);\r\n  transition: opacity 1s ease, transform 1s ease;\r\n  opacity: 1;\r\n  position: relative;\r\n  z-index: 3; }\n#banner[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n  margin-bottom: 0; }\n#banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 4rem;\r\n  margin-bottom: 1rem; }\n#banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem; }\n#banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  text-decoration: none; }\n#banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #ffffff; }\n#banner[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n  transform: translateX(50%) translateY(50%);\r\n  bottom: 50%;\r\n  height: auto;\r\n  min-height: 100%;\r\n  min-width: 100%;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  right: 50%;\r\n  width: auto; }\n#banner[_ngcontent-%COMP%]:before {\r\n  transition: opacity 3s ease;\r\n  transition-delay: 1.25s;\r\n  background: #111111;\r\n  content: '';\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  opacity: 0.45;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 1; }\n#banner[_ngcontent-%COMP%]:after {\r\n  background: linear-gradient(135deg, #ce1b28 0%, #111111 74%);\r\n  content: ' ';\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  opacity: 0.6;\r\n  position: absolute;\r\n  top: 0;\r\n  webkit-linear-gradientidth: 100%;\r\n  width: 100%;\r\n  z-index: 1; }\n#banner.small[_ngcontent-%COMP%] {\r\n  height: 30vh !important;\r\n  min-height: 30vh; }\n@media screen and (max-width: 1280px) {\r\n  #banner[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n    display: none; } }\n@media screen and (max-width: 736px) {\r\n  #banner[_ngcontent-%COMP%] {\r\n    height: auto !important;\r\n    min-height: 0;\r\n    padding: 4rem 2rem 4rem 2rem; }\r\n  #banner[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  #banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 1.75rem;\r\n    margin-bottom: 0.5rem;\r\n    padding-bottom: 0; }\r\n  #banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem; }\r\n  #banner[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\r\n    display: none; }\r\n  #banner[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n    width: 100%; } }\n@media screen and (max-width: 480px) {\r\n  #banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1rem; } }\nbody.is-preload[_ngcontent-%COMP%]   #banner[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\r\n  transform: scale(0.99);\r\n  opacity: 0; }\nbody.is-preload[_ngcontent-%COMP%]   #banner[_ngcontent-%COMP%]:before {\r\n  opacity: 1; }\n\n#cta[_ngcontent-%COMP%] {\r\n  background-color: #ce1b28;\r\n  color: rgba(255, 255, 255, 0.75);\r\n  background-attachment: fixed;\r\n  background-image: linear-gradient(rgba(206, 27, 40, 0.25), rgba(206, 27, 40, 0.25)), url('img-07.jpg');\r\n  background-position: bottom;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n  text-align: center;\r\n  z-index: 1; }\n#cta[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#cta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#cta[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#cta[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n  border-left-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset 0 0 0 1px #ffffff;\r\n  color: #ffffff !important; }\n#cta[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(255, 255, 255, 0.1); }\n#cta[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover:active {\r\n  background-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n  background-color: #ffffff;\r\n  color: #ce1b28 !important; }\n#cta[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(255, 255, 255, 0.875);\r\n  box-shadow: none; }\n#cta[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover:active {\r\n  background-color: rgba(255, 255, 255, 0.5); }\n#cta[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#cta[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, #cta[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus, #cta[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]:focus, #cta[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%]:focus, #cta[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%]:focus, #cta[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%]:focus, #cta[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, #cta[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n  border-color: #ffffff;\r\n  box-shadow: 0 0 0 1px #ffffff; }\n#cta[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(255, 255, 255, 0.25)' /%3E%3C/svg%3E\"); }\n#cta[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.75);\r\n  background-color: #ce1b28; }\n#cta[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.75); }\n#cta[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, #cta[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, #cta[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  background-color: #ffffff;\r\n  border-color: #ffffff;\r\n  color: #ce1b28; }\n#cta[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, #cta[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before {\r\n  border-color: #ffffff;\r\n  box-shadow: 0 0 0 1px #ffffff; }\n#cta[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#cta[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#cta[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#cta[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#cta[_ngcontent-%COMP%]   ul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n  background-color: rgba(255, 255, 255, 0.075); }\n#cta[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#cta[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   table.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   .highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #ce1b28;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#cta[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #ce1b28;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#cta[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#cta[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 3; }\n@media screen and (max-width: 980px) {\r\n  #cta[_ngcontent-%COMP%] {\r\n    background-attachment: scroll; } }\n\n#footer[_ngcontent-%COMP%] {\r\n  background-color: #111111;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  padding: 8rem 0 6rem 0 ; }\n#footer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#footer[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n  border-left-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset 0 0 0 1px #ffffff;\r\n  color: #ffffff !important; }\n#footer[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 0 0 0 1px #ce1b28;\r\n  color: #ce1b28 !important; }\n#footer[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover:active {\r\n  background-color: rgba(206, 27, 40, 0.25); }\n#footer[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n  background-color: #ce1b28;\r\n  color: #ffffff !important; }\n#footer[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #e2212f;\r\n  box-shadow: none; }\n#footer[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover:active {\r\n  background-color: #b71824; }\n#footer[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#footer[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, #footer[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus, #footer[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]:focus, #footer[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%]:focus, #footer[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%]:focus, #footer[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%]:focus, #footer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, #footer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\n#footer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(255, 255, 255, 0.25)' /%3E%3C/svg%3E\"); }\n#footer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  background-color: #111111; }\n#footer[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5); }\n#footer[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, #footer[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, #footer[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  background-color: #ce1b28;\r\n  border-color: #ce1b28;\r\n  color: #ffffff; }\n#footer[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, #footer[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\n#footer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#footer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#footer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#footer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#footer[_ngcontent-%COMP%]   ul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n  background-color: rgba(255, 255, 255, 0.075); }\n#footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   table.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   .highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #111111;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#footer[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #111111;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#footer[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  text-decoration: none; }\n#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #ce1b28; }\n#footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex; }\n#footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n  width: 25%; }\n#footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:first-child {\r\n  width: 50%;\r\n  padding-right: 4rem; }\n#footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:last-child {\r\n  padding-left: 4rem; }\n#footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n  border-top: 1px solid;\r\n  font-size: 0.8rem;\r\n  opacity: 0.5;\r\n  padding: 2rem 0;\r\n  text-align: center; }\n@media screen and (max-width: 1280px) {\r\n  #footer[_ngcontent-%COMP%] {\r\n    padding: 4rem 0 2rem 0 ; } }\n@media screen and (max-width: 980px) {\r\n  #footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    flex-wrap: wrap; }\r\n  #footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  #footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:first-child {\r\n    width: 100%;\r\n    padding-right: 0; } }\n@media screen and (max-width: 736px) {\r\n  #footer[_ngcontent-%COMP%] {\r\n    padding: 3rem 0 1rem 0 ; }\r\n  #footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  #footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:last-child {\r\n    padding-left: 0; } }\n@media screen and (max-width: 480px) {\r\n  #footer[_ngcontent-%COMP%] {\r\n    padding: 2rem 0 0.1rem 0 ; } }\n\nbody[_ngcontent-%COMP%] {\r\n  padding-top: 3.25rem; }\nbody[_ngcontent-%COMP%]:before {\r\n  content: ' ';\r\n  background-image: url('img-04.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  display: block;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -1;\r\n  opacity: 0.05; }\n#header[_ngcontent-%COMP%] {\r\n  -moz-align-items: center;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  -moz-justify-content: space-between;\r\n  -ms-justify-content: space-between;\r\n  justify-content: space-between;\r\n  background: #111111;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  cursor: default;\r\n  height: 3.25rem;\r\n  left: 0;\r\n  line-height: 3.25rem;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 10001; }\n#header[_ngcontent-%COMP%]    > .logo[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  height: inherit;\r\n  line-height: inherit;\r\n  padding: 0 1.25rem;\r\n  text-decoration: none; }\n#header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n  display: inline-block;\r\n  padding: 0 0.75rem;\r\n  text-decoration: none; }\n#header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n  color: #ffffff; }\n#header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[href=\"#menu\"][_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n#header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[href=\"#menu\"][_ngcontent-%COMP%]:before {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: FontAwesome;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  text-transform: none !important; }\n#header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[href=\"#menu\"][_ngcontent-%COMP%]:before {\r\n  content: '\\f0c9';\r\n  margin: 0 0.5rem 0 0; }\n#header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    + a[href=\"#menu\"][_ngcontent-%COMP%]:last-child {\r\n  border-left: solid 1px rgba(255, 255, 255, 0.25);\r\n  margin-left: 0.5rem;\r\n  padding-left: 1.25rem; }\n#header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:last-child {\r\n  padding-right: 1.25rem; }\n@media screen and (max-width: 736px) {\r\n  #header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding: 0 0.5rem; }\r\n  #header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    + a[href=\"#menu\"][_ngcontent-%COMP%]:last-child {\r\n    margin-left: 0.25rem;\r\n    padding-left: 1rem; }\r\n  #header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:last-child {\r\n    padding-right: 1rem; } }\n@media screen and (max-width: 980px) {\r\n  body[_ngcontent-%COMP%] {\r\n    padding-top: 44px; }\r\n\r\n  #header[_ngcontent-%COMP%] {\r\n    height: 44px;\r\n    line-height: 44px; } }\n@media screen and (max-width: 480px) {\r\n  #header[_ngcontent-%COMP%] {\r\n    min-width: 320px; } }\n\n#heading[_ngcontent-%COMP%] {\r\n  -ms-flex-align: center;\r\n  -ms-flex-pack: center;\r\n  background-color: #111111;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  -moz-align-items: center;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  -moz-justify-content: center;\r\n  -ms-justify-content: center;\r\n  justify-content: center;\r\n  background-image: linear-gradient(rgba(17, 17, 17, 0.25), rgba(17, 17, 17, 0.25)), url('img-07.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border-top: 0;\r\n  display: -ms-flexbox;\r\n  height: 15rem !important;\r\n  min-height: 15rem;\r\n  overflow: hidden;\r\n  position: relative;\r\n  text-align: center;\r\n  width: 100%; }\n#heading[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#heading[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n  border-left-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset 0 0 0 1px #ffffff;\r\n  color: #ffffff !important; }\n#heading[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 0 0 0 1px #ce1b28;\r\n  color: #ce1b28 !important; }\n#heading[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover:active {\r\n  background-color: rgba(206, 27, 40, 0.25); }\n#heading[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n  background-color: #ce1b28;\r\n  color: #ffffff !important; }\n#heading[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #e2212f;\r\n  box-shadow: none; }\n#heading[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover:active {\r\n  background-color: #b71824; }\n#heading[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#heading[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, #heading[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus, #heading[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]:focus, #heading[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%]:focus, #heading[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%]:focus, #heading[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%]:focus, #heading[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, #heading[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\n#heading[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(255, 255, 255, 0.25)' /%3E%3C/svg%3E\"); }\n#heading[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  background-color: #111111; }\n#heading[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5); }\n#heading[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, #heading[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, #heading[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  background-color: #ce1b28;\r\n  border-color: #ce1b28;\r\n  color: #ffffff; }\n#heading[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, #heading[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\n#heading[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#heading[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#heading[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#heading[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#heading[_ngcontent-%COMP%]   ul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n  background-color: rgba(255, 255, 255, 0.075); }\n#heading[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#heading[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   table.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   .highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #111111;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#heading[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #111111;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#heading[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#heading[_ngcontent-%COMP%]:before {\r\n  background: linear-gradient(135deg, #ce1b28 0%, #111111 74%);\r\n  content: ' ';\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  opacity: 0.6;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 1; }\n#heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  position: relative;\r\n  z-index: 2; }\n@media screen and (max-width: 980px) {\r\n  #heading[_ngcontent-%COMP%] {\r\n    padding: 2rem; } }\n\n#main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #ffffff;\r\n  border-radius: 4px;\r\n  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.025);\r\n  margin-bottom: 2rem;\r\n  padding: 3rem; }\n@media screen and (max-width: 980px) {\r\n  #main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 2rem; } }\n@media screen and (max-width: 480px) {\r\n  #main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 1.5rem; } }\n\n#menu[_ngcontent-%COMP%] {\r\n  background-color: #111111;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  transform: translateX(20rem);\r\n  transition: transform 0.5s ease, box-shadow 0.5s ease, visibility 0.5s;\r\n  -webkit-overflow-scrolling: touch;\r\n  box-shadow: none;\r\n  height: 100%;\r\n  max-width: 80%;\r\n  overflow-y: auto;\r\n  padding: 3rem 2rem;\r\n  position: fixed;\r\n  right: 0;\r\n  top: 0;\r\n  visibility: hidden;\r\n  width: 20rem;\r\n  z-index: 10002; }\n#menu[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#menu[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#menu[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#menu[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n  border-left-color: rgba(255, 255, 255, 0.25); }\n#menu[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#menu[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#menu[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset 0 0 0 1px #ffffff;\r\n  color: #ffffff !important; }\n#menu[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 0 0 0 1px #ce1b28;\r\n  color: #ce1b28 !important; }\n#menu[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover:active {\r\n  background-color: rgba(206, 27, 40, 0.25); }\n#menu[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n  background-color: #ce1b28;\r\n  color: #ffffff !important; }\n#menu[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #e2212f;\r\n  box-shadow: none; }\n#menu[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover:active {\r\n  background-color: #b71824; }\n#menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n  margin: 0 0 1rem 0; }\n#menu[_ngcontent-%COMP%]    > ul.links[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0; }\n#menu[_ngcontent-%COMP%]    > ul.links[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  padding: 0; }\n#menu[_ngcontent-%COMP%]    > ul.links[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  border-top: solid 1px rgba(255, 255, 255, 0.25);\r\n  color: inherit;\r\n  display: block;\r\n  line-height: 3.5rem;\r\n  text-decoration: none; }\n#menu[_ngcontent-%COMP%]    > ul.links[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n  color: #ffffff; }\n#menu[_ngcontent-%COMP%]    > ul.links[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child    > a[_ngcontent-%COMP%] {\r\n  border-top: 0; }\n#menu[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  transition: color 0.2s ease-in-out;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  border: 0;\r\n  color: rgba(255, 255, 255, 0.4);\r\n  cursor: pointer;\r\n  display: block;\r\n  height: 3.25rem;\r\n  line-height: 3.25rem;\r\n  padding-right: 1.25rem;\r\n  position: absolute;\r\n  right: 0;\r\n  text-align: right;\r\n  top: 0;\r\n  vertical-align: middle;\r\n  width: 7rem; }\n#menu[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:before {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: FontAwesome;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  text-transform: none !important; }\n#menu[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:before {\r\n  content: '\\f00d';\r\n  font-size: 1.25rem; }\n#menu[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\r\n  color: #ffffff; }\n@media screen and (max-width: 736px) {\r\n  #menu[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\r\n    height: 4rem;\r\n    line-height: 4rem; } }\n@media screen and (max-width: 736px) {\r\n  #menu[_ngcontent-%COMP%] {\r\n    padding: 2.5rem 1.75rem; } }\nbody.is-menu-visible[_ngcontent-%COMP%]   #menu[_ngcontent-%COMP%] {\r\n  transform: translateX(0);\r\n  box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, 0.2);\r\n  visibility: visible; }\n/*# sourceMappingURL=data:application/json;base64,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UztFQUNULCtDQUErQztFQUMvQyxjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUIsRUFBRTtBQUN6QjtFQUNFLGNBQWMsRUFBRTtBQUNsQjtFQUNFLGFBQWEsRUFBRTtBQUNqQjtFQUNFLHFCQUFxQjtFQUlyQixrQ0FBa0M7RUFDbEMsNkNBQTZDO0VBQzdDLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixNQUFNO0VBQ04sc0JBQXNCO0VBQ3RCLFdBQVcsRUFBRTtBQUNmO0VBQ0Usa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwrQkFBK0IsRUFBRTtBQUNuQztFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBRTtBQUN0QjtFQUNFLGNBQWMsRUFBRTtBQUNsQjtFQUNFO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQixFQUFFLEVBQUU7QUFDekI7RUFDRTtJQUNFLHVCQUF1QixFQUFFLEVBQUU7QUFFL0I7RUFJRSx3QkFBd0I7RUFDeEIsMkNBQTJDO0VBQzNDLG1CQUFtQixFQUFFIiwiZmlsZSI6Im1haW4uNTUwZGNmNjYuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuQGltcG9ydCB1cmwoZm9udC1hd2Vzb21lLm1pbi5jc3MpO1xyXG4qL1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjIwMCwzMDAsNDAwLDUwMCw2MDBcIik7XHJcbi8qXHJcblx0SW5kdXN0cmlvdXMgYnkgVEVNUExBVEVEXHJcblx0dGVtcGxhdGVkLmNvIEB0ZW1wbGF0ZWRjb1xyXG5cdFJlbGVhc2VkIGZvciBmcmVlIHVuZGVyIHRoZSBDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIDMuMCBsaWNlbnNlICh0ZW1wbGF0ZWQuY28vbGljZW5zZSlcclxuKi9cclxuLyogQmFzaWMgKi9cclxuQC1tcy12aWV3cG9ydCB7XHJcbiAgd2lkdGg6IGRldmljZS13aWR0aDsgfVxyXG5ib2R5IHtcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbGJhcjsgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICBodG1sLCBib2R5IHtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7IH0gfVxyXG5odG1sIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcblxyXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDsgfVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjsgfVxyXG5ib2R5LmlzLXByZWxvYWQgKiwgYm9keS5pcy1wcmVsb2FkICo6YmVmb3JlLCBib2R5LmlzLXByZWxvYWQgKjphZnRlciB7XHJcbiAgLW1vei1hbmltYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC1tcy1hbmltYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICBhbmltYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAtbW96LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAtbXMtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDsgfVxyXG5cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCxcclxuaWZyYW1lLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLFxyXG5wcmUsIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSxcclxuY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLCBiLFxyXG51LCBpLCBjZW50ZXIsIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksIGZpZWxkc2V0LFxyXG5mb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksXHJcbnRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsXHJcbmNhbnZhcywgZGV0YWlscywgZW1iZWQsIGZpZ3VyZSwgZmlnY2FwdGlvbixcclxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksXHJcbnNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxyXG5cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcclxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jazsgfVxyXG5cclxuYm9keSB7XHJcbiAgbGluZS1oZWlnaHQ6IDE7IH1cclxuXHJcbm9sLCB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxyXG5cclxuYmxvY2txdW90ZSwgcSB7XHJcbiAgcXVvdGVzOiBub25lOyB9XHJcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLCBxOmJlZm9yZSwgcTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgY29udGVudDogbm9uZTsgfVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cclxuXHJcbmJvZHkge1xyXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTsgfVxyXG5cclxubWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IGluaGVyaXQ7IH1cclxuXHJcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMDsgfVxyXG5cclxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1zLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTsgfVxyXG5cclxuLyogVHlwb2dyYXBoeSAqL1xyXG5odG1sIHtcclxuICBmb250LXNpemU6IDEzcHQ7IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDExcHQ7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB0OyB9IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDsgfSB9XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjNDQ0NDQ0OyB9XHJcblxyXG5ib2R5LCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY1OyB9XHJcblxyXG5hIHtcclxuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcblxyXG5zdHJvbmcsIGIge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7IH1cclxuXHJcbmVtLCBpIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMCAwIDJyZW0gMDsgfVxyXG5cclxuaGVhZGVyLnNwZWNpYWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtOyB9XHJcbmhlYWRlci5zcGVjaWFsIHAge1xyXG4gIG1heC13aWR0aDogNzUlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bzsgfVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luOiAwIDAgMS41cmVtIDA7IH1cclxuaDEgYSwgaDIgYSwgaDMgYSwgaDQgYSwgaDUgYSwgaDYgYSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7IH1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMzsgfVxyXG5cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTsgfVxyXG5cclxuaDQge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxyXG5cclxuaDUge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtOyB9XHJcblxyXG5oNiB7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjc1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzsgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41OyB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTsgfSB9XHJcbnN1YiB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMC41cmVtOyB9XHJcblxyXG5zdXAge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0wLjVyZW07IH1cclxuXHJcbmJsb2NrcXVvdGUge1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAwLjVyZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIG1hcmdpbjogMCAwIDJyZW0gMDtcclxuICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAycmVtOyB9XHJcblxyXG5jb2RlIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIG1hcmdpbjogMCAwLjI1cmVtO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC42NXJlbTsgfVxyXG5cclxucHJlIHtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIG1hcmdpbjogMCAwIDJyZW0gMDsgfVxyXG5wcmUgY29kZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgb3ZlcmZsb3cteDogYXV0bzsgfVxyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XHJcbiAgbWFyZ2luOiAycmVtIDA7IH1cclxuaHIubWFqb3Ige1xyXG4gIG1hcmdpbjogNHJlbSAwOyB9XHJcblxyXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgY29sb3I6ICM1NTU1NTU7IH1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjY2UxYjI4OyB9XHJcblxyXG5zdHJvbmcsIGIge1xyXG4gIGNvbG9yOiAjNTU1NTU1OyB9XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICBjb2xvcjogIzU1NTU1NTsgfVxyXG5cclxuYmxvY2txdW90ZSB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cclxuXHJcbmNvZGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTsgfVxyXG5cclxuaHIge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cclxuXHJcbi8qIElubmVyICovXHJcbi5pbm5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDc1cmVtO1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNnJlbSk7IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuaW5uZXIge1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzcmVtKTsgfSB9XHJcblxyXG4vKiBCdXR0b24gKi9cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxyXG5idXR0b24sXHJcbi5idXR0b24ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1zLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjJzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMnMgZWFzZS1pbi1vdXQsIGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjJzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjJzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGhlaWdodDogMy4yNXJlbTtcclxuICBsaW5lLWhlaWdodDogMy4yNXJlbTtcclxuICBwYWRkaW5nOiAwIDEuNzVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0uc21hbGwsXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXS5zbWFsbCxcclxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXS5zbWFsbCxcclxuYnV0dG9uLnNtYWxsLFxyXG4uYnV0dG9uLnNtYWxsIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBoZWlnaHQ6IDIuNDM3NXJlbTtcclxuICBsaW5lLWhlaWdodDogMi40Mzc1cmVtO1xyXG4gIHBhZGRpbmc6IDAgMS4yNXJlbTsgfVxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLmxhcmdlLFxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0ubGFyZ2UsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0ubGFyZ2UsXHJcbmJ1dHRvbi5sYXJnZSxcclxuLmJ1dHRvbi5sYXJnZSB7XHJcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xyXG4gIGhlaWdodDogNC4wNjI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiA0LjA2MjVyZW07XHJcbiAgcGFkZGluZzogMCAycmVtOyB9XHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ud2lkZSxcclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLndpZGUsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0ud2lkZSxcclxuYnV0dG9uLndpZGUsXHJcbi5idXR0b24ud2lkZSB7XHJcbiAgbWluLXdpZHRoOiAxM3JlbTsgfVxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLmljb246YmVmb3JlLFxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0uaWNvbjpiZWZvcmUsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0uaWNvbjpiZWZvcmUsXHJcbmJ1dHRvbi5pY29uOmJlZm9yZSxcclxuLmJ1dHRvbi5pY29uOmJlZm9yZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07IH1cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5maXQsXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXS5maXQsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0uZml0LFxyXG5idXR0b24uZml0LFxyXG4uYnV0dG9uLmZpdCB7XHJcbiAgd2lkdGg6IDEwMCU7IH1cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5kaXNhYmxlZCwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpkaXNhYmxlZCxcclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLmRpc2FibGVkLFxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl06ZGlzYWJsZWQsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0uZGlzYWJsZWQsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl06ZGlzYWJsZWQsXHJcbmJ1dHRvbi5kaXNhYmxlZCxcclxuYnV0dG9uOmRpc2FibGVkLFxyXG4uYnV0dG9uLmRpc2FibGVkLFxyXG4uYnV0dG9uOmRpc2FibGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjI1OyB9XHJcblxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLFxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0sXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0sXHJcbmJ1dHRvbixcclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICM1NTU1NTU7XHJcbiAgY29sb3I6ICM1NTU1NTUgIWltcG9ydGFudDsgfVxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyLFxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl06aG92ZXIsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsXHJcbmJ1dHRvbjpob3ZlcixcclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNjZTFiMjg7XHJcbiAgY29sb3I6ICNjZTFiMjggIWltcG9ydGFudDsgfVxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyOmFjdGl2ZSxcclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyOmFjdGl2ZSxcclxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlcjphY3RpdmUsXHJcbmJ1dHRvbjpob3ZlcjphY3RpdmUsXHJcbi5idXR0b246aG92ZXI6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNiwgMjcsIDQwLCAwLjI1KTsgfVxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLnByaW1hcnksXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXS5wcmltYXJ5LFxyXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnksXHJcbmJ1dHRvbi5wcmltYXJ5LFxyXG4uYnV0dG9uLnByaW1hcnkge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlMWIyODtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50OyB9XHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeTpob3ZlcixcclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLnByaW1hcnk6aG92ZXIsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0ucHJpbWFyeTpob3ZlcixcclxuYnV0dG9uLnByaW1hcnk6aG92ZXIsXHJcbi5idXR0b24ucHJpbWFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyMjEyZjtcclxuICBib3gtc2hhZG93OiBub25lOyB9XHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXS5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXS5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuYnV0dG9uLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4uYnV0dG9uLnByaW1hcnk6aG92ZXI6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjcxODI0OyB9XHJcblxyXG4vKiBGb3JtICovXHJcbmZvcm0ge1xyXG4gIG1hcmdpbjogMCAwIDJyZW0gMDsgfVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5pbnB1dFt0eXBlPVwidGVsXCJdLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG5pbnB1dFt0eXBlPVwidXJsXCJdLFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tcy1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXI6IHNvbGlkIDFweDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdXRsaW5lOiAwO1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7IH1cclxuaW5wdXRbdHlwZT1cInRleHRcIl06aW52YWxpZCxcclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmludmFsaWQsXHJcbmlucHV0W3R5cGU9XCJlbWFpbFwiXTppbnZhbGlkLFxyXG5pbnB1dFt0eXBlPVwidGVsXCJdOmludmFsaWQsXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06aW52YWxpZCxcclxuaW5wdXRbdHlwZT1cInVybFwiXTppbnZhbGlkLFxyXG5zZWxlY3Q6aW52YWxpZCxcclxudGV4dGFyZWE6aW52YWxpZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMCAwIDFyZW0gMDsgfVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5pbnB1dFt0eXBlPVwidGVsXCJdLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG5pbnB1dFt0eXBlPVwidXJsXCJdIHtcclxuICBoZWlnaHQ6IDMuMjVyZW07IH1cclxuXHJcbnNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxLjI1cmVtO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMXJlbSkgY2VudGVyO1xyXG4gIGhlaWdodDogMy4yNXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAzLjI1cmVtO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XHJcbnNlbGVjdDpmb2N1czo6LW1zLXZhbHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxyXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xyXG4gIGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbnRleHRhcmVhIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07IH1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tcy1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMnJlbTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIHotaW5kZXg6IC0xOyB9XHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAyLjgyNXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjg3NXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpiZWZvcmUge1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7IH1cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IHNvbGlkIDFweDtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAxLjk1cmVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuODY4NzVyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0b3A6IC0wLjE2MjVyZW07XHJcbiAgd2lkdGg6IDEuOTVyZW07IH1cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxmMDBjJzsgfVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTsgfVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAxLjA7IH1cclxuXHJcbjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAxLjA7IH1cclxuXHJcbjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMS4wOyB9XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAxLjA7IH1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzU1NTU1NTsgfVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5pbnB1dFt0eXBlPVwidGVsXCJdLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG5pbnB1dFt0eXBlPVwidXJsXCJdLFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cclxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwidGVsXCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwidXJsXCJdOmZvY3VzLFxyXG5zZWxlY3Q6Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICNjZTFiMjg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNjZTFiMjg7IH1cclxuXHJcbnNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NwYXRoIGQ9J005LjQsMTIuM2wxMC40LDEwLjRsMTAuNC0xMC40YzAuMi0wLjIsMC41LTAuNCwwLjktMC40YzAuMywwLDAuNiwwLjEsMC45LDAuNGwzLjMsMy4zYzAuMiwwLjIsMC40LDAuNSwwLjQsMC45IGMwLDAuNC0wLjEsMC42LTAuNCwwLjlMMjAuNywzMS45Yy0wLjIsMC4yLTAuNSwwLjQtMC45LDAuNGMtMC4zLDAtMC42LTAuMS0wLjktMC40TDQuMywxNy4zYy0wLjItMC4yLTAuNC0wLjUtMC40LTAuOSBjMC0wLjQsMC4xLTAuNiwwLjQtMC45bDMuMy0zLjNjMC4yLTAuMiwwLjUtMC40LDAuOS0wLjRTOS4xLDEyLjEsOS40LDEyLjN6JyBmaWxsPSdyZ2JhKDAsIDAsIDAsIDAuMjUpJyAvJTNFJTNDL3N2ZyUzRVwiKTsgfVxyXG5zZWxlY3Qgb3B0aW9uIHtcclxuICBjb2xvcjogIzQ0NDQ0NDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB9XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwge1xyXG4gIGNvbG9yOiAjNDQ0NDQ0OyB9XHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOmJlZm9yZSxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGJvcmRlci1jb2xvcjogI2NlMWIyODtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Zm9jdXMgKyBsYWJlbDpiZWZvcmUsXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjY2UxYjI4OyB9XHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYmJiYmJiICFpbXBvcnRhbnQ7IH1cclxuXHJcbjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2JiYmJiYiAhaW1wb3J0YW50OyB9XHJcblxyXG46Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYmJiYmJiICFpbXBvcnRhbnQ7IH1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYmJiYmJiICFpbXBvcnRhbnQ7IH1cclxuXHJcbi8qIExpc3QgKi9cclxub2wge1xyXG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XHJcbiAgbWFyZ2luOiAwIDAgMnJlbSAwO1xyXG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTsgfVxyXG5vbCBsaSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtOyB9XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogZGlzYztcclxuICBtYXJnaW46IDAgMCAycmVtIDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtOyB9XHJcbnVsIGxpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuMzI1cmVtOyB9XHJcbnVsLnBsYWluIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMDsgfVxyXG51bC5wbGFpbiBsaSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxyXG51bC5wbGFpbiBsaSAuaWNvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cclxudWwuYWx0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMDsgfVxyXG51bC5hbHQgbGkge1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweDtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDA7IH1cclxudWwuYWx0IGxpOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAwOyB9XHJcbnVsLmFsdCBsaTpsYXN0LWNoaWxkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxyXG5cclxuZGwge1xyXG4gIG1hcmdpbjogMCAwIDJyZW0gMDsgfVxyXG5kbCBkdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW46IDAgMCAxcmVtIDA7IH1cclxuZGwgZGQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07IH1cclxuXHJcbnVsLmFsdCBsaSB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTsgfVxyXG5cclxuLyogVGFibGUgKi9cclxuLnRhYmxlLXdyYXBwZXIge1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBvdmVyZmxvdy14OiBhdXRvOyB9XHJcblxyXG50YWJsZSB7XHJcbiAgbWFyZ2luOiAwIDAgMnJlbSAwO1xyXG4gIHdpZHRoOiAxMDAlOyB9XHJcbnRhYmxlIHRib2R5IHRyIHtcclxuICBib3JkZXI6IHNvbGlkIDFweDtcclxuICBib3JkZXItbGVmdDogMDtcclxuICBib3JkZXItcmlnaHQ6IDA7IH1cclxudGFibGUgdGQge1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMC43NXJlbTsgfVxyXG50YWJsZSB0aCB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAwIDAuNzVyZW0gMC43NXJlbSAwLjc1cmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cclxudGFibGUgdGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweDsgfVxyXG50YWJsZSB0Zm9vdCB7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4OyB9XHJcbnRhYmxlLmFsdCB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTsgfVxyXG50YWJsZS5hbHQgdGJvZHkgdHIgdGQge1xyXG4gIGJvcmRlcjogc29saWQgMXB4O1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gIGJvcmRlci10b3Atd2lkdGg6IDA7IH1cclxudGFibGUuYWx0IHRib2R5IHRyIHRkOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItbGVmdC13aWR0aDogMXB4OyB9XHJcbnRhYmxlLmFsdCB0Ym9keSB0cjpmaXJzdC1jaGlsZCB0ZCB7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyB9XHJcbnRhYmxlLmFsdCB0aGVhZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDsgfVxyXG50YWJsZS5hbHQgdGZvb3Qge1xyXG4gIGJvcmRlci10b3A6IDA7IH1cclxuXHJcbnRhYmxlIHRib2R5IHRyIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cclxudGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDJuICsgMSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpOyB9XHJcbnRhYmxlIHRoIHtcclxuICBjb2xvcjogIzU1NTU1NTsgfVxyXG50YWJsZSB0aGVhZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTsgfVxyXG50YWJsZSB0Zm9vdCB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTsgfVxyXG50YWJsZS5hbHQgdGJvZHkgdHIgdGQge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTsgfVxyXG5cclxuLyogSGlnaGxpZ2h0cyAqL1xyXG4uaGlnaGxpZ2h0cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAyLjVyZW0gMDtcclxuICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLW1vei1hbGlnbi1pdGVtczogLW1vei1zdHJldGNoO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IC13ZWJraXQtc3RyZXRjaDtcclxuICAtbXMtYWxpZ24taXRlbXM6IC1tcy1zdHJldGNoO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XHJcbi5oaWdobGlnaHRzID4gKiB7XHJcbiAgLW1vei1mbGV4LXNocmluazogMTtcclxuICAtd2Via2l0LWZsZXgtc2hyaW5rOiAxO1xyXG4gIC1tcy1mbGV4LXNocmluazogMTtcclxuICBmbGV4LXNocmluazogMTtcclxuICAtbW96LWZsZXgtZ3JvdzogMDtcclxuICAtd2Via2l0LWZsZXgtZ3JvdzogMDtcclxuICAtbXMtZmxleC1ncm93OiAwO1xyXG4gIGZsZXgtZ3JvdzogMDsgfVxyXG4uaGlnaGxpZ2h0cyA+ICoge1xyXG4gIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTsgfVxyXG4uaGlnaGxpZ2h0cyA+ICoge1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICB3aWR0aDogY2FsYygzMy4zMzMzMzMzMzMzJSArIDFyZW0pOyB9XHJcbi5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgtbiArIDMpIHtcclxuICBwYWRkaW5nLXRvcDogMDsgfVxyXG4uaGlnaGxpZ2h0cyA+IDpudGgtbGFzdC1jaGlsZCgtbiArIDMpIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxyXG4uaGlnaGxpZ2h0cyA+IDpudGgtY2hpbGQoM24gKyAxKSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XHJcbi5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbikge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cclxuLmhpZ2hsaWdodHMgPiA6bnRoLWNoaWxkKDNuICsgMSksXHJcbi5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbikge1xyXG4gIHdpZHRoOiBjYWxjKDMzLjMzMzMzMzMzMzMlICsgLTAuNXJlbSk7IH1cclxuLmhpZ2hsaWdodHMgLmNvbnRlbnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogM3JlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuLmhpZ2hsaWdodHMgLmNvbnRlbnQgLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogNXJlbTsgfVxyXG4uaGlnaGxpZ2h0cyA+IGRpdiA+IDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwOyB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgLmhpZ2hsaWdodHMgPiAqIHtcclxuICAgIHdpZHRoOiA1MCU7IH1cclxuICAuaGlnaGxpZ2h0cyA+ICoge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMzMzMzMzMlICsgMC42NjY2NjY2NjY3cmVtKTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgtbiArIDMpIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtOyB9XHJcbiAgLmhpZ2hsaWdodHMgPiA6bnRoLWxhc3QtY2hpbGQoLW4gKyAzKSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbiArIDEpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbikge1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbiArIDEpLFxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbikge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSArIDFyZW0pOyB9XHJcbiAgLmhpZ2hsaWdodHMgPiAqIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgKyAxcmVtKTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgtbiArIDIpIHtcclxuICAgIHBhZGRpbmctdG9wOiAwOyB9XHJcbiAgLmhpZ2hsaWdodHMgPiA6bnRoLWxhc3QtY2hpbGQoLW4gKyAyKSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgybiArIDEpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgybikge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgybiArIDEpLFxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgybikge1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlICsgMHJlbSk7IH1cclxuICAuaGlnaGxpZ2h0cyAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAycmVtOyB9IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcclxuICAuaGlnaGxpZ2h0cyA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7IH1cclxuICAuaGlnaGxpZ2h0cyA+ICoge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMzMzMzMzMlICsgMC42NjY2NjY2NjY3cmVtKTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgtbiArIDMpIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtOyB9XHJcbiAgLmhpZ2hsaWdodHMgPiA6bnRoLWxhc3QtY2hpbGQoLW4gKyAzKSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbiArIDEpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbikge1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbiArIDEpLFxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbikge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAycmVtKTsgfVxyXG4gIC5oaWdobGlnaHRzID4gKiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlICsgMXJlbSk7IH1cclxuICAuaGlnaGxpZ2h0cyA+IDpudGgtY2hpbGQoLW4gKyAyKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1sYXN0LWNoaWxkKC1uICsgMikge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07IH1cclxuICAuaGlnaGxpZ2h0cyA+IDpudGgtY2hpbGQoMm4gKyAxKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07IH1cclxuICAuaGlnaGxpZ2h0cyA+IDpudGgtY2hpbGQoMm4pIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07IH1cclxuICAuaGlnaGxpZ2h0cyA+IDpudGgtY2hpbGQoMm4gKyAxKSxcclxuICAuaGlnaGxpZ2h0cyA+IDpudGgtY2hpbGQoMm4pIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMnJlbSk7IH1cclxuICAuaGlnaGxpZ2h0cyA+ICoge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAycmVtKTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgtbiArIDEpIHtcclxuICAgIHBhZGRpbmctdG9wOiAwOyB9XHJcbiAgLmhpZ2hsaWdodHMgPiA6bnRoLWxhc3QtY2hpbGQoLW4gKyAxKSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgxbiArIDEpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgxbikge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgxbiArIDEpLFxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgxbikge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDFyZW0pOyB9IH1cclxuXHJcbi5oaWdobGlnaHRzIC5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ltZy0wNi5qcGdcIik7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMjUpOyB9XHJcblxyXG4vKiBUZXN0aW1vbmlhbHMgKi9cclxuLnRlc3RpbW9uaWFscyB7XHJcbiAgbWFyZ2luOiAyLjVyZW0gMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLW1vei1hbGlnbi1pdGVtczogLW1vei1zdHJldGNoO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IC13ZWJraXQtc3RyZXRjaDtcclxuICAtbXMtYWxpZ24taXRlbXM6IC1tcy1zdHJldGNoO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XHJcbi50ZXN0aW1vbmlhbHMgPiAqIHtcclxuICAtbW96LWZsZXgtc2hyaW5rOiAxO1xyXG4gIC13ZWJraXQtZmxleC1zaHJpbms6IDE7XHJcbiAgLW1zLWZsZXgtc2hyaW5rOiAxO1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIC1tb3otZmxleC1ncm93OiAwO1xyXG4gIC13ZWJraXQtZmxleC1ncm93OiAwO1xyXG4gIC1tcy1mbGV4LWdyb3c6IDA7XHJcbiAgZmxleC1ncm93OiAwOyB9XHJcbi50ZXN0aW1vbmlhbHMgPiAqIHtcclxuICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7IH1cclxuLnRlc3RpbW9uaWFscyA+ICoge1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICB3aWR0aDogY2FsYygzMy4zMzMzMzMzMzMzJSArIDFyZW0pOyB9XHJcbi50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKC1uICsgMykge1xyXG4gIHBhZGRpbmctdG9wOiAwOyB9XHJcbi50ZXN0aW1vbmlhbHMgPiA6bnRoLWxhc3QtY2hpbGQoLW4gKyAzKSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cclxuLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoM24gKyAxKSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XHJcbi50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDNuKSB7XHJcbiAgcGFkZGluZy1yaWdodDogMDsgfVxyXG4udGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgzbiArIDEpLFxyXG4udGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgzbikge1xyXG4gIHdpZHRoOiBjYWxjKDMzLjMzMzMzMzMzMzMlICsgLTAuNXJlbSk7IH1cclxuLnRlc3RpbW9uaWFscyAuY29udGVudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAzcmVtOyB9XHJcbi50ZXN0aW1vbmlhbHMgLmNvbnRlbnQgLmF1dGhvciB7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4udGVzdGltb25pYWxzIC5jb250ZW50IC5hdXRob3IgYmxvY2txdW90ZSB7XHJcbiAgbWFyZ2luOiAwOyB9XHJcbi50ZXN0aW1vbmlhbHMgLmNvbnRlbnQgLmF1dGhvciAuaW1hZ2Uge1xyXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICB3aWR0aDogMjAlOyB9XHJcbi50ZXN0aW1vbmlhbHMgLmNvbnRlbnQgLmF1dGhvciAuaW1hZ2UgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTsgfVxyXG4udGVzdGltb25pYWxzIC5jb250ZW50IC5jcmVkaXQge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTsgfVxyXG4udGVzdGltb25pYWxzIC5jb250ZW50IHA6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiAwOyB9XHJcbi50ZXN0aW1vbmlhbHMgPiBkaXYgPiA6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIC50ZXN0aW1vbmlhbHMgPiAqIHtcclxuICAgIHdpZHRoOiA1MCU7IH1cclxuICAudGVzdGltb25pYWxzID4gKiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMzMuMzMzMzMzMzMzMyUgKyAwLjY2NjY2NjY2NjdyZW0pOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoLW4gKyAzKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWxhc3QtY2hpbGQoLW4gKyAzKSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDNuICsgMSkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoM24pIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgzbiArIDEpLFxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDNuKSB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlICsgMXJlbSk7IH1cclxuICAudGVzdGltb25pYWxzID4gKiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlICsgMXJlbSk7IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgtbiArIDIpIHtcclxuICAgIHBhZGRpbmctdG9wOiAwOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtbGFzdC1jaGlsZCgtbiArIDIpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoMm4gKyAxKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgybikge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDJuICsgMSksXHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoMm4pIHtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSArIDByZW0pOyB9XHJcbiAgLnRlc3RpbW9uaWFscyAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAycmVtOyB9IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcclxuICAudGVzdGltb25pYWxzID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiAqIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogY2FsYygzMy4zMzMzMzMzMzMzJSArIDAuNjY2NjY2NjY2N3JlbSk7IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgtbiArIDMpIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtbGFzdC1jaGlsZCgtbiArIDMpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoM24gKyAxKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgzbikge1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDNuICsgMSksXHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoM24pIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMnJlbSk7IH1cclxuICAudGVzdGltb25pYWxzID4gKiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlICsgMXJlbSk7IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgtbiArIDIpIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtbGFzdC1jaGlsZCgtbiArIDIpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoMm4gKyAxKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgybikge1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDJuICsgMSksXHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoMm4pIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMnJlbSk7IH1cclxuICAudGVzdGltb25pYWxzID4gKiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDJyZW0pOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoLW4gKyAxKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWxhc3QtY2hpbGQoLW4gKyAxKSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDFuICsgMSkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoMW4pIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgxbiArIDEpLFxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDFuKSB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMXJlbSk7IH0gfVxyXG5cclxuLnRlc3RpbW9uaWFscyAuY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjAyNSk7IH1cclxuLnRlc3RpbW9uaWFscyAuY29udGVudCAuY3JlZGl0IHN0cm9uZyB7XHJcbiAgY29sb3I6ICNjZTFiMjg7IH1cclxuXHJcbi8qIEFjdGlvbnMgKi9cclxudWwuYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cclxudWwuYWN0aW9ucyBsaSB7XHJcbiAgcGFkZGluZzogMCAwIDAgMXJlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XHJcbnVsLmFjdGlvbnMuc3BlY2lhbCB7XHJcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogY2FsYygxMDAlICsgMXJlbSk7IH1cclxudWwuYWN0aW9ucy5zdGFja2VkIHtcclxuICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cclxudWwuYWN0aW9ucy5zdGFja2VkIGxpIHtcclxuICBwYWRkaW5nOiAxLjNyZW0gMCAwIDA7IH1cclxudWwuYWN0aW9ucy5zdGFja2VkIGxpOmZpcnN0LWNoaWxkIHtcclxuICBwYWRkaW5nLXRvcDogMDsgfVxyXG51bC5hY3Rpb25zLmZpdCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDFyZW0pOyB9XHJcbnVsLmFjdGlvbnMuZml0IGxpIHtcclxuICAtbW96LWZsZXgtZ3JvdzogMTtcclxuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAtbXMtZmxleC1ncm93OiAxO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAtbW96LWZsZXgtc2hyaW5rOiAxO1xyXG4gIC13ZWJraXQtZmxleC1zaHJpbms6IDE7XHJcbiAgLW1zLWZsZXgtc2hyaW5rOiAxO1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIHdpZHRoOiAxMDAlOyB9XHJcbnVsLmFjdGlvbnMuZml0IGxpID4gKiB7XHJcbiAgd2lkdGg6IDEwMCU7IH1cclxudWwuYWN0aW9ucy5maXQuc3RhY2tlZCB7XHJcbiAgd2lkdGg6IDEwMCU7IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICB1bC5hY3Rpb25zOm5vdCguZml4ZWQpIHtcclxuICAgIC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfVxyXG4gIHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkge1xyXG4gICAgLW1vei1mbGV4LWdyb3c6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgIC1tcy1mbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAtbW96LWZsZXgtc2hyaW5rOiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LXNocmluazogMTtcclxuICAgIC1tcy1mbGV4LXNocmluazogMTtcclxuICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgcGFkZGluZzogMXJlbSAwIDAgMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlOyB9XHJcbiAgdWwuYWN0aW9uczpub3QoLmZpeGVkKSBsaSA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7IH1cclxuICB1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwOyB9XHJcbiAgdWwuYWN0aW9uczpub3QoLmZpeGVkKSBsaSBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxyXG4gIHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG4gIHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcclxuICB1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIGJ1dHRvbixcclxuICB1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIC5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7IH1cclxuICB1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0uaWNvbjpiZWZvcmUsXHJcbiAgdWwuYWN0aW9uczpub3QoLmZpeGVkKSBsaSBpbnB1dFt0eXBlPVwicmVzZXRcIl0uaWNvbjpiZWZvcmUsXHJcbiAgdWwuYWN0aW9uczpub3QoLmZpeGVkKSBsaSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmljb246YmVmb3JlLFxyXG4gIHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgYnV0dG9uLmljb246YmVmb3JlLFxyXG4gIHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgLmJ1dHRvbi5pY29uOmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNXJlbTsgfSB9XHJcblxyXG4vKiBHcmlkICovXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuLnJvdyA+ICoge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuLnJvdy5ndHItdW5pZm9ybSA+ICogPiA6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG5cclxuLnJvdyA+IC5pbXAge1xyXG4gIG9yZGVyOiAtMTsgfVxyXG4ucm93ID4gLmNvbC0xIHtcclxuICB3aWR0aDogOC4zMzMzMzMzMzMzJTsgfVxyXG4ucm93ID4gLm9mZi0xIHtcclxuICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMzMzJTsgfVxyXG4ucm93ID4gLmNvbC0yIHtcclxuICB3aWR0aDogMTYuNjY2NjY2NjY2NyU7IH1cclxuLnJvdyA+IC5vZmYtMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY2NjclOyB9XHJcbi5yb3cgPiAuY29sLTMge1xyXG4gIHdpZHRoOiAyNSU7IH1cclxuLnJvdyA+IC5vZmYtMyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTsgfVxyXG4ucm93ID4gLmNvbC00IHtcclxuICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7IH1cclxuLnJvdyA+IC5vZmYtNCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzMzMlOyB9XHJcbi5yb3cgPiAuY29sLTUge1xyXG4gIHdpZHRoOiA0MS42NjY2NjY2NjY3JTsgfVxyXG4ucm93ID4gLm9mZi01IHtcclxuICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjY2NyU7IH1cclxuLnJvdyA+IC5jb2wtNiB7XHJcbiAgd2lkdGg6IDUwJTsgfVxyXG4ucm93ID4gLm9mZi02IHtcclxuICBtYXJnaW4tbGVmdDogNTAlOyB9XHJcbi5yb3cgPiAuY29sLTcge1xyXG4gIHdpZHRoOiA1OC4zMzMzMzMzMzMzJTsgfVxyXG4ucm93ID4gLm9mZi03IHtcclxuICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMzMyU7IH1cclxuLnJvdyA+IC5jb2wtOCB7XHJcbiAgd2lkdGg6IDY2LjY2NjY2NjY2NjclOyB9XHJcbi5yb3cgPiAub2ZmLTgge1xyXG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NjY3JTsgfVxyXG4ucm93ID4gLmNvbC05IHtcclxuICB3aWR0aDogNzUlOyB9XHJcbi5yb3cgPiAub2ZmLTkge1xyXG4gIG1hcmdpbi1sZWZ0OiA3NSU7IH1cclxuLnJvdyA+IC5jb2wtMTAge1xyXG4gIHdpZHRoOiA4My4zMzMzMzMzMzMzJTsgfVxyXG4ucm93ID4gLm9mZi0xMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzMzMlOyB9XHJcbi5yb3cgPiAuY29sLTExIHtcclxuICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7IH1cclxuLnJvdyA+IC5vZmYtMTEge1xyXG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NjY3JTsgfVxyXG4ucm93ID4gLmNvbC0xMiB7XHJcbiAgd2lkdGg6IDEwMCU7IH1cclxuLnJvdyA+IC5vZmYtMTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDAlOyB9XHJcbi5yb3cuZ3RyLTAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDByZW07IH1cclxuLnJvdy5ndHItMCA+ICoge1xyXG4gIHBhZGRpbmc6IDAgMCAwIDByZW07IH1cclxuLnJvdy5ndHItMC5ndHItdW5pZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMHJlbTsgfVxyXG4ucm93Lmd0ci0wLmd0ci11bmlmb3JtID4gKiB7XHJcbiAgcGFkZGluZy10b3A6IDByZW07IH1cclxuLnJvdy5ndHItMjUge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IC0wLjc1cmVtOyB9XHJcbi5yb3cuZ3RyLTI1ID4gKiB7XHJcbiAgcGFkZGluZzogMCAwIDAgMC43NXJlbTsgfVxyXG4ucm93Lmd0ci0yNS5ndHItdW5pZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogLTAuNzVyZW07IH1cclxuLnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICBwYWRkaW5nLXRvcDogMC43NXJlbTsgfVxyXG4ucm93Lmd0ci01MCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tbGVmdDogLTEuNXJlbTsgfVxyXG4ucm93Lmd0ci01MCA+ICoge1xyXG4gIHBhZGRpbmc6IDAgMCAwIDEuNXJlbTsgfVxyXG4ucm93Lmd0ci01MC5ndHItdW5pZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogLTEuNXJlbTsgfVxyXG4ucm93Lmd0ci01MC5ndHItdW5pZm9ybSA+ICoge1xyXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07IH1cclxuLnJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tbGVmdDogLTNyZW07IH1cclxuLnJvdyA+ICoge1xyXG4gIHBhZGRpbmc6IDAgMCAwIDNyZW07IH1cclxuLnJvdy5ndHItdW5pZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogLTNyZW07IH1cclxuLnJvdy5ndHItdW5pZm9ybSA+ICoge1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtOyB9XHJcbi5yb3cuZ3RyLTE1MCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tbGVmdDogLTQuNXJlbTsgfVxyXG4ucm93Lmd0ci0xNTAgPiAqIHtcclxuICBwYWRkaW5nOiAwIDAgMCA0LjVyZW07IH1cclxuLnJvdy5ndHItMTUwLmd0ci11bmlmb3JtIHtcclxuICBtYXJnaW4tdG9wOiAtNC41cmVtOyB9XHJcbi5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSA+ICoge1xyXG4gIHBhZGRpbmctdG9wOiA0LjVyZW07IH1cclxuLnJvdy5ndHItMjAwIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNnJlbTsgfVxyXG4ucm93Lmd0ci0yMDAgPiAqIHtcclxuICBwYWRkaW5nOiAwIDAgMCA2cmVtOyB9XHJcbi5yb3cuZ3RyLTIwMC5ndHItdW5pZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogLTZyZW07IH1cclxuLnJvdy5ndHItMjAwLmd0ci11bmlmb3JtID4gKiB7XHJcbiAgcGFkZGluZy10b3A6IDZyZW07IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkge1xyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuICAucm93ID4gKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgLnJvdy5ndHItdW5pZm9ybSA+ICogPiA6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XHJcblxyXG4gIC5yb3cgPiAuaW1wLXhsYXJnZSB7XHJcbiAgICBvcmRlcjogLTE7IH1cclxuICAucm93ID4gLmNvbC0xLXhsYXJnZSB7XHJcbiAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEteGxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5jb2wtMi14bGFyZ2Uge1xyXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtMi14bGFyZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5jb2wtMy14bGFyZ2Uge1xyXG4gICAgd2lkdGg6IDI1JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTMteGxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7IH1cclxuICAucm93ID4gLmNvbC00LXhsYXJnZSB7XHJcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLm9mZi00LXhsYXJnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLmNvbC01LXhsYXJnZSB7XHJcbiAgICB3aWR0aDogNDEuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLm9mZi01LXhsYXJnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLmNvbC02LXhsYXJnZSB7XHJcbiAgICB3aWR0aDogNTAlOyB9XHJcbiAgLnJvdyA+IC5vZmYtNi14bGFyZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTsgfVxyXG4gIC5yb3cgPiAuY29sLTcteGxhcmdlIHtcclxuICAgIHdpZHRoOiA1OC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTcteGxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAuY29sLTgteGxhcmdlIHtcclxuICAgIHdpZHRoOiA2Ni42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTgteGxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTkteGxhcmdlIHtcclxuICAgIHdpZHRoOiA3NSU7IH1cclxuICAucm93ID4gLm9mZi05LXhsYXJnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzUlOyB9XHJcbiAgLnJvdyA+IC5jb2wtMTAteGxhcmdlIHtcclxuICAgIHdpZHRoOiA4My4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEwLXhsYXJnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLmNvbC0xMS14bGFyZ2Uge1xyXG4gICAgd2lkdGg6IDkxLjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtMTEteGxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTEyLXhsYXJnZSB7XHJcbiAgICB3aWR0aDogMTAwJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEyLXhsYXJnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTsgfVxyXG4gIC5yb3cuZ3RyLTAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcmVtOyB9XHJcbiAgLnJvdy5ndHItMCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcmVtOyB9XHJcbiAgLnJvdy5ndHItMjUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMC43NXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTI1ID4gKiB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwLjc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTAuNzVyZW07IH1cclxuICAucm93Lmd0ci0yNS5ndHItdW5pZm9ybSA+ICoge1xyXG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07IH1cclxuICAucm93Lmd0ci01MCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVyZW07IH1cclxuICAucm93Lmd0ci01MCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMS41cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTEuNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtID4gKiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtOyB9XHJcbiAgLnJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zcmVtOyB9XHJcbiAgLnJvdyA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgM3JlbTsgfVxyXG4gIC5yb3cuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTNyZW07IH1cclxuICAucm93Lmd0ci11bmlmb3JtID4gKiB7XHJcbiAgICBwYWRkaW5nLXRvcDogM3JlbTsgfVxyXG4gIC5yb3cuZ3RyLTE1MCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00LjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDQuNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNC41cmVtOyB9XHJcbiAgLnJvdy5ndHItMTUwLmd0ci11bmlmb3JtID4gKiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNC41cmVtOyB9XHJcbiAgLnJvdy5ndHItMjAwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTZyZW07IH1cclxuICAucm93Lmd0ci0yMDAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDZyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTZyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiA2cmVtOyB9IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC5yb3cgPiAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuICAucm93Lmd0ci11bmlmb3JtID4gKiA+IDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7IH1cclxuXHJcbiAgLnJvdyA+IC5pbXAtbGFyZ2Uge1xyXG4gICAgb3JkZXI6IC0xOyB9XHJcbiAgLnJvdyA+IC5jb2wtMS1sYXJnZSB7XHJcbiAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEtbGFyZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLmNvbC0yLWxhcmdlIHtcclxuICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTItbGFyZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5jb2wtMy1sYXJnZSB7XHJcbiAgICB3aWR0aDogMjUlOyB9XHJcbiAgLnJvdyA+IC5vZmYtMy1sYXJnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlOyB9XHJcbiAgLnJvdyA+IC5jb2wtNC1sYXJnZSB7XHJcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLm9mZi00LWxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAuY29sLTUtbGFyZ2Uge1xyXG4gICAgd2lkdGg6IDQxLjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtNS1sYXJnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLmNvbC02LWxhcmdlIHtcclxuICAgIHdpZHRoOiA1MCU7IH1cclxuICAucm93ID4gLm9mZi02LWxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7IH1cclxuICAucm93ID4gLmNvbC03LWxhcmdlIHtcclxuICAgIHdpZHRoOiA1OC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTctbGFyZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5jb2wtOC1sYXJnZSB7XHJcbiAgICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLm9mZi04LWxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTktbGFyZ2Uge1xyXG4gICAgd2lkdGg6IDc1JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTktbGFyZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTsgfVxyXG4gIC5yb3cgPiAuY29sLTEwLWxhcmdlIHtcclxuICAgIHdpZHRoOiA4My4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEwLWxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAuY29sLTExLWxhcmdlIHtcclxuICAgIHdpZHRoOiA5MS42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTExLWxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTEyLWxhcmdlIHtcclxuICAgIHdpZHRoOiAxMDAlOyB9XHJcbiAgLnJvdyA+IC5vZmYtMTItbGFyZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7IH1cclxuICAucm93Lmd0ci0wIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDByZW07IH1cclxuICAucm93Lmd0ci0wLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDByZW07IH1cclxuICAucm93Lmd0ci0wLmd0ci11bmlmb3JtID4gKiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTI1IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuMzc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAuMzc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTAuMzc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjM3NXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTUwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNzVyZW07IH1cclxuICAucm93Lmd0ci01MCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMC43NXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0wLjc1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjc1cmVtOyB9XHJcbiAgLnJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVyZW07IH1cclxuICAucm93ID4gKiB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAxLjVyZW07IH1cclxuICAucm93Lmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0xLjVyZW07IH1cclxuICAucm93Lmd0ci11bmlmb3JtID4gKiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtOyB9XHJcbiAgLnJvdy5ndHItMTUwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDIuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTIuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAyLjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjAwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTNyZW07IH1cclxuICAucm93Lmd0ci0yMDAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDNyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTNyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAzcmVtOyB9IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgLnJvdyA+ICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC5yb3cuZ3RyLXVuaWZvcm0gPiAqID4gOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG5cclxuICAucm93ID4gLmltcC1tZWRpdW0ge1xyXG4gICAgb3JkZXI6IC0xOyB9XHJcbiAgLnJvdyA+IC5jb2wtMS1tZWRpdW0ge1xyXG4gICAgd2lkdGg6IDguMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLm9mZi0xLW1lZGl1bSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAuY29sLTItbWVkaXVtIHtcclxuICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTItbWVkaXVtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTMtbWVkaXVtIHtcclxuICAgIHdpZHRoOiAyNSU7IH1cclxuICAucm93ID4gLm9mZi0zLW1lZGl1bSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlOyB9XHJcbiAgLnJvdyA+IC5jb2wtNC1tZWRpdW0ge1xyXG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5vZmYtNC1tZWRpdW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5jb2wtNS1tZWRpdW0ge1xyXG4gICAgd2lkdGg6IDQxLjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtNS1tZWRpdW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5jb2wtNi1tZWRpdW0ge1xyXG4gICAgd2lkdGg6IDUwJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTYtbWVkaXVtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7IH1cclxuICAucm93ID4gLmNvbC03LW1lZGl1bSB7XHJcbiAgICB3aWR0aDogNTguMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLm9mZi03LW1lZGl1bSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLmNvbC04LW1lZGl1bSB7XHJcbiAgICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLm9mZi04LW1lZGl1bSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLmNvbC05LW1lZGl1bSB7XHJcbiAgICB3aWR0aDogNzUlOyB9XHJcbiAgLnJvdyA+IC5vZmYtOS1tZWRpdW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTsgfVxyXG4gIC5yb3cgPiAuY29sLTEwLW1lZGl1bSB7XHJcbiAgICB3aWR0aDogODMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLm9mZi0xMC1tZWRpdW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5jb2wtMTEtbWVkaXVtIHtcclxuICAgIHdpZHRoOiA5MS42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTExLW1lZGl1bSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLmNvbC0xMi1tZWRpdW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7IH1cclxuICAucm93ID4gLm9mZi0xMi1tZWRpdW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7IH1cclxuICAucm93Lmd0ci0wIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDByZW07IH1cclxuICAucm93Lmd0ci0wLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDByZW07IH1cclxuICAucm93Lmd0ci0wLmd0ci11bmlmb3JtID4gKiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTI1IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuMzc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAuMzc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTAuMzc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjM3NXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTUwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNzVyZW07IH1cclxuICAucm93Lmd0ci01MCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMC43NXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0wLjc1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjc1cmVtOyB9XHJcbiAgLnJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVyZW07IH1cclxuICAucm93ID4gKiB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAxLjVyZW07IH1cclxuICAucm93Lmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0xLjVyZW07IH1cclxuICAucm93Lmd0ci11bmlmb3JtID4gKiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtOyB9XHJcbiAgLnJvdy5ndHItMTUwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDIuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTIuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAyLjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjAwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTNyZW07IH1cclxuICAucm93Lmd0ci0yMDAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDNyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTNyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAzcmVtOyB9IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgLnJvdyA+ICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC5yb3cuZ3RyLXVuaWZvcm0gPiAqID4gOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG5cclxuICAucm93ID4gLmltcC1zbWFsbCB7XHJcbiAgICBvcmRlcjogLTE7IH1cclxuICAucm93ID4gLmNvbC0xLXNtYWxsIHtcclxuICAgIHdpZHRoOiA4LjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5vZmYtMS1zbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAuY29sLTItc21hbGwge1xyXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtMi1zbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLmNvbC0zLXNtYWxsIHtcclxuICAgIHdpZHRoOiAyNSU7IH1cclxuICAucm93ID4gLm9mZi0zLXNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7IH1cclxuICAucm93ID4gLmNvbC00LXNtYWxsIHtcclxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTQtc21hbGwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5jb2wtNS1zbWFsbCB7XHJcbiAgICB3aWR0aDogNDEuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLm9mZi01LXNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTYtc21hbGwge1xyXG4gICAgd2lkdGg6IDUwJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTYtc21hbGwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTsgfVxyXG4gIC5yb3cgPiAuY29sLTctc21hbGwge1xyXG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5vZmYtNy1zbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLmNvbC04LXNtYWxsIHtcclxuICAgIHdpZHRoOiA2Ni42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTgtc21hbGwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5jb2wtOS1zbWFsbCB7XHJcbiAgICB3aWR0aDogNzUlOyB9XHJcbiAgLnJvdyA+IC5vZmYtOS1zbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzUlOyB9XHJcbiAgLnJvdyA+IC5jb2wtMTAtc21hbGwge1xyXG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5vZmYtMTAtc21hbGwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5jb2wtMTEtc21hbGwge1xyXG4gICAgd2lkdGg6IDkxLjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtMTEtc21hbGwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5jb2wtMTItc21hbGwge1xyXG4gICAgd2lkdGg6IDEwMCU7IH1cclxuICAucm93ID4gLm9mZi0xMi1zbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTsgfVxyXG4gIC5yb3cuZ3RyLTAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcmVtOyB9XHJcbiAgLnJvdy5ndHItMCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcmVtOyB9XHJcbiAgLnJvdy5ndHItMjUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMC4zMTI1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAuMzEyNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTI1Lmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0wLjMxMjVyZW07IH1cclxuICAucm93Lmd0ci0yNS5ndHItdW5pZm9ybSA+ICoge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMzEyNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTUwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAuNjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTAuNjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjYyNXJlbTsgfVxyXG4gIC5yb3cge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMS4yNXJlbTsgfVxyXG4gIC5yb3cgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07IH1cclxuICAucm93Lmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0xLjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItdW5pZm9ybSA+ICoge1xyXG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMS44NzVyZW07IH1cclxuICAucm93Lmd0ci0xNTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDEuODc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMTUwLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0xLjg3NXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSA+ICoge1xyXG4gICAgcGFkZGluZy10b3A6IDEuODc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjAwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIuNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTIwMCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMi41cmVtOyB9XHJcbiAgLnJvdy5ndHItMjAwLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0yLjVyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuICAucm93ID4gKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgLnJvdy5ndHItdW5pZm9ybSA+ICogPiA6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XHJcblxyXG4gIC5yb3cgPiAuaW1wLXhzbWFsbCB7XHJcbiAgICBvcmRlcjogLTE7IH1cclxuICAucm93ID4gLmNvbC0xLXhzbWFsbCB7XHJcbiAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEteHNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5jb2wtMi14c21hbGwge1xyXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtMi14c21hbGwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5jb2wtMy14c21hbGwge1xyXG4gICAgd2lkdGg6IDI1JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTMteHNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7IH1cclxuICAucm93ID4gLmNvbC00LXhzbWFsbCB7XHJcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLm9mZi00LXhzbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLmNvbC01LXhzbWFsbCB7XHJcbiAgICB3aWR0aDogNDEuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLm9mZi01LXhzbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLmNvbC02LXhzbWFsbCB7XHJcbiAgICB3aWR0aDogNTAlOyB9XHJcbiAgLnJvdyA+IC5vZmYtNi14c21hbGwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTsgfVxyXG4gIC5yb3cgPiAuY29sLTcteHNtYWxsIHtcclxuICAgIHdpZHRoOiA1OC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTcteHNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAuY29sLTgteHNtYWxsIHtcclxuICAgIHdpZHRoOiA2Ni42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTgteHNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTkteHNtYWxsIHtcclxuICAgIHdpZHRoOiA3NSU7IH1cclxuICAucm93ID4gLm9mZi05LXhzbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzUlOyB9XHJcbiAgLnJvdyA+IC5jb2wtMTAteHNtYWxsIHtcclxuICAgIHdpZHRoOiA4My4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEwLXhzbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLmNvbC0xMS14c21hbGwge1xyXG4gICAgd2lkdGg6IDkxLjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtMTEteHNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTEyLXhzbWFsbCB7XHJcbiAgICB3aWR0aDogMTAwJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEyLXhzbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTsgfVxyXG4gIC5yb3cuZ3RyLTAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcmVtOyB9XHJcbiAgLnJvdy5ndHItMCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcmVtOyB9XHJcbiAgLnJvdy5ndHItMjUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMC4zMTI1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAuMzEyNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTI1Lmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0wLjMxMjVyZW07IH1cclxuICAucm93Lmd0ci0yNS5ndHItdW5pZm9ybSA+ICoge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMzEyNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTUwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAuNjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTAuNjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjYyNXJlbTsgfVxyXG4gIC5yb3cge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMS4yNXJlbTsgfVxyXG4gIC5yb3cgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07IH1cclxuICAucm93Lmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0xLjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItdW5pZm9ybSA+ICoge1xyXG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMS44NzVyZW07IH1cclxuICAucm93Lmd0ci0xNTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDEuODc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMTUwLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0xLjg3NXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSA+ICoge1xyXG4gICAgcGFkZGluZy10b3A6IDEuODc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjAwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIuNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTIwMCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMi41cmVtOyB9XHJcbiAgLnJvdy5ndHItMjAwLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0yLjVyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07IH0gfVxyXG4vKiBJY29uICovXHJcbi5pY29uIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cclxuLmljb246YmVmb3JlIHtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50OyB9XHJcbi5pY29uID4gLmxhYmVsIHtcclxuICBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4vKiBJY29ucyAqL1xyXG51bC5pY29ucyB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XHJcbnVsLmljb25zIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCAxcmVtIDAgMDsgfVxyXG51bC5pY29ucyBsaTpsYXN0LWNoaWxkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XHJcbnVsLmljb25zIGxpIC5pY29uOmJlZm9yZSB7XHJcbiAgZm9udC1zaXplOiAycmVtOyB9XHJcblxyXG4vKiBJbWFnZSAqL1xyXG4uaW1hZ2Uge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxyXG4uaW1hZ2UgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7IH1cclxuLmltYWdlLmxlZnQsIC5pbWFnZS5yaWdodCB7XHJcbiAgbWF4LXdpZHRoOiA0MCU7IH1cclxuLmltYWdlLmxlZnQgaW1nLCAuaW1hZ2UucmlnaHQgaW1nIHtcclxuICB3aWR0aDogMTAwJTsgfVxyXG4uaW1hZ2UubGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAwIDJyZW0gMnJlbSAwO1xyXG4gIHRvcDogMC4yNXJlbTsgfVxyXG4uaW1hZ2UucmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDAgMCAycmVtIDJyZW07XHJcbiAgdG9wOiAwLjI1cmVtOyB9XHJcbi5pbWFnZS5maXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCAwIDJyZW0gMDtcclxuICB3aWR0aDogMTAwJTsgfVxyXG4uaW1hZ2UuZml0IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7IH1cclxuLmltYWdlLm1haW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCAwIDNyZW0gMDtcclxuICB3aWR0aDogMTAwJTsgfVxyXG4uaW1hZ2UubWFpbiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlOyB9XHJcblxyXG4vKiBXcmFwcGVyICovXHJcbi53cmFwcGVyIHtcclxuICBwYWRkaW5nOiA4cmVtIDAgNnJlbSAwIDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTsgfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiA0cmVtIDAgMnJlbSAwIDsgfSB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgcGFkZGluZzogM3JlbSAwIDFyZW0gMCA7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMCAwLjFyZW0gMCA7IH0gfVxyXG5cclxuLyogQmFubmVyICovXHJcbiNiYW5uZXIge1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tb3otanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtbXMtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWctMDEuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYm9yZGVyLXRvcDogMDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBoZWlnaHQ6IDM1cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogMzVyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiNiYW5uZXIgaW5wdXQsICNiYW5uZXIgc2VsZWN0LCAjYmFubmVyIHRleHRhcmVhIHtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG4jYmFubmVyIGEge1xyXG4gIGNvbG9yOiAjY2UxYjI4OyB9XHJcbiNiYW5uZXIgc3Ryb25nLCAjYmFubmVyIGIge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNiYW5uZXIgaDEsICNiYW5uZXIgaDIsICNiYW5uZXIgaDMsICNiYW5uZXIgaDQsICNiYW5uZXIgaDUsICNiYW5uZXIgaDYge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNiYW5uZXIgYmxvY2txdW90ZSB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2Jhbm5lciBjb2RlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2Jhbm5lciBociB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcbiNiYW5uZXIgaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXHJcbiNiYW5uZXIgYnV0dG9uLFxyXG4jYmFubmVyIC5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7IH1cclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlcixcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLFxyXG4jYmFubmVyIGJ1dHRvbjpob3ZlcixcclxuI2Jhbm5lciAuYnV0dG9uOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2NlMWIyODtcclxuICBjb2xvcjogI2NlMWIyOCAhaW1wb3J0YW50OyB9XHJcbiNiYW5uZXIgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcjphY3RpdmUsXHJcbiNiYW5uZXIgaW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyOmFjdGl2ZSxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyOmFjdGl2ZSxcclxuI2Jhbm5lciBidXR0b246aG92ZXI6YWN0aXZlLFxyXG4jYmFubmVyIC5idXR0b246aG92ZXI6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNiwgMjcsIDQwLCAwLjI1KTsgfVxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeSxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeSxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnksXHJcbiNiYW5uZXIgYnV0dG9uLnByaW1hcnksXHJcbiNiYW5uZXIgLmJ1dHRvbi5wcmltYXJ5IHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTFiMjg7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgfVxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeTpob3ZlcixcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeTpob3ZlcixcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnk6aG92ZXIsXHJcbiNiYW5uZXIgYnV0dG9uLnByaW1hcnk6aG92ZXIsXHJcbiNiYW5uZXIgLmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyMTJmO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwic3VibWl0XCJdLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJyZXNldFwiXS5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4jYmFubmVyIGJ1dHRvbi5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuI2Jhbm5lciAuYnV0dG9uLnByaW1hcnk6aG92ZXI6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjcxODI0OyB9XHJcbiNiYW5uZXIgbGFiZWwge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNiYW5uZXIgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiNiYW5uZXIgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwidGVsXCJdLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXHJcbiNiYW5uZXIgaW5wdXRbdHlwZT1cInVybFwiXSxcclxuI2Jhbm5lciBzZWxlY3QsXHJcbiNiYW5uZXIgdGV4dGFyZWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcbiNiYW5uZXIgaW5wdXRbdHlwZT1cInRlbFwiXTpmb2N1cyxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJ1cmxcIl06Zm9jdXMsXHJcbiNiYW5uZXIgc2VsZWN0OmZvY3VzLFxyXG4jYmFubmVyIHRleHRhcmVhOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICNjZTFiMjg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNjZTFiMjg7IH1cclxuI2Jhbm5lciBzZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDcGF0aCBkPSdNOS40LDEyLjNsMTAuNCwxMC40bDEwLjQtMTAuNGMwLjItMC4yLDAuNS0wLjQsMC45LTAuNGMwLjMsMCwwLjYsMC4xLDAuOSwwLjRsMy4zLDMuM2MwLjIsMC4yLDAuNCwwLjUsMC40LDAuOSBjMCwwLjQtMC4xLDAuNi0wLjQsMC45TDIwLjcsMzEuOWMtMC4yLDAuMi0wLjUsMC40LTAuOSwwLjRjLTAuMywwLTAuNi0wLjEtMC45LTAuNEw0LjMsMTcuM2MtMC4yLTAuMi0wLjQtMC41LTAuNC0wLjkgYzAtMC40LDAuMS0wLjYsMC40LTAuOWwzLjMtMy4zYzAuMi0wLjIsMC41LTAuNCwwLjktMC40UzkuMSwxMi4xLDkuNCwxMi4zeicgZmlsbD0ncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KScgLyUzRSUzQy9zdmclM0VcIik7IH1cclxuI2Jhbm5lciBzZWxlY3Qgb3B0aW9uIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7IH1cclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOmJlZm9yZSxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGJvcmRlci1jb2xvcjogI2NlMWIyODtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyArIGxhYmVsOmJlZm9yZSxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMgKyBsYWJlbDpiZWZvcmUge1xyXG4gIGJvcmRlci1jb2xvcjogI2NlMWIyODtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2NlMWIyODsgfVxyXG4jYmFubmVyIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50OyB9XHJcbiNiYW5uZXIgOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgIWltcG9ydGFudDsgfVxyXG4jYmFubmVyIDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50OyB9XHJcbiNiYW5uZXIgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50OyB9XHJcbiNiYW5uZXIgdWwuYWx0IGxpIHtcclxuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNiYW5uZXIgdGFibGUgdGJvZHkgdHIge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jYmFubmVyIHRhYmxlIHRib2R5IHRyOm50aC1jaGlsZCgybiArIDEpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTsgfVxyXG4jYmFubmVyIHRhYmxlIHRoIHtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG4jYmFubmVyIHRhYmxlIHRoZWFkIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNiYW5uZXIgdGFibGUgdGZvb3Qge1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2Jhbm5lciB0YWJsZS5hbHQgdGJvZHkgdHIgdGQge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jYmFubmVyIC5oaWdobGlnaHRzIC5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjMTExMTExO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDI1KTsgfVxyXG4jYmFubmVyIC50ZXN0aW1vbmlhbHMgLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICMxMTExMTE7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpOyB9XHJcbiNiYW5uZXIgLnRlc3RpbW9uaWFscyAuY29udGVudCAuY3JlZGl0IHN0cm9uZyB7XHJcbiAgY29sb3I6ICNjZTFiMjg7IH1cclxuI2Jhbm5lciA+IC5pbm5lciB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UsIC1tb3otdHJhbnNmb3JtIDFzIGVhc2U7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIDFzIGVhc2U7XHJcbiAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgLW1zLXRyYW5zZm9ybSAxcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgdHJhbnNmb3JtIDFzIGVhc2U7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMzsgfVxyXG4jYmFubmVyID4gLmlubmVyID4gOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cclxuI2Jhbm5lciBoMSB7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cclxuI2Jhbm5lciBwIHtcclxuICBmb250LXNpemU6IDEuNXJlbTsgfVxyXG4jYmFubmVyIGEge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcbiNiYW5uZXIgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2Jhbm5lciB2aWRlbyB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHRyYW5zbGF0ZVkoNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgYm90dG9tOiA1MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IGF1dG87IH1cclxuI2Jhbm5lcjpiZWZvcmUge1xyXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAzcyBlYXNlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAzcyBlYXNlO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMS4yNXM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAxLjI1cztcclxuICAtbXMtdHJhbnNpdGlvbi1kZWxheTogMS4yNXM7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMS4yNXM7XHJcbiAgYmFja2dyb3VuZDogIzExMTExMTtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBvcGFjaXR5OiAwLjQ1O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTsgfVxyXG4jYmFubmVyOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjY2UxYjI4IDAlLCAjMTExMTExIDc0JSk7XHJcbiAgY29udGVudDogJyAnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHdlYmtpdC1saW5lYXItZ3JhZGllbnRpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7IH1cclxuI2Jhbm5lci5zbWFsbCB7XHJcbiAgaGVpZ2h0OiAzMHZoICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogMzB2aDsgfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAjYmFubmVyIHZpZGVvIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xyXG4gICNiYW5uZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogNHJlbSAycmVtIDRyZW0gMnJlbTsgfVxyXG4gICNiYW5uZXIgLmlubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlOyB9XHJcbiAgI2Jhbm5lciBoMSB7XHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDsgfVxyXG4gICNiYW5uZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07IH1cclxuICAjYmFubmVyIGJyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IH1cclxuICAjYmFubmVyIC5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICNiYW5uZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07IH0gfVxyXG5ib2R5LmlzLXByZWxvYWQgI2Jhbm5lciAuaW5uZXIge1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcclxuICBvcGFjaXR5OiAwOyB9XHJcbmJvZHkuaXMtcHJlbG9hZCAjYmFubmVyOmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogMTsgfVxyXG5cclxuLyogQ1RBICovXHJcbiNjdGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTFiMjg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyMDYsIDI3LCA0MCwgMC4yNSksIHJnYmEoMjA2LCAyNywgNDAsIDAuMjUpKSwgdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1nLTA3LmpwZyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDE7IH1cclxuI2N0YSBpbnB1dCwgI2N0YSBzZWxlY3QsICNjdGEgdGV4dGFyZWEge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNjdGEgYSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2N0YSBzdHJvbmcsICNjdGEgYiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2N0YSBoMSwgI2N0YSBoMiwgI2N0YSBoMywgI2N0YSBoNCwgI2N0YSBoNSwgI2N0YSBoNiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2N0YSBibG9ja3F1b3RlIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jY3RhIGNvZGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jY3RhIGhyIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNjdGEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuI2N0YSBpbnB1dFt0eXBlPVwicmVzZXRcIl0sXHJcbiNjdGEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcclxuI2N0YSBidXR0b24sXHJcbiNjdGEgLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNmZmZmZmY7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgfVxyXG4jY3RhIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcbiNjdGEgaW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsXHJcbiNjdGEgYnV0dG9uOmhvdmVyLFxyXG4jY3RhIC5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgfVxyXG4jY3RhIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXI6YWN0aXZlLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlcjphY3RpdmUsXHJcbiNjdGEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlcjphY3RpdmUsXHJcbiNjdGEgYnV0dG9uOmhvdmVyOmFjdGl2ZSxcclxuI2N0YSAuYnV0dG9uOmhvdmVyOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jY3RhIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeSxcclxuI2N0YSBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeSxcclxuI2N0YSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnksXHJcbiNjdGEgYnV0dG9uLnByaW1hcnksXHJcbiNjdGEgLmJ1dHRvbi5wcmltYXJ5IHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgY29sb3I6ICNjZTFiMjggIWltcG9ydGFudDsgfVxyXG4jY3RhIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeTpob3ZlcixcclxuI2N0YSBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeTpob3ZlcixcclxuI2N0YSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnk6aG92ZXIsXHJcbiNjdGEgYnV0dG9uLnByaW1hcnk6aG92ZXIsXHJcbiNjdGEgLmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODc1KTtcclxuICBib3gtc2hhZG93OiBub25lOyB9XHJcbiNjdGEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuI2N0YSBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbiNjdGEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXS5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuI2N0YSBidXR0b24ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbiNjdGEgLmJ1dHRvbi5wcmltYXJ5OmhvdmVyOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XHJcbiNjdGEgbGFiZWwge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNjdGEgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiNjdGEgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuI2N0YSBpbnB1dFt0eXBlPVwidGVsXCJdLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXHJcbiNjdGEgaW5wdXRbdHlwZT1cInVybFwiXSxcclxuI2N0YSBzZWxlY3QsXHJcbiNjdGEgdGV4dGFyZWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jY3RhIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcclxuI2N0YSBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcbiNjdGEgaW5wdXRbdHlwZT1cInRlbFwiXTpmb2N1cyxcclxuI2N0YSBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJ1cmxcIl06Zm9jdXMsXHJcbiNjdGEgc2VsZWN0OmZvY3VzLFxyXG4jY3RhIHRleHRhcmVhOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmZmZmZmY7IH1cclxuI2N0YSBzZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDcGF0aCBkPSdNOS40LDEyLjNsMTAuNCwxMC40bDEwLjQtMTAuNGMwLjItMC4yLDAuNS0wLjQsMC45LTAuNGMwLjMsMCwwLjYsMC4xLDAuOSwwLjRsMy4zLDMuM2MwLjIsMC4yLDAuNCwwLjUsMC40LDAuOSBjMCwwLjQtMC4xLDAuNi0wLjQsMC45TDIwLjcsMzEuOWMtMC4yLDAuMi0wLjUsMC40LTAuOSwwLjRjLTAuMywwLTAuNi0wLjEtMC45LTAuNEw0LjMsMTcuM2MtMC4yLTAuMi0wLjQtMC41LTAuNC0wLjkgYzAtMC40LDAuMS0wLjYsMC40LTAuOWwzLjMtMy4zYzAuMi0wLjIsMC41LTAuNCwwLjktMC40UzkuMSwxMi4xLDkuNCwxMi4zeicgZmlsbD0ncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KScgLyUzRSUzQy9zdmclM0VcIik7IH1cclxuI2N0YSBzZWxlY3Qgb3B0aW9uIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UxYjI4OyB9XHJcbiNjdGEgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwsXHJcbiNjdGEgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpOyB9XHJcbiNjdGEgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNjdGEgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXHJcbiNjdGEgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjY2UxYjI4OyB9XHJcbiNjdGEgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzICsgbGFiZWw6YmVmb3JlLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjZmZmZmZmOyB9XHJcbiNjdGEgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2N0YSA6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50OyB9XHJcbiNjdGEgOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2N0YSA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2N0YSB1bC5hbHQgbGkge1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2N0YSB0YWJsZSB0Ym9keSB0ciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNjdGEgdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDJuICsgMSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpOyB9XHJcbiNjdGEgdGFibGUgdGgge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNjdGEgdGFibGUgdGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2N0YSB0YWJsZSB0Zm9vdCB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jY3RhIHRhYmxlLmFsdCB0Ym9keSB0ciB0ZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNjdGEgLmhpZ2hsaWdodHMgLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNjZTFiMjg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpOyB9XHJcbiNjdGEgLnRlc3RpbW9uaWFscyAuY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2NlMWIyODtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyNSk7IH1cclxuI2N0YSAudGVzdGltb25pYWxzIC5jb250ZW50IC5jcmVkaXQgc3Ryb25nIHtcclxuICBjb2xvcjogI2NlMWIyODsgfVxyXG4jY3RhIC5pbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDM7IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAjY3RhIHtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsOyB9IH1cclxuXHJcbi8qIEZvb3RlciAqL1xyXG4jZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgcGFkZGluZzogOHJlbSAwIDZyZW0gMCA7IH1cclxuI2Zvb3RlciBpbnB1dCwgI2Zvb3RlciBzZWxlY3QsICNmb290ZXIgdGV4dGFyZWEge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNmb290ZXIgYSB7XHJcbiAgY29sb3I6ICNjZTFiMjg7IH1cclxuI2Zvb3RlciBzdHJvbmcsICNmb290ZXIgYiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2Zvb3RlciBoMSwgI2Zvb3RlciBoMiwgI2Zvb3RlciBoMywgI2Zvb3RlciBoNCwgI2Zvb3RlciBoNSwgI2Zvb3RlciBoNiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2Zvb3RlciBibG9ja3F1b3RlIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jZm9vdGVyIGNvZGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jZm9vdGVyIGhyIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuI2Zvb3RlciBpbnB1dFt0eXBlPVwicmVzZXRcIl0sXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcclxuI2Zvb3RlciBidXR0b24sXHJcbiNmb290ZXIgLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNmZmZmZmY7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgfVxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsXHJcbiNmb290ZXIgYnV0dG9uOmhvdmVyLFxyXG4jZm9vdGVyIC5idXR0b246aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjY2UxYjI4O1xyXG4gIGNvbG9yOiAjY2UxYjI4ICFpbXBvcnRhbnQ7IH1cclxuI2Zvb3RlciBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyOmFjdGl2ZSxcclxuI2Zvb3RlciBpbnB1dFt0eXBlPVwicmVzZXRcIl06aG92ZXI6YWN0aXZlLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXI6YWN0aXZlLFxyXG4jZm9vdGVyIGJ1dHRvbjpob3ZlcjphY3RpdmUsXHJcbiNmb290ZXIgLmJ1dHRvbjpob3ZlcjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA2LCAyNywgNDAsIDAuMjUpOyB9XHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5wcmltYXJ5LFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJyZXNldFwiXS5wcmltYXJ5LFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJidXR0b25cIl0ucHJpbWFyeSxcclxuI2Zvb3RlciBidXR0b24ucHJpbWFyeSxcclxuI2Zvb3RlciAuYnV0dG9uLnByaW1hcnkge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlMWIyODtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50OyB9XHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5wcmltYXJ5OmhvdmVyLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJyZXNldFwiXS5wcmltYXJ5OmhvdmVyLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJidXR0b25cIl0ucHJpbWFyeTpob3ZlcixcclxuI2Zvb3RlciBidXR0b24ucHJpbWFyeTpob3ZlcixcclxuI2Zvb3RlciAuYnV0dG9uLnByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjIxMmY7XHJcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInJlc2V0XCJdLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJidXR0b25cIl0ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbiNmb290ZXIgYnV0dG9uLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4jZm9vdGVyIC5idXR0b24ucHJpbWFyeTpob3ZlcjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzE4MjQ7IH1cclxuI2Zvb3RlciBsYWJlbCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2Zvb3RlciBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuI2Zvb3RlciBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuI2Zvb3RlciBpbnB1dFt0eXBlPVwidXJsXCJdLFxyXG4jZm9vdGVyIHNlbGVjdCxcclxuI2Zvb3RlciB0ZXh0YXJlYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcclxuI2Zvb3RlciBpbnB1dFt0eXBlPVwidGVsXCJdOmZvY3VzLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Zm9jdXMsXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInVybFwiXTpmb2N1cyxcclxuI2Zvb3RlciBzZWxlY3Q6Zm9jdXMsXHJcbiNmb290ZXIgdGV4dGFyZWE6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogI2NlMWIyODtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2NlMWIyODsgfVxyXG4jZm9vdGVyIHNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NwYXRoIGQ9J005LjQsMTIuM2wxMC40LDEwLjRsMTAuNC0xMC40YzAuMi0wLjIsMC41LTAuNCwwLjktMC40YzAuMywwLDAuNiwwLjEsMC45LDAuNGwzLjMsMy4zYzAuMiwwLjIsMC40LDAuNSwwLjQsMC45IGMwLDAuNC0wLjEsMC42LTAuNCwwLjlMMjAuNywzMS45Yy0wLjIsMC4yLTAuNSwwLjQtMC45LDAuNGMtMC4zLDAtMC42LTAuMS0wLjktMC40TDQuMywxNy4zYy0wLjItMC4yLTAuNC0wLjUtMC40LTAuOSBjMC0wLjQsMC4xLTAuNiwwLjQtMC45bDMuMy0zLjNjMC4yLTAuMiwwLjUtMC40LDAuOS0wLjRTOS4xLDEyLjEsOS40LDEyLjN6JyBmaWxsPSdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpJyAvJTNFJTNDL3N2ZyUzRVwiKTsgfVxyXG4jZm9vdGVyIHNlbGVjdCBvcHRpb24ge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTsgfVxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTFiMjg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzICsgbGFiZWw6YmVmb3JlLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjY2UxYjI4OyB9XHJcbiNmb290ZXIgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2Zvb3RlciA6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50OyB9XHJcbiNmb290ZXIgOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2Zvb3RlciA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2Zvb3RlciB1bC5hbHQgbGkge1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2Zvb3RlciB0YWJsZSB0Ym9keSB0ciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNmb290ZXIgdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDJuICsgMSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpOyB9XHJcbiNmb290ZXIgdGFibGUgdGgge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNmb290ZXIgdGFibGUgdGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2Zvb3RlciB0YWJsZSB0Zm9vdCB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jZm9vdGVyIHRhYmxlLmFsdCB0Ym9keSB0ciB0ZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNmb290ZXIgLmhpZ2hsaWdodHMgLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICMxMTExMTE7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpOyB9XHJcbiNmb290ZXIgLnRlc3RpbW9uaWFscyAuY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogIzExMTExMTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyNSk7IH1cclxuI2Zvb3RlciAudGVzdGltb25pYWxzIC5jb250ZW50IC5jcmVkaXQgc3Ryb25nIHtcclxuICBjb2xvcjogI2NlMWIyODsgfVxyXG4jZm9vdGVyIGEge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcbiNmb290ZXIgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNjZTFiMjg7IH1cclxuI2Zvb3RlciAuY29udGVudCB7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4OyB9XHJcbiNmb290ZXIgLmNvbnRlbnQgc2VjdGlvbiB7XHJcbiAgd2lkdGg6IDI1JTsgfVxyXG4jZm9vdGVyIC5jb250ZW50IHNlY3Rpb246Zmlyc3QtY2hpbGQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZy1yaWdodDogNHJlbTsgfVxyXG4jZm9vdGVyIC5jb250ZW50IHNlY3Rpb246bGFzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cmVtOyB9XHJcbiNmb290ZXIgLmNvcHlyaWdodCB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICNmb290ZXIge1xyXG4gICAgcGFkZGluZzogNHJlbSAwIDJyZW0gMCA7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gICNmb290ZXIgLmNvbnRlbnQge1xyXG4gICAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7IH1cclxuICAjZm9vdGVyIC5jb250ZW50IHNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDUwJTsgfVxyXG4gICNmb290ZXIgLmNvbnRlbnQgc2VjdGlvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xyXG4gICNmb290ZXIge1xyXG4gICAgcGFkZGluZzogM3JlbSAwIDFyZW0gMCA7IH1cclxuICAjZm9vdGVyIC5jb250ZW50IHNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7IH1cclxuICAjZm9vdGVyIC5jb250ZW50IHNlY3Rpb246bGFzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICNmb290ZXIge1xyXG4gICAgcGFkZGluZzogMnJlbSAwIDAuMXJlbSAwIDsgfSB9XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDMuMjVyZW07IH1cclxuYm9keTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWctMDQuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIG9wYWNpdHk6IDAuMDU7IH1cclxuXHJcbiNoZWFkZXIge1xyXG4gIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLW1zLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZDogIzExMTExMTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBoZWlnaHQ6IDMuMjVyZW07XHJcbiAgbGVmdDogMDtcclxuICBsaW5lLWhlaWdodDogMy4yNXJlbTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDAxOyB9XHJcbiNoZWFkZXIgPiAubG9nbyB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDAgMS4yNXJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cclxuI2hlYWRlciA+IG5hdiA+IGEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwIDAuNzVyZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcbiNoZWFkZXIgPiBuYXYgPiBhOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG4jaGVhZGVyID4gbmF2ID4gYVtocmVmPVwiI21lbnVcIl0ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7IH1cclxuI2hlYWRlciA+IG5hdiA+IGFbaHJlZj1cIiNtZW51XCJdOmJlZm9yZSB7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDsgfVxyXG4jaGVhZGVyID4gbmF2ID4gYVtocmVmPVwiI21lbnVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxmMGM5JztcclxuICBtYXJnaW46IDAgMC41cmVtIDAgMDsgfVxyXG4jaGVhZGVyID4gbmF2ID4gYSArIGFbaHJlZj1cIiNtZW51XCJdOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTsgfVxyXG4jaGVhZGVyID4gbmF2ID4gYTpsYXN0LWNoaWxkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtOyB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcbiAgI2hlYWRlciA+IG5hdiA+IGEge1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07IH1cclxuICAjaGVhZGVyID4gbmF2ID4gYSArIGFbaHJlZj1cIiNtZW51XCJdOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07IH1cclxuICAjaGVhZGVyID4gbmF2ID4gYTpsYXN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07IH0gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICBib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOiA0NHB4OyB9XHJcblxyXG4gICNoZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICNoZWFkZXIge1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDsgfSB9XHJcbi8qIEhlYWRpbmcgKi9cclxuI2hlYWRpbmcge1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tb3otanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtbXMtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMTcsIDE3LCAxNywgMC4yNSksIHJnYmEoMTcsIDE3LCAxNywgMC4yNSkpLCB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ltZy0wNy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBib3JkZXItdG9wOiAwO1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGhlaWdodDogMTVyZW0gIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiAxNXJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7IH1cclxuI2hlYWRpbmcgaW5wdXQsICNoZWFkaW5nIHNlbGVjdCwgI2hlYWRpbmcgdGV4dGFyZWEge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNoZWFkaW5nIGEge1xyXG4gIGNvbG9yOiAjY2UxYjI4OyB9XHJcbiNoZWFkaW5nIHN0cm9uZywgI2hlYWRpbmcgYiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2hlYWRpbmcgaDEsICNoZWFkaW5nIGgyLCAjaGVhZGluZyBoMywgI2hlYWRpbmcgaDQsICNoZWFkaW5nIGg1LCAjaGVhZGluZyBoNiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2hlYWRpbmcgYmxvY2txdW90ZSB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2hlYWRpbmcgY29kZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNoZWFkaW5nIGhyIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJyZXNldFwiXSxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcclxuI2hlYWRpbmcgYnV0dG9uLFxyXG4jaGVhZGluZyAuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2ZmZmZmZjtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50OyB9XHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlcixcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlcixcclxuI2hlYWRpbmcgYnV0dG9uOmhvdmVyLFxyXG4jaGVhZGluZyAuYnV0dG9uOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2NlMWIyODtcclxuICBjb2xvcjogI2NlMWIyOCAhaW1wb3J0YW50OyB9XHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXI6YWN0aXZlLFxyXG4jaGVhZGluZyBpbnB1dFt0eXBlPVwicmVzZXRcIl06aG92ZXI6YWN0aXZlLFxyXG4jaGVhZGluZyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyOmFjdGl2ZSxcclxuI2hlYWRpbmcgYnV0dG9uOmhvdmVyOmFjdGl2ZSxcclxuI2hlYWRpbmcgLmJ1dHRvbjpob3ZlcjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA2LCAyNywgNDAsIDAuMjUpOyB9XHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeSxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInJlc2V0XCJdLnByaW1hcnksXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJidXR0b25cIl0ucHJpbWFyeSxcclxuI2hlYWRpbmcgYnV0dG9uLnByaW1hcnksXHJcbiNoZWFkaW5nIC5idXR0b24ucHJpbWFyeSB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7IH1cclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5wcmltYXJ5OmhvdmVyLFxyXG4jaGVhZGluZyBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeTpob3ZlcixcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cImJ1dHRvblwiXS5wcmltYXJ5OmhvdmVyLFxyXG4jaGVhZGluZyBidXR0b24ucHJpbWFyeTpob3ZlcixcclxuI2hlYWRpbmcgLmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyMTJmO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInJlc2V0XCJdLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4jaGVhZGluZyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4jaGVhZGluZyBidXR0b24ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbiNoZWFkaW5nIC5idXR0b24ucHJpbWFyeTpob3ZlcjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzE4MjQ7IH1cclxuI2hlYWRpbmcgbGFiZWwge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4jaGVhZGluZyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInRlbFwiXSxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInVybFwiXSxcclxuI2hlYWRpbmcgc2VsZWN0LFxyXG4jaGVhZGluZyB0ZXh0YXJlYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG4jaGVhZGluZyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMsXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInRlbFwiXTpmb2N1cyxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTpmb2N1cyxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInVybFwiXTpmb2N1cyxcclxuI2hlYWRpbmcgc2VsZWN0OmZvY3VzLFxyXG4jaGVhZGluZyB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjY2UxYjI4OyB9XHJcbiNoZWFkaW5nIHNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NwYXRoIGQ9J005LjQsMTIuM2wxMC40LDEwLjRsMTAuNC0xMC40YzAuMi0wLjIsMC41LTAuNCwwLjktMC40YzAuMywwLDAuNiwwLjEsMC45LDAuNGwzLjMsMy4zYzAuMiwwLjIsMC40LDAuNSwwLjQsMC45IGMwLDAuNC0wLjEsMC42LTAuNCwwLjlMMjAuNywzMS45Yy0wLjIsMC4yLTAuNSwwLjQtMC45LDAuNGMtMC4zLDAtMC42LTAuMS0wLjktMC40TDQuMywxNy4zYy0wLjItMC4yLTAuNC0wLjUtMC40LTAuOSBjMC0wLjQsMC4xLTAuNiwwLjQtMC45bDMuMy0zLjNjMC4yLTAuMiwwLjUtMC40LDAuOS0wLjRTOS4xLDEyLjEsOS40LDEyLjN6JyBmaWxsPSdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpJyAvJTNFJTNDL3N2ZyUzRVwiKTsgfVxyXG4jaGVhZGluZyBzZWxlY3Qgb3B0aW9uIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7IH1cclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwsXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOmJlZm9yZSxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGJvcmRlci1jb2xvcjogI2NlMWIyODtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG4jaGVhZGluZyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Zm9jdXMgKyBsYWJlbDpiZWZvcmUsXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjY2UxYjI4OyB9XHJcbiNoZWFkaW5nIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50OyB9XHJcbiNoZWFkaW5nIDotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2hlYWRpbmcgOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2hlYWRpbmcgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50OyB9XHJcbiNoZWFkaW5nIHVsLmFsdCBsaSB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jaGVhZGluZyB0YWJsZSB0Ym9keSB0ciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNoZWFkaW5nIHRhYmxlIHRib2R5IHRyOm50aC1jaGlsZCgybiArIDEpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTsgfVxyXG4jaGVhZGluZyB0YWJsZSB0aCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2hlYWRpbmcgdGFibGUgdGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2hlYWRpbmcgdGFibGUgdGZvb3Qge1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2hlYWRpbmcgdGFibGUuYWx0IHRib2R5IHRyIHRkIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2hlYWRpbmcgLmhpZ2hsaWdodHMgLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICMxMTExMTE7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpOyB9XHJcbiNoZWFkaW5nIC50ZXN0aW1vbmlhbHMgLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICMxMTExMTE7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpOyB9XHJcbiNoZWFkaW5nIC50ZXN0aW1vbmlhbHMgLmNvbnRlbnQgLmNyZWRpdCBzdHJvbmcge1xyXG4gIGNvbG9yOiAjY2UxYjI4OyB9XHJcbiNoZWFkaW5nOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2NlMWIyOCAwJSwgIzExMTExMSA3NCUpO1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxOyB9XHJcbiNoZWFkaW5nIGgxIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyOyB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgI2hlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMnJlbTsgfSB9XHJcblxyXG4vKiBNYWluICovXHJcbiNtYWluIC5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjAyNSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBwYWRkaW5nOiAzcmVtOyB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgI21haW4gLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMnJlbTsgfSB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgI21haW4gLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMS41cmVtOyB9IH1cclxuXHJcbi8qIE1lbnUgKi9cclxuI21lbnUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHJlbSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjByZW0pO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjByZW0pO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHJlbSk7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjVzIGVhc2UsIGJveC1zaGFkb3cgMC41cyBlYXNlLCB2aXNpYmlsaXR5IDAuNXM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGVhc2UsIGJveC1zaGFkb3cgMC41cyBlYXNlLCB2aXNpYmlsaXR5IDAuNXM7XHJcbiAgLW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gMC41cyBlYXNlLCBib3gtc2hhZG93IDAuNXMgZWFzZSwgdmlzaWJpbGl0eSAwLjVzO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UsIGJveC1zaGFkb3cgMC41cyBlYXNlLCB2aXNpYmlsaXR5IDAuNXM7XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcGFkZGluZzogM3JlbSAycmVtO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiAyMHJlbTtcclxuICB6LWluZGV4OiAxMDAwMjsgfVxyXG4jbWVudSBpbnB1dCwgI21lbnUgc2VsZWN0LCAjbWVudSB0ZXh0YXJlYSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI21lbnUgYSB7XHJcbiAgY29sb3I6ICNjZTFiMjg7IH1cclxuI21lbnUgc3Ryb25nLCAjbWVudSBiIHtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG4jbWVudSBoMSwgI21lbnUgaDIsICNtZW51IGgzLCAjbWVudSBoNCwgI21lbnUgaDUsICNtZW51IGg2IHtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG4jbWVudSBibG9ja3F1b3RlIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jbWVudSBjb2RlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI21lbnUgaHIge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI21lbnUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuI21lbnUgaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG4jbWVudSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxyXG4jbWVudSBidXR0b24sXHJcbiNtZW51IC5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7IH1cclxuI21lbnUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuI21lbnUgaW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyLFxyXG4jbWVudSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLFxyXG4jbWVudSBidXR0b246aG92ZXIsXHJcbiNtZW51IC5idXR0b246aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjY2UxYjI4O1xyXG4gIGNvbG9yOiAjY2UxYjI4ICFpbXBvcnRhbnQ7IH1cclxuI21lbnUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcjphY3RpdmUsXHJcbiNtZW51IGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlcjphY3RpdmUsXHJcbiNtZW51IGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXI6YWN0aXZlLFxyXG4jbWVudSBidXR0b246aG92ZXI6YWN0aXZlLFxyXG4jbWVudSAuYnV0dG9uOmhvdmVyOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDYsIDI3LCA0MCwgMC4yNSk7IH1cclxuI21lbnUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5wcmltYXJ5LFxyXG4jbWVudSBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeSxcclxuI21lbnUgaW5wdXRbdHlwZT1cImJ1dHRvblwiXS5wcmltYXJ5LFxyXG4jbWVudSBidXR0b24ucHJpbWFyeSxcclxuI21lbnUgLmJ1dHRvbi5wcmltYXJ5IHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTFiMjg7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgfVxyXG4jbWVudSBpbnB1dFt0eXBlPVwic3VibWl0XCJdLnByaW1hcnk6aG92ZXIsXHJcbiNtZW51IGlucHV0W3R5cGU9XCJyZXNldFwiXS5wcmltYXJ5OmhvdmVyLFxyXG4jbWVudSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnk6aG92ZXIsXHJcbiNtZW51IGJ1dHRvbi5wcmltYXJ5OmhvdmVyLFxyXG4jbWVudSAuYnV0dG9uLnByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjIxMmY7XHJcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxyXG4jbWVudSBpbnB1dFt0eXBlPVwic3VibWl0XCJdLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4jbWVudSBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbiNtZW51IGlucHV0W3R5cGU9XCJidXR0b25cIl0ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbiNtZW51IGJ1dHRvbi5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuI21lbnUgLmJ1dHRvbi5wcmltYXJ5OmhvdmVyOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3MTgyNDsgfVxyXG4jbWVudSA+IHVsIHtcclxuICBtYXJnaW46IDAgMCAxcmVtIDA7IH1cclxuI21lbnUgPiB1bC5saW5rcyB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwOyB9XHJcbiNtZW51ID4gdWwubGlua3MgPiBsaSB7XHJcbiAgcGFkZGluZzogMDsgfVxyXG4jbWVudSA+IHVsLmxpbmtzID4gbGkgPiBhIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cclxuI21lbnUgPiB1bC5saW5rcyA+IGxpID4gYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI21lbnUgPiB1bC5saW5rcyA+IGxpOmZpcnN0LWNoaWxkID4gYSB7XHJcbiAgYm9yZGVyLXRvcDogMDsgfVxyXG4jbWVudSAuY2xvc2Uge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGJvcmRlcjogMDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDMuMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDMuMjVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMS4yNXJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdG9wOiAwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDdyZW07IH1cclxuI21lbnUgLmNsb3NlOmJlZm9yZSB7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDsgfVxyXG4jbWVudSAuY2xvc2U6YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxmMDBkJztcclxuICBmb250LXNpemU6IDEuMjVyZW07IH1cclxuI21lbnUgLmNsb3NlOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xyXG4gICNtZW51IC5jbG9zZSB7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICBsaW5lLWhlaWdodDogNHJlbTsgfSB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcbiAgI21lbnUge1xyXG4gICAgcGFkZGluZzogMi41cmVtIDEuNzVyZW07IH0gfVxyXG5cclxuYm9keS5pcy1tZW51LXZpc2libGUgI21lbnUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxLjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxyXG4iXX0= */", "@import url(\"https://fonts.googleapis.com/css?family=Raleway:200,300,400,500,600\");\n\n\n\nbody[_ngcontent-%COMP%] {\r\n  -ms-overflow-style: scrollbar; }\n@media screen and (max-width: 480px) {\r\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    min-width: 320px; } }\nhtml[_ngcontent-%COMP%] {\r\n  box-sizing: border-box; }\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n  box-sizing: inherit; }\nbody[_ngcontent-%COMP%] {\r\n  background: #ffffff; }\nbody.is-preload[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], body.is-preload[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, body.is-preload[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\r\n  animation: none !important;\r\n  transition: none !important; }\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline; }\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\r\n  display: block; }\nbody[_ngcontent-%COMP%] {\r\n  line-height: 1; }\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\r\n  list-style: none; }\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\r\n  quotes: none; }\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  content: none; }\ntable[_ngcontent-%COMP%] {\r\n  border-collapse: collapse;\r\n  border-spacing: 0; }\nbody[_ngcontent-%COMP%] {\r\n  -webkit-text-size-adjust: none; }\nmark[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  color: inherit; }\ninput[_ngcontent-%COMP%]::-moz-focus-inner {\r\n  border: 0;\r\n  padding: 0; }\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none; }\n\nhtml[_ngcontent-%COMP%] {\r\n  font-size: 13pt; }\n@media screen and (max-width: 1680px) {\r\n  html[_ngcontent-%COMP%] {\r\n    font-size: 11pt; } }\n@media screen and (max-width: 980px) {\r\n  html[_ngcontent-%COMP%] {\r\n    font-size: 12pt; } }\n@media screen and (max-width: 480px) {\r\n  html[_ngcontent-%COMP%] {\r\n    font-size: 11pt; } }\nbody[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  color: #444444; }\nbody[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  font-family: \"Raleway\", Arial, Helvetica, sans-serif;\r\n  font-weight: 400;\r\n  font-size: 1rem;\r\n  line-height: 1.65; }\na[_ngcontent-%COMP%] {\r\n  transition: color 0.2s ease-in-out;\r\n  text-decoration: underline; }\na[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none; }\nstrong[_ngcontent-%COMP%], b[_ngcontent-%COMP%] {\r\n  font-weight: 600; }\nem[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\r\n  font-style: italic; }\np[_ngcontent-%COMP%] {\r\n  margin: 0 0 2rem 0; }\nheader.special[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 4rem; }\nheader.special[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  max-width: 75%;\r\n  margin-left: auto;\r\n  margin-right: auto; }\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n  line-height: 1.5;\r\n  text-transform: uppercase;\r\n  margin: 0 0 1.5rem 0; }\nh1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n  text-decoration: none; }\nh1[_ngcontent-%COMP%] {\r\n  font-size: 3rem;\r\n  line-height: 1.2; }\nh2[_ngcontent-%COMP%] {\r\n  font-size: 2.25rem;\r\n  line-height: 1.3; }\nh3[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem; }\nh4[_ngcontent-%COMP%] {\r\n  font-size: 1rem; }\nh5[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem; }\nh6[_ngcontent-%COMP%] {\r\n  font-size: 0.7rem; }\n@media screen and (max-width: 736px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 2.75rem;\r\n    line-height: 1.3; }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 1.75rem;\r\n    line-height: 1.5; }\r\n\r\n  h3[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem; } }\nsub[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  position: relative;\r\n  top: 0.5rem; }\nsup[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  position: relative;\r\n  top: -0.5rem; }\nblockquote[_ngcontent-%COMP%] {\r\n  border-left: solid 0.5rem;\r\n  font-style: italic;\r\n  margin: 0 0 2rem 0;\r\n  padding: 1rem 0 1rem 2rem; }\ncode[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  border: solid 1px;\r\n  font-family: \"Courier New\", monospace;\r\n  font-size: 0.9rem;\r\n  margin: 0 0.25rem;\r\n  padding: 0.25rem 0.65rem; }\npre[_ngcontent-%COMP%] {\r\n  -webkit-overflow-scrolling: touch;\r\n  font-family: \"Courier New\", monospace;\r\n  font-size: 0.9rem;\r\n  margin: 0 0 2rem 0; }\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\r\n  display: block;\r\n  line-height: 1.75;\r\n  padding: 1rem 1.5rem;\r\n  overflow-x: auto; }\nhr[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  border-bottom: solid 1px;\r\n  margin: 2rem 0; }\nhr.major[_ngcontent-%COMP%] {\r\n  margin: 4rem 0; }\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  color: #555555; }\na[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\nstrong[_ngcontent-%COMP%], b[_ngcontent-%COMP%] {\r\n  color: #555555; }\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  color: #555555; }\nblockquote[_ngcontent-%COMP%] {\r\n  border-left-color: rgba(0, 0, 0, 0.25); }\ncode[_ngcontent-%COMP%] {\r\n  background: rgba(0, 0, 0, 0.075);\r\n  border-color: rgba(0, 0, 0, 0.25); }\nhr[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(0, 0, 0, 0.25); }\n\n.inner[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  width: 75rem;\r\n  max-width: calc(100% - 6rem); }\n@media screen and (max-width: 480px) {\r\n  .inner[_ngcontent-%COMP%] {\r\n    max-width: calc(100% - 3rem); } }\n\ninput[type=\"submit\"][_ngcontent-%COMP%], input[type=\"reset\"][_ngcontent-%COMP%], input[type=\"button\"][_ngcontent-%COMP%], button[_ngcontent-%COMP%], .button[_ngcontent-%COMP%] {\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;\r\n  border: 0;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-weight: 600;\r\n  height: 3.25rem;\r\n  line-height: 3.25rem;\r\n  padding: 0 1.75rem;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  white-space: nowrap; }\ninput[type=\"submit\"].small[_ngcontent-%COMP%], input[type=\"reset\"].small[_ngcontent-%COMP%], input[type=\"button\"].small[_ngcontent-%COMP%], button.small[_ngcontent-%COMP%], .button.small[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  height: 2.4375rem;\r\n  line-height: 2.4375rem;\r\n  padding: 0 1.25rem; }\ninput[type=\"submit\"].large[_ngcontent-%COMP%], input[type=\"reset\"].large[_ngcontent-%COMP%], input[type=\"button\"].large[_ngcontent-%COMP%], button.large[_ngcontent-%COMP%], .button.large[_ngcontent-%COMP%] {\r\n  font-size: 1.35rem;\r\n  height: 4.0625rem;\r\n  line-height: 4.0625rem;\r\n  padding: 0 2rem; }\ninput[type=\"submit\"].wide[_ngcontent-%COMP%], input[type=\"reset\"].wide[_ngcontent-%COMP%], input[type=\"button\"].wide[_ngcontent-%COMP%], button.wide[_ngcontent-%COMP%], .button.wide[_ngcontent-%COMP%] {\r\n  min-width: 13rem; }\ninput[type=\"submit\"].icon[_ngcontent-%COMP%]:before, input[type=\"reset\"].icon[_ngcontent-%COMP%]:before, input[type=\"button\"].icon[_ngcontent-%COMP%]:before, button.icon[_ngcontent-%COMP%]:before, .button.icon[_ngcontent-%COMP%]:before {\r\n  margin-right: 0.5rem; }\ninput[type=\"submit\"].fit[_ngcontent-%COMP%], input[type=\"reset\"].fit[_ngcontent-%COMP%], input[type=\"button\"].fit[_ngcontent-%COMP%], button.fit[_ngcontent-%COMP%], .button.fit[_ngcontent-%COMP%] {\r\n  width: 100%; }\ninput[type=\"submit\"].disabled[_ngcontent-%COMP%], input[type=\"submit\"][_ngcontent-%COMP%]:disabled, input[type=\"reset\"].disabled[_ngcontent-%COMP%], input[type=\"reset\"][_ngcontent-%COMP%]:disabled, input[type=\"button\"].disabled[_ngcontent-%COMP%], input[type=\"button\"][_ngcontent-%COMP%]:disabled, button.disabled[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:disabled, .button.disabled[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]:disabled {\r\n  pointer-events: none;\r\n  opacity: 0.25; }\ninput[type=\"submit\"][_ngcontent-%COMP%], input[type=\"reset\"][_ngcontent-%COMP%], input[type=\"button\"][_ngcontent-%COMP%], button[_ngcontent-%COMP%], .button[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset 0 0 0 1px #555555;\r\n  color: #555555 !important; }\ninput[type=\"submit\"][_ngcontent-%COMP%]:hover, input[type=\"reset\"][_ngcontent-%COMP%]:hover, input[type=\"button\"][_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 0 0 0 1px #ce1b28;\r\n  color: #ce1b28 !important; }\ninput[type=\"submit\"][_ngcontent-%COMP%]:hover:active, input[type=\"reset\"][_ngcontent-%COMP%]:hover:active, input[type=\"button\"][_ngcontent-%COMP%]:hover:active, button[_ngcontent-%COMP%]:hover:active, .button[_ngcontent-%COMP%]:hover:active {\r\n  background-color: rgba(206, 27, 40, 0.25); }\ninput[type=\"submit\"].primary[_ngcontent-%COMP%], input[type=\"reset\"].primary[_ngcontent-%COMP%], input[type=\"button\"].primary[_ngcontent-%COMP%], button.primary[_ngcontent-%COMP%], .button.primary[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n  background-color: #ce1b28;\r\n  color: #ffffff !important; }\ninput[type=\"submit\"].primary[_ngcontent-%COMP%]:hover, input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover, input[type=\"button\"].primary[_ngcontent-%COMP%]:hover, button.primary[_ngcontent-%COMP%]:hover, .button.primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #e2212f;\r\n  box-shadow: none; }\ninput[type=\"submit\"].primary[_ngcontent-%COMP%]:hover:active, input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover:active, input[type=\"button\"].primary[_ngcontent-%COMP%]:hover:active, button.primary[_ngcontent-%COMP%]:hover:active, .button.primary[_ngcontent-%COMP%]:hover:active {\r\n  background-color: #b71824; }\n\nform[_ngcontent-%COMP%] {\r\n  margin: 0 0 2rem 0; }\ninput[type=\"text\"][_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%], input[type=\"email\"][_ngcontent-%COMP%], input[type=\"tel\"][_ngcontent-%COMP%], input[type=\"search\"][_ngcontent-%COMP%], input[type=\"url\"][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  border-radius: 4px;\r\n  border: none;\r\n  border: solid 1px;\r\n  color: inherit;\r\n  display: block;\r\n  outline: 0;\r\n  padding: 0 1rem;\r\n  text-decoration: none;\r\n  width: 100%; }\ninput[type=\"text\"][_ngcontent-%COMP%]:invalid, input[type=\"password\"][_ngcontent-%COMP%]:invalid, input[type=\"email\"][_ngcontent-%COMP%]:invalid, input[type=\"tel\"][_ngcontent-%COMP%]:invalid, input[type=\"search\"][_ngcontent-%COMP%]:invalid, input[type=\"url\"][_ngcontent-%COMP%]:invalid, select[_ngcontent-%COMP%]:invalid, textarea[_ngcontent-%COMP%]:invalid {\r\n  box-shadow: none; }\nlabel[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  margin: 0 0 1rem 0; }\ninput[type=\"text\"][_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%], input[type=\"email\"][_ngcontent-%COMP%], input[type=\"tel\"][_ngcontent-%COMP%], input[type=\"search\"][_ngcontent-%COMP%], input[type=\"url\"][_ngcontent-%COMP%] {\r\n  height: 3.25rem; }\nselect[_ngcontent-%COMP%] {\r\n  background-size: 1.25rem;\r\n  background-repeat: no-repeat;\r\n  background-position: calc(100% - 1rem) center;\r\n  height: 3.25rem;\r\n  padding-right: 3.25rem;\r\n  text-overflow: ellipsis; }\nselect[_ngcontent-%COMP%]:focus::-ms-value {\r\n  background-color: transparent; }\nselect[_ngcontent-%COMP%]::-ms-expand {\r\n  display: none; }\ntextarea[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 1rem; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%], input[type=\"radio\"][_ngcontent-%COMP%] {\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  display: block;\r\n  float: left;\r\n  margin-right: -2rem;\r\n  opacity: 0;\r\n  width: 1rem;\r\n  z-index: -1; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  padding-left: 2.825rem;\r\n  padding-right: 0.875rem;\r\n  position: relative; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: FontAwesome;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  text-transform: none !important; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  border-radius: 4px;\r\n  border: solid 1px;\r\n  content: '';\r\n  display: inline-block;\r\n  height: 1.95rem;\r\n  left: 0;\r\n  line-height: 1.86875rem;\r\n  position: absolute;\r\n  text-align: center;\r\n  top: -0.1625rem;\r\n  width: 1.95rem; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  content: '\\f00c'; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  border-radius: 4px; }\ninput[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  border-radius: 100%; }\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  opacity: 1.0; }\n[_ngcontent-%COMP%]:-moz-placeholder {\r\n  opacity: 1.0; }\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n  opacity: 1.0; }\n[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  opacity: 1.0; }\nlabel[_ngcontent-%COMP%] {\r\n  color: #555555; }\ninput[type=\"text\"][_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%], input[type=\"email\"][_ngcontent-%COMP%], input[type=\"tel\"][_ngcontent-%COMP%], input[type=\"search\"][_ngcontent-%COMP%], input[type=\"url\"][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.075);\r\n  border-color: rgba(0, 0, 0, 0.25); }\ninput[type=\"text\"][_ngcontent-%COMP%]:focus, input[type=\"password\"][_ngcontent-%COMP%]:focus, input[type=\"email\"][_ngcontent-%COMP%]:focus, input[type=\"tel\"][_ngcontent-%COMP%]:focus, input[type=\"search\"][_ngcontent-%COMP%]:focus, input[type=\"url\"][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\nselect[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(0, 0, 0, 0.25)' /%3E%3C/svg%3E\"); }\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  color: #444444;\r\n  background-color: #ffffff; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  color: #444444; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  background: rgba(0, 0, 0, 0.075);\r\n  border-color: rgba(0, 0, 0, 0.25); }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  background-color: #ce1b28;\r\n  border-color: #ce1b28;\r\n  color: #ffffff; }\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, input[type=\"radio\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  color: #bbbbbb !important; }\n[_ngcontent-%COMP%]:-moz-placeholder {\r\n  color: #bbbbbb !important; }\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: #bbbbbb !important; }\n[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  color: #bbbbbb !important; }\n\nol[_ngcontent-%COMP%] {\r\n  list-style: decimal;\r\n  margin: 0 0 2rem 0;\r\n  padding-left: 1.25rem; }\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding-left: 0.25rem; }\nul[_ngcontent-%COMP%] {\r\n  list-style: disc;\r\n  margin: 0 0 2rem 0;\r\n  padding-left: 1rem; }\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding-left: 0.325rem; }\nul.plain[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding-left: 0; }\nul.plain[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin-bottom: 1rem; }\nul.plain[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  color: #ffffff;\r\n  display: inline-block;\r\n  margin-right: 1rem;\r\n  text-align: center;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  line-height: 2rem;\r\n  background: rgba(0, 0, 0, 0.5); }\nul.alt[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding-left: 0; }\nul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-top: solid 1px;\r\n  padding: 0.75rem 0; }\nul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\r\n  border-top: 0;\r\n  padding-top: 0; }\nul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n  padding-bottom: 0; }\ndl[_ngcontent-%COMP%] {\r\n  margin: 0 0 2rem 0; }\ndl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: 600;\r\n  margin: 0 0 1rem 0; }\ndl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\r\n  margin-left: 1.5rem; }\nul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(0, 0, 0, 0.25); }\n\n.table-wrapper[_ngcontent-%COMP%] {\r\n  -webkit-overflow-scrolling: touch;\r\n  overflow-x: auto; }\ntable[_ngcontent-%COMP%] {\r\n  margin: 0 0 2rem 0;\r\n  width: 100%; }\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border: solid 1px;\r\n  border-left: 0;\r\n  border-right: 0; }\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 0.75rem; }\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n  padding: 0 0.75rem 0.75rem 0.75rem;\r\n  text-align: left; }\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: solid 2px; }\ntable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\r\n  border-top: solid 2px; }\ntable.alt[_ngcontent-%COMP%] {\r\n  border-collapse: separate; }\ntable.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border: solid 1px;\r\n  border-left-width: 0;\r\n  border-top-width: 0; }\ntable.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\r\n  border-left-width: 1px; }\ntable.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\r\n  border-top-width: 1px; }\ntable.alt[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0; }\ntable.alt[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\r\n  border-top: 0; }\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-color: rgba(0, 0, 0, 0.25); }\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n  background-color: rgba(0, 0, 0, 0.075); }\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  color: #555555; }\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(0, 0, 0, 0.25); }\ntable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(0, 0, 0, 0.25); }\ntable.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-color: rgba(0, 0, 0, 0.25); }\n\n.highlights[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 2.5rem 0;\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -moz-align-items: -moz-stretch;\r\n  -ms-align-items: -ms-stretch;\r\n  align-items: stretch; }\n.highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  -ms-flex-shrink: 1;\r\n  flex-shrink: 1;\r\n  -moz-flex-grow: 0;\r\n  -ms-flex-grow: 0;\r\n  flex-grow: 0; }\n.highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  width: 33.3333333333%; }\n.highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  width: calc(33.3333333333% + 1rem); }\n.highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 3) {\r\n  padding-top: 0; }\n.highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 3) {\r\n  padding-bottom: 0; }\n.highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1) {\r\n  padding-left: 0; }\n.highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n  padding-right: 0; }\n.highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1), .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n  width: calc(33.3333333333% + -0.5rem); }\n.highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  height: 100%;\r\n  padding: 3rem;\r\n  text-align: center; }\n.highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  font-size: 5rem; }\n.highlights[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n  margin-bottom: 0; }\n@media screen and (max-width: 980px) {\r\n  .highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  .highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(33.3333333333% + 0.6666666667rem); }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 3) {\r\n    padding-top: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 3) {\r\n    padding-bottom: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1) {\r\n    padding-left: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding-right: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1), .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding: 1rem;\r\n    width: calc(50% + 1rem); }\r\n  .highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(50% + 1rem); }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 2) {\r\n    padding-top: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 2) {\r\n    padding-bottom: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n    padding-left: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    padding-right: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1), .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    width: calc(50% + 0rem); }\r\n  .highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 2rem; } }\n@media screen and (max-width: 736px) {\r\n  .highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  .highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(33.3333333333% + 0.6666666667rem); }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 3) {\r\n    padding-top: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 3) {\r\n    padding-bottom: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1) {\r\n    padding-left: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding-right: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1), .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding: 1rem;\r\n    width: calc(100% + 2rem); }\r\n  .highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(50% + 1rem); }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 2) {\r\n    padding-top: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 2) {\r\n    padding-bottom: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n    padding-left: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    padding-right: 1rem; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1), .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    padding: 1rem;\r\n    width: calc(100% + 2rem); }\r\n  .highlights[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(100% + 2rem); }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 1) {\r\n    padding-top: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 1) {\r\n    padding-bottom: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n + 1) {\r\n    padding-left: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n) {\r\n    padding-right: 0; }\r\n  .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n + 1), .highlights[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n) {\r\n    width: calc(100% + 1rem); } }\n.highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: url('img-06.jpg');\r\n  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.025); }\n\n.testimonials[_ngcontent-%COMP%] {\r\n  margin: 2.5rem 0;\r\n  width: 100%;\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -moz-align-items: -moz-stretch;\r\n  -ms-align-items: -ms-stretch;\r\n  align-items: stretch; }\n.testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  -ms-flex-shrink: 1;\r\n  flex-shrink: 1;\r\n  -moz-flex-grow: 0;\r\n  -ms-flex-grow: 0;\r\n  flex-grow: 0; }\n.testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  width: 33.3333333333%; }\n.testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  width: calc(33.3333333333% + 1rem); }\n.testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 3) {\r\n  padding-top: 0; }\n.testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 3) {\r\n  padding-bottom: 0; }\n.testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1) {\r\n  padding-left: 0; }\n.testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n  padding-right: 0; }\n.testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1), .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n  width: calc(33.3333333333% + -0.5rem); }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  height: 100%;\r\n  padding: 3rem; }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  -moz-align-items: center;\r\n  -ms-align-items: center;\r\n  align-items: center; }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n  margin: 0; }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  margin-right: 2rem;\r\n  width: 20%; }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 100%;\r\n  max-width: 100%; }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%] {\r\n  font-size: 0.75rem; }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\r\n  margin: 0; }\n.testimonials[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n  margin-bottom: 0; }\n@media screen and (max-width: 980px) {\r\n  .testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  .testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(33.3333333333% + 0.6666666667rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 3) {\r\n    padding-top: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 3) {\r\n    padding-bottom: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1) {\r\n    padding-left: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding-right: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1), .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding: 1rem;\r\n    width: calc(50% + 1rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(50% + 1rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 2) {\r\n    padding-top: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 2) {\r\n    padding-bottom: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n    padding-left: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    padding-right: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1), .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    width: calc(50% + 0rem); }\r\n  .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 2rem; } }\n@media screen and (max-width: 736px) {\r\n  .testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  .testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(33.3333333333% + 0.6666666667rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 3) {\r\n    padding-top: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 3) {\r\n    padding-bottom: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1) {\r\n    padding-left: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding-right: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n + 1), .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3n) {\r\n    padding: 1rem;\r\n    width: calc(100% + 2rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(50% + 1rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 2) {\r\n    padding-top: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 2) {\r\n    padding-bottom: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n    padding-left: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    padding-right: 1rem; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n + 1), .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2n) {\r\n    padding: 1rem;\r\n    width: calc(100% + 2rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    width: calc(100% + 2rem); }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(-n + 1) {\r\n    padding-top: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-last-child(-n + 1) {\r\n    padding-bottom: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n + 1) {\r\n    padding-left: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n) {\r\n    padding-right: 0; }\r\n  .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n + 1), .testimonials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1n) {\r\n    width: calc(100% + 1rem); } }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #ffffff;\r\n  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.025); }\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n\nul.actions[_ngcontent-%COMP%] {\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  cursor: default;\r\n  list-style: none;\r\n  margin-left: -1rem;\r\n  padding-left: 0; }\nul.actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 0 0 0 1rem;\r\n  vertical-align: middle; }\nul.actions.special[_ngcontent-%COMP%] {\r\n  -moz-justify-content: center;\r\n  -ms-justify-content: center;\r\n  justify-content: center;\r\n  width: calc(100% + 1rem); }\nul.actions.stacked[_ngcontent-%COMP%] {\r\n  -moz-flex-direction: column;\r\n  flex-direction: column;\r\n  margin-left: 0; }\nul.actions.stacked[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 1.3rem 0 0 0; }\nul.actions.stacked[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\r\n  padding-top: 0; }\nul.actions.fit[_ngcontent-%COMP%] {\r\n  width: calc(100% + 1rem); }\nul.actions.fit[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  -moz-flex-grow: 1;\r\n  -ms-flex-grow: 1;\r\n  flex-grow: 1;\r\n  -ms-flex-shrink: 1;\r\n  flex-shrink: 1;\r\n  width: 100%; }\nul.actions.fit[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  width: 100%; }\nul.actions.fit.stacked[_ngcontent-%COMP%] {\r\n  width: 100%; }\n@media screen and (max-width: 480px) {\r\n  ul.actions[_ngcontent-%COMP%]:not(.fixed) {\r\n    -moz-flex-direction: column;\r\n    flex-direction: column;\r\n    margin-left: 0;\r\n    width: 100% !important; }\r\n  ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%] {\r\n    -moz-flex-grow: 1;\r\n    -ms-flex-grow: 1;\r\n    flex-grow: 1;\r\n    -ms-flex-shrink: 1;\r\n    flex-shrink: 1;\r\n    padding: 1rem 0 0 0;\r\n    text-align: center;\r\n    width: 100%; }\r\n  ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]:first-child {\r\n    padding-top: 0; }\r\n  ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%], ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%], ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=\"submit\"].icon[_ngcontent-%COMP%]:before, ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=\"reset\"].icon[_ngcontent-%COMP%]:before, ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=\"button\"].icon[_ngcontent-%COMP%]:before, ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   button.icon[_ngcontent-%COMP%]:before, ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   .button.icon[_ngcontent-%COMP%]:before {\r\n    margin-left: -0.5rem; } }\n\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  box-sizing: border-box; }\n.row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  box-sizing: border-box; }\n.row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n  margin-bottom: 0; }\n.row[_ngcontent-%COMP%]    > .imp[_ngcontent-%COMP%] {\r\n  order: -1; }\n.row[_ngcontent-%COMP%]    > .col-1[_ngcontent-%COMP%] {\r\n  width: 8.3333333333%; }\n.row[_ngcontent-%COMP%]    > .off-1[_ngcontent-%COMP%] {\r\n  margin-left: 8.3333333333%; }\n.row[_ngcontent-%COMP%]    > .col-2[_ngcontent-%COMP%] {\r\n  width: 16.6666666667%; }\n.row[_ngcontent-%COMP%]    > .off-2[_ngcontent-%COMP%] {\r\n  margin-left: 16.6666666667%; }\n.row[_ngcontent-%COMP%]    > .col-3[_ngcontent-%COMP%] {\r\n  width: 25%; }\n.row[_ngcontent-%COMP%]    > .off-3[_ngcontent-%COMP%] {\r\n  margin-left: 25%; }\n.row[_ngcontent-%COMP%]    > .col-4[_ngcontent-%COMP%] {\r\n  width: 33.3333333333%; }\n.row[_ngcontent-%COMP%]    > .off-4[_ngcontent-%COMP%] {\r\n  margin-left: 33.3333333333%; }\n.row[_ngcontent-%COMP%]    > .col-5[_ngcontent-%COMP%] {\r\n  width: 41.6666666667%; }\n.row[_ngcontent-%COMP%]    > .off-5[_ngcontent-%COMP%] {\r\n  margin-left: 41.6666666667%; }\n.row[_ngcontent-%COMP%]    > .col-6[_ngcontent-%COMP%] {\r\n  width: 50%; }\n.row[_ngcontent-%COMP%]    > .off-6[_ngcontent-%COMP%] {\r\n  margin-left: 50%; }\n.row[_ngcontent-%COMP%]    > .col-7[_ngcontent-%COMP%] {\r\n  width: 58.3333333333%; }\n.row[_ngcontent-%COMP%]    > .off-7[_ngcontent-%COMP%] {\r\n  margin-left: 58.3333333333%; }\n.row[_ngcontent-%COMP%]    > .col-8[_ngcontent-%COMP%] {\r\n  width: 66.6666666667%; }\n.row[_ngcontent-%COMP%]    > .off-8[_ngcontent-%COMP%] {\r\n  margin-left: 66.6666666667%; }\n.row[_ngcontent-%COMP%]    > .col-9[_ngcontent-%COMP%] {\r\n  width: 75%; }\n.row[_ngcontent-%COMP%]    > .off-9[_ngcontent-%COMP%] {\r\n  margin-left: 75%; }\n.row[_ngcontent-%COMP%]    > .col-10[_ngcontent-%COMP%] {\r\n  width: 83.3333333333%; }\n.row[_ngcontent-%COMP%]    > .off-10[_ngcontent-%COMP%] {\r\n  margin-left: 83.3333333333%; }\n.row[_ngcontent-%COMP%]    > .col-11[_ngcontent-%COMP%] {\r\n  width: 91.6666666667%; }\n.row[_ngcontent-%COMP%]    > .off-11[_ngcontent-%COMP%] {\r\n  margin-left: 91.6666666667%; }\n.row[_ngcontent-%COMP%]    > .col-12[_ngcontent-%COMP%] {\r\n  width: 100%; }\n.row[_ngcontent-%COMP%]    > .off-12[_ngcontent-%COMP%] {\r\n  margin-left: 100%; }\n.row.gtr-0[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-left: 0rem; }\n.row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 0 0 0 0rem; }\n.row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {\r\n  margin-top: 0rem; }\n.row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding-top: 0rem; }\n.row.gtr-25[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-left: -0.75rem; }\n.row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 0 0 0 0.75rem; }\n.row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {\r\n  margin-top: -0.75rem; }\n.row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding-top: 0.75rem; }\n.row.gtr-50[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-left: -1.5rem; }\n.row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 0 0 0 1.5rem; }\n.row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {\r\n  margin-top: -1.5rem; }\n.row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding-top: 1.5rem; }\n.row[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-left: -3rem; }\n.row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 0 0 0 3rem; }\n.row.gtr-uniform[_ngcontent-%COMP%] {\r\n  margin-top: -3rem; }\n.row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding-top: 3rem; }\n.row.gtr-150[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-left: -4.5rem; }\n.row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 0 0 0 4.5rem; }\n.row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {\r\n  margin-top: -4.5rem; }\n.row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding-top: 4.5rem; }\n.row.gtr-200[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-left: -6rem; }\n.row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 0 0 0 6rem; }\n.row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {\r\n  margin-top: -6rem; }\n.row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding-top: 6rem; }\n@media screen and (max-width: 1680px) {\r\n  .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    box-sizing: border-box; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    box-sizing: border-box; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0; }\r\n\r\n  .row[_ngcontent-%COMP%]    > .imp-xlarge[_ngcontent-%COMP%] {\r\n    order: -1; }\r\n  .row[_ngcontent-%COMP%]    > .col-1-xlarge[_ngcontent-%COMP%] {\r\n    width: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-1-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-2-xlarge[_ngcontent-%COMP%] {\r\n    width: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-2-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-3-xlarge[_ngcontent-%COMP%] {\r\n    width: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .off-3-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .col-4-xlarge[_ngcontent-%COMP%] {\r\n    width: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-4-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-5-xlarge[_ngcontent-%COMP%] {\r\n    width: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-5-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-6-xlarge[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .off-6-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .col-7-xlarge[_ngcontent-%COMP%] {\r\n    width: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-7-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-8-xlarge[_ngcontent-%COMP%] {\r\n    width: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-8-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-9-xlarge[_ngcontent-%COMP%] {\r\n    width: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .off-9-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .col-10-xlarge[_ngcontent-%COMP%] {\r\n    width: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-10-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-11-xlarge[_ngcontent-%COMP%] {\r\n    width: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-11-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-12-xlarge[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  .row[_ngcontent-%COMP%]    > .off-12-xlarge[_ngcontent-%COMP%] {\r\n    margin-left: 100%; }\r\n  .row.gtr-0[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: 0rem; }\r\n  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.75rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.75rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.75rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.75rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -1.5rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 1.5rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -1.5rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 1.5rem; }\r\n  .row[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -3rem; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 3rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -3rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 3rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -4.5rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 4.5rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -4.5rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 4.5rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -6rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 6rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -6rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 6rem; } }\n@media screen and (max-width: 1280px) {\r\n  .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    box-sizing: border-box; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    box-sizing: border-box; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0; }\r\n\r\n  .row[_ngcontent-%COMP%]    > .imp-large[_ngcontent-%COMP%] {\r\n    order: -1; }\r\n  .row[_ngcontent-%COMP%]    > .col-1-large[_ngcontent-%COMP%] {\r\n    width: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-1-large[_ngcontent-%COMP%] {\r\n    margin-left: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-2-large[_ngcontent-%COMP%] {\r\n    width: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-2-large[_ngcontent-%COMP%] {\r\n    margin-left: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-3-large[_ngcontent-%COMP%] {\r\n    width: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .off-3-large[_ngcontent-%COMP%] {\r\n    margin-left: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .col-4-large[_ngcontent-%COMP%] {\r\n    width: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-4-large[_ngcontent-%COMP%] {\r\n    margin-left: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-5-large[_ngcontent-%COMP%] {\r\n    width: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-5-large[_ngcontent-%COMP%] {\r\n    margin-left: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-6-large[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .off-6-large[_ngcontent-%COMP%] {\r\n    margin-left: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .col-7-large[_ngcontent-%COMP%] {\r\n    width: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-7-large[_ngcontent-%COMP%] {\r\n    margin-left: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-8-large[_ngcontent-%COMP%] {\r\n    width: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-8-large[_ngcontent-%COMP%] {\r\n    margin-left: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-9-large[_ngcontent-%COMP%] {\r\n    width: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .off-9-large[_ngcontent-%COMP%] {\r\n    margin-left: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .col-10-large[_ngcontent-%COMP%] {\r\n    width: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-10-large[_ngcontent-%COMP%] {\r\n    margin-left: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-11-large[_ngcontent-%COMP%] {\r\n    width: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-11-large[_ngcontent-%COMP%] {\r\n    margin-left: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-12-large[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  .row[_ngcontent-%COMP%]    > .off-12-large[_ngcontent-%COMP%] {\r\n    margin-left: 100%; }\r\n  .row.gtr-0[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: 0rem; }\r\n  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.375rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.375rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.375rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.375rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.75rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.75rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.75rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.75rem; }\r\n  .row[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -1.5rem; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 1.5rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -1.5rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 1.5rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -2.25rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 2.25rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -2.25rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 2.25rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -3rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 3rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -3rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 3rem; } }\n@media screen and (max-width: 980px) {\r\n  .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    box-sizing: border-box; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    box-sizing: border-box; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0; }\r\n\r\n  .row[_ngcontent-%COMP%]    > .imp-medium[_ngcontent-%COMP%] {\r\n    order: -1; }\r\n  .row[_ngcontent-%COMP%]    > .col-1-medium[_ngcontent-%COMP%] {\r\n    width: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-1-medium[_ngcontent-%COMP%] {\r\n    margin-left: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-2-medium[_ngcontent-%COMP%] {\r\n    width: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-2-medium[_ngcontent-%COMP%] {\r\n    margin-left: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-3-medium[_ngcontent-%COMP%] {\r\n    width: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .off-3-medium[_ngcontent-%COMP%] {\r\n    margin-left: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .col-4-medium[_ngcontent-%COMP%] {\r\n    width: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-4-medium[_ngcontent-%COMP%] {\r\n    margin-left: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-5-medium[_ngcontent-%COMP%] {\r\n    width: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-5-medium[_ngcontent-%COMP%] {\r\n    margin-left: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-6-medium[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .off-6-medium[_ngcontent-%COMP%] {\r\n    margin-left: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .col-7-medium[_ngcontent-%COMP%] {\r\n    width: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-7-medium[_ngcontent-%COMP%] {\r\n    margin-left: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-8-medium[_ngcontent-%COMP%] {\r\n    width: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-8-medium[_ngcontent-%COMP%] {\r\n    margin-left: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-9-medium[_ngcontent-%COMP%] {\r\n    width: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .off-9-medium[_ngcontent-%COMP%] {\r\n    margin-left: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .col-10-medium[_ngcontent-%COMP%] {\r\n    width: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-10-medium[_ngcontent-%COMP%] {\r\n    margin-left: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-11-medium[_ngcontent-%COMP%] {\r\n    width: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-11-medium[_ngcontent-%COMP%] {\r\n    margin-left: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-12-medium[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  .row[_ngcontent-%COMP%]    > .off-12-medium[_ngcontent-%COMP%] {\r\n    margin-left: 100%; }\r\n  .row.gtr-0[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: 0rem; }\r\n  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.375rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.375rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.375rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.375rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.75rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.75rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.75rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.75rem; }\r\n  .row[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -1.5rem; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 1.5rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -1.5rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 1.5rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -2.25rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 2.25rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -2.25rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 2.25rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -3rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 3rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -3rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 3rem; } }\n@media screen and (max-width: 736px) {\r\n  .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    box-sizing: border-box; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    box-sizing: border-box; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0; }\r\n\r\n  .row[_ngcontent-%COMP%]    > .imp-small[_ngcontent-%COMP%] {\r\n    order: -1; }\r\n  .row[_ngcontent-%COMP%]    > .col-1-small[_ngcontent-%COMP%] {\r\n    width: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-1-small[_ngcontent-%COMP%] {\r\n    margin-left: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-2-small[_ngcontent-%COMP%] {\r\n    width: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-2-small[_ngcontent-%COMP%] {\r\n    margin-left: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-3-small[_ngcontent-%COMP%] {\r\n    width: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .off-3-small[_ngcontent-%COMP%] {\r\n    margin-left: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .col-4-small[_ngcontent-%COMP%] {\r\n    width: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-4-small[_ngcontent-%COMP%] {\r\n    margin-left: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-5-small[_ngcontent-%COMP%] {\r\n    width: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-5-small[_ngcontent-%COMP%] {\r\n    margin-left: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-6-small[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .off-6-small[_ngcontent-%COMP%] {\r\n    margin-left: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .col-7-small[_ngcontent-%COMP%] {\r\n    width: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-7-small[_ngcontent-%COMP%] {\r\n    margin-left: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-8-small[_ngcontent-%COMP%] {\r\n    width: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-8-small[_ngcontent-%COMP%] {\r\n    margin-left: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-9-small[_ngcontent-%COMP%] {\r\n    width: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .off-9-small[_ngcontent-%COMP%] {\r\n    margin-left: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .col-10-small[_ngcontent-%COMP%] {\r\n    width: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-10-small[_ngcontent-%COMP%] {\r\n    margin-left: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-11-small[_ngcontent-%COMP%] {\r\n    width: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-11-small[_ngcontent-%COMP%] {\r\n    margin-left: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-12-small[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  .row[_ngcontent-%COMP%]    > .off-12-small[_ngcontent-%COMP%] {\r\n    margin-left: 100%; }\r\n  .row.gtr-0[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: 0rem; }\r\n  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.3125rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.3125rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.3125rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.3125rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.625rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.625rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.625rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.625rem; }\r\n  .row[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -1.25rem; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 1.25rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -1.25rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 1.25rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -1.875rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 1.875rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -1.875rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 1.875rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -2.5rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 2.5rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -2.5rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 2.5rem; } }\n@media screen and (max-width: 480px) {\r\n  .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    box-sizing: border-box; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    box-sizing: border-box; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0; }\r\n\r\n  .row[_ngcontent-%COMP%]    > .imp-xsmall[_ngcontent-%COMP%] {\r\n    order: -1; }\r\n  .row[_ngcontent-%COMP%]    > .col-1-xsmall[_ngcontent-%COMP%] {\r\n    width: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-1-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 8.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-2-xsmall[_ngcontent-%COMP%] {\r\n    width: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-2-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 16.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-3-xsmall[_ngcontent-%COMP%] {\r\n    width: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .off-3-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 25%; }\r\n  .row[_ngcontent-%COMP%]    > .col-4-xsmall[_ngcontent-%COMP%] {\r\n    width: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-4-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 33.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-5-xsmall[_ngcontent-%COMP%] {\r\n    width: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-5-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 41.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-6-xsmall[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .off-6-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 50%; }\r\n  .row[_ngcontent-%COMP%]    > .col-7-xsmall[_ngcontent-%COMP%] {\r\n    width: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-7-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 58.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-8-xsmall[_ngcontent-%COMP%] {\r\n    width: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-8-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 66.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-9-xsmall[_ngcontent-%COMP%] {\r\n    width: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .off-9-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 75%; }\r\n  .row[_ngcontent-%COMP%]    > .col-10-xsmall[_ngcontent-%COMP%] {\r\n    width: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .off-10-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 83.3333333333%; }\r\n  .row[_ngcontent-%COMP%]    > .col-11-xsmall[_ngcontent-%COMP%] {\r\n    width: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .off-11-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 91.6666666667%; }\r\n  .row[_ngcontent-%COMP%]    > .col-12-xsmall[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  .row[_ngcontent-%COMP%]    > .off-12-xsmall[_ngcontent-%COMP%] {\r\n    margin-left: 100%; }\r\n  .row.gtr-0[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: 0rem; }\r\n  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: 0rem; }\r\n  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.3125rem; }\r\n  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.3125rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.3125rem; }\r\n  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.3125rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -0.625rem; }\r\n  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0.625rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -0.625rem; }\r\n  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 0.625rem; }\r\n  .row[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -1.25rem; }\r\n  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 1.25rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -1.25rem; }\r\n  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 1.25rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -1.875rem; }\r\n  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 1.875rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -1.875rem; }\r\n  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 1.875rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-left: -2.5rem; }\r\n  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 2.5rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {\r\n    margin-top: -2.5rem; }\r\n  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-top: 2.5rem; } }\n\n.icon[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  border-bottom: none;\r\n  position: relative; }\n.icon[_ngcontent-%COMP%]:before {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: FontAwesome;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  text-transform: none !important; }\n.icon[_ngcontent-%COMP%]    > .label[_ngcontent-%COMP%] {\r\n  display: none; }\n\nul.icons[_ngcontent-%COMP%] {\r\n  cursor: default;\r\n  list-style: none;\r\n  padding-left: 0; }\nul.icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 0 1rem 0 0; }\nul.icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n  padding-right: 0; }\nul.icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {\r\n  font-size: 2rem; }\n\n.image[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  border: 0;\r\n  display: inline-block;\r\n  position: relative; }\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  display: block; }\n.image.left[_ngcontent-%COMP%], .image.right[_ngcontent-%COMP%] {\r\n  max-width: 40%; }\n.image.left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .image.right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%; }\n.image.left[_ngcontent-%COMP%] {\r\n  float: left;\r\n  margin: 0 2rem 2rem 0;\r\n  top: 0.25rem; }\n.image.right[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin: 0 0 2rem 2rem;\r\n  top: 0.25rem; }\n.image.fit[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0 0 2rem 0;\r\n  width: 100%; }\n.image.fit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%; }\n.image.main[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0 0 3rem 0;\r\n  width: 100%; }\n.image.main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%; }\n\n.wrapper[_ngcontent-%COMP%] {\r\n  padding: 8rem 0 6rem 0 ;\r\n  position: relative;\r\n  z-index: 1; }\n@media screen and (max-width: 1280px) {\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    padding: 4rem 0 2rem 0 ; } }\n@media screen and (max-width: 736px) {\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    padding: 3rem 0 1rem 0 ; } }\n@media screen and (max-width: 480px) {\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    padding: 2rem 0 0.1rem 0 ; } }\n\n#banner[_ngcontent-%COMP%] {\r\n  -ms-flex-align: center;\r\n  -ms-flex-pack: center;\r\n  background-color: #111111;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  -moz-align-items: center;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  -moz-justify-content: center;\r\n  -ms-justify-content: center;\r\n  justify-content: center;\r\n  background-image: url('img-01.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border-top: 0;\r\n  display: -ms-flexbox;\r\n  height: 35rem !important;\r\n  min-height: 35rem;\r\n  overflow: hidden;\r\n  position: relative;\r\n  text-align: center;\r\n  width: 100%;\r\n}\n#banner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#banner[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n  border-left-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset 0 0 0 1px #ffffff;\r\n  color: #ffffff !important; }\n#banner[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 0 0 0 1px #ce1b28;\r\n  color: #ce1b28 !important; }\n#banner[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover:active {\r\n  background-color: rgba(206, 27, 40, 0.25); }\n#banner[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n  background-color: #ce1b28;\r\n  color: #ffffff !important; }\n#banner[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover, #banner[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #e2212f;\r\n  box-shadow: none; }\n#banner[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover:active, #banner[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover:active {\r\n  background-color: #b71824; }\n#banner[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#banner[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, #banner[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus, #banner[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]:focus, #banner[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%]:focus, #banner[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%]:focus, #banner[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%]:focus, #banner[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, #banner[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\n#banner[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(255, 255, 255, 0.25)' /%3E%3C/svg%3E\"); }\n#banner[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  background-color: #111111; }\n#banner[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], #banner[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5); }\n#banner[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, #banner[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, #banner[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  background-color: #ce1b28;\r\n  border-color: #ce1b28;\r\n  color: #ffffff; }\n#banner[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, #banner[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\n#banner[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#banner[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#banner[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#banner[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#banner[_ngcontent-%COMP%]   ul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n  background-color: rgba(255, 255, 255, 0.075); }\n#banner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#banner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   table.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#banner[_ngcontent-%COMP%]   .highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #111111;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#banner[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #111111;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#banner[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#banner[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%] {\r\n  transform: scale(1.0);\r\n  transition: opacity 1s ease, transform 1s ease;\r\n  opacity: 1;\r\n  position: relative;\r\n  z-index: 3; }\n#banner[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\r\n  margin-bottom: 0; }\n#banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 4rem;\r\n  margin-bottom: 1rem; }\n#banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem; }\n#banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  text-decoration: none; }\n#banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #ffffff; }\n#banner[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n  transform: translateX(50%) translateY(50%);\r\n  bottom: 50%;\r\n  height: auto;\r\n  min-height: 100%;\r\n  min-width: 100%;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  right: 50%;\r\n  width: auto; }\n#banner[_ngcontent-%COMP%]:before {\r\n  transition: opacity 3s ease;\r\n  transition-delay: 1.25s;\r\n  background: #111111;\r\n  content: '';\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  opacity: 0.45;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 1; }\n#banner[_ngcontent-%COMP%]:after {\r\n  background: linear-gradient(135deg, #ce1b28 0%, #111111 74%);\r\n  content: ' ';\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  opacity: 0.6;\r\n  position: absolute;\r\n  top: 0;\r\n  webkit-linear-gradientidth: 100%;\r\n  width: 100%;\r\n  z-index: 1; }\n#banner.small[_ngcontent-%COMP%] {\r\n  height: 30vh !important;\r\n  min-height: 30vh; }\n@media screen and (max-width: 1280px) {\r\n  #banner[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n    display: none; } }\n@media screen and (max-width: 736px) {\r\n  #banner[_ngcontent-%COMP%] {\r\n    height: auto !important;\r\n    min-height: 0;\r\n    padding: 4rem 2rem 4rem 2rem; }\r\n  #banner[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  #banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 1.75rem;\r\n    margin-bottom: 0.5rem;\r\n    padding-bottom: 0; }\r\n  #banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem; }\r\n  #banner[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\r\n    display: none; }\r\n  #banner[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n    width: 100%; } }\n@media screen and (max-width: 480px) {\r\n  #banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1rem; } }\nbody.is-preload[_ngcontent-%COMP%]   #banner[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\r\n  transform: scale(0.99);\r\n  opacity: 0; }\nbody.is-preload[_ngcontent-%COMP%]   #banner[_ngcontent-%COMP%]:before {\r\n  opacity: 1; }\n\n#cta[_ngcontent-%COMP%] {\r\n  background-color: #ce1b28;\r\n  color: rgba(255, 255, 255, 0.75);\r\n  background-attachment: fixed;\r\n  background-image: linear-gradient(rgba(206, 27, 40, 0.25), rgba(206, 27, 40, 0.25)), url('img-07.jpg');\r\n  background-position: bottom;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n  text-align: center;\r\n  z-index: 1; }\n#cta[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#cta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#cta[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#cta[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n  border-left-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset 0 0 0 1px #ffffff;\r\n  color: #ffffff !important; }\n#cta[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(255, 255, 255, 0.1); }\n#cta[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover:active {\r\n  background-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n  background-color: #ffffff;\r\n  color: #ce1b28 !important; }\n#cta[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover, #cta[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(255, 255, 255, 0.875);\r\n  box-shadow: none; }\n#cta[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover:active, #cta[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover:active {\r\n  background-color: rgba(255, 255, 255, 0.5); }\n#cta[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#cta[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, #cta[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus, #cta[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]:focus, #cta[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%]:focus, #cta[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%]:focus, #cta[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%]:focus, #cta[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, #cta[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n  border-color: #ffffff;\r\n  box-shadow: 0 0 0 1px #ffffff; }\n#cta[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(255, 255, 255, 0.25)' /%3E%3C/svg%3E\"); }\n#cta[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.75);\r\n  background-color: #ce1b28; }\n#cta[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], #cta[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.75); }\n#cta[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, #cta[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, #cta[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  background-color: #ffffff;\r\n  border-color: #ffffff;\r\n  color: #ce1b28; }\n#cta[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, #cta[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before {\r\n  border-color: #ffffff;\r\n  box-shadow: 0 0 0 1px #ffffff; }\n#cta[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#cta[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#cta[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#cta[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#cta[_ngcontent-%COMP%]   ul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n  background-color: rgba(255, 255, 255, 0.075); }\n#cta[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#cta[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   table.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#cta[_ngcontent-%COMP%]   .highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #ce1b28;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#cta[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #ce1b28;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#cta[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#cta[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 3; }\n@media screen and (max-width: 980px) {\r\n  #cta[_ngcontent-%COMP%] {\r\n    background-attachment: scroll; } }\n\n#footer[_ngcontent-%COMP%] {\r\n  background-color: #111111;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  padding: 8rem 0 6rem 0 ; }\n#footer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#footer[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n  border-left-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset 0 0 0 1px #ffffff;\r\n  color: #ffffff !important; }\n#footer[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 0 0 0 1px #ce1b28;\r\n  color: #ce1b28 !important; }\n#footer[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover:active {\r\n  background-color: rgba(206, 27, 40, 0.25); }\n#footer[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n  background-color: #ce1b28;\r\n  color: #ffffff !important; }\n#footer[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover, #footer[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #e2212f;\r\n  box-shadow: none; }\n#footer[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover:active, #footer[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover:active {\r\n  background-color: #b71824; }\n#footer[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#footer[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, #footer[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus, #footer[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]:focus, #footer[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%]:focus, #footer[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%]:focus, #footer[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%]:focus, #footer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, #footer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\n#footer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(255, 255, 255, 0.25)' /%3E%3C/svg%3E\"); }\n#footer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  background-color: #111111; }\n#footer[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5); }\n#footer[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, #footer[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, #footer[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  background-color: #ce1b28;\r\n  border-color: #ce1b28;\r\n  color: #ffffff; }\n#footer[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, #footer[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\n#footer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#footer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#footer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#footer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#footer[_ngcontent-%COMP%]   ul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n  background-color: rgba(255, 255, 255, 0.075); }\n#footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   table.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#footer[_ngcontent-%COMP%]   .highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #111111;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#footer[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #111111;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#footer[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  text-decoration: none; }\n#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #ce1b28; }\n#footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex; }\n#footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n  width: 25%; }\n#footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:first-child {\r\n  width: 50%;\r\n  padding-right: 4rem; }\n#footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:last-child {\r\n  padding-left: 4rem; }\n#footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n  border-top: 1px solid;\r\n  font-size: 0.8rem;\r\n  opacity: 0.5;\r\n  padding: 2rem 0;\r\n  text-align: center; }\n@media screen and (max-width: 1280px) {\r\n  #footer[_ngcontent-%COMP%] {\r\n    padding: 4rem 0 2rem 0 ; } }\n@media screen and (max-width: 980px) {\r\n  #footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    flex-wrap: wrap; }\r\n  #footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n    width: 50%; }\r\n  #footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:first-child {\r\n    width: 100%;\r\n    padding-right: 0; } }\n@media screen and (max-width: 736px) {\r\n  #footer[_ngcontent-%COMP%] {\r\n    padding: 3rem 0 1rem 0 ; }\r\n  #footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n    width: 100%; }\r\n  #footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:last-child {\r\n    padding-left: 0; } }\n@media screen and (max-width: 480px) {\r\n  #footer[_ngcontent-%COMP%] {\r\n    padding: 2rem 0 0.1rem 0 ; } }\n\nbody[_ngcontent-%COMP%] {\r\n  padding-top: 3.25rem; }\nbody[_ngcontent-%COMP%]:before {\r\n  content: ' ';\r\n  background-image: url('img-04.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  display: block;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -1;\r\n  opacity: 0.05; }\n#header[_ngcontent-%COMP%] {\r\n  -moz-align-items: center;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  -moz-justify-content: space-between;\r\n  -ms-justify-content: space-between;\r\n  justify-content: space-between;\r\n  background: #111111;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  cursor: default;\r\n  height: 3.25rem;\r\n  left: 0;\r\n  line-height: 3.25rem;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 10001; }\n#header[_ngcontent-%COMP%]    > .logo[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  height: inherit;\r\n  line-height: inherit;\r\n  padding: 0 1.25rem;\r\n  text-decoration: none; }\n#header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n  display: inline-block;\r\n  padding: 0 0.75rem;\r\n  text-decoration: none; }\n#header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n  color: #ffffff; }\n#header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[href=\"#menu\"][_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n#header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[href=\"#menu\"][_ngcontent-%COMP%]:before {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: FontAwesome;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  text-transform: none !important; }\n#header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[href=\"#menu\"][_ngcontent-%COMP%]:before {\r\n  content: '\\f0c9';\r\n  margin: 0 0.5rem 0 0; }\n#header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    + a[href=\"#menu\"][_ngcontent-%COMP%]:last-child {\r\n  border-left: solid 1px rgba(255, 255, 255, 0.25);\r\n  margin-left: 0.5rem;\r\n  padding-left: 1.25rem; }\n#header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:last-child {\r\n  padding-right: 1.25rem; }\n@media screen and (max-width: 736px) {\r\n  #header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding: 0 0.5rem; }\r\n  #header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    + a[href=\"#menu\"][_ngcontent-%COMP%]:last-child {\r\n    margin-left: 0.25rem;\r\n    padding-left: 1rem; }\r\n  #header[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:last-child {\r\n    padding-right: 1rem; } }\n@media screen and (max-width: 980px) {\r\n  body[_ngcontent-%COMP%] {\r\n    padding-top: 44px; }\r\n\r\n  #header[_ngcontent-%COMP%] {\r\n    height: 44px;\r\n    line-height: 44px; } }\n@media screen and (max-width: 480px) {\r\n  #header[_ngcontent-%COMP%] {\r\n    min-width: 320px; } }\n\n#heading[_ngcontent-%COMP%] {\r\n  -ms-flex-align: center;\r\n  -ms-flex-pack: center;\r\n  background-color: #111111;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  -moz-align-items: center;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  -moz-justify-content: center;\r\n  -ms-justify-content: center;\r\n  justify-content: center;\r\n  background-image: linear-gradient(rgba(17, 17, 17, 0.25), rgba(17, 17, 17, 0.25)), url('img-07.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border-top: 0;\r\n  display: -ms-flexbox;\r\n  height: 15rem !important;\r\n  min-height: 15rem;\r\n  overflow: hidden;\r\n  position: relative;\r\n  text-align: center;\r\n  width: 100%; }\n#heading[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#heading[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n  border-left-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset 0 0 0 1px #ffffff;\r\n  color: #ffffff !important; }\n#heading[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 0 0 0 1px #ce1b28;\r\n  color: #ce1b28 !important; }\n#heading[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover:active {\r\n  background-color: rgba(206, 27, 40, 0.25); }\n#heading[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n  background-color: #ce1b28;\r\n  color: #ffffff !important; }\n#heading[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover, #heading[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #e2212f;\r\n  box-shadow: none; }\n#heading[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover:active, #heading[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover:active {\r\n  background-color: #b71824; }\n#heading[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#heading[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, #heading[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus, #heading[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]:focus, #heading[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%]:focus, #heading[_ngcontent-%COMP%]   input[type=\"search\"][_ngcontent-%COMP%]:focus, #heading[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%]:focus, #heading[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, #heading[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\n#heading[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(255, 255, 255, 0.25)' /%3E%3C/svg%3E\"); }\n#heading[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  background-color: #111111; }\n#heading[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], #heading[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.5); }\n#heading[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, #heading[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, #heading[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  background-color: #ce1b28;\r\n  border-color: #ce1b28;\r\n  color: #ffffff; }\n#heading[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, #heading[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before {\r\n  border-color: #ce1b28;\r\n  box-shadow: 0 0 0 1px #ce1b28; }\n#heading[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#heading[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#heading[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#heading[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.4) !important; }\n#heading[_ngcontent-%COMP%]   ul.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n + 1) {\r\n  background-color: rgba(255, 255, 255, 0.075); }\n#heading[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#heading[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\r\n  border-top-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   table.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#heading[_ngcontent-%COMP%]   .highlights[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #111111;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#heading[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #111111;\r\n  box-shadow: 0px 0px 4px 1px rgba(255, 255, 255, 0.025); }\n#heading[_ngcontent-%COMP%]   .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#heading[_ngcontent-%COMP%]:before {\r\n  background: linear-gradient(135deg, #ce1b28 0%, #111111 74%);\r\n  content: ' ';\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  opacity: 0.6;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 1; }\n#heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  position: relative;\r\n  z-index: 2; }\n@media screen and (max-width: 980px) {\r\n  #heading[_ngcontent-%COMP%] {\r\n    padding: 2rem; } }\n\n#main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #ffffff;\r\n  border-radius: 4px;\r\n  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.025);\r\n  margin-bottom: 2rem;\r\n  padding: 3rem; }\n@media screen and (max-width: 980px) {\r\n  #main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 2rem; } }\n@media screen and (max-width: 480px) {\r\n  #main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 1.5rem; } }\n\n#menu[_ngcontent-%COMP%] {\r\n  background-color: #111111;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  transform: translateX(20rem);\r\n  transition: transform 0.5s ease, box-shadow 0.5s ease, visibility 0.5s;\r\n  -webkit-overflow-scrolling: touch;\r\n  box-shadow: none;\r\n  height: 100%;\r\n  max-width: 80%;\r\n  overflow-y: auto;\r\n  padding: 3rem 2rem;\r\n  position: fixed;\r\n  right: 0;\r\n  top: 0;\r\n  visibility: hidden;\r\n  width: 20rem;\r\n  z-index: 10002; }\n#menu[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #ce1b28; }\n#menu[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#menu[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #ffffff; }\n#menu[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n  border-left-color: rgba(255, 255, 255, 0.25); }\n#menu[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.075);\r\n  border-color: rgba(255, 255, 255, 0.25); }\n#menu[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n#menu[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset 0 0 0 1px #ffffff;\r\n  color: #ffffff !important; }\n#menu[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 0 0 0 1px #ce1b28;\r\n  color: #ce1b28 !important; }\n#menu[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   input[type=\"reset\"][_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover:active {\r\n  background-color: rgba(206, 27, 40, 0.25); }\n#menu[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n  background-color: #ce1b28;\r\n  color: #ffffff !important; }\n#menu[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover, #menu[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #e2212f;\r\n  box-shadow: none; }\n#menu[_ngcontent-%COMP%]   input[type=\"submit\"].primary[_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   input[type=\"reset\"].primary[_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   input[type=\"button\"].primary[_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover:active, #menu[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover:active {\r\n  background-color: #b71824; }\n#menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n  margin: 0 0 1rem 0; }\n#menu[_ngcontent-%COMP%]    > ul.links[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0; }\n#menu[_ngcontent-%COMP%]    > ul.links[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  padding: 0; }\n#menu[_ngcontent-%COMP%]    > ul.links[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  border-top: solid 1px rgba(255, 255, 255, 0.25);\r\n  color: inherit;\r\n  display: block;\r\n  line-height: 3.5rem;\r\n  text-decoration: none; }\n#menu[_ngcontent-%COMP%]    > ul.links[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n  color: #ffffff; }\n#menu[_ngcontent-%COMP%]    > ul.links[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child    > a[_ngcontent-%COMP%] {\r\n  border-top: 0; }\n#menu[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  transition: color 0.2s ease-in-out;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  border: 0;\r\n  color: rgba(255, 255, 255, 0.4);\r\n  cursor: pointer;\r\n  display: block;\r\n  height: 3.25rem;\r\n  line-height: 3.25rem;\r\n  padding-right: 1.25rem;\r\n  position: absolute;\r\n  right: 0;\r\n  text-align: right;\r\n  top: 0;\r\n  vertical-align: middle;\r\n  width: 7rem; }\n#menu[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:before {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: FontAwesome;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  text-transform: none !important; }\n#menu[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:before {\r\n  content: '\\f00d';\r\n  font-size: 1.25rem; }\n#menu[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\r\n  color: #ffffff; }\n@media screen and (max-width: 736px) {\r\n  #menu[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\r\n    height: 4rem;\r\n    line-height: 4rem; } }\n@media screen and (max-width: 736px) {\r\n  #menu[_ngcontent-%COMP%] {\r\n    padding: 2.5rem 1.75rem; } }\nbody.is-menu-visible[_ngcontent-%COMP%]   #menu[_ngcontent-%COMP%] {\r\n  transform: translateX(0);\r\n  box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, 0.2);\r\n  visibility: visible; }\n/*# sourceMappingURL=data:application/json;base64,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UztFQUNULCtDQUErQztFQUMvQyxjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUIsRUFBRTtBQUN6QjtFQUNFLGNBQWMsRUFBRTtBQUNsQjtFQUNFLGFBQWEsRUFBRTtBQUNqQjtFQUNFLHFCQUFxQjtFQUlyQixrQ0FBa0M7RUFDbEMsNkNBQTZDO0VBQzdDLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixNQUFNO0VBQ04sc0JBQXNCO0VBQ3RCLFdBQVcsRUFBRTtBQUNmO0VBQ0Usa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwrQkFBK0IsRUFBRTtBQUNuQztFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBRTtBQUN0QjtFQUNFLGNBQWMsRUFBRTtBQUNsQjtFQUNFO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQixFQUFFLEVBQUU7QUFDekI7RUFDRTtJQUNFLHVCQUF1QixFQUFFLEVBQUU7QUFFL0I7RUFJRSx3QkFBd0I7RUFDeEIsMkNBQTJDO0VBQzNDLG1CQUFtQixFQUFFIiwiZmlsZSI6Im1haW4uNTUwZGNmNjYuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuQGltcG9ydCB1cmwoZm9udC1hd2Vzb21lLm1pbi5jc3MpO1xyXG4qL1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjIwMCwzMDAsNDAwLDUwMCw2MDBcIik7XHJcbi8qXHJcblx0SW5kdXN0cmlvdXMgYnkgVEVNUExBVEVEXHJcblx0dGVtcGxhdGVkLmNvIEB0ZW1wbGF0ZWRjb1xyXG5cdFJlbGVhc2VkIGZvciBmcmVlIHVuZGVyIHRoZSBDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIDMuMCBsaWNlbnNlICh0ZW1wbGF0ZWQuY28vbGljZW5zZSlcclxuKi9cclxuLyogQmFzaWMgKi9cclxuQC1tcy12aWV3cG9ydCB7XHJcbiAgd2lkdGg6IGRldmljZS13aWR0aDsgfVxyXG5ib2R5IHtcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbGJhcjsgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICBodG1sLCBib2R5IHtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7IH0gfVxyXG5odG1sIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcblxyXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDsgfVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjsgfVxyXG5ib2R5LmlzLXByZWxvYWQgKiwgYm9keS5pcy1wcmVsb2FkICo6YmVmb3JlLCBib2R5LmlzLXByZWxvYWQgKjphZnRlciB7XHJcbiAgLW1vei1hbmltYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC1tcy1hbmltYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICBhbmltYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAtbW96LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAtbXMtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDsgfVxyXG5cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCxcclxuaWZyYW1lLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLFxyXG5wcmUsIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSxcclxuY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLCBiLFxyXG51LCBpLCBjZW50ZXIsIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksIGZpZWxkc2V0LFxyXG5mb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksXHJcbnRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsXHJcbmNhbnZhcywgZGV0YWlscywgZW1iZWQsIGZpZ3VyZSwgZmlnY2FwdGlvbixcclxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksXHJcbnNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxyXG5cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcclxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jazsgfVxyXG5cclxuYm9keSB7XHJcbiAgbGluZS1oZWlnaHQ6IDE7IH1cclxuXHJcbm9sLCB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxyXG5cclxuYmxvY2txdW90ZSwgcSB7XHJcbiAgcXVvdGVzOiBub25lOyB9XHJcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLCBxOmJlZm9yZSwgcTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgY29udGVudDogbm9uZTsgfVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cclxuXHJcbmJvZHkge1xyXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTsgfVxyXG5cclxubWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IGluaGVyaXQ7IH1cclxuXHJcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMDsgfVxyXG5cclxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1zLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTsgfVxyXG5cclxuLyogVHlwb2dyYXBoeSAqL1xyXG5odG1sIHtcclxuICBmb250LXNpemU6IDEzcHQ7IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDExcHQ7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB0OyB9IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDsgfSB9XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjNDQ0NDQ0OyB9XHJcblxyXG5ib2R5LCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY1OyB9XHJcblxyXG5hIHtcclxuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcblxyXG5zdHJvbmcsIGIge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7IH1cclxuXHJcbmVtLCBpIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMCAwIDJyZW0gMDsgfVxyXG5cclxuaGVhZGVyLnNwZWNpYWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtOyB9XHJcbmhlYWRlci5zcGVjaWFsIHAge1xyXG4gIG1heC13aWR0aDogNzUlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bzsgfVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luOiAwIDAgMS41cmVtIDA7IH1cclxuaDEgYSwgaDIgYSwgaDMgYSwgaDQgYSwgaDUgYSwgaDYgYSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7IH1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMzsgfVxyXG5cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTsgfVxyXG5cclxuaDQge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxyXG5cclxuaDUge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtOyB9XHJcblxyXG5oNiB7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjc1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzsgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41OyB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTsgfSB9XHJcbnN1YiB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMC41cmVtOyB9XHJcblxyXG5zdXAge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0wLjVyZW07IH1cclxuXHJcbmJsb2NrcXVvdGUge1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAwLjVyZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIG1hcmdpbjogMCAwIDJyZW0gMDtcclxuICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAycmVtOyB9XHJcblxyXG5jb2RlIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIG1hcmdpbjogMCAwLjI1cmVtO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC42NXJlbTsgfVxyXG5cclxucHJlIHtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIG1hcmdpbjogMCAwIDJyZW0gMDsgfVxyXG5wcmUgY29kZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgb3ZlcmZsb3cteDogYXV0bzsgfVxyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XHJcbiAgbWFyZ2luOiAycmVtIDA7IH1cclxuaHIubWFqb3Ige1xyXG4gIG1hcmdpbjogNHJlbSAwOyB9XHJcblxyXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgY29sb3I6ICM1NTU1NTU7IH1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjY2UxYjI4OyB9XHJcblxyXG5zdHJvbmcsIGIge1xyXG4gIGNvbG9yOiAjNTU1NTU1OyB9XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICBjb2xvcjogIzU1NTU1NTsgfVxyXG5cclxuYmxvY2txdW90ZSB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cclxuXHJcbmNvZGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTsgfVxyXG5cclxuaHIge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cclxuXHJcbi8qIElubmVyICovXHJcbi5pbm5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDc1cmVtO1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNnJlbSk7IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuaW5uZXIge1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzcmVtKTsgfSB9XHJcblxyXG4vKiBCdXR0b24gKi9cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxyXG5idXR0b24sXHJcbi5idXR0b24ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1zLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjJzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMnMgZWFzZS1pbi1vdXQsIGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjJzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjJzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGhlaWdodDogMy4yNXJlbTtcclxuICBsaW5lLWhlaWdodDogMy4yNXJlbTtcclxuICBwYWRkaW5nOiAwIDEuNzVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0uc21hbGwsXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXS5zbWFsbCxcclxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXS5zbWFsbCxcclxuYnV0dG9uLnNtYWxsLFxyXG4uYnV0dG9uLnNtYWxsIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBoZWlnaHQ6IDIuNDM3NXJlbTtcclxuICBsaW5lLWhlaWdodDogMi40Mzc1cmVtO1xyXG4gIHBhZGRpbmc6IDAgMS4yNXJlbTsgfVxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLmxhcmdlLFxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0ubGFyZ2UsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0ubGFyZ2UsXHJcbmJ1dHRvbi5sYXJnZSxcclxuLmJ1dHRvbi5sYXJnZSB7XHJcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xyXG4gIGhlaWdodDogNC4wNjI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiA0LjA2MjVyZW07XHJcbiAgcGFkZGluZzogMCAycmVtOyB9XHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ud2lkZSxcclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLndpZGUsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0ud2lkZSxcclxuYnV0dG9uLndpZGUsXHJcbi5idXR0b24ud2lkZSB7XHJcbiAgbWluLXdpZHRoOiAxM3JlbTsgfVxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLmljb246YmVmb3JlLFxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0uaWNvbjpiZWZvcmUsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0uaWNvbjpiZWZvcmUsXHJcbmJ1dHRvbi5pY29uOmJlZm9yZSxcclxuLmJ1dHRvbi5pY29uOmJlZm9yZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07IH1cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5maXQsXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXS5maXQsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0uZml0LFxyXG5idXR0b24uZml0LFxyXG4uYnV0dG9uLmZpdCB7XHJcbiAgd2lkdGg6IDEwMCU7IH1cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5kaXNhYmxlZCwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpkaXNhYmxlZCxcclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLmRpc2FibGVkLFxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl06ZGlzYWJsZWQsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0uZGlzYWJsZWQsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl06ZGlzYWJsZWQsXHJcbmJ1dHRvbi5kaXNhYmxlZCxcclxuYnV0dG9uOmRpc2FibGVkLFxyXG4uYnV0dG9uLmRpc2FibGVkLFxyXG4uYnV0dG9uOmRpc2FibGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjI1OyB9XHJcblxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLFxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0sXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0sXHJcbmJ1dHRvbixcclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICM1NTU1NTU7XHJcbiAgY29sb3I6ICM1NTU1NTUgIWltcG9ydGFudDsgfVxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyLFxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl06aG92ZXIsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsXHJcbmJ1dHRvbjpob3ZlcixcclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNjZTFiMjg7XHJcbiAgY29sb3I6ICNjZTFiMjggIWltcG9ydGFudDsgfVxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyOmFjdGl2ZSxcclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyOmFjdGl2ZSxcclxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlcjphY3RpdmUsXHJcbmJ1dHRvbjpob3ZlcjphY3RpdmUsXHJcbi5idXR0b246aG92ZXI6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNiwgMjcsIDQwLCAwLjI1KTsgfVxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLnByaW1hcnksXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXS5wcmltYXJ5LFxyXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnksXHJcbmJ1dHRvbi5wcmltYXJ5LFxyXG4uYnV0dG9uLnByaW1hcnkge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlMWIyODtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50OyB9XHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeTpob3ZlcixcclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLnByaW1hcnk6aG92ZXIsXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0ucHJpbWFyeTpob3ZlcixcclxuYnV0dG9uLnByaW1hcnk6aG92ZXIsXHJcbi5idXR0b24ucHJpbWFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyMjEyZjtcclxuICBib3gtc2hhZG93OiBub25lOyB9XHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXS5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXS5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuYnV0dG9uLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4uYnV0dG9uLnByaW1hcnk6aG92ZXI6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjcxODI0OyB9XHJcblxyXG4vKiBGb3JtICovXHJcbmZvcm0ge1xyXG4gIG1hcmdpbjogMCAwIDJyZW0gMDsgfVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5pbnB1dFt0eXBlPVwidGVsXCJdLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG5pbnB1dFt0eXBlPVwidXJsXCJdLFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tcy1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXI6IHNvbGlkIDFweDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdXRsaW5lOiAwO1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7IH1cclxuaW5wdXRbdHlwZT1cInRleHRcIl06aW52YWxpZCxcclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmludmFsaWQsXHJcbmlucHV0W3R5cGU9XCJlbWFpbFwiXTppbnZhbGlkLFxyXG5pbnB1dFt0eXBlPVwidGVsXCJdOmludmFsaWQsXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06aW52YWxpZCxcclxuaW5wdXRbdHlwZT1cInVybFwiXTppbnZhbGlkLFxyXG5zZWxlY3Q6aW52YWxpZCxcclxudGV4dGFyZWE6aW52YWxpZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMCAwIDFyZW0gMDsgfVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5pbnB1dFt0eXBlPVwidGVsXCJdLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG5pbnB1dFt0eXBlPVwidXJsXCJdIHtcclxuICBoZWlnaHQ6IDMuMjVyZW07IH1cclxuXHJcbnNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxLjI1cmVtO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMXJlbSkgY2VudGVyO1xyXG4gIGhlaWdodDogMy4yNXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAzLjI1cmVtO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XHJcbnNlbGVjdDpmb2N1czo6LW1zLXZhbHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxyXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xyXG4gIGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbnRleHRhcmVhIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07IH1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tcy1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMnJlbTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIHotaW5kZXg6IC0xOyB9XHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAyLjgyNXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjg3NXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpiZWZvcmUge1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7IH1cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IHNvbGlkIDFweDtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAxLjk1cmVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuODY4NzVyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0b3A6IC0wLjE2MjVyZW07XHJcbiAgd2lkdGg6IDEuOTVyZW07IH1cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxmMDBjJzsgfVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTsgfVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAxLjA7IH1cclxuXHJcbjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAxLjA7IH1cclxuXHJcbjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMS4wOyB9XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAxLjA7IH1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzU1NTU1NTsgfVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5pbnB1dFt0eXBlPVwidGVsXCJdLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG5pbnB1dFt0eXBlPVwidXJsXCJdLFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cclxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwidGVsXCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwidXJsXCJdOmZvY3VzLFxyXG5zZWxlY3Q6Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICNjZTFiMjg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNjZTFiMjg7IH1cclxuXHJcbnNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NwYXRoIGQ9J005LjQsMTIuM2wxMC40LDEwLjRsMTAuNC0xMC40YzAuMi0wLjIsMC41LTAuNCwwLjktMC40YzAuMywwLDAuNiwwLjEsMC45LDAuNGwzLjMsMy4zYzAuMiwwLjIsMC40LDAuNSwwLjQsMC45IGMwLDAuNC0wLjEsMC42LTAuNCwwLjlMMjAuNywzMS45Yy0wLjIsMC4yLTAuNSwwLjQtMC45LDAuNGMtMC4zLDAtMC42LTAuMS0wLjktMC40TDQuMywxNy4zYy0wLjItMC4yLTAuNC0wLjUtMC40LTAuOSBjMC0wLjQsMC4xLTAuNiwwLjQtMC45bDMuMy0zLjNjMC4yLTAuMiwwLjUtMC40LDAuOS0wLjRTOS4xLDEyLjEsOS40LDEyLjN6JyBmaWxsPSdyZ2JhKDAsIDAsIDAsIDAuMjUpJyAvJTNFJTNDL3N2ZyUzRVwiKTsgfVxyXG5zZWxlY3Qgb3B0aW9uIHtcclxuICBjb2xvcjogIzQ0NDQ0NDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB9XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwge1xyXG4gIGNvbG9yOiAjNDQ0NDQ0OyB9XHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOmJlZm9yZSxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGJvcmRlci1jb2xvcjogI2NlMWIyODtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Zm9jdXMgKyBsYWJlbDpiZWZvcmUsXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjY2UxYjI4OyB9XHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYmJiYmJiICFpbXBvcnRhbnQ7IH1cclxuXHJcbjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2JiYmJiYiAhaW1wb3J0YW50OyB9XHJcblxyXG46Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYmJiYmJiICFpbXBvcnRhbnQ7IH1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYmJiYmJiICFpbXBvcnRhbnQ7IH1cclxuXHJcbi8qIExpc3QgKi9cclxub2wge1xyXG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XHJcbiAgbWFyZ2luOiAwIDAgMnJlbSAwO1xyXG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTsgfVxyXG5vbCBsaSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtOyB9XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogZGlzYztcclxuICBtYXJnaW46IDAgMCAycmVtIDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtOyB9XHJcbnVsIGxpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuMzI1cmVtOyB9XHJcbnVsLnBsYWluIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMDsgfVxyXG51bC5wbGFpbiBsaSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxyXG51bC5wbGFpbiBsaSAuaWNvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cclxudWwuYWx0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMDsgfVxyXG51bC5hbHQgbGkge1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweDtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDA7IH1cclxudWwuYWx0IGxpOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAwOyB9XHJcbnVsLmFsdCBsaTpsYXN0LWNoaWxkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxyXG5cclxuZGwge1xyXG4gIG1hcmdpbjogMCAwIDJyZW0gMDsgfVxyXG5kbCBkdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW46IDAgMCAxcmVtIDA7IH1cclxuZGwgZGQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07IH1cclxuXHJcbnVsLmFsdCBsaSB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTsgfVxyXG5cclxuLyogVGFibGUgKi9cclxuLnRhYmxlLXdyYXBwZXIge1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBvdmVyZmxvdy14OiBhdXRvOyB9XHJcblxyXG50YWJsZSB7XHJcbiAgbWFyZ2luOiAwIDAgMnJlbSAwO1xyXG4gIHdpZHRoOiAxMDAlOyB9XHJcbnRhYmxlIHRib2R5IHRyIHtcclxuICBib3JkZXI6IHNvbGlkIDFweDtcclxuICBib3JkZXItbGVmdDogMDtcclxuICBib3JkZXItcmlnaHQ6IDA7IH1cclxudGFibGUgdGQge1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMC43NXJlbTsgfVxyXG50YWJsZSB0aCB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAwIDAuNzVyZW0gMC43NXJlbSAwLjc1cmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cclxudGFibGUgdGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweDsgfVxyXG50YWJsZSB0Zm9vdCB7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4OyB9XHJcbnRhYmxlLmFsdCB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTsgfVxyXG50YWJsZS5hbHQgdGJvZHkgdHIgdGQge1xyXG4gIGJvcmRlcjogc29saWQgMXB4O1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gIGJvcmRlci10b3Atd2lkdGg6IDA7IH1cclxudGFibGUuYWx0IHRib2R5IHRyIHRkOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItbGVmdC13aWR0aDogMXB4OyB9XHJcbnRhYmxlLmFsdCB0Ym9keSB0cjpmaXJzdC1jaGlsZCB0ZCB7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyB9XHJcbnRhYmxlLmFsdCB0aGVhZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDsgfVxyXG50YWJsZS5hbHQgdGZvb3Qge1xyXG4gIGJvcmRlci10b3A6IDA7IH1cclxuXHJcbnRhYmxlIHRib2R5IHRyIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cclxudGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDJuICsgMSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpOyB9XHJcbnRhYmxlIHRoIHtcclxuICBjb2xvcjogIzU1NTU1NTsgfVxyXG50YWJsZSB0aGVhZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTsgfVxyXG50YWJsZSB0Zm9vdCB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTsgfVxyXG50YWJsZS5hbHQgdGJvZHkgdHIgdGQge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTsgfVxyXG5cclxuLyogSGlnaGxpZ2h0cyAqL1xyXG4uaGlnaGxpZ2h0cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAyLjVyZW0gMDtcclxuICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLW1vei1hbGlnbi1pdGVtczogLW1vei1zdHJldGNoO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IC13ZWJraXQtc3RyZXRjaDtcclxuICAtbXMtYWxpZ24taXRlbXM6IC1tcy1zdHJldGNoO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XHJcbi5oaWdobGlnaHRzID4gKiB7XHJcbiAgLW1vei1mbGV4LXNocmluazogMTtcclxuICAtd2Via2l0LWZsZXgtc2hyaW5rOiAxO1xyXG4gIC1tcy1mbGV4LXNocmluazogMTtcclxuICBmbGV4LXNocmluazogMTtcclxuICAtbW96LWZsZXgtZ3JvdzogMDtcclxuICAtd2Via2l0LWZsZXgtZ3JvdzogMDtcclxuICAtbXMtZmxleC1ncm93OiAwO1xyXG4gIGZsZXgtZ3JvdzogMDsgfVxyXG4uaGlnaGxpZ2h0cyA+ICoge1xyXG4gIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTsgfVxyXG4uaGlnaGxpZ2h0cyA+ICoge1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICB3aWR0aDogY2FsYygzMy4zMzMzMzMzMzMzJSArIDFyZW0pOyB9XHJcbi5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgtbiArIDMpIHtcclxuICBwYWRkaW5nLXRvcDogMDsgfVxyXG4uaGlnaGxpZ2h0cyA+IDpudGgtbGFzdC1jaGlsZCgtbiArIDMpIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxyXG4uaGlnaGxpZ2h0cyA+IDpudGgtY2hpbGQoM24gKyAxKSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XHJcbi5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbikge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cclxuLmhpZ2hsaWdodHMgPiA6bnRoLWNoaWxkKDNuICsgMSksXHJcbi5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbikge1xyXG4gIHdpZHRoOiBjYWxjKDMzLjMzMzMzMzMzMzMlICsgLTAuNXJlbSk7IH1cclxuLmhpZ2hsaWdodHMgLmNvbnRlbnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogM3JlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuLmhpZ2hsaWdodHMgLmNvbnRlbnQgLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogNXJlbTsgfVxyXG4uaGlnaGxpZ2h0cyA+IGRpdiA+IDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwOyB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgLmhpZ2hsaWdodHMgPiAqIHtcclxuICAgIHdpZHRoOiA1MCU7IH1cclxuICAuaGlnaGxpZ2h0cyA+ICoge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMzMzMzMzMlICsgMC42NjY2NjY2NjY3cmVtKTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgtbiArIDMpIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtOyB9XHJcbiAgLmhpZ2hsaWdodHMgPiA6bnRoLWxhc3QtY2hpbGQoLW4gKyAzKSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbiArIDEpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbikge1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbiArIDEpLFxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbikge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSArIDFyZW0pOyB9XHJcbiAgLmhpZ2hsaWdodHMgPiAqIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgKyAxcmVtKTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgtbiArIDIpIHtcclxuICAgIHBhZGRpbmctdG9wOiAwOyB9XHJcbiAgLmhpZ2hsaWdodHMgPiA6bnRoLWxhc3QtY2hpbGQoLW4gKyAyKSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgybiArIDEpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgybikge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgybiArIDEpLFxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgybikge1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlICsgMHJlbSk7IH1cclxuICAuaGlnaGxpZ2h0cyAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAycmVtOyB9IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcclxuICAuaGlnaGxpZ2h0cyA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7IH1cclxuICAuaGlnaGxpZ2h0cyA+ICoge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMzMzMzMzMlICsgMC42NjY2NjY2NjY3cmVtKTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgtbiArIDMpIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtOyB9XHJcbiAgLmhpZ2hsaWdodHMgPiA6bnRoLWxhc3QtY2hpbGQoLW4gKyAzKSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbiArIDEpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbikge1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbiArIDEpLFxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgzbikge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAycmVtKTsgfVxyXG4gIC5oaWdobGlnaHRzID4gKiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlICsgMXJlbSk7IH1cclxuICAuaGlnaGxpZ2h0cyA+IDpudGgtY2hpbGQoLW4gKyAyKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1sYXN0LWNoaWxkKC1uICsgMikge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07IH1cclxuICAuaGlnaGxpZ2h0cyA+IDpudGgtY2hpbGQoMm4gKyAxKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07IH1cclxuICAuaGlnaGxpZ2h0cyA+IDpudGgtY2hpbGQoMm4pIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07IH1cclxuICAuaGlnaGxpZ2h0cyA+IDpudGgtY2hpbGQoMm4gKyAxKSxcclxuICAuaGlnaGxpZ2h0cyA+IDpudGgtY2hpbGQoMm4pIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMnJlbSk7IH1cclxuICAuaGlnaGxpZ2h0cyA+ICoge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAycmVtKTsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgtbiArIDEpIHtcclxuICAgIHBhZGRpbmctdG9wOiAwOyB9XHJcbiAgLmhpZ2hsaWdodHMgPiA6bnRoLWxhc3QtY2hpbGQoLW4gKyAxKSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgxbiArIDEpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgxbikge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDsgfVxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgxbiArIDEpLFxyXG4gIC5oaWdobGlnaHRzID4gOm50aC1jaGlsZCgxbikge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDFyZW0pOyB9IH1cclxuXHJcbi5oaWdobGlnaHRzIC5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ltZy0wNi5qcGdcIik7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMjUpOyB9XHJcblxyXG4vKiBUZXN0aW1vbmlhbHMgKi9cclxuLnRlc3RpbW9uaWFscyB7XHJcbiAgbWFyZ2luOiAyLjVyZW0gMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLW1vei1hbGlnbi1pdGVtczogLW1vei1zdHJldGNoO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IC13ZWJraXQtc3RyZXRjaDtcclxuICAtbXMtYWxpZ24taXRlbXM6IC1tcy1zdHJldGNoO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XHJcbi50ZXN0aW1vbmlhbHMgPiAqIHtcclxuICAtbW96LWZsZXgtc2hyaW5rOiAxO1xyXG4gIC13ZWJraXQtZmxleC1zaHJpbms6IDE7XHJcbiAgLW1zLWZsZXgtc2hyaW5rOiAxO1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIC1tb3otZmxleC1ncm93OiAwO1xyXG4gIC13ZWJraXQtZmxleC1ncm93OiAwO1xyXG4gIC1tcy1mbGV4LWdyb3c6IDA7XHJcbiAgZmxleC1ncm93OiAwOyB9XHJcbi50ZXN0aW1vbmlhbHMgPiAqIHtcclxuICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7IH1cclxuLnRlc3RpbW9uaWFscyA+ICoge1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICB3aWR0aDogY2FsYygzMy4zMzMzMzMzMzMzJSArIDFyZW0pOyB9XHJcbi50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKC1uICsgMykge1xyXG4gIHBhZGRpbmctdG9wOiAwOyB9XHJcbi50ZXN0aW1vbmlhbHMgPiA6bnRoLWxhc3QtY2hpbGQoLW4gKyAzKSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cclxuLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoM24gKyAxKSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XHJcbi50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDNuKSB7XHJcbiAgcGFkZGluZy1yaWdodDogMDsgfVxyXG4udGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgzbiArIDEpLFxyXG4udGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgzbikge1xyXG4gIHdpZHRoOiBjYWxjKDMzLjMzMzMzMzMzMzMlICsgLTAuNXJlbSk7IH1cclxuLnRlc3RpbW9uaWFscyAuY29udGVudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAzcmVtOyB9XHJcbi50ZXN0aW1vbmlhbHMgLmNvbnRlbnQgLmF1dGhvciB7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4udGVzdGltb25pYWxzIC5jb250ZW50IC5hdXRob3IgYmxvY2txdW90ZSB7XHJcbiAgbWFyZ2luOiAwOyB9XHJcbi50ZXN0aW1vbmlhbHMgLmNvbnRlbnQgLmF1dGhvciAuaW1hZ2Uge1xyXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICB3aWR0aDogMjAlOyB9XHJcbi50ZXN0aW1vbmlhbHMgLmNvbnRlbnQgLmF1dGhvciAuaW1hZ2UgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTsgfVxyXG4udGVzdGltb25pYWxzIC5jb250ZW50IC5jcmVkaXQge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTsgfVxyXG4udGVzdGltb25pYWxzIC5jb250ZW50IHA6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiAwOyB9XHJcbi50ZXN0aW1vbmlhbHMgPiBkaXYgPiA6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIC50ZXN0aW1vbmlhbHMgPiAqIHtcclxuICAgIHdpZHRoOiA1MCU7IH1cclxuICAudGVzdGltb25pYWxzID4gKiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMzMuMzMzMzMzMzMzMyUgKyAwLjY2NjY2NjY2NjdyZW0pOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoLW4gKyAzKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWxhc3QtY2hpbGQoLW4gKyAzKSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDNuICsgMSkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoM24pIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgzbiArIDEpLFxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDNuKSB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlICsgMXJlbSk7IH1cclxuICAudGVzdGltb25pYWxzID4gKiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlICsgMXJlbSk7IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgtbiArIDIpIHtcclxuICAgIHBhZGRpbmctdG9wOiAwOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtbGFzdC1jaGlsZCgtbiArIDIpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoMm4gKyAxKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgybikge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDJuICsgMSksXHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoMm4pIHtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSArIDByZW0pOyB9XHJcbiAgLnRlc3RpbW9uaWFscyAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAycmVtOyB9IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcclxuICAudGVzdGltb25pYWxzID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiAqIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogY2FsYygzMy4zMzMzMzMzMzMzJSArIDAuNjY2NjY2NjY2N3JlbSk7IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgtbiArIDMpIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtbGFzdC1jaGlsZCgtbiArIDMpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoM24gKyAxKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgzbikge1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDNuICsgMSksXHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoM24pIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMnJlbSk7IH1cclxuICAudGVzdGltb25pYWxzID4gKiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlICsgMXJlbSk7IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgtbiArIDIpIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtbGFzdC1jaGlsZCgtbiArIDIpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoMm4gKyAxKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgybikge1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDJuICsgMSksXHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoMm4pIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMnJlbSk7IH1cclxuICAudGVzdGltb25pYWxzID4gKiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDJyZW0pOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoLW4gKyAxKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWxhc3QtY2hpbGQoLW4gKyAxKSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDsgfVxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDFuICsgMSkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwOyB9XHJcbiAgLnRlc3RpbW9uaWFscyA+IDpudGgtY2hpbGQoMW4pIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7IH1cclxuICAudGVzdGltb25pYWxzID4gOm50aC1jaGlsZCgxbiArIDEpLFxyXG4gIC50ZXN0aW1vbmlhbHMgPiA6bnRoLWNoaWxkKDFuKSB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMXJlbSk7IH0gfVxyXG5cclxuLnRlc3RpbW9uaWFscyAuY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjAyNSk7IH1cclxuLnRlc3RpbW9uaWFscyAuY29udGVudCAuY3JlZGl0IHN0cm9uZyB7XHJcbiAgY29sb3I6ICNjZTFiMjg7IH1cclxuXHJcbi8qIEFjdGlvbnMgKi9cclxudWwuYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cclxudWwuYWN0aW9ucyBsaSB7XHJcbiAgcGFkZGluZzogMCAwIDAgMXJlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XHJcbnVsLmFjdGlvbnMuc3BlY2lhbCB7XHJcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogY2FsYygxMDAlICsgMXJlbSk7IH1cclxudWwuYWN0aW9ucy5zdGFja2VkIHtcclxuICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cclxudWwuYWN0aW9ucy5zdGFja2VkIGxpIHtcclxuICBwYWRkaW5nOiAxLjNyZW0gMCAwIDA7IH1cclxudWwuYWN0aW9ucy5zdGFja2VkIGxpOmZpcnN0LWNoaWxkIHtcclxuICBwYWRkaW5nLXRvcDogMDsgfVxyXG51bC5hY3Rpb25zLmZpdCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDFyZW0pOyB9XHJcbnVsLmFjdGlvbnMuZml0IGxpIHtcclxuICAtbW96LWZsZXgtZ3JvdzogMTtcclxuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAtbXMtZmxleC1ncm93OiAxO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAtbW96LWZsZXgtc2hyaW5rOiAxO1xyXG4gIC13ZWJraXQtZmxleC1zaHJpbms6IDE7XHJcbiAgLW1zLWZsZXgtc2hyaW5rOiAxO1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIHdpZHRoOiAxMDAlOyB9XHJcbnVsLmFjdGlvbnMuZml0IGxpID4gKiB7XHJcbiAgd2lkdGg6IDEwMCU7IH1cclxudWwuYWN0aW9ucy5maXQuc3RhY2tlZCB7XHJcbiAgd2lkdGg6IDEwMCU7IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICB1bC5hY3Rpb25zOm5vdCguZml4ZWQpIHtcclxuICAgIC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfVxyXG4gIHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkge1xyXG4gICAgLW1vei1mbGV4LWdyb3c6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgIC1tcy1mbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAtbW96LWZsZXgtc2hyaW5rOiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LXNocmluazogMTtcclxuICAgIC1tcy1mbGV4LXNocmluazogMTtcclxuICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgcGFkZGluZzogMXJlbSAwIDAgMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlOyB9XHJcbiAgdWwuYWN0aW9uczpub3QoLmZpeGVkKSBsaSA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7IH1cclxuICB1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwOyB9XHJcbiAgdWwuYWN0aW9uczpub3QoLmZpeGVkKSBsaSBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxyXG4gIHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG4gIHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcclxuICB1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIGJ1dHRvbixcclxuICB1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIC5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7IH1cclxuICB1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0uaWNvbjpiZWZvcmUsXHJcbiAgdWwuYWN0aW9uczpub3QoLmZpeGVkKSBsaSBpbnB1dFt0eXBlPVwicmVzZXRcIl0uaWNvbjpiZWZvcmUsXHJcbiAgdWwuYWN0aW9uczpub3QoLmZpeGVkKSBsaSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmljb246YmVmb3JlLFxyXG4gIHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgYnV0dG9uLmljb246YmVmb3JlLFxyXG4gIHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgLmJ1dHRvbi5pY29uOmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNXJlbTsgfSB9XHJcblxyXG4vKiBHcmlkICovXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuLnJvdyA+ICoge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuLnJvdy5ndHItdW5pZm9ybSA+ICogPiA6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG5cclxuLnJvdyA+IC5pbXAge1xyXG4gIG9yZGVyOiAtMTsgfVxyXG4ucm93ID4gLmNvbC0xIHtcclxuICB3aWR0aDogOC4zMzMzMzMzMzMzJTsgfVxyXG4ucm93ID4gLm9mZi0xIHtcclxuICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMzMzJTsgfVxyXG4ucm93ID4gLmNvbC0yIHtcclxuICB3aWR0aDogMTYuNjY2NjY2NjY2NyU7IH1cclxuLnJvdyA+IC5vZmYtMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY2NjclOyB9XHJcbi5yb3cgPiAuY29sLTMge1xyXG4gIHdpZHRoOiAyNSU7IH1cclxuLnJvdyA+IC5vZmYtMyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTsgfVxyXG4ucm93ID4gLmNvbC00IHtcclxuICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7IH1cclxuLnJvdyA+IC5vZmYtNCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzMzMlOyB9XHJcbi5yb3cgPiAuY29sLTUge1xyXG4gIHdpZHRoOiA0MS42NjY2NjY2NjY3JTsgfVxyXG4ucm93ID4gLm9mZi01IHtcclxuICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjY2NyU7IH1cclxuLnJvdyA+IC5jb2wtNiB7XHJcbiAgd2lkdGg6IDUwJTsgfVxyXG4ucm93ID4gLm9mZi02IHtcclxuICBtYXJnaW4tbGVmdDogNTAlOyB9XHJcbi5yb3cgPiAuY29sLTcge1xyXG4gIHdpZHRoOiA1OC4zMzMzMzMzMzMzJTsgfVxyXG4ucm93ID4gLm9mZi03IHtcclxuICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMzMyU7IH1cclxuLnJvdyA+IC5jb2wtOCB7XHJcbiAgd2lkdGg6IDY2LjY2NjY2NjY2NjclOyB9XHJcbi5yb3cgPiAub2ZmLTgge1xyXG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NjY3JTsgfVxyXG4ucm93ID4gLmNvbC05IHtcclxuICB3aWR0aDogNzUlOyB9XHJcbi5yb3cgPiAub2ZmLTkge1xyXG4gIG1hcmdpbi1sZWZ0OiA3NSU7IH1cclxuLnJvdyA+IC5jb2wtMTAge1xyXG4gIHdpZHRoOiA4My4zMzMzMzMzMzMzJTsgfVxyXG4ucm93ID4gLm9mZi0xMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzMzMlOyB9XHJcbi5yb3cgPiAuY29sLTExIHtcclxuICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7IH1cclxuLnJvdyA+IC5vZmYtMTEge1xyXG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NjY3JTsgfVxyXG4ucm93ID4gLmNvbC0xMiB7XHJcbiAgd2lkdGg6IDEwMCU7IH1cclxuLnJvdyA+IC5vZmYtMTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDAlOyB9XHJcbi5yb3cuZ3RyLTAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDByZW07IH1cclxuLnJvdy5ndHItMCA+ICoge1xyXG4gIHBhZGRpbmc6IDAgMCAwIDByZW07IH1cclxuLnJvdy5ndHItMC5ndHItdW5pZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMHJlbTsgfVxyXG4ucm93Lmd0ci0wLmd0ci11bmlmb3JtID4gKiB7XHJcbiAgcGFkZGluZy10b3A6IDByZW07IH1cclxuLnJvdy5ndHItMjUge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IC0wLjc1cmVtOyB9XHJcbi5yb3cuZ3RyLTI1ID4gKiB7XHJcbiAgcGFkZGluZzogMCAwIDAgMC43NXJlbTsgfVxyXG4ucm93Lmd0ci0yNS5ndHItdW5pZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogLTAuNzVyZW07IH1cclxuLnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICBwYWRkaW5nLXRvcDogMC43NXJlbTsgfVxyXG4ucm93Lmd0ci01MCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tbGVmdDogLTEuNXJlbTsgfVxyXG4ucm93Lmd0ci01MCA+ICoge1xyXG4gIHBhZGRpbmc6IDAgMCAwIDEuNXJlbTsgfVxyXG4ucm93Lmd0ci01MC5ndHItdW5pZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogLTEuNXJlbTsgfVxyXG4ucm93Lmd0ci01MC5ndHItdW5pZm9ybSA+ICoge1xyXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07IH1cclxuLnJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tbGVmdDogLTNyZW07IH1cclxuLnJvdyA+ICoge1xyXG4gIHBhZGRpbmc6IDAgMCAwIDNyZW07IH1cclxuLnJvdy5ndHItdW5pZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogLTNyZW07IH1cclxuLnJvdy5ndHItdW5pZm9ybSA+ICoge1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtOyB9XHJcbi5yb3cuZ3RyLTE1MCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tbGVmdDogLTQuNXJlbTsgfVxyXG4ucm93Lmd0ci0xNTAgPiAqIHtcclxuICBwYWRkaW5nOiAwIDAgMCA0LjVyZW07IH1cclxuLnJvdy5ndHItMTUwLmd0ci11bmlmb3JtIHtcclxuICBtYXJnaW4tdG9wOiAtNC41cmVtOyB9XHJcbi5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSA+ICoge1xyXG4gIHBhZGRpbmctdG9wOiA0LjVyZW07IH1cclxuLnJvdy5ndHItMjAwIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNnJlbTsgfVxyXG4ucm93Lmd0ci0yMDAgPiAqIHtcclxuICBwYWRkaW5nOiAwIDAgMCA2cmVtOyB9XHJcbi5yb3cuZ3RyLTIwMC5ndHItdW5pZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogLTZyZW07IH1cclxuLnJvdy5ndHItMjAwLmd0ci11bmlmb3JtID4gKiB7XHJcbiAgcGFkZGluZy10b3A6IDZyZW07IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkge1xyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuICAucm93ID4gKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgLnJvdy5ndHItdW5pZm9ybSA+ICogPiA6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XHJcblxyXG4gIC5yb3cgPiAuaW1wLXhsYXJnZSB7XHJcbiAgICBvcmRlcjogLTE7IH1cclxuICAucm93ID4gLmNvbC0xLXhsYXJnZSB7XHJcbiAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEteGxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5jb2wtMi14bGFyZ2Uge1xyXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtMi14bGFyZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5jb2wtMy14bGFyZ2Uge1xyXG4gICAgd2lkdGg6IDI1JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTMteGxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7IH1cclxuICAucm93ID4gLmNvbC00LXhsYXJnZSB7XHJcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLm9mZi00LXhsYXJnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLmNvbC01LXhsYXJnZSB7XHJcbiAgICB3aWR0aDogNDEuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLm9mZi01LXhsYXJnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLmNvbC02LXhsYXJnZSB7XHJcbiAgICB3aWR0aDogNTAlOyB9XHJcbiAgLnJvdyA+IC5vZmYtNi14bGFyZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTsgfVxyXG4gIC5yb3cgPiAuY29sLTcteGxhcmdlIHtcclxuICAgIHdpZHRoOiA1OC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTcteGxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAuY29sLTgteGxhcmdlIHtcclxuICAgIHdpZHRoOiA2Ni42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTgteGxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTkteGxhcmdlIHtcclxuICAgIHdpZHRoOiA3NSU7IH1cclxuICAucm93ID4gLm9mZi05LXhsYXJnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzUlOyB9XHJcbiAgLnJvdyA+IC5jb2wtMTAteGxhcmdlIHtcclxuICAgIHdpZHRoOiA4My4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEwLXhsYXJnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLmNvbC0xMS14bGFyZ2Uge1xyXG4gICAgd2lkdGg6IDkxLjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtMTEteGxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTEyLXhsYXJnZSB7XHJcbiAgICB3aWR0aDogMTAwJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEyLXhsYXJnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTsgfVxyXG4gIC5yb3cuZ3RyLTAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcmVtOyB9XHJcbiAgLnJvdy5ndHItMCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcmVtOyB9XHJcbiAgLnJvdy5ndHItMjUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMC43NXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTI1ID4gKiB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwLjc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTAuNzVyZW07IH1cclxuICAucm93Lmd0ci0yNS5ndHItdW5pZm9ybSA+ICoge1xyXG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07IH1cclxuICAucm93Lmd0ci01MCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVyZW07IH1cclxuICAucm93Lmd0ci01MCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMS41cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTEuNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtID4gKiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtOyB9XHJcbiAgLnJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zcmVtOyB9XHJcbiAgLnJvdyA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgM3JlbTsgfVxyXG4gIC5yb3cuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTNyZW07IH1cclxuICAucm93Lmd0ci11bmlmb3JtID4gKiB7XHJcbiAgICBwYWRkaW5nLXRvcDogM3JlbTsgfVxyXG4gIC5yb3cuZ3RyLTE1MCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00LjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDQuNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNC41cmVtOyB9XHJcbiAgLnJvdy5ndHItMTUwLmd0ci11bmlmb3JtID4gKiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNC41cmVtOyB9XHJcbiAgLnJvdy5ndHItMjAwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTZyZW07IH1cclxuICAucm93Lmd0ci0yMDAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDZyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTZyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiA2cmVtOyB9IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC5yb3cgPiAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuICAucm93Lmd0ci11bmlmb3JtID4gKiA+IDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7IH1cclxuXHJcbiAgLnJvdyA+IC5pbXAtbGFyZ2Uge1xyXG4gICAgb3JkZXI6IC0xOyB9XHJcbiAgLnJvdyA+IC5jb2wtMS1sYXJnZSB7XHJcbiAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEtbGFyZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLmNvbC0yLWxhcmdlIHtcclxuICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTItbGFyZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5jb2wtMy1sYXJnZSB7XHJcbiAgICB3aWR0aDogMjUlOyB9XHJcbiAgLnJvdyA+IC5vZmYtMy1sYXJnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlOyB9XHJcbiAgLnJvdyA+IC5jb2wtNC1sYXJnZSB7XHJcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLm9mZi00LWxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAuY29sLTUtbGFyZ2Uge1xyXG4gICAgd2lkdGg6IDQxLjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtNS1sYXJnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLmNvbC02LWxhcmdlIHtcclxuICAgIHdpZHRoOiA1MCU7IH1cclxuICAucm93ID4gLm9mZi02LWxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7IH1cclxuICAucm93ID4gLmNvbC03LWxhcmdlIHtcclxuICAgIHdpZHRoOiA1OC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTctbGFyZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5jb2wtOC1sYXJnZSB7XHJcbiAgICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLm9mZi04LWxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTktbGFyZ2Uge1xyXG4gICAgd2lkdGg6IDc1JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTktbGFyZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTsgfVxyXG4gIC5yb3cgPiAuY29sLTEwLWxhcmdlIHtcclxuICAgIHdpZHRoOiA4My4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEwLWxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAuY29sLTExLWxhcmdlIHtcclxuICAgIHdpZHRoOiA5MS42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTExLWxhcmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTEyLWxhcmdlIHtcclxuICAgIHdpZHRoOiAxMDAlOyB9XHJcbiAgLnJvdyA+IC5vZmYtMTItbGFyZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7IH1cclxuICAucm93Lmd0ci0wIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDByZW07IH1cclxuICAucm93Lmd0ci0wLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDByZW07IH1cclxuICAucm93Lmd0ci0wLmd0ci11bmlmb3JtID4gKiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTI1IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuMzc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAuMzc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTAuMzc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjM3NXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTUwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNzVyZW07IH1cclxuICAucm93Lmd0ci01MCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMC43NXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0wLjc1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjc1cmVtOyB9XHJcbiAgLnJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVyZW07IH1cclxuICAucm93ID4gKiB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAxLjVyZW07IH1cclxuICAucm93Lmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0xLjVyZW07IH1cclxuICAucm93Lmd0ci11bmlmb3JtID4gKiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtOyB9XHJcbiAgLnJvdy5ndHItMTUwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDIuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTIuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAyLjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjAwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTNyZW07IH1cclxuICAucm93Lmd0ci0yMDAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDNyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTNyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAzcmVtOyB9IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgLnJvdyA+ICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC5yb3cuZ3RyLXVuaWZvcm0gPiAqID4gOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG5cclxuICAucm93ID4gLmltcC1tZWRpdW0ge1xyXG4gICAgb3JkZXI6IC0xOyB9XHJcbiAgLnJvdyA+IC5jb2wtMS1tZWRpdW0ge1xyXG4gICAgd2lkdGg6IDguMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLm9mZi0xLW1lZGl1bSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAuY29sLTItbWVkaXVtIHtcclxuICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTItbWVkaXVtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTMtbWVkaXVtIHtcclxuICAgIHdpZHRoOiAyNSU7IH1cclxuICAucm93ID4gLm9mZi0zLW1lZGl1bSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlOyB9XHJcbiAgLnJvdyA+IC5jb2wtNC1tZWRpdW0ge1xyXG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5vZmYtNC1tZWRpdW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5jb2wtNS1tZWRpdW0ge1xyXG4gICAgd2lkdGg6IDQxLjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtNS1tZWRpdW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5jb2wtNi1tZWRpdW0ge1xyXG4gICAgd2lkdGg6IDUwJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTYtbWVkaXVtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7IH1cclxuICAucm93ID4gLmNvbC03LW1lZGl1bSB7XHJcbiAgICB3aWR0aDogNTguMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLm9mZi03LW1lZGl1bSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLmNvbC04LW1lZGl1bSB7XHJcbiAgICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLm9mZi04LW1lZGl1bSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLmNvbC05LW1lZGl1bSB7XHJcbiAgICB3aWR0aDogNzUlOyB9XHJcbiAgLnJvdyA+IC5vZmYtOS1tZWRpdW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTsgfVxyXG4gIC5yb3cgPiAuY29sLTEwLW1lZGl1bSB7XHJcbiAgICB3aWR0aDogODMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLm9mZi0xMC1tZWRpdW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5jb2wtMTEtbWVkaXVtIHtcclxuICAgIHdpZHRoOiA5MS42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTExLW1lZGl1bSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLmNvbC0xMi1tZWRpdW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7IH1cclxuICAucm93ID4gLm9mZi0xMi1tZWRpdW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7IH1cclxuICAucm93Lmd0ci0wIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDByZW07IH1cclxuICAucm93Lmd0ci0wLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDByZW07IH1cclxuICAucm93Lmd0ci0wLmd0ci11bmlmb3JtID4gKiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTI1IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuMzc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAuMzc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTAuMzc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjM3NXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTUwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNzVyZW07IH1cclxuICAucm93Lmd0ci01MCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMC43NXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0wLjc1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjc1cmVtOyB9XHJcbiAgLnJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVyZW07IH1cclxuICAucm93ID4gKiB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAxLjVyZW07IH1cclxuICAucm93Lmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0xLjVyZW07IH1cclxuICAucm93Lmd0ci11bmlmb3JtID4gKiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtOyB9XHJcbiAgLnJvdy5ndHItMTUwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDIuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTIuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAyLjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjAwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTNyZW07IH1cclxuICAucm93Lmd0ci0yMDAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDNyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTNyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAzcmVtOyB9IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgLnJvdyA+ICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC5yb3cuZ3RyLXVuaWZvcm0gPiAqID4gOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG5cclxuICAucm93ID4gLmltcC1zbWFsbCB7XHJcbiAgICBvcmRlcjogLTE7IH1cclxuICAucm93ID4gLmNvbC0xLXNtYWxsIHtcclxuICAgIHdpZHRoOiA4LjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5vZmYtMS1zbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAuY29sLTItc21hbGwge1xyXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtMi1zbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLmNvbC0zLXNtYWxsIHtcclxuICAgIHdpZHRoOiAyNSU7IH1cclxuICAucm93ID4gLm9mZi0zLXNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7IH1cclxuICAucm93ID4gLmNvbC00LXNtYWxsIHtcclxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTQtc21hbGwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5jb2wtNS1zbWFsbCB7XHJcbiAgICB3aWR0aDogNDEuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLm9mZi01LXNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTYtc21hbGwge1xyXG4gICAgd2lkdGg6IDUwJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTYtc21hbGwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTsgfVxyXG4gIC5yb3cgPiAuY29sLTctc21hbGwge1xyXG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5vZmYtNy1zbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLmNvbC04LXNtYWxsIHtcclxuICAgIHdpZHRoOiA2Ni42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTgtc21hbGwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5jb2wtOS1zbWFsbCB7XHJcbiAgICB3aWR0aDogNzUlOyB9XHJcbiAgLnJvdyA+IC5vZmYtOS1zbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzUlOyB9XHJcbiAgLnJvdyA+IC5jb2wtMTAtc21hbGwge1xyXG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5vZmYtMTAtc21hbGwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5jb2wtMTEtc21hbGwge1xyXG4gICAgd2lkdGg6IDkxLjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtMTEtc21hbGwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5jb2wtMTItc21hbGwge1xyXG4gICAgd2lkdGg6IDEwMCU7IH1cclxuICAucm93ID4gLm9mZi0xMi1zbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTsgfVxyXG4gIC5yb3cuZ3RyLTAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcmVtOyB9XHJcbiAgLnJvdy5ndHItMCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcmVtOyB9XHJcbiAgLnJvdy5ndHItMjUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMC4zMTI1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAuMzEyNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTI1Lmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0wLjMxMjVyZW07IH1cclxuICAucm93Lmd0ci0yNS5ndHItdW5pZm9ybSA+ICoge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMzEyNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTUwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAuNjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTAuNjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjYyNXJlbTsgfVxyXG4gIC5yb3cge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMS4yNXJlbTsgfVxyXG4gIC5yb3cgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07IH1cclxuICAucm93Lmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0xLjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItdW5pZm9ybSA+ICoge1xyXG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMS44NzVyZW07IH1cclxuICAucm93Lmd0ci0xNTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDEuODc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMTUwLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0xLjg3NXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSA+ICoge1xyXG4gICAgcGFkZGluZy10b3A6IDEuODc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjAwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIuNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTIwMCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMi41cmVtOyB9XHJcbiAgLnJvdy5ndHItMjAwLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0yLjVyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuICAucm93ID4gKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgLnJvdy5ndHItdW5pZm9ybSA+ICogPiA6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XHJcblxyXG4gIC5yb3cgPiAuaW1wLXhzbWFsbCB7XHJcbiAgICBvcmRlcjogLTE7IH1cclxuICAucm93ID4gLmNvbC0xLXhzbWFsbCB7XHJcbiAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEteHNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzMzMlOyB9XHJcbiAgLnJvdyA+IC5jb2wtMi14c21hbGwge1xyXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtMi14c21hbGwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5jb2wtMy14c21hbGwge1xyXG4gICAgd2lkdGg6IDI1JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTMteHNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7IH1cclxuICAucm93ID4gLmNvbC00LXhzbWFsbCB7XHJcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLm9mZi00LXhzbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLmNvbC01LXhzbWFsbCB7XHJcbiAgICB3aWR0aDogNDEuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLm9mZi01LXhzbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjY2NyU7IH1cclxuICAucm93ID4gLmNvbC02LXhzbWFsbCB7XHJcbiAgICB3aWR0aDogNTAlOyB9XHJcbiAgLnJvdyA+IC5vZmYtNi14c21hbGwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTsgfVxyXG4gIC5yb3cgPiAuY29sLTcteHNtYWxsIHtcclxuICAgIHdpZHRoOiA1OC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTcteHNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAuY29sLTgteHNtYWxsIHtcclxuICAgIHdpZHRoOiA2Ni42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAub2ZmLTgteHNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTkteHNtYWxsIHtcclxuICAgIHdpZHRoOiA3NSU7IH1cclxuICAucm93ID4gLm9mZi05LXhzbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzUlOyB9XHJcbiAgLnJvdyA+IC5jb2wtMTAteHNtYWxsIHtcclxuICAgIHdpZHRoOiA4My4zMzMzMzMzMzMzJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEwLXhzbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMzMyU7IH1cclxuICAucm93ID4gLmNvbC0xMS14c21hbGwge1xyXG4gICAgd2lkdGg6IDkxLjY2NjY2NjY2NjclOyB9XHJcbiAgLnJvdyA+IC5vZmYtMTEteHNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NjY3JTsgfVxyXG4gIC5yb3cgPiAuY29sLTEyLXhzbWFsbCB7XHJcbiAgICB3aWR0aDogMTAwJTsgfVxyXG4gIC5yb3cgPiAub2ZmLTEyLXhzbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTsgfVxyXG4gIC5yb3cuZ3RyLTAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcmVtOyB9XHJcbiAgLnJvdy5ndHItMCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMHJlbTsgfVxyXG4gIC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcmVtOyB9XHJcbiAgLnJvdy5ndHItMjUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMC4zMTI1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjUgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAuMzEyNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTI1Lmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0wLjMxMjVyZW07IH1cclxuICAucm93Lmd0ci0yNS5ndHItdW5pZm9ybSA+ICoge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMzEyNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTUwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAuNjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTAuNjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjYyNXJlbTsgfVxyXG4gIC5yb3cge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMS4yNXJlbTsgfVxyXG4gIC5yb3cgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07IH1cclxuICAucm93Lmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0xLjI1cmVtOyB9XHJcbiAgLnJvdy5ndHItdW5pZm9ybSA+ICoge1xyXG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07IH1cclxuICAucm93Lmd0ci0xNTAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMS44NzVyZW07IH1cclxuICAucm93Lmd0ci0xNTAgPiAqIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDEuODc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMTUwLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0xLjg3NXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSA+ICoge1xyXG4gICAgcGFkZGluZy10b3A6IDEuODc1cmVtOyB9XHJcbiAgLnJvdy5ndHItMjAwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIuNXJlbTsgfVxyXG4gIC5yb3cuZ3RyLTIwMCA+ICoge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMi41cmVtOyB9XHJcbiAgLnJvdy5ndHItMjAwLmd0ci11bmlmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IC0yLjVyZW07IH1cclxuICAucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07IH0gfVxyXG4vKiBJY29uICovXHJcbi5pY29uIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cclxuLmljb246YmVmb3JlIHtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50OyB9XHJcbi5pY29uID4gLmxhYmVsIHtcclxuICBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4vKiBJY29ucyAqL1xyXG51bC5pY29ucyB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XHJcbnVsLmljb25zIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCAxcmVtIDAgMDsgfVxyXG51bC5pY29ucyBsaTpsYXN0LWNoaWxkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XHJcbnVsLmljb25zIGxpIC5pY29uOmJlZm9yZSB7XHJcbiAgZm9udC1zaXplOiAycmVtOyB9XHJcblxyXG4vKiBJbWFnZSAqL1xyXG4uaW1hZ2Uge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxyXG4uaW1hZ2UgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7IH1cclxuLmltYWdlLmxlZnQsIC5pbWFnZS5yaWdodCB7XHJcbiAgbWF4LXdpZHRoOiA0MCU7IH1cclxuLmltYWdlLmxlZnQgaW1nLCAuaW1hZ2UucmlnaHQgaW1nIHtcclxuICB3aWR0aDogMTAwJTsgfVxyXG4uaW1hZ2UubGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAwIDJyZW0gMnJlbSAwO1xyXG4gIHRvcDogMC4yNXJlbTsgfVxyXG4uaW1hZ2UucmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDAgMCAycmVtIDJyZW07XHJcbiAgdG9wOiAwLjI1cmVtOyB9XHJcbi5pbWFnZS5maXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCAwIDJyZW0gMDtcclxuICB3aWR0aDogMTAwJTsgfVxyXG4uaW1hZ2UuZml0IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7IH1cclxuLmltYWdlLm1haW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCAwIDNyZW0gMDtcclxuICB3aWR0aDogMTAwJTsgfVxyXG4uaW1hZ2UubWFpbiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlOyB9XHJcblxyXG4vKiBXcmFwcGVyICovXHJcbi53cmFwcGVyIHtcclxuICBwYWRkaW5nOiA4cmVtIDAgNnJlbSAwIDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTsgfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiA0cmVtIDAgMnJlbSAwIDsgfSB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgcGFkZGluZzogM3JlbSAwIDFyZW0gMCA7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMCAwLjFyZW0gMCA7IH0gfVxyXG5cclxuLyogQmFubmVyICovXHJcbiNiYW5uZXIge1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tb3otanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtbXMtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWctMDEuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYm9yZGVyLXRvcDogMDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBoZWlnaHQ6IDM1cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogMzVyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiNiYW5uZXIgaW5wdXQsICNiYW5uZXIgc2VsZWN0LCAjYmFubmVyIHRleHRhcmVhIHtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG4jYmFubmVyIGEge1xyXG4gIGNvbG9yOiAjY2UxYjI4OyB9XHJcbiNiYW5uZXIgc3Ryb25nLCAjYmFubmVyIGIge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNiYW5uZXIgaDEsICNiYW5uZXIgaDIsICNiYW5uZXIgaDMsICNiYW5uZXIgaDQsICNiYW5uZXIgaDUsICNiYW5uZXIgaDYge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNiYW5uZXIgYmxvY2txdW90ZSB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2Jhbm5lciBjb2RlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2Jhbm5lciBociB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcbiNiYW5uZXIgaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXHJcbiNiYW5uZXIgYnV0dG9uLFxyXG4jYmFubmVyIC5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7IH1cclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlcixcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLFxyXG4jYmFubmVyIGJ1dHRvbjpob3ZlcixcclxuI2Jhbm5lciAuYnV0dG9uOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2NlMWIyODtcclxuICBjb2xvcjogI2NlMWIyOCAhaW1wb3J0YW50OyB9XHJcbiNiYW5uZXIgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcjphY3RpdmUsXHJcbiNiYW5uZXIgaW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyOmFjdGl2ZSxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyOmFjdGl2ZSxcclxuI2Jhbm5lciBidXR0b246aG92ZXI6YWN0aXZlLFxyXG4jYmFubmVyIC5idXR0b246aG92ZXI6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNiwgMjcsIDQwLCAwLjI1KTsgfVxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeSxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeSxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnksXHJcbiNiYW5uZXIgYnV0dG9uLnByaW1hcnksXHJcbiNiYW5uZXIgLmJ1dHRvbi5wcmltYXJ5IHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTFiMjg7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgfVxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeTpob3ZlcixcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeTpob3ZlcixcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnk6aG92ZXIsXHJcbiNiYW5uZXIgYnV0dG9uLnByaW1hcnk6aG92ZXIsXHJcbiNiYW5uZXIgLmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyMTJmO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwic3VibWl0XCJdLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJyZXNldFwiXS5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4jYmFubmVyIGJ1dHRvbi5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuI2Jhbm5lciAuYnV0dG9uLnByaW1hcnk6aG92ZXI6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjcxODI0OyB9XHJcbiNiYW5uZXIgbGFiZWwge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNiYW5uZXIgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiNiYW5uZXIgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwidGVsXCJdLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXHJcbiNiYW5uZXIgaW5wdXRbdHlwZT1cInVybFwiXSxcclxuI2Jhbm5lciBzZWxlY3QsXHJcbiNiYW5uZXIgdGV4dGFyZWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcbiNiYW5uZXIgaW5wdXRbdHlwZT1cInRlbFwiXTpmb2N1cyxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJ1cmxcIl06Zm9jdXMsXHJcbiNiYW5uZXIgc2VsZWN0OmZvY3VzLFxyXG4jYmFubmVyIHRleHRhcmVhOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICNjZTFiMjg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNjZTFiMjg7IH1cclxuI2Jhbm5lciBzZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDcGF0aCBkPSdNOS40LDEyLjNsMTAuNCwxMC40bDEwLjQtMTAuNGMwLjItMC4yLDAuNS0wLjQsMC45LTAuNGMwLjMsMCwwLjYsMC4xLDAuOSwwLjRsMy4zLDMuM2MwLjIsMC4yLDAuNCwwLjUsMC40LDAuOSBjMCwwLjQtMC4xLDAuNi0wLjQsMC45TDIwLjcsMzEuOWMtMC4yLDAuMi0wLjUsMC40LTAuOSwwLjRjLTAuMywwLTAuNi0wLjEtMC45LTAuNEw0LjMsMTcuM2MtMC4yLTAuMi0wLjQtMC41LTAuNC0wLjkgYzAtMC40LDAuMS0wLjYsMC40LTAuOWwzLjMtMy4zYzAuMi0wLjIsMC41LTAuNCwwLjktMC40UzkuMSwxMi4xLDkuNCwxMi4zeicgZmlsbD0ncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KScgLyUzRSUzQy9zdmclM0VcIik7IH1cclxuI2Jhbm5lciBzZWxlY3Qgb3B0aW9uIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7IH1cclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOmJlZm9yZSxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGJvcmRlci1jb2xvcjogI2NlMWIyODtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG4jYmFubmVyIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyArIGxhYmVsOmJlZm9yZSxcclxuI2Jhbm5lciBpbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMgKyBsYWJlbDpiZWZvcmUge1xyXG4gIGJvcmRlci1jb2xvcjogI2NlMWIyODtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2NlMWIyODsgfVxyXG4jYmFubmVyIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50OyB9XHJcbiNiYW5uZXIgOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgIWltcG9ydGFudDsgfVxyXG4jYmFubmVyIDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50OyB9XHJcbiNiYW5uZXIgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50OyB9XHJcbiNiYW5uZXIgdWwuYWx0IGxpIHtcclxuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNiYW5uZXIgdGFibGUgdGJvZHkgdHIge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jYmFubmVyIHRhYmxlIHRib2R5IHRyOm50aC1jaGlsZCgybiArIDEpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTsgfVxyXG4jYmFubmVyIHRhYmxlIHRoIHtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG4jYmFubmVyIHRhYmxlIHRoZWFkIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNiYW5uZXIgdGFibGUgdGZvb3Qge1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2Jhbm5lciB0YWJsZS5hbHQgdGJvZHkgdHIgdGQge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jYmFubmVyIC5oaWdobGlnaHRzIC5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjMTExMTExO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDI1KTsgfVxyXG4jYmFubmVyIC50ZXN0aW1vbmlhbHMgLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICMxMTExMTE7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpOyB9XHJcbiNiYW5uZXIgLnRlc3RpbW9uaWFscyAuY29udGVudCAuY3JlZGl0IHN0cm9uZyB7XHJcbiAgY29sb3I6ICNjZTFiMjg7IH1cclxuI2Jhbm5lciA+IC5pbm5lciB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UsIC1tb3otdHJhbnNmb3JtIDFzIGVhc2U7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIDFzIGVhc2U7XHJcbiAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgLW1zLXRyYW5zZm9ybSAxcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgdHJhbnNmb3JtIDFzIGVhc2U7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMzsgfVxyXG4jYmFubmVyID4gLmlubmVyID4gOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cclxuI2Jhbm5lciBoMSB7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cclxuI2Jhbm5lciBwIHtcclxuICBmb250LXNpemU6IDEuNXJlbTsgfVxyXG4jYmFubmVyIGEge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcbiNiYW5uZXIgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2Jhbm5lciB2aWRlbyB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHRyYW5zbGF0ZVkoNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgYm90dG9tOiA1MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IGF1dG87IH1cclxuI2Jhbm5lcjpiZWZvcmUge1xyXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAzcyBlYXNlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAzcyBlYXNlO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMS4yNXM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAxLjI1cztcclxuICAtbXMtdHJhbnNpdGlvbi1kZWxheTogMS4yNXM7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMS4yNXM7XHJcbiAgYmFja2dyb3VuZDogIzExMTExMTtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBvcGFjaXR5OiAwLjQ1O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTsgfVxyXG4jYmFubmVyOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjY2UxYjI4IDAlLCAjMTExMTExIDc0JSk7XHJcbiAgY29udGVudDogJyAnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHdlYmtpdC1saW5lYXItZ3JhZGllbnRpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7IH1cclxuI2Jhbm5lci5zbWFsbCB7XHJcbiAgaGVpZ2h0OiAzMHZoICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogMzB2aDsgfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAjYmFubmVyIHZpZGVvIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xyXG4gICNiYW5uZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogNHJlbSAycmVtIDRyZW0gMnJlbTsgfVxyXG4gICNiYW5uZXIgLmlubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlOyB9XHJcbiAgI2Jhbm5lciBoMSB7XHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDsgfVxyXG4gICNiYW5uZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07IH1cclxuICAjYmFubmVyIGJyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IH1cclxuICAjYmFubmVyIC5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICNiYW5uZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07IH0gfVxyXG5ib2R5LmlzLXByZWxvYWQgI2Jhbm5lciAuaW5uZXIge1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcclxuICBvcGFjaXR5OiAwOyB9XHJcbmJvZHkuaXMtcHJlbG9hZCAjYmFubmVyOmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogMTsgfVxyXG5cclxuLyogQ1RBICovXHJcbiNjdGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTFiMjg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyMDYsIDI3LCA0MCwgMC4yNSksIHJnYmEoMjA2LCAyNywgNDAsIDAuMjUpKSwgdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1nLTA3LmpwZyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDE7IH1cclxuI2N0YSBpbnB1dCwgI2N0YSBzZWxlY3QsICNjdGEgdGV4dGFyZWEge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNjdGEgYSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2N0YSBzdHJvbmcsICNjdGEgYiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2N0YSBoMSwgI2N0YSBoMiwgI2N0YSBoMywgI2N0YSBoNCwgI2N0YSBoNSwgI2N0YSBoNiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2N0YSBibG9ja3F1b3RlIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jY3RhIGNvZGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jY3RhIGhyIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNjdGEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuI2N0YSBpbnB1dFt0eXBlPVwicmVzZXRcIl0sXHJcbiNjdGEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcclxuI2N0YSBidXR0b24sXHJcbiNjdGEgLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNmZmZmZmY7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgfVxyXG4jY3RhIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcbiNjdGEgaW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsXHJcbiNjdGEgYnV0dG9uOmhvdmVyLFxyXG4jY3RhIC5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgfVxyXG4jY3RhIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXI6YWN0aXZlLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlcjphY3RpdmUsXHJcbiNjdGEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlcjphY3RpdmUsXHJcbiNjdGEgYnV0dG9uOmhvdmVyOmFjdGl2ZSxcclxuI2N0YSAuYnV0dG9uOmhvdmVyOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jY3RhIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeSxcclxuI2N0YSBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeSxcclxuI2N0YSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnksXHJcbiNjdGEgYnV0dG9uLnByaW1hcnksXHJcbiNjdGEgLmJ1dHRvbi5wcmltYXJ5IHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgY29sb3I6ICNjZTFiMjggIWltcG9ydGFudDsgfVxyXG4jY3RhIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeTpob3ZlcixcclxuI2N0YSBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeTpob3ZlcixcclxuI2N0YSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnk6aG92ZXIsXHJcbiNjdGEgYnV0dG9uLnByaW1hcnk6aG92ZXIsXHJcbiNjdGEgLmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODc1KTtcclxuICBib3gtc2hhZG93OiBub25lOyB9XHJcbiNjdGEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuI2N0YSBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbiNjdGEgaW5wdXRbdHlwZT1cImJ1dHRvblwiXS5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuI2N0YSBidXR0b24ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbiNjdGEgLmJ1dHRvbi5wcmltYXJ5OmhvdmVyOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XHJcbiNjdGEgbGFiZWwge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNjdGEgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiNjdGEgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuI2N0YSBpbnB1dFt0eXBlPVwidGVsXCJdLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXHJcbiNjdGEgaW5wdXRbdHlwZT1cInVybFwiXSxcclxuI2N0YSBzZWxlY3QsXHJcbiNjdGEgdGV4dGFyZWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jY3RhIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcclxuI2N0YSBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcbiNjdGEgaW5wdXRbdHlwZT1cInRlbFwiXTpmb2N1cyxcclxuI2N0YSBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJ1cmxcIl06Zm9jdXMsXHJcbiNjdGEgc2VsZWN0OmZvY3VzLFxyXG4jY3RhIHRleHRhcmVhOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmZmZmZmY7IH1cclxuI2N0YSBzZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDcGF0aCBkPSdNOS40LDEyLjNsMTAuNCwxMC40bDEwLjQtMTAuNGMwLjItMC4yLDAuNS0wLjQsMC45LTAuNGMwLjMsMCwwLjYsMC4xLDAuOSwwLjRsMy4zLDMuM2MwLjIsMC4yLDAuNCwwLjUsMC40LDAuOSBjMCwwLjQtMC4xLDAuNi0wLjQsMC45TDIwLjcsMzEuOWMtMC4yLDAuMi0wLjUsMC40LTAuOSwwLjRjLTAuMywwLTAuNi0wLjEtMC45LTAuNEw0LjMsMTcuM2MtMC4yLTAuMi0wLjQtMC41LTAuNC0wLjkgYzAtMC40LDAuMS0wLjYsMC40LTAuOWwzLjMtMy4zYzAuMi0wLjIsMC41LTAuNCwwLjktMC40UzkuMSwxMi4xLDkuNCwxMi4zeicgZmlsbD0ncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KScgLyUzRSUzQy9zdmclM0VcIik7IH1cclxuI2N0YSBzZWxlY3Qgb3B0aW9uIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UxYjI4OyB9XHJcbiNjdGEgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwsXHJcbiNjdGEgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpOyB9XHJcbiNjdGEgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNjdGEgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXHJcbiNjdGEgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjY2UxYjI4OyB9XHJcbiNjdGEgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzICsgbGFiZWw6YmVmb3JlLFxyXG4jY3RhIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjZmZmZmZmOyB9XHJcbiNjdGEgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2N0YSA6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50OyB9XHJcbiNjdGEgOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2N0YSA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2N0YSB1bC5hbHQgbGkge1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2N0YSB0YWJsZSB0Ym9keSB0ciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNjdGEgdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDJuICsgMSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpOyB9XHJcbiNjdGEgdGFibGUgdGgge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNjdGEgdGFibGUgdGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2N0YSB0YWJsZSB0Zm9vdCB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jY3RhIHRhYmxlLmFsdCB0Ym9keSB0ciB0ZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNjdGEgLmhpZ2hsaWdodHMgLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNjZTFiMjg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpOyB9XHJcbiNjdGEgLnRlc3RpbW9uaWFscyAuY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2NlMWIyODtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyNSk7IH1cclxuI2N0YSAudGVzdGltb25pYWxzIC5jb250ZW50IC5jcmVkaXQgc3Ryb25nIHtcclxuICBjb2xvcjogI2NlMWIyODsgfVxyXG4jY3RhIC5pbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDM7IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAjY3RhIHtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsOyB9IH1cclxuXHJcbi8qIEZvb3RlciAqL1xyXG4jZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgcGFkZGluZzogOHJlbSAwIDZyZW0gMCA7IH1cclxuI2Zvb3RlciBpbnB1dCwgI2Zvb3RlciBzZWxlY3QsICNmb290ZXIgdGV4dGFyZWEge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNmb290ZXIgYSB7XHJcbiAgY29sb3I6ICNjZTFiMjg7IH1cclxuI2Zvb3RlciBzdHJvbmcsICNmb290ZXIgYiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2Zvb3RlciBoMSwgI2Zvb3RlciBoMiwgI2Zvb3RlciBoMywgI2Zvb3RlciBoNCwgI2Zvb3RlciBoNSwgI2Zvb3RlciBoNiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2Zvb3RlciBibG9ja3F1b3RlIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jZm9vdGVyIGNvZGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jZm9vdGVyIGhyIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuI2Zvb3RlciBpbnB1dFt0eXBlPVwicmVzZXRcIl0sXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcclxuI2Zvb3RlciBidXR0b24sXHJcbiNmb290ZXIgLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNmZmZmZmY7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgfVxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsXHJcbiNmb290ZXIgYnV0dG9uOmhvdmVyLFxyXG4jZm9vdGVyIC5idXR0b246aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjY2UxYjI4O1xyXG4gIGNvbG9yOiAjY2UxYjI4ICFpbXBvcnRhbnQ7IH1cclxuI2Zvb3RlciBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyOmFjdGl2ZSxcclxuI2Zvb3RlciBpbnB1dFt0eXBlPVwicmVzZXRcIl06aG92ZXI6YWN0aXZlLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXI6YWN0aXZlLFxyXG4jZm9vdGVyIGJ1dHRvbjpob3ZlcjphY3RpdmUsXHJcbiNmb290ZXIgLmJ1dHRvbjpob3ZlcjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA2LCAyNywgNDAsIDAuMjUpOyB9XHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5wcmltYXJ5LFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJyZXNldFwiXS5wcmltYXJ5LFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJidXR0b25cIl0ucHJpbWFyeSxcclxuI2Zvb3RlciBidXR0b24ucHJpbWFyeSxcclxuI2Zvb3RlciAuYnV0dG9uLnByaW1hcnkge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlMWIyODtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50OyB9XHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5wcmltYXJ5OmhvdmVyLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJyZXNldFwiXS5wcmltYXJ5OmhvdmVyLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJidXR0b25cIl0ucHJpbWFyeTpob3ZlcixcclxuI2Zvb3RlciBidXR0b24ucHJpbWFyeTpob3ZlcixcclxuI2Zvb3RlciAuYnV0dG9uLnByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjIxMmY7XHJcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInJlc2V0XCJdLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJidXR0b25cIl0ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbiNmb290ZXIgYnV0dG9uLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4jZm9vdGVyIC5idXR0b24ucHJpbWFyeTpob3ZlcjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzE4MjQ7IH1cclxuI2Zvb3RlciBsYWJlbCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2Zvb3RlciBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuI2Zvb3RlciBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuI2Zvb3RlciBpbnB1dFt0eXBlPVwidXJsXCJdLFxyXG4jZm9vdGVyIHNlbGVjdCxcclxuI2Zvb3RlciB0ZXh0YXJlYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcclxuI2Zvb3RlciBpbnB1dFt0eXBlPVwidGVsXCJdOmZvY3VzLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Zm9jdXMsXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInVybFwiXTpmb2N1cyxcclxuI2Zvb3RlciBzZWxlY3Q6Zm9jdXMsXHJcbiNmb290ZXIgdGV4dGFyZWE6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogI2NlMWIyODtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2NlMWIyODsgfVxyXG4jZm9vdGVyIHNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NwYXRoIGQ9J005LjQsMTIuM2wxMC40LDEwLjRsMTAuNC0xMC40YzAuMi0wLjIsMC41LTAuNCwwLjktMC40YzAuMywwLDAuNiwwLjEsMC45LDAuNGwzLjMsMy4zYzAuMiwwLjIsMC40LDAuNSwwLjQsMC45IGMwLDAuNC0wLjEsMC42LTAuNCwwLjlMMjAuNywzMS45Yy0wLjIsMC4yLTAuNSwwLjQtMC45LDAuNGMtMC4zLDAtMC42LTAuMS0wLjktMC40TDQuMywxNy4zYy0wLjItMC4yLTAuNC0wLjUtMC40LTAuOSBjMC0wLjQsMC4xLTAuNiwwLjQtMC45bDMuMy0zLjNjMC4yLTAuMiwwLjUtMC40LDAuOS0wLjRTOS4xLDEyLjEsOS40LDEyLjN6JyBmaWxsPSdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpJyAvJTNFJTNDL3N2ZyUzRVwiKTsgfVxyXG4jZm9vdGVyIHNlbGVjdCBvcHRpb24ge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTsgfVxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTFiMjg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNmb290ZXIgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzICsgbGFiZWw6YmVmb3JlLFxyXG4jZm9vdGVyIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjY2UxYjI4OyB9XHJcbiNmb290ZXIgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2Zvb3RlciA6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50OyB9XHJcbiNmb290ZXIgOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2Zvb3RlciA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2Zvb3RlciB1bC5hbHQgbGkge1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2Zvb3RlciB0YWJsZSB0Ym9keSB0ciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNmb290ZXIgdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDJuICsgMSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpOyB9XHJcbiNmb290ZXIgdGFibGUgdGgge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNmb290ZXIgdGFibGUgdGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2Zvb3RlciB0YWJsZSB0Zm9vdCB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jZm9vdGVyIHRhYmxlLmFsdCB0Ym9keSB0ciB0ZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNmb290ZXIgLmhpZ2hsaWdodHMgLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICMxMTExMTE7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpOyB9XHJcbiNmb290ZXIgLnRlc3RpbW9uaWFscyAuY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogIzExMTExMTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyNSk7IH1cclxuI2Zvb3RlciAudGVzdGltb25pYWxzIC5jb250ZW50IC5jcmVkaXQgc3Ryb25nIHtcclxuICBjb2xvcjogI2NlMWIyODsgfVxyXG4jZm9vdGVyIGEge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcbiNmb290ZXIgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNjZTFiMjg7IH1cclxuI2Zvb3RlciAuY29udGVudCB7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4OyB9XHJcbiNmb290ZXIgLmNvbnRlbnQgc2VjdGlvbiB7XHJcbiAgd2lkdGg6IDI1JTsgfVxyXG4jZm9vdGVyIC5jb250ZW50IHNlY3Rpb246Zmlyc3QtY2hpbGQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZy1yaWdodDogNHJlbTsgfVxyXG4jZm9vdGVyIC5jb250ZW50IHNlY3Rpb246bGFzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cmVtOyB9XHJcbiNmb290ZXIgLmNvcHlyaWdodCB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICNmb290ZXIge1xyXG4gICAgcGFkZGluZzogNHJlbSAwIDJyZW0gMCA7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gICNmb290ZXIgLmNvbnRlbnQge1xyXG4gICAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7IH1cclxuICAjZm9vdGVyIC5jb250ZW50IHNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDUwJTsgfVxyXG4gICNmb290ZXIgLmNvbnRlbnQgc2VjdGlvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xyXG4gICNmb290ZXIge1xyXG4gICAgcGFkZGluZzogM3JlbSAwIDFyZW0gMCA7IH1cclxuICAjZm9vdGVyIC5jb250ZW50IHNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7IH1cclxuICAjZm9vdGVyIC5jb250ZW50IHNlY3Rpb246bGFzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICNmb290ZXIge1xyXG4gICAgcGFkZGluZzogMnJlbSAwIDAuMXJlbSAwIDsgfSB9XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDMuMjVyZW07IH1cclxuYm9keTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWctMDQuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIG9wYWNpdHk6IDAuMDU7IH1cclxuXHJcbiNoZWFkZXIge1xyXG4gIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLW1zLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZDogIzExMTExMTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBoZWlnaHQ6IDMuMjVyZW07XHJcbiAgbGVmdDogMDtcclxuICBsaW5lLWhlaWdodDogMy4yNXJlbTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDAxOyB9XHJcbiNoZWFkZXIgPiAubG9nbyB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDAgMS4yNXJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cclxuI2hlYWRlciA+IG5hdiA+IGEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwIDAuNzVyZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcbiNoZWFkZXIgPiBuYXYgPiBhOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG4jaGVhZGVyID4gbmF2ID4gYVtocmVmPVwiI21lbnVcIl0ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7IH1cclxuI2hlYWRlciA+IG5hdiA+IGFbaHJlZj1cIiNtZW51XCJdOmJlZm9yZSB7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDsgfVxyXG4jaGVhZGVyID4gbmF2ID4gYVtocmVmPVwiI21lbnVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxmMGM5JztcclxuICBtYXJnaW46IDAgMC41cmVtIDAgMDsgfVxyXG4jaGVhZGVyID4gbmF2ID4gYSArIGFbaHJlZj1cIiNtZW51XCJdOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTsgfVxyXG4jaGVhZGVyID4gbmF2ID4gYTpsYXN0LWNoaWxkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtOyB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcbiAgI2hlYWRlciA+IG5hdiA+IGEge1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07IH1cclxuICAjaGVhZGVyID4gbmF2ID4gYSArIGFbaHJlZj1cIiNtZW51XCJdOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07IH1cclxuICAjaGVhZGVyID4gbmF2ID4gYTpsYXN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07IH0gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICBib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOiA0NHB4OyB9XHJcblxyXG4gICNoZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7IH0gfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICNoZWFkZXIge1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDsgfSB9XHJcbi8qIEhlYWRpbmcgKi9cclxuI2hlYWRpbmcge1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tb3otanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtbXMtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMTcsIDE3LCAxNywgMC4yNSksIHJnYmEoMTcsIDE3LCAxNywgMC4yNSkpLCB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ltZy0wNy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBib3JkZXItdG9wOiAwO1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGhlaWdodDogMTVyZW0gIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiAxNXJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7IH1cclxuI2hlYWRpbmcgaW5wdXQsICNoZWFkaW5nIHNlbGVjdCwgI2hlYWRpbmcgdGV4dGFyZWEge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNoZWFkaW5nIGEge1xyXG4gIGNvbG9yOiAjY2UxYjI4OyB9XHJcbiNoZWFkaW5nIHN0cm9uZywgI2hlYWRpbmcgYiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2hlYWRpbmcgaDEsICNoZWFkaW5nIGgyLCAjaGVhZGluZyBoMywgI2hlYWRpbmcgaDQsICNoZWFkaW5nIGg1LCAjaGVhZGluZyBoNiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2hlYWRpbmcgYmxvY2txdW90ZSB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2hlYWRpbmcgY29kZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNoZWFkaW5nIGhyIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJyZXNldFwiXSxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcclxuI2hlYWRpbmcgYnV0dG9uLFxyXG4jaGVhZGluZyAuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2ZmZmZmZjtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50OyB9XHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlcixcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlcixcclxuI2hlYWRpbmcgYnV0dG9uOmhvdmVyLFxyXG4jaGVhZGluZyAuYnV0dG9uOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2NlMWIyODtcclxuICBjb2xvcjogI2NlMWIyOCAhaW1wb3J0YW50OyB9XHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXI6YWN0aXZlLFxyXG4jaGVhZGluZyBpbnB1dFt0eXBlPVwicmVzZXRcIl06aG92ZXI6YWN0aXZlLFxyXG4jaGVhZGluZyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyOmFjdGl2ZSxcclxuI2hlYWRpbmcgYnV0dG9uOmhvdmVyOmFjdGl2ZSxcclxuI2hlYWRpbmcgLmJ1dHRvbjpob3ZlcjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA2LCAyNywgNDAsIDAuMjUpOyB9XHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ucHJpbWFyeSxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInJlc2V0XCJdLnByaW1hcnksXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJidXR0b25cIl0ucHJpbWFyeSxcclxuI2hlYWRpbmcgYnV0dG9uLnByaW1hcnksXHJcbiNoZWFkaW5nIC5idXR0b24ucHJpbWFyeSB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7IH1cclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5wcmltYXJ5OmhvdmVyLFxyXG4jaGVhZGluZyBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeTpob3ZlcixcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cImJ1dHRvblwiXS5wcmltYXJ5OmhvdmVyLFxyXG4jaGVhZGluZyBidXR0b24ucHJpbWFyeTpob3ZlcixcclxuI2hlYWRpbmcgLmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyMTJmO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInJlc2V0XCJdLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4jaGVhZGluZyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4jaGVhZGluZyBidXR0b24ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbiNoZWFkaW5nIC5idXR0b24ucHJpbWFyeTpob3ZlcjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzE4MjQ7IH1cclxuI2hlYWRpbmcgbGFiZWwge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyB9XHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4jaGVhZGluZyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInRlbFwiXSxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInVybFwiXSxcclxuI2hlYWRpbmcgc2VsZWN0LFxyXG4jaGVhZGluZyB0ZXh0YXJlYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG4jaGVhZGluZyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMsXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInRlbFwiXTpmb2N1cyxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTpmb2N1cyxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInVybFwiXTpmb2N1cyxcclxuI2hlYWRpbmcgc2VsZWN0OmZvY3VzLFxyXG4jaGVhZGluZyB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjY2UxYjI4OyB9XHJcbiNoZWFkaW5nIHNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NwYXRoIGQ9J005LjQsMTIuM2wxMC40LDEwLjRsMTAuNC0xMC40YzAuMi0wLjIsMC41LTAuNCwwLjktMC40YzAuMywwLDAuNiwwLjEsMC45LDAuNGwzLjMsMy4zYzAuMiwwLjIsMC40LDAuNSwwLjQsMC45IGMwLDAuNC0wLjEsMC42LTAuNCwwLjlMMjAuNywzMS45Yy0wLjIsMC4yLTAuNSwwLjQtMC45LDAuNGMtMC4zLDAtMC42LTAuMS0wLjktMC40TDQuMywxNy4zYy0wLjItMC4yLTAuNC0wLjUtMC40LTAuOSBjMC0wLjQsMC4xLTAuNiwwLjQtMC45bDMuMy0zLjNjMC4yLTAuMiwwLjUtMC40LDAuOS0wLjRTOS4xLDEyLjEsOS40LDEyLjN6JyBmaWxsPSdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpJyAvJTNFJTNDL3N2ZyUzRVwiKTsgfVxyXG4jaGVhZGluZyBzZWxlY3Qgb3B0aW9uIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7IH1cclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwsXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOmJlZm9yZSxcclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2hlYWRpbmcgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGJvcmRlci1jb2xvcjogI2NlMWIyODtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG4jaGVhZGluZyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Zm9jdXMgKyBsYWJlbDpiZWZvcmUsXHJcbiNoZWFkaW5nIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2UxYjI4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjY2UxYjI4OyB9XHJcbiNoZWFkaW5nIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50OyB9XHJcbiNoZWFkaW5nIDotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2hlYWRpbmcgOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7IH1cclxuI2hlYWRpbmcgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50OyB9XHJcbiNoZWFkaW5nIHVsLmFsdCBsaSB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jaGVhZGluZyB0YWJsZSB0Ym9keSB0ciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XHJcbiNoZWFkaW5nIHRhYmxlIHRib2R5IHRyOm50aC1jaGlsZCgybiArIDEpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTsgfVxyXG4jaGVhZGluZyB0YWJsZSB0aCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI2hlYWRpbmcgdGFibGUgdGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2hlYWRpbmcgdGFibGUgdGZvb3Qge1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2hlYWRpbmcgdGFibGUuYWx0IHRib2R5IHRyIHRkIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI2hlYWRpbmcgLmhpZ2hsaWdodHMgLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICMxMTExMTE7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpOyB9XHJcbiNoZWFkaW5nIC50ZXN0aW1vbmlhbHMgLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICMxMTExMTE7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpOyB9XHJcbiNoZWFkaW5nIC50ZXN0aW1vbmlhbHMgLmNvbnRlbnQgLmNyZWRpdCBzdHJvbmcge1xyXG4gIGNvbG9yOiAjY2UxYjI4OyB9XHJcbiNoZWFkaW5nOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2NlMWIyOCAwJSwgIzExMTExMSA3NCUpO1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxOyB9XHJcbiNoZWFkaW5nIGgxIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyOyB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgI2hlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMnJlbTsgfSB9XHJcblxyXG4vKiBNYWluICovXHJcbiNtYWluIC5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjAyNSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBwYWRkaW5nOiAzcmVtOyB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgI21haW4gLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMnJlbTsgfSB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgI21haW4gLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMS41cmVtOyB9IH1cclxuXHJcbi8qIE1lbnUgKi9cclxuI21lbnUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHJlbSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjByZW0pO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjByZW0pO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHJlbSk7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjVzIGVhc2UsIGJveC1zaGFkb3cgMC41cyBlYXNlLCB2aXNpYmlsaXR5IDAuNXM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGVhc2UsIGJveC1zaGFkb3cgMC41cyBlYXNlLCB2aXNpYmlsaXR5IDAuNXM7XHJcbiAgLW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gMC41cyBlYXNlLCBib3gtc2hhZG93IDAuNXMgZWFzZSwgdmlzaWJpbGl0eSAwLjVzO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UsIGJveC1zaGFkb3cgMC41cyBlYXNlLCB2aXNpYmlsaXR5IDAuNXM7XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcGFkZGluZzogM3JlbSAycmVtO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiAyMHJlbTtcclxuICB6LWluZGV4OiAxMDAwMjsgfVxyXG4jbWVudSBpbnB1dCwgI21lbnUgc2VsZWN0LCAjbWVudSB0ZXh0YXJlYSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI21lbnUgYSB7XHJcbiAgY29sb3I6ICNjZTFiMjg7IH1cclxuI21lbnUgc3Ryb25nLCAjbWVudSBiIHtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG4jbWVudSBoMSwgI21lbnUgaDIsICNtZW51IGgzLCAjbWVudSBoNCwgI21lbnUgaDUsICNtZW51IGg2IHtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG4jbWVudSBibG9ja3F1b3RlIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxyXG4jbWVudSBjb2RlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI21lbnUgaHIge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cclxuI21lbnUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuI21lbnUgaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG4jbWVudSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxyXG4jbWVudSBidXR0b24sXHJcbiNtZW51IC5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7IH1cclxuI21lbnUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuI21lbnUgaW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyLFxyXG4jbWVudSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLFxyXG4jbWVudSBidXR0b246aG92ZXIsXHJcbiNtZW51IC5idXR0b246aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjY2UxYjI4O1xyXG4gIGNvbG9yOiAjY2UxYjI4ICFpbXBvcnRhbnQ7IH1cclxuI21lbnUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcjphY3RpdmUsXHJcbiNtZW51IGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlcjphY3RpdmUsXHJcbiNtZW51IGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXI6YWN0aXZlLFxyXG4jbWVudSBidXR0b246aG92ZXI6YWN0aXZlLFxyXG4jbWVudSAuYnV0dG9uOmhvdmVyOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDYsIDI3LCA0MCwgMC4yNSk7IH1cclxuI21lbnUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5wcmltYXJ5LFxyXG4jbWVudSBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeSxcclxuI21lbnUgaW5wdXRbdHlwZT1cImJ1dHRvblwiXS5wcmltYXJ5LFxyXG4jbWVudSBidXR0b24ucHJpbWFyeSxcclxuI21lbnUgLmJ1dHRvbi5wcmltYXJ5IHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTFiMjg7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgfVxyXG4jbWVudSBpbnB1dFt0eXBlPVwic3VibWl0XCJdLnByaW1hcnk6aG92ZXIsXHJcbiNtZW51IGlucHV0W3R5cGU9XCJyZXNldFwiXS5wcmltYXJ5OmhvdmVyLFxyXG4jbWVudSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnByaW1hcnk6aG92ZXIsXHJcbiNtZW51IGJ1dHRvbi5wcmltYXJ5OmhvdmVyLFxyXG4jbWVudSAuYnV0dG9uLnByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjIxMmY7XHJcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxyXG4jbWVudSBpbnB1dFt0eXBlPVwic3VibWl0XCJdLnByaW1hcnk6aG92ZXI6YWN0aXZlLFxyXG4jbWVudSBpbnB1dFt0eXBlPVwicmVzZXRcIl0ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbiNtZW51IGlucHV0W3R5cGU9XCJidXR0b25cIl0ucHJpbWFyeTpob3ZlcjphY3RpdmUsXHJcbiNtZW51IGJ1dHRvbi5wcmltYXJ5OmhvdmVyOmFjdGl2ZSxcclxuI21lbnUgLmJ1dHRvbi5wcmltYXJ5OmhvdmVyOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3MTgyNDsgfVxyXG4jbWVudSA+IHVsIHtcclxuICBtYXJnaW46IDAgMCAxcmVtIDA7IH1cclxuI21lbnUgPiB1bC5saW5rcyB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwOyB9XHJcbiNtZW51ID4gdWwubGlua3MgPiBsaSB7XHJcbiAgcGFkZGluZzogMDsgfVxyXG4jbWVudSA+IHVsLmxpbmtzID4gbGkgPiBhIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cclxuI21lbnUgPiB1bC5saW5rcyA+IGxpID4gYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IH1cclxuI21lbnUgPiB1bC5saW5rcyA+IGxpOmZpcnN0LWNoaWxkID4gYSB7XHJcbiAgYm9yZGVyLXRvcDogMDsgfVxyXG4jbWVudSAuY2xvc2Uge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGJvcmRlcjogMDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDMuMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDMuMjVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMS4yNXJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdG9wOiAwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDdyZW07IH1cclxuI21lbnUgLmNsb3NlOmJlZm9yZSB7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDsgfVxyXG4jbWVudSAuY2xvc2U6YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxmMDBkJztcclxuICBmb250LXNpemU6IDEuMjVyZW07IH1cclxuI21lbnUgLmNsb3NlOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZmZmZjsgfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xyXG4gICNtZW51IC5jbG9zZSB7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICBsaW5lLWhlaWdodDogNHJlbTsgfSB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcbiAgI21lbnUge1xyXG4gICAgcGFkZGluZzogMi41cmVtIDEuNzVyZW07IH0gfVxyXG5cclxuYm9keS5pcy1tZW51LXZpc2libGUgI21lbnUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxLjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dashboard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'dashboard.html',
                styleUrls: ['main.550dcf66.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "J9tS":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AccountService, AlertService, ProjectServices, JobServicesService, RequestPriceServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.service */ "5ZPe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _account_service__WEBPACK_IMPORTED_MODULE_0__["AccountService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "f5O9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });

/* harmony import */ var _project_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.services */ "lWQx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectServices", function() { return _project_services__WEBPACK_IMPORTED_MODULE_2__["ProjectServices"]; });

/* harmony import */ var _job_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-services.service */ "hVEJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JobServicesService", function() { return _job_services_service__WEBPACK_IMPORTED_MODULE_3__["JobServicesService"]; });

/* harmony import */ var _request_price_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-price.services */ "sYgz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestPriceServices", function() { return _request_price_services__WEBPACK_IMPORTED_MODULE_4__["RequestPriceServices"]; });








/***/ }),

/***/ "K9Mn":
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_models */ "nPby");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_div_0_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const alert_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeAlert(alert_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.cssClass(alert_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", alert_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class AlertComponent {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
    }
    ngOnInit() {
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
                // remove 'keepAfterRouteChange' flag on the rest
                this.alerts.forEach(x => delete x.keepAfterRouteChange);
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // auto close alert if required
            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), 3000);
            }
        });
        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.alertService.clear(this.id);
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
    removeAlert(alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert))
            return;
        if (this.fade) {
            // fade out alert
            alert.fade = true;
            // remove alert after faded out
            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 250);
        }
        else {
            // remove alert
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        const classes = ['alert', 'alert-dismissable', 'mt-4', 'container'];
        const alertTypeClass = {
            [_app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success]: 'alert alert-success',
            [_app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error]: 'alert alert-danger',
            [_app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info]: 'alert alert-info',
            [_app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning]: 'alert alert-warning'
        };
        classes.push(alertTypeClass[alert.type]);
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], inputs: { id: "id", fade: "fade" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"], [1, "close", 3, "click"], [3, "innerHTML"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 4, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'alert', templateUrl: 'alert.component.html' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fade: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "L046":
/*!*****************************************************!*\
  !*** ./src/app/projects/take-projects.component.ts ***!
  \*****************************************************/
/*! exports provided: TakeProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeProjectsComponent", function() { return TakeProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/projects */ "VU6T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function TakeProjectsComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Masukan ID Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TakeProjectsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TakeProjectsComponent_div_7_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.assignmentid.errors.required);
} }
function TakeProjectsComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class TakeProjectsComponent {
    constructor(formBuilder, route, router, projectServices, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.projectServices = projectServices;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.project = _models_projects__WEBPACK_IMPORTED_MODULE_3__["Projects"];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            assignmentid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.projectServices.takeProjects(this.f.assignmentid.value, this.f.category.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                const returnUrl = this.route.snapshot.queryParams.returnUrl || '/schedule';
                this.router.navigateByUrl(returnUrl);
            },
            error: error => {
                this.alertService.error(error);
                this.loading = false;
            }
        });
    }
}
TakeProjectsComponent.ɵfac = function TakeProjectsComponent_Factory(t) { return new (t || TakeProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["ProjectServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"])); };
TakeProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TakeProjectsComponent, selectors: [["ng-component"]], decls: 18, vars: 7, consts: [[3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "assignmentid"], ["type", "text", "formControlName", "assignmentid", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "category"], ["type", "text", "formControlName", "category", "value", "services", 1, "form-control"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "/project", 1, "btn", "btn-link"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function TakeProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ambil Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TakeProjectsComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TakeProjectsComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Kategori");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TakeProjectsComponent_span_14_Template, 1, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.assignmentid.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.assignmentid.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TakeProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'take-projects.component.html',
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_5__["ProjectServices"] }, { type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "L9rA":
/*!****************************************************!*\
  !*** ./src/app/projects/project-nego.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectNegoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectNegoComponent", function() { return ProjectNegoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_models_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_models/projects */ "VU6T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ProjectNegoComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Masukan ID Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectNegoComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectNegoComponent_div_7_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.assignmentid.errors.required);
} }
function ProjectNegoComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ProjectNegoComponent {
    constructor(formBuilder, route, router, projectServices, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.projectServices = projectServices;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.project = _app_models_projects__WEBPACK_IMPORTED_MODULE_3__["Projects"];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            assignmentid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.projectServices.requestPrice(this.f.assignmentid.value, this.f.category.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                const returnUrl = this.route.snapshot.queryParams.returnUrl || '/requestprice';
                this.router.navigateByUrl(returnUrl);
                console.log(this.form);
            },
            error: error => {
                this.alertService.error(error);
                this.loading = false;
            }
        });
    }
}
ProjectNegoComponent.ɵfac = function ProjectNegoComponent_Factory(t) { return new (t || ProjectNegoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_5__["ProjectServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"])); };
ProjectNegoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectNegoComponent, selectors: [["ng-component"]], decls: 18, vars: 7, consts: [[3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "assignmentid"], ["type", "text", "formControlName", "assignmentid", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "category"], ["type", "text", "formControlName", "category", "value", "services", 1, "form-control"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "/project", 1, "btn", "btn-link"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function ProjectNegoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nego Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProjectNegoComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectNegoComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Kategori");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProjectNegoComponent_span_14_Template, 1, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.assignmentid.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.assignmentid.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectNegoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'project-nego.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_5__["ProjectServices"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "NU1j":
/*!***************************************************!*\
  !*** ./src/app/request-price/layout.component.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LayoutComponent {
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["ng-component"]], decls: 3, vars: 0, consts: [[1, "p-4"], [1, "container"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ templateUrl: 'layout.component.html' }]
    }], null, null); })();


/***/ }),

/***/ "Ndrk":
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "K9Mn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_services_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/services-routing.module */ "fD4K");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./truncate.pipe */ "hjSY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _services_services_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServicesRoutingModule"],
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_truncate_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncatePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _services_services_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServicesRoutingModule"],
        ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"]], exports: [_truncate_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncatePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _services_services_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServicesRoutingModule"],
                    ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"],
                ],
                exports: [
                    _truncate_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncatePipe"]
                ],
                declarations: [
                    _truncate_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncatePipe"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "RFjy":
/*!**********************************************!*\
  !*** ./src/app/projects/detail.component.ts ***!
  \**********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function DetailComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r2.ProjectName, "\n");
} }
function DetailComponent_div_1_img_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetailComponent_div_1_a_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nego");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/project/", project_r3._id, "/nego");
} }
function DetailComponent_div_1_a_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ambil Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/project/take-project/", project_r3._id, "");
} }
function DetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Project ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nama Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Kategori");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Harga");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Durasi Pengerjaan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Deskripsi Pekerjaan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DetailComponent_div_1_img_31_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DetailComponent_div_1_a_33_Template, 2, 1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DetailComponent_div_1_a_34_Template, 2, 1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.OwnerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rp.", project_r3.Price, ",-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.Duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.Remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.imageSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userId !== project_r3.OwnerID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userId !== project_r3.OwnerID);
} }
class DetailComponent {
    constructor(projectServices) {
        this.projectServices = projectServices;
        this.projects = null;
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
        const url = window.location.pathname;
        const projectId = url.substring(url.lastIndexOf('/') + 1);
        this.userId = localStorage.getItem('userid').slice(1, -1);
        this.projectServices.detailProject(projectId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(projects => {
            this.projects = projects.message;
            console.log(this.projects = projects.message);
            const imageId = this.projects[0].Image.split('/')[1];
            this.imageSrc = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/files/ViewLicense/${imageId}`;
        });
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ProjectServices"])); };
DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["ng-component"]], decls: 2, vars: 2, consts: [[4, "ngFor", "ngForOf"], ["style", "margin-top: 60px", 4, "ngFor", "ngForOf"], [2, "margin-top", "60px"], [2, "font-size", "20px"], ["style", "height: 700px; width:500px", 3, "src", 4, "ngIf"], [1, "d-flex", "justify-content-end"], ["class", "btn btn-md btn-info mr-1", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-md btn-primary mr-1", 3, "routerLink", 4, "ngIf"], ["routerLink", "/project", 1, "btn", "btn-md", "btn-danger", "mr-1"], [2, "height", "700px", "width", "500px", 3, "src"], [1, "btn", "btn-md", "btn-info", "mr-1", 3, "routerLink"], [1, "btn", "btn-md", "btn-primary", "mr-1", 3, "routerLink"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailComponent_h1_0_Template, 2, 1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailComponent_div_1_Template, 37, 9, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["jw-modal[_ngcontent-%COMP%] {\r\n  \r\n  display: none;\r\n}\r\n\r\n.jw-modal[_ngcontent-%COMP%] {\r\n  \r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n\r\n  \r\n  z-index: 1000;\r\n\r\n  \r\n  overflow: auto;\r\n}\r\n\r\n.jw-modal-body[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  background: #fff;\r\n\r\n  \r\n  margin: 40px;\r\n}\r\n\r\n.jw-modal-background[_ngcontent-%COMP%] {\r\n  \r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n\r\n  \r\n  background-color: #000;\r\n  opacity: 0.75;\r\n\r\n  \r\n  z-index: 900;\r\n}\r\n\r\nbody.jw-modal-open[_ngcontent-%COMP%] {\r\n  \r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLXN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFpQztFQUNqQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87O0VBRVAscURBQXFEO0VBQ3JELGFBQWE7O0VBRWIsc0NBQXNDO0VBQ3RDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCOztFQUVoQixnREFBZ0Q7RUFDaEQsWUFBWTtBQUNkOztBQUdBO0VBQ0UsK0NBQStDO0VBQy9DLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPOztFQUVQLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsYUFBYTs7RUFFYiwrREFBK0Q7RUFDL0QsWUFBWTtBQUNkOztBQUdBO0VBQ0UsNkVBQTZFO0VBQzdFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJtb2RhbC1zdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJqdy1tb2RhbCB7XHJcbiAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5qdy1tb2RhbCB7XHJcbiAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG5cclxuICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cclxuICB6LWluZGV4OiAxMDAwO1xyXG5cclxuICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmp3LW1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgLyogbWFyZ2luIGV4cG9zZXMgcGFydCBvZiB0aGUgbW9kYWwgYmFja2dyb3VuZCAqL1xyXG4gIG1hcmdpbjogNDBweDtcclxufVxyXG5cclxuXHJcbi5qdy1tb2RhbC1iYWNrZ3JvdW5kIHtcclxuICAvKiBtb2RhbCBiYWNrZ3JvdW5kIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG5cclxuICAvKiBzZW1pLXRyYW5zcGFyZW50IGJsYWNrICAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgb3BhY2l0eTogMC43NTtcclxuXHJcbiAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xyXG4gIHotaW5kZXg6IDkwMDtcclxufVxyXG5cclxuXHJcbmJvZHkuanctbW9kYWwtb3BlbiB7XHJcbiAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'detail.component.html',
                styleUrls: ['modal-style.css'],
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["ProjectServices"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/alert.component */ "K9Mn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function () { return { exact: true }; };
function AppComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nego");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_nav_0_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return { "bg-light": a0 }; };
class AppComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.accountService.user.subscribe(x => this.user = x);
    }
    logout() {
        this.accountService.logout();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app"]], decls: 39, vars: 4, consts: [["class", "navbar navbar-expand navbar-dark bg-dark", 4, "ngIf"], [1, "app-container", 3, "ngClass"], [1, "page-footer", "font-small", "mdb-color", "pt-4"], [1, "container", "text-center", "text-md-left"], [1, "row", "text-center", "text-md-left", "mt-3", "pb-3"], [1, "col-md-3", "col-lg-3", "col-xl-3", "mx-auto", "mt-3"], [1, "text-uppercase", "mb-4", "font-weight-bold"], [1, "w-100", "clearfix", "d-md-none"], [1, "col-md-2", "col-lg-2", "col-xl-2", "mx-auto", "mt-3"], ["routerLink", "../project"], ["routerLink", "../service"], [1, "col-md-3", "col-lg-2", "col-xl-2", "mx-auto", "mt-3"], ["href", "#!"], ["href", "../schedule"], [1, "col-md-4", "col-lg-3", "col-xl-3", "mx-auto", "mt-3"], [1, "navbar", "navbar-expand", "navbar-dark", "bg-dark"], [1, "navbar-nav"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/project", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/service", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/schedule", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/requestprice", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "nav-item", "nav-link", "d-flex", "align-items-end", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_nav_0_Template, 16, 2, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "OSER - Online Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Oser merupakan aplikasi pencarian kerja dalam bentuk FREELANCE yang memungkinkan bagi para pengguna untuk mencari dan mendapatkan pekerjaan yang mereka mau dimanapun dan kapanpun. Oser berusaha memberikan kemudahan dalam pencarian kerja, proses transaksi antar user, request pekerjaan yang diinginkan, dan masih banyak lagi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Useful links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Indonesia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.user));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _components_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'app', templateUrl: 'app.component.html' }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "VU6T":
/*!*************************************!*\
  !*** ./src/app/_models/projects.ts ***!
  \*************************************/
/*! exports provided: Projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return Projects; });
class Projects {
}


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ProfileComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UserName Harus Diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_6_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.username.errors == null ? null : ctx_r0.f.username.errors.required);
} }
function ProfileComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UserName Harus Diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_12_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.username.errors == null ? null : ctx_r1.f.username.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ProfileComponent {
    constructor(formBuilder, accountService, alertService) {
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.alertService = alertService;
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
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
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["ng-component"]], decls: 13, vars: 9, consts: [[3, "formGroup"], [1, "form-row"], [1, "form-group", "col"], ["for", "username"], ["type", "text", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Judul Pekerjaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Judul Pekerjaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_div_12_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.submitted && (ctx.f.username.errors == null ? null : ctx.f.username.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.username.errors == null ? null : ctx.f.username.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && (ctx.f.username.errors == null ? null : ctx.f.username.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.username.errors == null ? null : ctx.f.username.errors.required));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'profile.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "X9ac":
/*!*********************************************!*\
  !*** ./src/app/profile/layout.component.ts ***!
  \*********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LayoutComponent {
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["ng-component"]], decls: 3, vars: 0, consts: [[1, "p-4"], [1, "container"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ templateUrl: 'layout.component.html' }]
    }], null, null); })();


/***/ }),

/***/ "XgRA":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "p3Fh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "nSnL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "jfvi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });




/*
export * from './fake-backend';*/


/***/ }),

/***/ "YGWh":
/*!**********************************************!*\
  !*** ./src/app/home/myservices.component.ts ***!
  \**********************************************/
/*! exports provided: MyservicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyservicesComponent", function() { return MyservicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jw_paginate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jw-paginate */ "TNpa");
/* harmony import */ var jw_paginate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jw_paginate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "J9tS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/truncate.pipe */ "hjSY");



// @ts-ignore






function MyservicesComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyservicesComponent_tr_20_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const service_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteServices(service_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Hapus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.OwnerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.ServicesName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", service_r3.Duration, " Hari");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rp.", service_r3.Price, ",-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 9, service_r3.Remarks, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../services/detail/", service_r3._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../service/services/edit/", service_r3._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", service_r3._id);
} }
function MyservicesComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { active: a0 }; };
function MyservicesComponent_ul_23_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyservicesComponent_ul_23_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const page_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.setPageMyServices(page_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r6.pager.currentPage === page_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r7);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function MyservicesComponent_ul_23_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyservicesComponent_ul_23_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.setPageMyServices(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyservicesComponent_ul_23_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.setPageMyServices(ctx_r12.pager.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MyservicesComponent_ul_23_li_7_Template, 3, 4, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyservicesComponent_ul_23_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.setPageMyServices(ctx_r13.pager.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyservicesComponent_ul_23_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.setPageMyServices(ctx_r14.pager.totalPages); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r2.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r2.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r2.pager.currentPage === ctx_r2.pager.totalPages));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r2.pager.currentPage === ctx_r2.pager.totalPages));
} }
class MyservicesComponent {
    constructor(servicesServices) {
        this.servicesServices = servicesServices;
        this.services = [];
        this.pager = {};
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.initialPage = 1;
        this.itemsPerPage = 5;
        this.maxSize = 5;
    }
    ngOnInit() {
        const ownerId = localStorage.getItem('userid').slice(1, -1);
        this.servicesServices.getMyServices(ownerId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(services => {
            // @ts-ignore
            this.services = services.message;
            if (this.services !== [] && this.services.length !== 0) {
                this.setPageMyServices(this.initialPage);
            }
        });
    }
    setPageMyServices(page) {
        console.log('a');
        // get new pager object for specified page
        this.pager = jw_paginate__WEBPACK_IMPORTED_MODULE_3___default()(this.services.length, page, this.itemsPerPage, this.maxSize);
        // get new page of items from items array
        this.pageOfItems = this.services.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // call change page function in parent component
        this.changePage.emit(this.pageOfItems);
    }
    ngOnChanges(changes) {
        // reset page if items array has changed
        if (changes.items.currentValue !== changes.items.previousValue) {
            this.setPageMyServices(this.initialPage);
        }
    }
    onChangePage(pageOfItems) {
        // update current page of items
        console.log(pageOfItems);
        console.log('a');
        this.pageOfItems = pageOfItems;
    }
    deleteServices(id) {
        const user = this.services.find(x => x._id === id);
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Apakah Anda Yakin?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Hapus',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Services Berhasil Di Hapus', 'success', this.servicesServices.deleteServices(id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                    .subscribe(() => {
                    this.services = this.services.filter(x => x._id !== id);
                }));
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancel', 'Hapus Project Dibatalkan', 'error');
            }
        });
    }
}
MyservicesComponent.ɵfac = function MyservicesComponent_Factory(t) { return new (t || MyservicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["JobServicesService"])); };
MyservicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyservicesComponent, selectors: [["app-myservices-component"]], outputs: { changePage: "changePage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 24, vars: 3, consts: [["routerLink", "../services/add", 1, "btn", "btn-sm", "btn-success", "mb-2"], [1, "table", "table-striped"], [2, "width", "15%"], [2, "width", "30%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["class", "pagination", 4, "ngIf"], [2, "white-space", "nowrap"], [1, "btn", "btn-sm", "btn-info", "mr-1", 3, "routerLink"], [1, "btn", "btn-sm", "btn-primary", "mr-1", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", "btn-delete-user", 3, "id", "click"], ["colspan", "4", 1, "text-center"], [1, "spinner-border", "spinner-border-lg", "align-center"], [1, "pagination"], [1, "page-item", "first-item", 3, "ngClass"], [1, "page-link", 3, "click"], [1, "page-item", "previous-item", 3, "ngClass"], ["class", "page-item number-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next-item", 3, "ngClass"], [1, "page-item", "last-item", 3, "ngClass"], [1, "page-item", "number-item", 3, "ngClass"]], template: function MyservicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tambah Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nama Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Judul Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Kategori");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Durasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Harga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Deskripsi Pekerjaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MyservicesComponent_tr_20_Template, 21, 12, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MyservicesComponent_tr_21_Template, 3, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MyservicesComponent_ul_23_Template, 14, 13, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageOfItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pager.pages && ctx.pager.pages.length);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_shared_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__["TruncatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyservicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-myservices-component',
                templateUrl: 'myservices.component.html',
            }]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_4__["JobServicesService"] }]; }, { changePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers */ "XgRA");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components */ "Ndrk");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home */ "wn6f");
/* harmony import */ var _app_projects_users_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/projects/users.module */ "mnMA");
/* harmony import */ var _app_services_services_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/services.module */ "334H");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _app_dashboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/dashboard */ "CAFG");
/* harmony import */ var _app_home_home_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/home/home.module */ "ct+p");
/* harmony import */ var _app_request_price_request_price_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/request-price/request-price.module */ "sBSw");
/* harmony import */ var _app_profile_profile_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/profile/profile.module */ "cRhG");
/* harmony import */ var ng2_modal_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-modal-module */ "hkko");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _app_projects_users_module__WEBPACK_IMPORTED_MODULE_9__["UsersModule"],
            _app_services_services_module__WEBPACK_IMPORTED_MODULE_10__["ServicesModule"],
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
            _app_home_home_module__WEBPACK_IMPORTED_MODULE_13__["HomeModule"],
            _app_request_price_request_price_module__WEBPACK_IMPORTED_MODULE_14__["RequestPriceModule"],
            _app_profile_profile_module__WEBPACK_IMPORTED_MODULE_15__["ProfileModule"],
            ng2_modal_module__WEBPACK_IMPORTED_MODULE_16__["ModalModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"],
        _home__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _app_dashboard__WEBPACK_IMPORTED_MODULE_12__["Dashboard"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _app_projects_users_module__WEBPACK_IMPORTED_MODULE_9__["UsersModule"],
        _app_services_services_module__WEBPACK_IMPORTED_MODULE_10__["ServicesModule"],
        ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
        _app_home_home_module__WEBPACK_IMPORTED_MODULE_13__["HomeModule"],
        _app_request_price_request_price_module__WEBPACK_IMPORTED_MODULE_14__["RequestPriceModule"],
        _app_profile_profile_module__WEBPACK_IMPORTED_MODULE_15__["ProfileModule"],
        ng2_modal_module__WEBPACK_IMPORTED_MODULE_16__["ModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _app_projects_users_module__WEBPACK_IMPORTED_MODULE_9__["UsersModule"],
                    _app_services_services_module__WEBPACK_IMPORTED_MODULE_10__["ServicesModule"],
                    ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
                    _app_home_home_module__WEBPACK_IMPORTED_MODULE_13__["HomeModule"],
                    _app_request_price_request_price_module__WEBPACK_IMPORTED_MODULE_14__["RequestPriceModule"],
                    _app_profile_profile_module__WEBPACK_IMPORTED_MODULE_15__["ProfileModule"],
                    ng2_modal_module__WEBPACK_IMPORTED_MODULE_16__["ModalModule"],
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"],
                    _home__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _app_dashboard__WEBPACK_IMPORTED_MODULE_12__["Dashboard"],
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();
;


/***/ }),

/***/ "ZfWw":
/*!*******************************************************!*\
  !*** ./src/app/services/services.detail.component.ts ***!
  \*******************************************************/
/*! exports provided: ServicesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesDetailComponent", function() { return ServicesDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "J9tS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ServicesDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r2.ServicesName, " ");
} }
function ServicesDetailComponent_div_1_img_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ServicesDetailComponent_div_1_a_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ambil Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../services/take-services/", service_r3._id, "");
} }
function ServicesDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Services ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nama Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Kategori");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Harga");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Durasi Pengerjaan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Deskripsi Pekerjaan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ServicesDetailComponent_div_1_img_31_Template, 1, 1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ServicesDetailComponent_div_1_a_33_Template, 2, 1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.OwnerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.Price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.Duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.Remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.imageSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userId !== service_r3.OwnerID);
} }
class ServicesDetailComponent {
    constructor(servicesServices, alertService, router, route) {
        this.servicesServices = servicesServices;
        this.alertService = alertService;
        this.router = router;
        this.route = route;
        this.services = null;
    }
    ngOnInit() {
        const url = window.location.pathname;
        const serviceId = url.substring(url.lastIndexOf('/') + 1);
        this.servicesServices.detailServices(serviceId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(services => {
            this.services = services.message;
            const imageId = this.services[0].Image.split('/')[1];
            this.imageSrc = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/files/ViewLicense/${imageId}`;
            console.log(serviceId);
        });
    }
}
ServicesDetailComponent.ɵfac = function ServicesDetailComponent_Factory(t) { return new (t || ServicesDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["JobServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ServicesDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesDetailComponent, selectors: [["ng-component"]], decls: 2, vars: 2, consts: [[4, "ngFor", "ngForOf"], ["style", "margin-top: 60px", 4, "ngFor", "ngForOf"], [2, "margin-top", "60px"], [2, "font-size", "20px"], [2, "font-size", "15px"], ["style", "height: 700px; width:700px", 3, "src", 4, "ngIf"], [1, "d-flex", "justify-content-end", 2, "margin-top", "20px"], ["class", "btn btn-md btn-primary mr-1", 3, "routerLink", 4, "ngIf"], ["routerLink", "/service", 1, "btn", "btn-md", "btn-danger", "mr-1"], [2, "height", "700px", "width", "700px", 3, "src"], [1, "btn", "btn-md", "btn-primary", "mr-1", 3, "routerLink"]], template: function ServicesDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ServicesDetailComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServicesDetailComponent_div_1_Template, 36, 8, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'services.detail.component.html'
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["JobServicesService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "a56z":
/*!*****************************************************!*\
  !*** ./src/app/services/services-list.component.ts ***!
  \*****************************************************/
/*! exports provided: ServicesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesListComponent", function() { return ServicesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jw_paginate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jw-paginate */ "TNpa");
/* harmony import */ var jw_paginate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jw_paginate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_job_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/job-services.service */ "hVEJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/truncate.pipe */ "hjSY");



// @ts-ignore






function ServicesListComponent_tr_20_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "services/edit/", service_r3._id, "");
} }
function ServicesListComponent_tr_20_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesListComponent_tr_20_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const service_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deleteServices(service_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", service_r3._id);
} }
function ServicesListComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ServicesListComponent_tr_20_a_17_Template, 2, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ServicesListComponent_tr_20_button_18_Template, 2, 1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.OwnerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.ServicesName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", service_r3.Duration, " Hari");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rp.", service_r3.Price, ",-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 9, service_r3.Remarks, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "services/detail/", service_r3._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userId === service_r3.OwnerID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userId === service_r3.OwnerID);
} }
function ServicesListComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { active: a0 }; };
function ServicesListComponent_ul_23_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesListComponent_ul_23_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const page_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.setPageServices(page_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r11.pager.currentPage === page_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r12);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function ServicesListComponent_ul_23_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesListComponent_ul_23_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.setPageServices(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesListComponent_ul_23_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.setPageServices(ctx_r17.pager.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ServicesListComponent_ul_23_li_7_Template, 3, 4, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesListComponent_ul_23_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.setPageServices(ctx_r18.pager.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesListComponent_ul_23_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.setPageServices(ctx_r19.pager.totalPages); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r2.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r2.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r2.pager.currentPage === ctx_r2.pager.totalPages));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r2.pager.currentPage === ctx_r2.pager.totalPages));
} }
class ServicesListComponent {
    constructor(servicesServices) {
        this.servicesServices = servicesServices;
        this.services = [];
        this.pager = {};
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.initialPage = 1;
        this.itemsPerPage = 10;
        this.maxSize = 10;
    }
    ngOnInit() {
        this.userId = localStorage.getItem('userid').slice(1, -1);
        this.servicesServices.getServices()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(jobServices => {
            // @ts-ignore
            this.services = jobServices.message;
            if (this.services !== [] && this.services.length !== 0) {
                this.setPageServices(this.initialPage);
            }
        });
    }
    setPageServices(page) {
        console.log('a');
        // get new pager object for specified page
        this.pager = jw_paginate__WEBPACK_IMPORTED_MODULE_3___default()(this.services.length, page, this.itemsPerPage, this.maxSize);
        // get new page of items from items array
        this.pageOfItems = this.services.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // call change page function in parent component
        this.changePage.emit(this.pageOfItems);
    }
    ngOnChanges(changes) {
        // reset page if items array has changed
        if (changes.items.currentValue !== changes.items.previousValue) {
            this.setPageServices(this.initialPage);
        }
    }
    onChangePage(pageOfItems) {
        // update current page of items
        console.log(pageOfItems);
        console.log('a');
        this.pageOfItems = pageOfItems;
    }
    deleteServices(id) {
        const user = this.services.find(x => x._id === id);
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Apakah Anda Yakin?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Hapus',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Services Berhasil Di Hapus', 'success', this.servicesServices.deleteServices(id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                    .subscribe(() => {
                    this.services = this.services.filter(x => x._id !== id);
                    location.reload();
                }));
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancel', 'Hapus Services Dibatalkan', 'error');
            }
        });
    }
}
ServicesListComponent.ɵfac = function ServicesListComponent_Factory(t) { return new (t || ServicesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_job_services_service__WEBPACK_IMPORTED_MODULE_4__["JobServicesService"])); };
ServicesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesListComponent, selectors: [["app-services-list-component"]], outputs: { changePage: "changePage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 24, vars: 3, consts: [["routerLink", "services/add", 1, "btn", "btn-sm", "btn-success", "mb-2"], [1, "table", "table-striped"], [2, "width", "15%"], [2, "width", "30%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["class", "pagination", 4, "ngIf"], [2, "white-space", "nowrap"], [1, "btn", "btn-sm", "btn-info", "mr-1", 3, "routerLink"], ["class", "btn btn-sm btn-primary mr-1", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-sm btn-danger btn-delete-user", 3, "id", "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-primary", "mr-1", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", "btn-delete-user", 3, "id", "click"], ["colspan", "4", 1, "text-center"], [1, "spinner-border", "spinner-border-lg", "align-center"], [1, "pagination"], [1, "page-item", "first-item", 3, "ngClass"], [1, "page-link", 3, "click"], [1, "page-item", "previous-item", 3, "ngClass"], ["class", "page-item number-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next-item", 3, "ngClass"], [1, "page-item", "last-item", 3, "ngClass"], [1, "page-item", "number-item", 3, "ngClass"]], template: function ServicesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tambah Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nama Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Judul Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Kategori");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Durasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Harga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Deskripsi Pekerjaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ServicesListComponent_tr_20_Template, 19, 12, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ServicesListComponent_tr_21_Template, 3, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ServicesListComponent_ul_23_Template, 14, 13, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageOfItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pager.pages && ctx.pager.pages.length);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_shared_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__["TruncatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services-list-component',
                templateUrl: 'services-list.component.html'
            }]
    }], function () { return [{ type: _services_job_services_service__WEBPACK_IMPORTED_MODULE_4__["JobServicesService"] }]; }, { changePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-angular-pagination */ "P9+s");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.component */ "W6KJ");
/* harmony import */ var _app_profile_profile_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/profile/profile-routing.module */ "v+7O");
/* harmony import */ var _app_profile_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/profile/layout.component */ "X9ac");










class ProfileModule {
}
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_profile_profile_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProfileRoutingModule"],
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_5__["JwPaginationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_app_profile_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
        _profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _app_profile_profile_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProfileRoutingModule"],
        ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        jw_angular_pagination__WEBPACK_IMPORTED_MODULE_5__["JwPaginationModule"]], exports: [_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _app_profile_profile_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProfileRoutingModule"],
                    ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    jw_angular_pagination__WEBPACK_IMPORTED_MODULE_5__["JwPaginationModule"],
                ],
                exports: [
                    _profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                ],
                declarations: [
                    _app_profile_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                    _profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _projects_users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects/users-routing.module */ "fgPp");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _myproject_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myproject.component */ "DUJm");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jw-angular-pagination */ "P9+s");
/* harmony import */ var _myservices_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./myservices.component */ "YGWh");










class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _projects_users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_7__["JwPaginationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_myproject_component__WEBPACK_IMPORTED_MODULE_6__["MyprojectComponent"],
        _myservices_component__WEBPACK_IMPORTED_MODULE_8__["MyservicesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _projects_users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
        ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        jw_angular_pagination__WEBPACK_IMPORTED_MODULE_7__["JwPaginationModule"]], exports: [_myproject_component__WEBPACK_IMPORTED_MODULE_6__["MyprojectComponent"],
        _myservices_component__WEBPACK_IMPORTED_MODULE_8__["MyservicesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _projects_users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
                    ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    jw_angular_pagination__WEBPACK_IMPORTED_MODULE_7__["JwPaginationModule"],
                ],
                exports: [
                    _myproject_component__WEBPACK_IMPORTED_MODULE_6__["MyprojectComponent"],
                    _myservices_component__WEBPACK_IMPORTED_MODULE_8__["MyservicesComponent"]
                ],
                declarations: [
                    _myproject_component__WEBPACK_IMPORTED_MODULE_6__["MyprojectComponent"],
                    _myservices_component__WEBPACK_IMPORTED_MODULE_8__["MyservicesComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "f5O9":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_models */ "nPby");





class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.defaultId = 'default-alert';
    }
    // enable subscribing to alerts observable
    onAlert(id = this.defaultId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(x => x && x.id === id));
    }
    // convenience methods
    success(message, options) {
        this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success, message })));
    }
    error(message, options) {
        this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error, message })));
    }
    info(message, options) {
        this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info, message })));
    }
    warn(message, options) {
        this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning, message })));
    }
    // main alert method    
    alert(alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }
    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"]({ id }));
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "fD4K":
/*!*****************************************************!*\
  !*** ./src/app/services/services-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ServicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesRoutingModule", function() { return ServicesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services-layout.component */ "CCOo");
/* harmony import */ var _services_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services-list.component */ "a56z");
/* harmony import */ var _services_add_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services-add-edit.component */ "9z4+");
/* harmony import */ var _services_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services.detail.component */ "ZfWw");
/* harmony import */ var _app_services_take_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/take-services.component */ "hu9Z");









const routes = [
    {
        path: '', component: _services_layout_component__WEBPACK_IMPORTED_MODULE_2__["ServicesLayoutComponent"],
        children: [
            { path: '', component: _services_list_component__WEBPACK_IMPORTED_MODULE_3__["ServicesListComponent"] },
            { path: 'services/add', component: _services_add_edit_component__WEBPACK_IMPORTED_MODULE_4__["ServicesAddEditComponent"] },
            { path: 'services/edit/:_id', component: _services_add_edit_component__WEBPACK_IMPORTED_MODULE_4__["ServicesAddEditComponent"] },
            { path: 'services/detail/:_id', component: _services_detail_component__WEBPACK_IMPORTED_MODULE_5__["ServicesDetailComponent"] },
            { path: 'service/services/detail/services/take-services/:_id', component: _app_services_take_services_component__WEBPACK_IMPORTED_MODULE_6__["TakeServicesComponent"] }
        ]
    }
];
class ServicesRoutingModule {
}
ServicesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicesRoutingModule });
ServicesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicesRoutingModule_Factory(t) { return new (t || ServicesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fgPp":
/*!**************************************************!*\
  !*** ./src/app/projects/users-routing.module.ts ***!
  \**************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "smLG");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.component */ "E9Ql");
/* harmony import */ var _add_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit.component */ "9J0k");
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail.component */ "RFjy");
/* harmony import */ var _app_projects_project_nego_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/projects/project-nego.component */ "L9rA");
/* harmony import */ var _app_projects_take_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/projects/take-projects.component */ "L046");










const routes = [
    {
        path: '', component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', component: _list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
            { path: 'project/add', component: _add_edit_component__WEBPACK_IMPORTED_MODULE_4__["AddEditComponent"] },
            { path: 'project/edit/:id', component: _add_edit_component__WEBPACK_IMPORTED_MODULE_4__["AddEditComponent"] },
            { path: 'project/detail/:id', component: _detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
            { path: 'project/:id/nego', component: _app_projects_project_nego_component__WEBPACK_IMPORTED_MODULE_6__["ProjectNegoComponent"] },
            { path: 'project/take-project/:id', component: _app_projects_take_projects_component__WEBPACK_IMPORTED_MODULE_7__["TakeProjectsComponent"] }
        ]
    }
];
class UsersRoutingModule {
}
UsersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersRoutingModule });
UsersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersRoutingModule_Factory(t) { return new (t || UsersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hVEJ":
/*!***************************************************!*\
  !*** ./src/app/_services/job-services.service.ts ***!
  \***************************************************/
/*! exports provided: JobServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobServicesService", function() { return JobServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class JobServicesService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    get servicesValue() {
        var _a;
        return (_a = this.servicesSubject) === null || _a === void 0 ? void 0 : _a.value;
    }
    getServices() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/services/ViewServicesListAll`);
    }
    getMyServices(ownerId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/Services/ViewServicesListbyOwner/${ownerId}`);
    }
    getById(id) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/services/${id}`, { headers: header });
    }
    takeServices(assignmentid, category) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/schedule/InsertSchedule`, { assignmentid, category }, { headers: header });
    }
    registerServices(services, file) {
        const formData = new FormData();
        formData.append('category', services.category);
        formData.append('servicesname', services.servicesname);
        formData.append('price', services.price);
        formData.append('duration', services.duration);
        formData.append('remarks', services.remarks);
        formData.append('uploadedFiles', file, file.name);
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/services/InsertServices`, formData, { headers: header });
    }
    detailServices(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/Services/ViewServicesDetail/${id}`);
    }
    updateServices(id, services, file) {
        const formData = new FormData();
        formData.append('category', services.category);
        formData.append('servicesname', services.servicesname);
        formData.append('price', services.price);
        formData.append('duration', services.duration);
        formData.append('remarks', services.remarks);
        formData.append('uploadedFiles', file, file.name);
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/services/UpdateServices/${id}`, formData, { headers: header });
    }
    deleteServices(id) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/services/DeleteServices/${id}`, { headers: header });
        // .pipe(map(x => {
        //   // auto logout if the logged in user deleted their own record
        //   if (id === this.servicesValue.id) {
        //     /*this.logout();*/
        //   }
        //   return x;
        // }));
    }
}
JobServicesService.ɵfac = function JobServicesService_Factory(t) { return new (t || JobServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
JobServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JobServicesService, factory: JobServicesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "hjSY":
/*!*****************************************!*\
  !*** ./src/app/shared/truncate.pipe.ts ***!
  \*****************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TruncatePipe {
    transform(value, limit, trail = '...') {
        if (!value) {
            return '';
        }
        return value.length > limit ? value.substring(0, limit) + trail : value;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncate',
            }]
    }], null, null); })();


/***/ }),

/***/ "hu9Z":
/*!*****************************************************!*\
  !*** ./src/app/services/take-services.component.ts ***!
  \*****************************************************/
/*! exports provided: TakeServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeServicesComponent", function() { return TakeServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_models_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_models/services */ "GHDz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function TakeServicesComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Masukan ID Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TakeServicesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TakeServicesComponent_div_7_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.assignmentid.errors.required);
} }
function TakeServicesComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class TakeServicesComponent {
    constructor(formBuilder, route, router, servicesServices, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.servicesServices = servicesServices;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.services = _app_models_services__WEBPACK_IMPORTED_MODULE_3__["Services"];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            assignmentid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.servicesServices.takeServices(this.f.assignmentid.value, this.f.category.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                const returnUrl = this.route.snapshot.queryParams.returnUrl || '/schedule';
                this.router.navigateByUrl(returnUrl);
            },
            error: error => {
                this.alertService.error(error);
                this.loading = false;
            }
        });
    }
}
TakeServicesComponent.ɵfac = function TakeServicesComponent_Factory(t) { return new (t || TakeServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_5__["JobServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"])); };
TakeServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TakeServicesComponent, selectors: [["ng-component"]], decls: 18, vars: 7, consts: [[3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "assignmentid"], ["type", "text", "formControlName", "assignmentid", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "category"], ["type", "text", "formControlName", "category", "value", "services", 1, "form-control"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "/service", 1, "btn", "btn-link"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function TakeServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ambil Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TakeServicesComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TakeServicesComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Kategori");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TakeServicesComponent_span_14_Template, 1, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.assignmentid.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.assignmentid.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TakeServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'take-services.component.html',
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_5__["JobServicesService"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "jZhJ":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "jfvi":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "J9tS");




class JwtInterceptor {
    constructor(accountService) {
        this.accountService = accountService;
    }
    intercept(request, next) {
        // add auth header with jwt if user is logged in and request is to the api url
        const user = this.accountService.accountValue;
        const isLoggedIn = user;
        const isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "lWQx":
/*!***********************************************!*\
  !*** ./src/app/_services/project.services.ts ***!
  \***********************************************/
/*! exports provided: ProjectServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectServices", function() { return ProjectServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class ProjectServices {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    get projectValue() {
        return this.projectSubject.value;
    }
    getProjects() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/project/ViewProjectAll`);
    }
    getMyProjects(ownerId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/project/ViewProjectByOwner/${ownerId}`);
    }
    getById(id) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/project/${id}`, { headers: header });
    }
    registerProject(project, file) {
        // tslint:disable-next-line:new-parens
        const formData = new FormData();
        formData.append('category', project.category);
        formData.append('name', project.name);
        formData.append('price', project.price);
        formData.append('deadline', project.deadline);
        formData.append('duration', project.duration);
        formData.append('remarks', project.remarks);
        formData.append('uploadedFiles', file, file.name);
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/project/InsertProject`, formData, { headers: header });
    }
    detailProject(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/project/ViewProjectDetail/${id}`);
    }
    takeProjects(assignmentid, category) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/schedule/InsertSchedule`, { assignmentid, category }, { headers: header });
    }
    requestPrice(assignmentid, category) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/requestprice/InsertRequestPrice`, { assignmentid, category }, { headers: header });
    }
    updateProject(project, id, file) {
        // tslint:disable-next-line:new-parens
        const form = new FormData;
        const formData = new FormData();
        formData.append('category', project.category);
        formData.append('name', project.name);
        formData.append('price', project.price);
        formData.append('deadline', project.deadline);
        formData.append('duration', project.duration);
        formData.append('remarks', project.remarks);
        formData.append('uploadedFiles', file, file.name);
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/project/UpdateProject/${id}`, formData, { headers: header });
    }
    deleteProjects(id) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header = header.set('TOKEN', localStorage.getItem('token').slice(1, -1));
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/project/DeleteProject/${id}`, { headers: header });
    }
}
ProjectServices.ɵfac = function ProjectServices_Factory(t) { return new (t || ProjectServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProjectServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectServices, factory: ProjectServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "mnMA":
/*!******************************************!*\
  !*** ./src/app/projects/users.module.ts ***!
  \******************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "fgPp");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ "smLG");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.component */ "E9Ql");
/* harmony import */ var _add_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-edit.component */ "9J0k");
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail.component */ "RFjy");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/shared.module */ "PCNd");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jw-angular-pagination */ "P9+s");
/* harmony import */ var _app_projects_project_nego_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/projects/project-nego.component */ "L9rA");
/* harmony import */ var _app_projects_take_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/projects/take-projects.component */ "L046");














class UsersModule {
}
UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_10__["JwPaginationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        _list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
        _add_edit_component__WEBPACK_IMPORTED_MODULE_6__["AddEditComponent"],
        _detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"],
        _app_projects_project_nego_component__WEBPACK_IMPORTED_MODULE_11__["ProjectNegoComponent"],
        _app_projects_take_projects_component__WEBPACK_IMPORTED_MODULE_12__["TakeProjectsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
        ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        jw_angular_pagination__WEBPACK_IMPORTED_MODULE_10__["JwPaginationModule"]], exports: [_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
                    ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
                    _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    jw_angular_pagination__WEBPACK_IMPORTED_MODULE_10__["JwPaginationModule"],
                ],
                exports: [
                    _list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]
                ],
                declarations: [
                    _layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                    _list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                    _add_edit_component__WEBPACK_IMPORTED_MODULE_6__["AddEditComponent"],
                    _detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"],
                    _app_projects_project_nego_component__WEBPACK_IMPORTED_MODULE_11__["ProjectNegoComponent"],
                    _app_projects_take_projects_component__WEBPACK_IMPORTED_MODULE_12__["TakeProjectsComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "nPby":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: Alert, AlertType, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "Dgtq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["AlertType"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "jZhJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["User"]; });





/***/ }),

/***/ "nSnL":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "J9tS");





class ErrorInterceptor {
    constructor(accountService) {
        this.accountService = accountService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            var _a;
            if ([401, 403].includes(err.status) && this.accountService.accountValue) {
                // auto logout if 401 or 403 response returned from api
                this.accountService.logout();
            }
            const error = ((_a = err.error) === null || _a === void 0 ? void 0 : _a.message) || err.statusText;
            console.error(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "p3Fh":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "J9tS");




class AuthGuard {
    constructor(router, accountService) {
        this.router = router;
        this.accountService = accountService;
    }
    canActivate(route, state) {
        const user = this.accountService.accountValue;
        if (user) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "sBSw":
/*!*******************************************************!*\
  !*** ./src/app/request-price/request-price.module.ts ***!
  \*******************************************************/
/*! exports provided: RequestPriceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPriceModule", function() { return RequestPriceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _request_price_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-price-routing.module */ "FvI+");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-angular-pagination */ "P9+s");
/* harmony import */ var _request_price_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request-price.component */ "sKmM");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout.component */ "NU1j");










class RequestPriceModule {
}
RequestPriceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RequestPriceModule });
RequestPriceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RequestPriceModule_Factory(t) { return new (t || RequestPriceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _request_price_routing_module__WEBPACK_IMPORTED_MODULE_3__["RequestPriceRoutingModule"],
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_6__["JwPaginationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RequestPriceModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
        _request_price_component__WEBPACK_IMPORTED_MODULE_7__["RequestPriceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _request_price_routing_module__WEBPACK_IMPORTED_MODULE_3__["RequestPriceRoutingModule"],
        ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        jw_angular_pagination__WEBPACK_IMPORTED_MODULE_6__["JwPaginationModule"]], exports: [_request_price_component__WEBPACK_IMPORTED_MODULE_7__["RequestPriceComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestPriceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _request_price_routing_module__WEBPACK_IMPORTED_MODULE_3__["RequestPriceRoutingModule"],
                    ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    jw_angular_pagination__WEBPACK_IMPORTED_MODULE_6__["JwPaginationModule"],
                ],
                exports: [
                    _request_price_component__WEBPACK_IMPORTED_MODULE_7__["RequestPriceComponent"],
                ],
                declarations: [
                    _layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                    _request_price_component__WEBPACK_IMPORTED_MODULE_7__["RequestPriceComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "sKmM":
/*!**********************************************************!*\
  !*** ./src/app/request-price/request-price.component.ts ***!
  \**********************************************************/
/*! exports provided: RequestPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPriceComponent", function() { return RequestPriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var jw_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jw-paginate */ "TNpa");
/* harmony import */ var jw_paginate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jw_paginate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");


// @ts-ignore





function RequestPriceComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const requestPrice_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](requestPrice_r3.OwnerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](requestPrice_r3.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](requestPrice_r3.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](requestPrice_r3.AssignmentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rp.", requestPrice_r3.Price, ",-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", requestPrice_r3.Duration, " Hari");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../project/detail/", requestPrice_r3._id, "");
} }
function RequestPriceComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { active: a0 }; };
function RequestPriceComponent_ul_21_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestPriceComponent_ul_21_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const page_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.setPageRequestPrice(page_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r4.pager.currentPage === page_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r5);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function RequestPriceComponent_ul_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestPriceComponent_ul_21_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setPageRequestPrice(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestPriceComponent_ul_21_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.setPageRequestPrice(ctx_r10.pager.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RequestPriceComponent_ul_21_li_7_Template, 3, 4, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestPriceComponent_ul_21_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.setPageRequestPrice(ctx_r11.pager.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestPriceComponent_ul_21_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.setPageRequestPrice(ctx_r12.pager.totalPages); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r2.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r2.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r2.pager.currentPage === ctx_r2.pager.totalPages));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r2.pager.currentPage === ctx_r2.pager.totalPages));
} }
class RequestPriceComponent {
    constructor(requestPriceServices) {
        this.requestPriceServices = requestPriceServices;
        this.requestPrice = [];
        this.pager = {};
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.initialPage = 1;
        this.itemsPerPage = 5;
        this.maxSize = 5;
    }
    ngOnInit() {
        const userId = localStorage.getItem('userid').slice(1, -1);
        this.requestPriceServices.getRequestPrice(userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(requestPrice => {
            // @ts-ignore
            this.requestPrice = requestPrice.message;
            if (this.requestPrice !== [] && this.requestPrice.length !== 0) {
                this.setPageRequestPrice(this.initialPage);
            }
        });
    }
    // tslint:disable-next-line:typedef
    setPageRequestPrice(page) {
        console.log('a');
        // get new pager object for specified page
        this.pager = jw_paginate__WEBPACK_IMPORTED_MODULE_2___default()(this.requestPrice.length, page, this.itemsPerPage, this.maxSize);
        // get new page of items from items array
        this.pageOfItems = this.requestPrice.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // call change page function in parent component
        this.changePage.emit(this.pageOfItems);
    }
    ngOnChanges(changes) {
        // reset page if items array has changed
        if (changes.items.currentValue !== changes.items.previousValue) {
            this.setPageRequestPrice(this.initialPage);
        }
    }
    onChangePage(pageOfItems) {
        // update current page of items
        console.log(pageOfItems);
        console.log('a');
        this.pageOfItems = pageOfItems;
    }
}
RequestPriceComponent.ɵfac = function RequestPriceComponent_Factory(t) { return new (t || RequestPriceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["RequestPriceServices"])); };
RequestPriceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestPriceComponent, selectors: [["ng-component"]], outputs: { changePage: "changePage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 22, vars: 3, consts: [[1, "table", "table-striped"], [2, "width", "15%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["class", "pagination", 4, "ngIf"], [2, "white-space", "nowrap"], [1, "btn", "btn-sm", "btn-info", "mr-1", 3, "routerLink"], ["colspan", "4", 1, "text-center"], [1, "spinner-border", "spinner-border-lg", "align-center"], [1, "pagination"], [1, "page-item", "first-item", 3, "ngClass"], [1, "page-link", 3, "click"], [1, "page-item", "previous-item", 3, "ngClass"], ["class", "page-item number-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next-item", 3, "ngClass"], [1, "page-item", "last-item", 3, "ngClass"], [1, "page-item", "number-item", 3, "ngClass"]], template: function RequestPriceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nego Harga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nama Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Kategori");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nama Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Harga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Durasi Pengerjaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RequestPriceComponent_tr_18_Template, 16, 7, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RequestPriceComponent_tr_19_Template, 3, 0, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RequestPriceComponent_ul_21_Template, 14, 13, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageOfItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.requestPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pager.pages && ctx.pager.pages.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestPriceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'request-price.component.html'
            }]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_3__["RequestPriceServices"] }]; }, { changePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "sYgz":
/*!*****************************************************!*\
  !*** ./src/app/_services/request-price.services.ts ***!
  \*****************************************************/
/*! exports provided: RequestPriceServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPriceServices", function() { return RequestPriceServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class RequestPriceServices {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    getRequestPrice(userId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/requestprice/ViewRequestPriceByUserID/${userId}`);
    }
}
RequestPriceServices.ɵfac = function RequestPriceServices_Factory(t) { return new (t || RequestPriceServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
RequestPriceServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestPriceServices, factory: RequestPriceServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestPriceServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "smLG":
/*!**********************************************!*\
  !*** ./src/app/projects/layout.component.ts ***!
  \**********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LayoutComponent {
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["ng-component"]], decls: 3, vars: 0, consts: [[1, "p-4"], [1, "container"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ templateUrl: 'layout.component.html' }]
    }], null, null); })();


/***/ }),

/***/ "v+7O":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "X9ac");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "W6KJ");






const routes = [
    {
        path: '', component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
        ]
    }
];
class ProfileRoutingModule {
}
ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "wn6f");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers */ "XgRA");
/* harmony import */ var _app_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/dashboard */ "CAFG");
/* harmony import */ var _app_profile_profile_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/profile/profile.module */ "cRhG");








const accountModule = () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ./account/account.module */ "jcJX")).then(x => x.AccountModule);
const projectModule = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./projects/users.module */ "mnMA")).then(x => x.UsersModule);
const servicesModule = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./services/services.module */ "334H")).then(x => x.ServicesModule);
const scheduleModule = () => __webpack_require__.e(/*! import() | schedule-schedule-module */ "schedule-schedule-module").then(__webpack_require__.bind(null, /*! ./schedule/schedule.module */ "L0xO")).then(x => x.ScheduleModule);
const requestpriceModule = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./request-price/request-price.module */ "sBSw")).then(x => x.RequestPriceModule);
const profileModule = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "cRhG")).then(x => _app_profile_profile_module__WEBPACK_IMPORTED_MODULE_5__["ProfileModule"]);
const routes = [
    { path: '', component: _app_dashboard__WEBPACK_IMPORTED_MODULE_4__["Dashboard"] },
    { path: 'home', component: _home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'project', loadChildren: projectModule, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'service', loadChildren: servicesModule, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'schedule', loadChildren: scheduleModule, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'requestprice', loadChildren: requestpriceModule, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'profile', loadChildren: profileModule, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'account', loadChildren: accountModule },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wn6f":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map