webpackJsonp([4],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DataProvider_User__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var RegisterPage = /** @class */ (function () {
    function RegisterPage(afAuth, navCtrl, navParams, alertCtrl, angularfire) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.angularfire = angularfire;
        this.getItemsUsers = [];
        this.newUser = new __WEBPACK_IMPORTED_MODULE_2__DataProvider_User__["a" /* User */]();
        this.dateofbirth = new Date();
        this.items = angularfire.list('/User/');
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function (email, password, fName, lName, weight, height, waistMeasurement, dateofbirth, gender, fitplan) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var check, result, result_1, error_1, alert_1, alert_2, alert_3, alert_4, alert, i, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fitplan = "null";
                        check = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(email, password)];
                    case 2:
                        result_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1.message);
                        if (error_1 != null) {
                            if (error_1.message == "The email address is already in use by another account.") {
                                alert_1 = this.alertCtrl.create({
                                    title: 'Email Already Use',
                                    subTitle: 'Please Change Email',
                                    buttons: ['OK']
                                });
                                console.log(alert_1);
                                alert_1.present();
                                check = false;
                            }
                            if (error_1.message == "The email address is badly formatted.") {
                                alert_2 = this.alertCtrl.create({
                                    title: ' Caution!',
                                    subTitle: 'Invalid Email',
                                    buttons: ['OK']
                                });
                                alert_2.present();
                                check = false;
                            }
                            if (error_1.message == "Password should be at least 6 characters") {
                                alert_3 = this.alertCtrl.create({
                                    title: ' Weak Password!',
                                    subTitle: 'Password should be at least 6',
                                    buttons: ['OK']
                                });
                                alert_3.present();
                                check = false;
                            }
                        }
                        else {
                            alert_4 = this.alertCtrl.create({
                                title: ' Unknown Error ',
                                subTitle: ' Failed to create User',
                                buttons: ['OK']
                            });
                            alert_4.present();
                            check = false;
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        if (check) {
                            this.newUser.email = email;
                            this.newUser.password = password;
                            this.newUser.fName = fName;
                            this.newUser.lName = lName;
                            this.newUser.height = height;
                            this.newUser.weight = weight;
                            this.newUser.waistMeasurement = waistMeasurement;
                            this.newUser.dateofbirth = dateofbirth;
                            this.newUser.gender = gender;
                            this.newUser.fitplan = fitplan;
                            this.newUser.uid = this.afAuth.auth.currentUser.uid;
                            this.items.push(this.newUser);
                            alert = this.alertCtrl.create({
                                title: ' Successfully ',
                                subTitle: ' User Create ',
                                buttons: [{
                                        text: 'OK',
                                        handler: function (data) {
                                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                                        }
                                    }]
                            });
                            alert.present();
                            for (i = 0; i < this.getItemsUsers.length; i++) {
                                user = new __WEBPACK_IMPORTED_MODULE_2__DataProvider_User__["a" /* User */]();
                                user = this.getItemsUser[i];
                                user.UserKey = this.getItemsUser[i].$key;
                                this.itemsUsers.update(user.UserKey, user);
                            }
                            console.log(this.newUser.UserKey);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/jirayupeach/Desktop/git/Senior-Project/src/pages/register/register.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body">\n  <h1>Sign Up</h1>\n  <ion-item class="emailInput">\n    <ion-icon item-end name="md-person"></ion-icon>\n    <ion-input type="email" [(ngModel)]="email" placeholder="Email" name="emailInput"></ion-input>\n  </ion-item>\n  <ion-item class="color">\n    <ion-icon item-end name="md-lock"></ion-icon>\n    <ion-input type="password" [(ngModel)]="password" placeholder="Password" name="passwordInput"></ion-input>\n  </ion-item>\n  <ion-item class="fNameInput">\n    <ion-icon item-start name="md-lock"></ion-icon>\n    <ion-input [(ngModel)]="fName" type="text" placeholder="Firstname" required ></ion-input>\n  </ion-item>\n  <ion-item class="lNameInput">\n    <ion-icon item-start name="md-lock"></ion-icon>\n    <ion-input [(ngModel)]="lName" type="text" placeholder="Lastname" required ></ion-input>\n  </ion-item>\n  <ion-item class="weightInput">\n    <ion-icon item-start name="md-lock"></ion-icon>\n    <ion-input [(ngModel)]="weight" type="number" min="20" max="300" placeholder="Weight" required ></ion-input>\n  </ion-item>\n  <ion-item class="heightInput">\n    <ion-icon item-start name="md-lock"></ion-icon>\n    <ion-input [(ngModel)]="height" type="number" min="50" max="300" placeholder="Height" required ></ion-input>\n  </ion-item>\n  <ion-item class="waistInput">\n    <ion-icon item-start name="md-lock"></ion-icon>\n    <ion-input [(ngModel)]="waistMeasurement" type="number" min="10" max="50" placeholder="WaistMeasurement" required ></ion-input>\n  </ion-item>\n  <ion-item class="gender">\n    <ion-select [(ngModel)]="gender" required >\n        <ion-option value="male">male</ion-option>\n        <ion-option value="female">female</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item class="date">\n    <ion-label>Date of birth</ion-label>\n    <ion-datetime displayFormat="DD/MM/YYYY" max="2010-12-31" [(ngModel)]="dateofbirth"></ion-datetime>\n  </ion-item>\n  <button ion-button round small class="signUpButton" (click)="register(email,password,fName,lName,weight,height,waistMeasurement,dateofbirth,gender)">Sign Up</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jirayupeach/Desktop/git/Senior-Project/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fitness_plan_fitness_plan__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionPage = /** @class */ (function () {
    function QuestionPage(navCtrl, navParams, angularfire, events, builder, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularfire = angularfire;
        this.events = events;
        this.builder = builder;
        this.alertCtrl = alertCtrl;
        this.dataQuestion = [];
        this.onlogUser = this.navParams.data;
        this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
        console.dir(this.onlogUser);
        this.fireQuestion = this.angularfire.list('/Questionnaires/');
        this.fireQuestion.subscribe(function (data) {
            _this.dataQuestion = data;
            console.log(data);
        });
        this.fireUser = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/userAnswer/');
        this.questionForm = this.builder.group({
            'Equipment': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'WPD': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'PD': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'PI': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        // this.fireQuestion.push({Question1:{question:"Equipment Available?",choices:['none','dumbbell','pyrobox']},
        //   Question2:{question:"Workout Per Week?",choices:['1-2','2-3','3-4','4-5']},
        //   Question3:{question:"Plan Difficult ?",choices:['beginner','intermiadate']},
        //   Question4:{question:"Plan Intensity ?",choices:[1,2,3]},
        //   Question5:{question:"Start Date ?",choices:['1','2','3','4']}});
    }
    QuestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    QuestionPage.prototype.submit = function () {
        if (this.questionForm.valid) {
            console.log('Valdiate : Pass');
            this.fireUser.push(this.questionForm.value);
            console.log(this.onlogUser);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__fitness_plan_fitness_plan__["a" /* FitnessPlanPage */], this.onlogUser);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Fail',
                subTitle: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                buttons: ['OK']
            });
            alert_1.present();
            console.log('Valdiate : Invalid');
        }
    };
    QuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-question',template:/*ion-inline-start:"/Users/jirayupeach/Desktop/git/Senior-Project/src/pages/question/question.html"*/'<!--\n  Generated template for the QuestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Question</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngFor= "let a of dataQuestion">\n	<form class="list" [formGroup] = "questionForm">\n	<ion-list radio-group [(ngModel)]="equipment" formControlName="Equipment">\n		<ion-list-header>\n			{{a.Question1.question}}\n		</ion-list-header>\n		<ion-item>\n			<ion-label>{{a.Question1.choices[0]}}</ion-label>\n			<ion-radio value="none"></ion-radio>\n		</ion-item>\n		<ion-item>\n			<ion-label>{{a.Question1.choices[1]}}</ion-label>\n			<ion-radio value="dumbbell"></ion-radio>\n		</ion-item>\n		<ion-item>\n			<ion-label>{{a.Question1.choices[2]}}</ion-label>\n			<ion-radio value="pyrobox"></ion-radio>\n		</ion-item>\n	</ion-list>\n	<ion-list radio-group [(ngModel)]="workoutPerDay" formControlName="WPD">\n		<ion-list-header>\n			{{a.Question2.question}}\n		</ion-list-header>\n		<ion-item>\n			<ion-label>{{a.Question2.choices[0]}}</ion-label>\n			<ion-radio value="1-2"></ion-radio>\n		</ion-item>\n		<ion-item>\n			<ion-label>{{a.Question2.choices[1]}}</ion-label>\n			<ion-radio value="2-3"></ion-radio>\n		</ion-item>\n		<ion-item>\n			<ion-label>{{a.Question2.choices[2]}}</ion-label>\n			<ion-radio value="3-4"></ion-radio>\n		</ion-item>\n		<ion-item>\n			<ion-label>{{a.Question2.choices[3]}}</ion-label>\n			<ion-radio value="4-5"></ion-radio>\n		</ion-item>\n	</ion-list>\n	<ion-list radio-group [(ngModel)]="planDifficult" formControlName="PD">\n		<ion-list-header>\n			{{a.Question3.question}}\n		</ion-list-header>\n		<ion-item>\n			<ion-label>{{a.Question3.choices[0]}}</ion-label>\n			<ion-radio value="beginner"></ion-radio>\n		</ion-item>\n		<ion-item>\n			<ion-label>{{a.Question3.choices[1]}}</ion-label>\n			<ion-radio value="intermiadate"></ion-radio>\n		</ion-item>\n	</ion-list>\n	<ion-list radio-group [(ngModel)]="planIntensity" formControlName="PI">\n		<ion-list-header>\n			{{a.Question4.question}}\n		</ion-list-header>\n		<ion-item>\n			<ion-label>{{a.Question4.choices[0]}}</ion-label>\n			<ion-radio value=1></ion-radio>\n		</ion-item>\n		<ion-item>\n			<ion-label>{{a.Question4.choices[1]}}</ion-label>\n			<ion-radio value=2></ion-radio>\n		</ion-item>\n		<ion-item>\n			<ion-label>{{a.Question4.choices[2]}}</ion-label>\n			<ion-radio value=3></ion-radio>\n		</ion-item>\n	</ion-list>\n	<br>\n	<button ion-button type="submit" (click)="submit()">submit</button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/jirayupeach/Desktop/git/Senior-Project/src/pages/question/question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], QuestionPage);
    return QuestionPage;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/fitness-plan/fitness-plan.module": [
		323,
		3
	],
	"../pages/login/login.module": [
		324,
		2
	],
	"../pages/question/question.module": [
		326,
		1
	],
	"../pages/register/register.module": [
		325,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_question__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DataProvider_User__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fitness_plan_fitness_plan__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, angularfire, navParams, events) {
        this.navCtrl = navCtrl;
        this.angularfire = angularfire;
        this.navParams = navParams;
        this.events = events;
        this.onlogUser = new __WEBPACK_IMPORTED_MODULE_4__DataProvider_User__["a" /* User */]();
        this.dataQuestion = [];
        this.onlogUser = this.navParams.data;
        this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
        this.fireFitnessPlan = this.angularfire.list('/FitnessPlan/');
        console.dir(this.onlogUser);
        /*this.fireFitnessPlan.push({
          age:{start:30,end:60},
          bmi:{start:18.5,end:40},
          category:"lose weight",
          difficult:"beginner",
          equipment:{equipment1:"dumbbell"},
          intensity:1,
          gender:{gender1:"female"},
          user:{user1:this.onlogUser.UserKey},
          week:{week1:{day1:{bodyparts:{part1:"legs",part2:"hips"},workouts:{resttime:60,set1:{deadlift:15,squat:20},set2:{deadlift:15,squat:20},
          set3:{deadlift:15,squat:20},set4:{deadlift:15,squat:20},set5:{deadlift:15,squat:20},set6:{deadlift:15,squat:20},
          set7:{deadlift:15,squat:20}}},
          day2:{bodyparts:{part1:"triceps",part2:"back",part3:"biceps"},workouts:{resttime:60,set1:{deadlift:15,squat:20},set2:{deadlift:15,squat:20},
          set3:{deadlift:15,squat:20},set4:{deadlift:15,squat:20},set5:{deadlift:15,squat:20},set6:{deadlift:15,squat:20},
          set7:{deadlift:15,squat:20}}},
          day3:{bodyparts:{part1:"chest",part2:"shoulders",part3:"biceps"},workouts:{resttime:60,set1:{deadlift:15,squat:20},set2:{deadlift:15,squat:20},
          set3:{deadlift:15,squat:20},set4:{deadlift:15,squat:20},set5:{deadlift:15,squat:20},set6:{deadlift:15,squat:20},
          set7:{deadlift:15,squat:20}}},}}
        });*/
    }
    HomePage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.startPlan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__question_question__["a" /* QuestionPage */], this.onlogUser);
    };
    HomePage.prototype.fitplan = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__fitness_plan_fitness_plan__["a" /* FitnessPlanPage */], this.onlogUser);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jirayupeach/Desktop/git/Senior-Project/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	{{onlogUser.email}}\n  <button ion-button (click) = login()>Login</button>\n  <button ion-button (click) = startPlan()>Start Plan</button>\n  <button ion-button (click) = fitplan()>fitplan</button>\n</ion-content>\n'/*ion-inline-end:"/Users/jirayupeach/Desktop/git/Senior-Project/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_question_question__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_fitness_plan_fitness_plan__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var config = {
    apiKey: "AIzaSyACQbDFnbhv5uJCBcyd6Sy1ylmBzvd44AM",
    authDomain: "modal-82ed6.firebaseapp.com",
    databaseURL: "https://modal-82ed6.firebaseio.com",
    projectId: "modal-82ed6",
    storageBucket: "modal-82ed6.appspot.com",
    messagingSenderId: "525147176042"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_question_question__["a" /* QuestionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_fitness_plan_fitness_plan__["a" /* FitnessPlanPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/fitness-plan/fitness-plan.module#FitnessPlanPageModule', name: 'FitnessPlanPage', segment: 'fitness-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/question/question.module#QuestionPageModule', name: 'QuestionPage', segment: 'question', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_question_question__["a" /* QuestionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_fitness_plan_fitness_plan__["a" /* FitnessPlanPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitnessPlan; });
var FitnessPlan = /** @class */ (function () {
    function FitnessPlan() {
    }
    return FitnessPlan;
}());

var ages = /** @class */ (function () {
    function ages() {
    }
    return ages;
}());
var genders = /** @class */ (function () {
    function genders() {
    }
    return genders;
}());
var bmis = /** @class */ (function () {
    function bmis() {
    }
    return bmis;
}());
var users = /** @class */ (function () {
    function users() {
    }
    return users;
}());
var weeks = /** @class */ (function () {
    function weeks() {
    }
    return weeks;
}());
var weekss = /** @class */ (function () {
    function weekss() {
    }
    return weekss;
}());
var day = /** @class */ (function () {
    function day() {
    }
    return day;
}());
var FitnessPlan4 = /** @class */ (function () {
    function FitnessPlan4() {
    }
    return FitnessPlan4;
}());
var set = /** @class */ (function () {
    function set() {
    }
    return set;
}());
//# sourceMappingURL=FitnessPlan.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], MyApp.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jirayupeach/Desktop/git/Senior-Project/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jirayupeach/Desktop/git/Senior-Project/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DataProvider_User__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, alertCtrl, navCtrl, navParams, angularfire) {
        var _this = this;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularfire = angularfire;
        this.onlogUser = new __WEBPACK_IMPORTED_MODULE_3__DataProvider_User__["a" /* User */]();
        this.getItemsUser = [];
        this.check = '';
        this.itemsUser = angularfire.list('/User/');
        this.itemsUser.subscribe(function (data) {
            _this.getItemsUser = data;
        });
    }
    LoginPage.prototype.login = function (email, password) {
        var _this = this;
        if (email == null || password == null) {
            email = "";
            password = "";
        }
        this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function (e) {
            var alert = _this.alertCtrl.create({
                title: 'Incorrect email or password.',
                subTitle: 'Please fill correct email or password to login.',
                buttons: ['Ok']
            });
            alert.present();
            console.error("Incorrect");
            _this.check = e.message;
        }).then(function (data) {
            console.log("start");
            if (_this.getItemsUser != null) {
                console.log("firebasecheck");
                console.log(_this.check);
                if (_this.afAuth.auth.currentUser != null && _this.check == '') {
                    for (var i = 0; i < _this.getItemsUser.length; i++) {
                        console.log("startloop");
                        console.log("usercheck");
                        if (_this.getItemsUser[i].uid == _this.afAuth.auth.currentUser.uid) {
                            _this.onlogUser = _this.getItemsUser[i];
                            console.dir(_this.onlogUser);
                            console.dir(_this.getItemsUser[i]);
                            _this.onlogUser.UserKey = _this.getItemsUser[i].$key;
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */], _this.onlogUser);
                            console.log("found");
                        }
                        console.log(" 1 row pass");
                    }
                }
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Non of user on the server!',
                    subTitle: 'Please SignUp first',
                    buttons: [{
                            text: 'Ok',
                            handler: function (data) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
                            }
                        }]
                });
                alert_1.present();
                console.error("Error");
            }
        });
        this.check = '';
    };
    LoginPage.prototype.redirectToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
        console.log("Redirect Complete");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/jirayupeach/Desktop/git/Senior-Project/src/pages/login/login.html"*/'\n<ion-content  class="body">\n  <h1>Login</h1>\n  <ion-item class="emailInput">\n    <ion-icon item-start name="md-person"></ion-icon>\n    <ion-input [(ngModel)]="email" type="text" placeholder="Email" required></ion-input>\n  </ion-item>\n  <br>\n  <ion-item class="passInput">\n    <ion-icon item-start name="md-lock"></ion-icon>\n    <ion-input [(ngModel)]="password" type="password" placeholder="Password" required ></ion-input>\n  </ion-item>\n   <ion-grid>\n        <ion-row>\n            <ion-col >\n                <button ion-button round small class="loginButton" (click)="login(email,password)">Login</button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col >\n                <button ion-button round small class="signUpButton" (click)="redirectToRegister()">Sign Up</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/jirayupeach/Desktop/git/Senior-Project/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitnessPlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DataProvider_FitnessPlan__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FitnessPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FitnessPlanPage = /** @class */ (function () {
    function FitnessPlanPage(navCtrl, navParams, angularfire, events, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularfire = angularfire;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.dataFitnessPlan = [];
        this.onlogPlan = new __WEBPACK_IMPORTED_MODULE_3__DataProvider_FitnessPlan__["a" /* FitnessPlan */]();
        this.today = Date.now();
        this.keyFit = [];
        this.onlogUser = this.navParams.data;
        this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
        console.dir(this.onlogUser);
        this.fireFitnessPlan = this.angularfire.list('/FitnessPlan/');
        this.fireFitnessPlan.subscribe(function (data) {
            _this.dataFitnessPlan = data;
            console.log(data);
        });
        console.log(this.dataFitnessPlan);
        this.angularfire.list('/User/' + this.onlogUser.UserKey + '/userAnswer/').subscribe(function (data) {
            _this.answerData = data;
        });
        this.fireUser = this.angularfire.list('/User/');
    }
    /*calculate(bmi: number){
      bmi = this.onlogUser.weight/(this.onlogUser.height*this.onlogUser.height);
      console.log(bmi);
    }
  
    CalculateAge(): void{
              var timeDiff = Math.abs(this.today - new Date(this.onlogUser.dateofbirth).getTime());
              this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
              console.log(this.age);
      }
  
    check(){
      this.bmi = this.onlogUser.weight/(this.onlogUser.height*this.onlogUser.height);
      console.log(this.bmi);
      var timeDiff = Math.abs(this.today - new Date(this.onlogUser.dateofbirth).getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      console.log(this.age);
      if(this.onlogUser.fitplan=="null"){
        for(let i = 0; i < this.dataFitnessPlan.length; i++){
          if(this.onlogUser.gender==this.dataFitnessPlan[i].gender.gender1||this.onlogUser.gender==this.dataFitnessPlan[i].gender.gender2){
            if(this.itemKey[0].PD==this.dataFitnessPlan[i].difficult){
              if(this.itemKey[0].PI==this.dataFitnessPlan[i].intensity){
                if(this.age>=this.dataFitnessPlan[i].start&&this.age<=this.dataFitnessPlan[i].end){
                  if(this.bmi>=this.dataFitnessPlan[i].start&&this.age<=this.dataFitnessPlan[i].end){
  
                  }
                }
              }
            }
          }
        }
      }else{
        let alert = this.alertCtrl.create({
              title: 'Already have plan',
              subTitle: 'Your have plan',
              buttons: ['OK']
            });
        alert.present();
      }//
    }*/
    FitnessPlanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FitnessPlanPage');
        this.bmi = this.onlogUser.weight / ((this.onlogUser.height / 100) * (this.onlogUser.height / 100));
        console.log(this.bmi);
        var timeDiff = Math.abs(this.today - new Date(this.onlogUser.dateofbirth).getTime());
        this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        console.log(this.age);
        if (this.onlogUser.fitplan == "null") {
            for (var i = 0; i < this.dataFitnessPlan.length; i++) {
                if (this.onlogUser.gender == this.dataFitnessPlan[i].gender.gender1 || this.onlogUser.gender == this.dataFitnessPlan[i].gender.gender2) {
                    console.log("gender");
                    if (this.answerData[0].PD == this.dataFitnessPlan[i].difficult) {
                        console.log("difficult");
                        if (this.answerData[0].PI == this.dataFitnessPlan[i].intensity) {
                            console.log("intensity");
                            if (this.answerData[0].Equipment == this.dataFitnessPlan[i].equipment) {
                                console.log("equipment");
                                if (this.age >= this.dataFitnessPlan[i].age.start && this.age <= this.dataFitnessPlan[i].age.end) {
                                    console.log("age");
                                    if (this.bmi >= this.dataFitnessPlan[i].bmi.start && this.bmi <= this.dataFitnessPlan[i].bmi.end) {
                                        console.log("bmi");
                                        console.log("success");
                                        this.keyFit = this.dataFitnessPlan[i];
                                        this.fireUser.update(this.onlogUser.UserKey, { fitplan: this.dataFitnessPlan[i].$key });
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            var alert = this.alertCtrl.create({
                title: 'Already have plan',
                subTitle: 'Your have plan',
                buttons: ['OK']
            });
            alert.present();
        }
        console.log();
        //console.log(this.itemKey[0].PD);
        //if(this.dataFitnessPlan[1].intensity==2){
        /*if(this.onlogUser.fitplan=="null"){
          console.log("success")
        }else{
          console.log("fail")
        }*/
    };
    FitnessPlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fitness-plan',template:/*ion-inline-start:"/Users/jirayupeach/Desktop/git/Senior-Project/src/pages/fitness-plan/fitness-plan.html"*/'<!--\n  Generated template for the FitnessPlanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>FitnessPlan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<br><br><br><br><br><br>\n	<ion-item><ion-label>{{keyFit.gender?.gender1}}</ion-label></ion-item>\n	<ion-item><ion-label>{{keyFit.week?.week1.day1.bodyparts.part1}}</ion-label></ion-item>\n	<ion-item><ion-label>{{keyFit.intensity}}</ion-label></ion-item>\n	<ion-item><ion-label>{{keyFit.category}}</ion-label></ion-item>\n	<button ion-button type="submit" (click)="submit()">showplan</button>\n</ion-content>\n\n	<!--<ion-content>\n		<br><br><br><br>\n		<ion-item><ion-label>{{keyFit.difficult}}</ion-label></ion-item>\n		<button ion-button type="submit" (click)="submit()">submit</button>\n	</ion-content>-->'/*ion-inline-end:"/Users/jirayupeach/Desktop/git/Senior-Project/src/pages/fitness-plan/fitness-plan.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], FitnessPlanPage);
    return FitnessPlanPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=fitness-plan.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var PlanAnswer = /** @class */ (function () {
    function PlanAnswer() {
    }
    return PlanAnswer;
}());
//# sourceMappingURL=User.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.js.map