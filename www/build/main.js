webpackJsonp([8],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitnessPlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fitness_plan2_fitness_plan2__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__food_plan_food_plan__ = __webpack_require__(124);
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
        this.dataFitnessPlanUser = [];
        this.today = Date.now();
        this.keyFit = [];
        this.imagePath = "../../assets/imgs/plan4.jpg";
        this.buttonClicked1 = false;
        this.buttonClicked2 = true;
        this.dataFoodPlan = [];
        this.dataFoodPlanUser = [];
        this.keyFood = [];
        this.onlogUser = this.navParams.data;
        this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
        this.dataUserSend = this.navParams.data;
        console.dir(this.onlogUser);
        this.fireFitnessPlan = this.angularfire.list('/FitnessPlan/');
        this.fireFitnessPlan.subscribe(function (data) {
            _this.dataFitnessPlan = data;
            console.log(data);
        });
        this.fireFitnessPlanUser = this.angularfire.list('/FitnessPlan/' + this.onlogUser.fitplan);
        this.fireFitnessPlanUser.subscribe(function (data) {
            _this.dataFitnessPlanUser = data;
            console.log(data);
        });
        console.log(this.dataFitnessPlan);
        this.angularfire.list('/User/' + this.onlogUser.UserKey + '/userAnswer/').subscribe(function (data) {
            _this.itemKey = data;
            _this.itemKey.map(function (item) {
                console.log(item.$key);
            });
        });
        this.fireUser = this.angularfire.list('/User/');
        this.fireFoodPlan = this.angularfire.list('/FoodPlan/');
        this.fireFoodPlan.subscribe(function (data) {
            _this.dataFoodPlan = data;
            console.log(data);
        });
        this.fireFoodPlanUser = this.angularfire.list('/FoodPlan/' + this.onlogUser.foodplan);
        this.fireFoodPlanUser.subscribe(function (data) {
            _this.dataFoodPlanUser = data;
            console.log(data);
        });
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
    };
    FitnessPlanPage.prototype.submit = function () {
        //this.buttonClicked1 = !this.buttonClicked1;
        //this.buttonClicked2 = !this.buttonClicked2;
        //console.log("else");
        this.userPlanKey = this.onlogUser.fitplan;
        console.log(this.userPlanKey);
        for (var j = 0; j < this.dataFitnessPlan.length; j++) {
            console.log("for");
            if (this.userPlanKey == this.dataFitnessPlan[j].$key) {
                this.dataFitnessPlanUser = this.dataFitnessPlan[j];
                if (j == 0) {
                    this.imagePath = "../../assets/imgs/Plan1.jpg";
                }
                else if (j == 1) {
                    this.imagePath = "../../assets/imgs/Plan2.jpg";
                }
                else if (j == 2) {
                    this.imagePath = "../../assets/imgs/Plan3.jpg";
                }
                else if (j == 3) {
                    this.imagePath = "../../assets/imgs/Plan4.jpg";
                }
                console.log(this.dataFitnessPlanUser);
                console.log(this.userPlanKey);
                console.log(this.onlogUser);
            }
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fitness_plan2_fitness_plan2__["a" /* FitnessPlan2Page */], this.dataUserSend);
        //console.log(this.itemKey[0].PD);
        //if(this.dataFitnessPlan[1].intensity==2){
        /*if(this.onlogUser.fitplan=="null"){
          console.log("success")
        }else{
          console.log("fail")
        }*/
    };
    FitnessPlanPage.prototype.submit2 = function () {
        this.userPlanKey = this.onlogUser.foodplan;
        for (var j = 0; j < this.dataFoodPlan.length; j++) {
            console.log("for");
            if (this.userPlanKey == this.dataFoodPlan[j].$key) {
                this.dataFoodPlanUser = this.dataFoodPlan[j];
                console.log(this.dataFoodPlanUser);
                console.log(this.userPlanKey);
            }
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__food_plan_food_plan__["a" /* FoodPlanPage */], this.dataUserSend);
        }
    };
    FitnessPlanPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], this.dataUserSend);
    };
    FitnessPlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fitness-plan',template:/*ion-inline-start:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\fitness-plan\fitness-plan.html"*/'<!--\n\n  Generated template for the FitnessPlanPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content >\n\n	<!--<div class="container1" *ngIf="buttonClicked1" [style.background]="\'url(\' + imagePath + \')\'">\n\n		<ion-icon large item-start name="ios-arrow-back" (click) = "back()"></ion-icon>\n\n		<h1>"{{dataFitnessPlanUser.category}}"</h1>\n\n		<div class="planDetail">\n\n			<div class="detailBox">\n\n				<p class = "detail">{{dataFitnessPlanUser.avgtime}} Min</p>\n\n				<p class="header">Avg. Minute</p>\n\n			</div>\n\n			<div class="detailBox">\n\n				<p class = "detail">{{dataFitnessPlanUser.difficult}}</p>\n\n				<p class="header">difficult</p>\n\n			</div>\n\n			<div class="detailBox">\n\n				<p class = "detail">Level {{dataFitnessPlanUser.intensity}}</p>\n\n				<p class="header">intensity</p>\n\n			</div>\n\n			<button ion-button type="submit" (click)="submit2()" class="submitButton1">"Start Your Plan"</button>\n\n		</div>\n\n		\n\n	</div>-->\n\n	<div class="container2" *ngIf="buttonClicked2" [style.background]="\'url(\' + imagePath + \')\'">\n\n		<ion-icon large item-start name="ios-arrow-back" (click) = "back()"></ion-icon>\n\n		<h1>"Welcome to fitness plan"</h1>\n\n		<button ion-button type="submit" (click)="submit()" class="submitButton2">"Show your plan"</button>\n\n		<button ion-button type="submit" (click)="submit2()" class="submitButton2">"Food Plan"</button>\n\n	</div>\n\n	\n\n</ion-content>\n\n\n\n\n\n	<!--<ion-content>\n\n		<br><br><br><br>\n\n		<ion-item><ion-label>{{keyFit.difficult}}</ion-label></ion-item>\n\n		<button ion-button type="submit" (click)="submit()">submit</button>\n\n	</ion-content>-->'/*ion-inline-end:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\fitness-plan\fitness-plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FitnessPlanPage);
    return FitnessPlanPage;
}());

//# sourceMappingURL=fitness-plan.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DataProvider_User__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(47);
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
    RegisterPage.prototype.register = function (email, password, fName, lName, weight, height, waistMeasurement, dateofbirth, gender, fitplan, foodplan) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var check, result, alert_1, result_1, error_1, alert_2, alert_3, alert_4, alert_5, alert, i, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fitplan = "null";
                        foodplan = "null";
                        check = true;
                        if (!(email == null || password == null || fName == null || lName == null || weight == null || height == null || waistMeasurement == null || dateofbirth == null
                            || gender == null)) return [3 /*break*/, 1];
                        alert_1 = this.alertCtrl.create({
                            title: 'กรอกข้อมูลให้ครบถ้วน',
                            subTitle: 'กรอกข้อมูลให้ครบถ้วน',
                            buttons: ['OK']
                        });
                        console.log(alert_1);
                        alert_1.present();
                        return [3 /*break*/, 5];
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
                                alert_2 = this.alertCtrl.create({
                                    title: 'Email Already Use',
                                    subTitle: 'Please Change Email',
                                    buttons: ['OK']
                                });
                                console.log(alert_2);
                                alert_2.present();
                                check = false;
                            }
                            if (error_1.message == "The email address is badly formatted.") {
                                alert_3 = this.alertCtrl.create({
                                    title: ' Caution!',
                                    subTitle: 'Invalid Email',
                                    buttons: ['OK']
                                });
                                alert_3.present();
                                check = false;
                            }
                            if (error_1.message == "Password should be at least 6 characters") {
                                alert_4 = this.alertCtrl.create({
                                    title: ' Weak Password!',
                                    subTitle: 'Password should be at least 6',
                                    buttons: ['OK']
                                });
                                alert_4.present();
                                check = false;
                            }
                        }
                        else {
                            alert_5 = this.alertCtrl.create({
                                title: ' Unknown Error ',
                                subTitle: ' Failed to create User',
                                buttons: ['OK']
                            });
                            alert_5.present();
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
                            this.newUser.foodplan = foodplan;
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
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\register\register.html"*/'<ion-content padding class="body">\n\n  <img src="../../assets/imgs/workout.png" class="LoginLogo">\n\n  <h1>Register to TrainHere</h1>\n\n  <ion-item class="emailInput">\n\n    <ion-label>Email : </ion-label>\n\n    <ion-input type="email" [(ngModel)]="email" placeholder="Email" name="emailInput" required ></ion-input>\n\n  </ion-item>\n\n  <ion-item class="otherInput">\n\n    <ion-label>Password : </ion-label>\n\n    <ion-input type="password" [(ngModel)]="password" placeholder="Password" name="passwordInput" required></ion-input>\n\n  </ion-item>\n\n  <ion-item class="otherInput">\n\n    <ion-label>Firstname : </ion-label>\n\n    <ion-input [(ngModel)]="fName" type="text" placeholder="Firstname" required ></ion-input>\n\n  </ion-item>\n\n  <ion-item class="otherInput">\n\n    <ion-label>Lastname : </ion-label>\n\n    <ion-input [(ngModel)]="lName" type="text" placeholder="Lastname" required ></ion-input>\n\n  </ion-item>\n\n  <ion-item class="otherInput">\n\n    <ion-label>Weight (kg) : </ion-label>\n\n    <ion-input [(ngModel)]="weight" type="number" min="20" max="300" placeholder="Weight" required ></ion-input><\n\n  </ion-item>\n\n  <ion-item class="otherInput">\n\n    <ion-label>Hegiht (cm) : </ion-label>\n\n    <ion-input [(ngModel)]="height" type="number" min="50" max="300" placeholder="Height" required ></ion-input>CM\n\n  </ion-item>\n\n  <ion-item class="otherInput">\n\n    <ion-label>Waist (inch) : </ion-label>\n\n    <ion-input [(ngModel)]="waistMeasurement" type="number" min="10" max="50" required placeholder = "Waist Measurement"></ion-input>Inch\n\n  </ion-item>\n\n  <ion-item class="otherInput">\n\n    <ion-label>Gender : </ion-label>\n\n    <ion-select [(ngModel)]="gender" required >\n\n        <ion-option value="male">male</ion-option>\n\n        <ion-option value="female">female</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item class="dateInput">\n\n    <ion-label>Date of birth : </ion-label>\n\n    <ion-datetime displayFormat="DD/MM/YYYY" max="2010-12-31" [(ngModel)]="dateofbirth" placeholder = "DD/MM/YYYY"></ion-datetime>\n\n  </ion-item>\n\n  <button ion-button round small class="backButton" (click)="back()">Back</button>\n\n  <button ion-button round small class="signUpButton" (click)="register(email,password,fName,lName,weight,height,waistMeasurement,dateofbirth,gender)">Sign Up</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(39);
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
        this.dataFitnessPlan = [];
        this.today = Date.now();
        this.keyFit = [];
        this.dataFoodPlan = [];
        this.keyFood = [];
        this.onlogUser = this.navParams.data;
        this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
        console.dir(this.onlogUser);
        this.fireQuestion = this.angularfire.list('/Questionnaires/');
        this.fireQuestion.subscribe(function (data) {
            _this.dataQuestion = data;
            console.log(data);
        });
        this.fireUserAnswer = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/userAnswer/');
        this.fireFitnessPlan = this.angularfire.list('/FitnessPlan/');
        this.fireFitnessPlan.subscribe(function (data) {
            _this.dataFitnessPlan = data;
            console.log(data);
        });
        this.fireFoodPlan = this.angularfire.list('/FoodPlan/');
        this.fireFoodPlan.subscribe(function (data) {
            _this.dataFoodPlan = data;
            console.log(data);
        });
        this.fireUserAnswer.subscribe(function (data) {
            _this.itemKey = data;
            _this.itemKey.map(function (item) {
                console.log(item.$key);
            });
        });
        console.log(this.dataFitnessPlan);
        this.questionForm = this.builder.group({
            'Equipment': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'WPD': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'PD': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'PI': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.fireUser = this.angularfire.list('/User/');
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
            this.fireUserAnswer.push(this.questionForm.value);
            console.log(this.onlogUser);
            this.bmi = this.onlogUser.weight / ((this.onlogUser.height / 100) * (this.onlogUser.height / 100));
            console.log(this.bmi);
            this.weight = this.onlogUser.weight;
            this.height = this.onlogUser.height;
            var timeDiff = Math.abs(this.today - new Date(this.onlogUser.dateofbirth).getTime());
            this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
            console.log(this.age);
            console.log(this.dataFitnessPlan);
            console.log(this.dataFoodPlan);
            for (var i = 0; i < this.dataFitnessPlan.length; i++) {
                console.log("for");
                console.log(this.itemKey[0]);
                if (this.onlogUser.gender == this.dataFitnessPlan[i].gender.gender1 || this.onlogUser.gender == this.dataFitnessPlan[i].gender.gender2) {
                    console.log("gender");
                    if (this.itemKey[0].PD == this.dataFitnessPlan[i].difficult) {
                        console.log("difficult");
                        if (this.itemKey[0].PI == this.dataFitnessPlan[i].intensity) {
                            console.log("intensity");
                            if (this.itemKey[0].Equipment == this.dataFitnessPlan[i].equipment) {
                                console.log("equipment");
                                if (this.age >= this.dataFitnessPlan[i].age.start && this.age <= this.dataFitnessPlan[i].age.end) {
                                    console.log("age");
                                    if (this.bmi >= this.dataFitnessPlan[i].bmi.start && this.bmi <= this.dataFitnessPlan[i].bmi.end) {
                                        console.log("bmi");
                                        console.log("success");
                                        this.keyFit = this.dataFitnessPlan[i];
                                        console.log(this.keyFit);
                                        this.fireUser.update(this.onlogUser.UserKey, { fitplan: this.dataFitnessPlan[i].$key });
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for (var j = 0; j < this.dataFoodPlan.length; j++) {
                console.log("for");
                console.log(this.itemKey[0]);
                if (this.onlogUser.gender == this.dataFoodPlan[j].gender.gender1 || this.onlogUser.gender == this.dataFoodPlan[j].gender.gender2) {
                    console.log("gender");
                    if (this.age >= this.dataFoodPlan[j].age.start && this.age <= this.dataFoodPlan[j].age.end) {
                        console.log("age");
                        if (this.weight >= this.dataFoodPlan[j].weight.start && this.weight <= this.dataFoodPlan[j].weight.end) {
                            console.log("weight");
                            if (this.height >= this.dataFoodPlan[j].height.start && this.height <= this.dataFoodPlan[j].height.end) {
                                console.log("height");
                                console.log("success");
                                this.keyFood = this.dataFoodPlan[j];
                                console.log(this.keyFood);
                                this.fireUser.update(this.onlogUser.UserKey, { foodplan: this.dataFoodPlan[j].$key });
                                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], this.onlogUser);
                            }
                        }
                    }
                }
            }
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
            selector: 'page-question',template:/*ion-inline-start:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\question\question.html"*/'<!--\n\n  Generated template for the QuestionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Question</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding *ngFor= "let a of dataQuestion">\n\n	<form class="list" [formGroup] = "questionForm">\n\n	<ion-list radio-group [(ngModel)]="equipment" formControlName="Equipment">\n\n		<ion-list-header>\n\n			{{a.Question1.question}}\n\n		</ion-list-header>\n\n		<ion-item>\n\n			<ion-label>{{a.Question1.choices[0]}}</ion-label>\n\n			<ion-radio value="none"></ion-radio>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>{{a.Question1.choices[1]}}</ion-label>\n\n			<ion-radio value="dumbbell"></ion-radio>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>{{a.Question1.choices[2]}}</ion-label>\n\n			<ion-radio value="pyrobox"></ion-radio>\n\n		</ion-item>\n\n	</ion-list>\n\n	<ion-list radio-group [(ngModel)]="workoutPerDay" formControlName="WPD">\n\n		<ion-list-header>\n\n			{{a.Question2.question}}\n\n		</ion-list-header>\n\n		<ion-item>\n\n			<ion-label>{{a.Question2.choices[0]}}</ion-label>\n\n			<ion-radio value="1-2"></ion-radio>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>{{a.Question2.choices[1]}}</ion-label>\n\n			<ion-radio value="2-3"></ion-radio>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>{{a.Question2.choices[2]}}</ion-label>\n\n			<ion-radio value="3-4"></ion-radio>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>{{a.Question2.choices[3]}}</ion-label>\n\n			<ion-radio value="4-5"></ion-radio>\n\n		</ion-item>\n\n	</ion-list>\n\n	<ion-list radio-group [(ngModel)]="planDifficult" formControlName="PD">\n\n		<ion-list-header>\n\n			{{a.Question3.question}}\n\n		</ion-list-header>\n\n		<ion-item>\n\n			<ion-label>{{a.Question3.choices[0]}}</ion-label>\n\n			<ion-radio value="beginner"></ion-radio>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>{{a.Question3.choices[1]}}</ion-label>\n\n			<ion-radio value="intermiadate"></ion-radio>\n\n		</ion-item>\n\n	</ion-list>\n\n	<ion-list radio-group [(ngModel)]="planIntensity" formControlName="PI">\n\n		<ion-list-header>\n\n			{{a.Question4.question}}\n\n		</ion-list-header>\n\n		<ion-item>\n\n			<ion-label>{{a.Question4.choices[0]}}</ion-label>\n\n			<ion-radio value=1></ion-radio>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>{{a.Question4.choices[1]}}</ion-label>\n\n			<ion-radio value=2></ion-radio>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>{{a.Question4.choices[2]}}</ion-label>\n\n			<ion-radio value=3></ion-radio>\n\n		</ion-item>\n\n	</ion-list>\n\n	<br>\n\n	<button ion-button type="submit" (click)="submit()">submit</button>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\question\question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], QuestionPage);
    return QuestionPage;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(23);
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
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = /** @class */ (function () {
    function TestPage(navCtrl, loadingCtrl, domSanitizer) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.domSanitizer = domSanitizer;
        this.video = {
            url: "https://www.youtube.com/embed/MLleDRkSuvk",
            title: 'Awesome video'
        };
    }
    TestPage.prototype.ionViewWillEnter = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    TestPage.prototype.handleIFrameLoadEvent = function () {
        this.loading.dismiss();
    };
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestPage');
    };
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\test\test.html"*/'<!--\n\n  Generated template for the TestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            YouTube Video Embed\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <iframe width="100%"\n\n            height="315"\n\n            [src]="trustedVideoUrl ? trustedVideoUrl : null"\n\n            (load)="trustedVideoUrl ? handleIFrameLoadEvent() : null"\n\n            frameborder="0"\n\n            allowfullscreen></iframe>\n\n    \n\n    <h2>{{ video?.title }}</h2>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\test\test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitnessPlan2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fitness_plan3_fitness_plan3__ = __webpack_require__(123);
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
 * Generated class for the FitnessPlan2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FitnessPlan2Page = /** @class */ (function () {
    function FitnessPlan2Page(navCtrl, navParams, angularfire, events, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularfire = angularfire;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.dataFitnessPlan = [];
        this.dataFitnessPlanUser = [];
        this.buttonClicked1 = true;
        this.onlogUser = this.navParams.data;
        this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
        this.dataUserSend = this.navParams.data;
        console.dir(this.onlogUser);
        this.fireFitnessPlan = this.angularfire.list('/FitnessPlan/');
        this.fireFitnessPlan.subscribe(function (data) {
            _this.dataFitnessPlan = data;
            console.log(data);
        });
        this.fireFitnessPlanUser = this.angularfire.list('/FitnessPlan/' + this.onlogUser.fitplan);
        this.fireFitnessPlanUser.subscribe(function (data) {
            _this.dataFitnessPlanUser = data;
            console.log(data);
        });
        console.log(this.dataUserSend);
        console.log(this.onlogUser.fitplan);
        console.log(this.dataFitnessPlan);
        console.log(this.dataFitnessPlanUser);
        this.userPlanKey = this.onlogUser.fitplan;
        console.log(this.userPlanKey);
        for (var j = 0; j < this.dataFitnessPlan.length; j++) {
            console.log("for");
            if (this.userPlanKey == this.dataFitnessPlan[j].$key) {
                this.dataFitnessPlanUser = this.dataFitnessPlan[j];
                console.log(this.dataFitnessPlanUser);
                console.log(this.userPlanKey);
            }
        }
    }
    FitnessPlan2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FitnessPlan2Page');
    };
    FitnessPlan2Page.prototype.submit = function () {
        console.log(this.onlogUser);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fitness_plan3_fitness_plan3__["a" /* FitnessPlan3Page */], this.dataUserSend);
    };
    FitnessPlan2Page.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], this.dataUserSend);
    };
    FitnessPlan2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fitness-plan2',template:/*ion-inline-start:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\fitness-plan2\fitness-plan2.html"*/'<!--\n\n  Generated template for the FitnessPlan2Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>fitness-plan2</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n	<!--<div class="container1" *ngIf="buttonClicked1" [style.background]="\'url(\' + imagePath + \')\'">\n\n		<ion-icon large item-start name="ios-arrow-back" (click) = "back()"></ion-icon>\n\n		<h1>"{{dataFitnessPlanUser.category}}"</h1>\n\n		<div class="planDetail">\n\n			<div class="detailBox">\n\n				<p class = "detail">{{dataFitnessPlanUser.avgtime}} Min</p>\n\n				<p class="header">Avg. Minute</p>\n\n			</div>\n\n			<div class="detailBox">\n\n				<p class = "detail">{{dataFitnessPlanUser.difficult}}</p>\n\n				<p class="header">difficult</p>\n\n			</div>\n\n			<div class="detailBox">\n\n				<p class = "detail">Level {{dataFitnessPlanUser.intensity}}</p>\n\n				<p class="header">intensity</p>\n\n			</div>\n\n			<button ion-button type="submit" (click)="submit()" class="submitButton1">"Start Your Plan"</button>\n\n		</div>\n\n		\n\n	</div>-->\n\n	<div class="container1" *ngIf="buttonClicked1">\n\n		<ion-icon large item-start name="ios-arrow-back" (click) = "back()"></ion-icon>\n\n		<h1>"{{dataFitnessPlanUser.category}}"</h1>\n\n		<div class="planDetail">\n\n			<div class="detailBox">\n\n				<p class = "detail">{{dataFitnessPlanUser.avgtime}} Min</p>\n\n				<p class="header">Avg. Minute</p>\n\n			</div>\n\n			<div class="detailBox">\n\n				<p class = "detail">{{dataFitnessPlanUser.difficult}}</p>\n\n				<p class="header">difficult</p>\n\n			</div>\n\n			<div class="detailBox">\n\n				<p class = "detail">Level {{dataFitnessPlanUser.intensity}}</p>\n\n				<p class="header">intensity</p>\n\n			</div>\n\n			<button ion-button type="submit" (click)="submit()" class="submitButton1">"Start Your Plan"</button>\n\n		</div>\n\n		\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\fitness-plan2\fitness-plan2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FitnessPlan2Page);
    return FitnessPlan2Page;
}());

//# sourceMappingURL=fitness-plan2.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitnessPlan3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(23);
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
 * Generated class for the FitnessPlan3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FitnessPlan3Page = /** @class */ (function () {
    function FitnessPlan3Page(navCtrl, navParams, angularfire, events, alertCtrl, loadingCtrl, domSanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularfire = angularfire;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.domSanitizer = domSanitizer;
        this.dataFitnessPlan = [];
        this.dataFitnessPlanUser = [];
        this.dataFitnessPlanVideo = [];
        this.dataFitnessPlanUserVideo = [];
        this.dataFitnessPlanTitleVideo = [];
        this.dataFitnessPlanLinkVideo = [];
        this.buttonClicked1 = true;
        this.onlogUser = this.navParams.data;
        this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
        this.dataUserSend = this.navParams.data;
        console.dir(this.onlogUser);
        this.fireFitnessPlan = this.angularfire.list('/FitnessPlan/');
        this.fireFitnessPlan.subscribe(function (data) {
            _this.dataFitnessPlan = data;
            console.log(data);
        });
        this.fireFitnessPlanUser = this.angularfire.list('/FitnessPlan/' + this.onlogUser.fitplan);
        this.fireFitnessPlanUser.subscribe(function (data) {
            _this.dataFitnessPlanUser = data;
            console.log(data);
            _this.fireFitnessPlanVideo = _this.angularfire.list('/Video/');
            _this.fireFitnessPlanVideo.subscribe(function (data) {
                _this.dataFitnessPlanVideo = data;
                console.log(data);
                _this.videoKey();
                _this.video = _this.dataFitnessPlanUserVideo.Link;
                _this.ionViewWillEnter();
            });
        });
        console.log(this.dataFitnessPlanVideo);
        console.log(this.video);
        this.userPlanKey = this.onlogUser.fitplan;
        console.log(this.userPlanKey);
        for (var j = 0; j < this.dataFitnessPlan.length; j++) {
            console.log("for");
            if (this.userPlanKey == this.dataFitnessPlan[j].$key) {
                this.dataFitnessPlanUser = this.dataFitnessPlan[j];
                console.log(this.dataFitnessPlanUser);
                console.log(this.userPlanKey);
            }
        }
        /*for(let i = 0; i < this.dataFitnessPlanVideo.length; i++){
          console.log("for");
          if(this.dataFitnessPlanUser.week.week1.day1.set1.workout1.title == this.dataFitnessPlanVideo[i].$key){
            this.dataFitnessPlanUserVideo = this.dataFitnessPlanVideo[i];
            console.log(this.dataFitnessPlanUserVideo);
          }
        }*/
    }
    FitnessPlan3Page.prototype.ionViewWillEnter = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video);
        /*this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    
        this.loading.present();*/
        console.log(this.trustedVideoUrl);
    };
    /*handleIFrameLoadEvent(): void {
      this.loading.dismiss();
    }*/
    FitnessPlan3Page.prototype.videoKey = function () {
        for (var i = 0; i < this.dataFitnessPlanVideo.length; i++) {
            console.log("for");
            if (this.dataFitnessPlanUser.week.week1.day1.set1.workout2.title == this.dataFitnessPlanVideo[i].Title) {
                this.dataFitnessPlanUserVideo = this.dataFitnessPlanVideo[i];
                console.log();
            }
        }
    };
    FitnessPlan3Page.prototype.linkVideo = function () {
        for (var i = 0; i < this.dataFitnessPlanVideo.length; i++) {
            this.dataFitnessPlanLinkVideo[i] = this.dataFitnessPlanVideo[i].Link;
        }
        console.log("titlevideo");
    };
    FitnessPlan3Page.prototype.titleVideo = function () {
        for (var i = 0; i < this.dataFitnessPlanVideo.length; i++) {
            this.dataFitnessPlanTitleVideo[i] = this.dataFitnessPlanVideo[i].Title;
        }
        console.log("titlevideo");
    };
    FitnessPlan3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FitnessPlan3Page');
    };
    FitnessPlan3Page.prototype.submit = function () {
        this.ionViewWillEnter();
        this.titleVideo();
        console.log(this.dataFitnessPlanUserVideo);
        console.log(this.video);
    };
    FitnessPlan3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-fitness-plan3',template:/*ion-inline-start:"/Users/apple/Projects/Senior-Project/src/pages/fitness-plan3/fitness-plan3.html"*/'<!--\n  Generated template for the FitnessPlan3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>fitness-plan3</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button type="submit" (click)="submit()" class="submitButton1">"Start Your Plan"</button>\n  <iframe width="100%"\n            height="315"\n            [src]="trustedVideoUrl ? trustedVideoUrl : null"\n            frameborder="0"\n            allowfullscreen>\n  </iframe>\n  <h2>{{dataFitnessPlanUserVideo.title}}</h2>\n  <h1>{{dataFitnessPlanUserVideo.Link}}</h1>\n  \n  <ion-list *ngFor = "let title of dataFitnessPlanTitleVideo">\n    <h1>{{title}}<br></h1>  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Projects/Senior-Project/src/pages/fitness-plan3/fitness-plan3.html"*/,
=======
            selector: 'page-fitness-plan3',template:/*ion-inline-start:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\fitness-plan3\fitness-plan3.html"*/'<!--\n\n  Generated template for the FitnessPlan3Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>fitness-plan3</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button ion-button type="submit" (click)="submit()" class="submitButton1">"Start Your Plan"</button>\n\n  <iframe width="100%"\n\n            height="315"\n\n            [src]="trustedVideoUrl ? trustedVideoUrl : null"\n\n            (load)="trustedVideoUrl ? handleIFrameLoadEvent() : null"\n\n            frameborder="0"\n\n            allowfullscreen>\n\n  </iframe>\n\n  <h2>{{dataFitnessPlanUserVideo.title}}</h2>\n\n  <h1>{{dataFitnessPlanUserVideo.Link}}</h1>\n\n  \n\n  <ion-list *ngFor = "let title of dataFitnessPlanTitleVideo">\n\n    <h1>{{title}}<br></h1>  \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\fitness-plan3\fitness-plan3.html"*/,
>>>>>>> 88edaec48621e19e6ee4481ea82b2c6d2d5513ef
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], FitnessPlan3Page);
    return FitnessPlan3Page;
}());

//# sourceMappingURL=fitness-plan3.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodPlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(39);
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
 * Generated class for the FoodPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FoodPlanPage = /** @class */ (function () {
    function FoodPlanPage(navCtrl, navParams, angularfire, events, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularfire = angularfire;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.dataFoodPlan = [];
        this.dataFoodPlanUser = [];
        this.buttonClicked1 = true;
        this.onlogUser = this.navParams.data;
        this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
        this.dataUserSend = this.navParams.data;
        console.dir(this.onlogUser);
        this.fireFoodPlan = this.angularfire.list('/FoodPlan/');
        this.fireFoodPlan.subscribe(function (data) {
            _this.dataFoodPlan = data;
            console.log(data);
        });
        this.fireFoodPlanUser = this.angularfire.list('/FoodPlan/' + this.onlogUser.foodplan);
        this.fireFoodPlanUser.subscribe(function (data) {
            _this.dataFoodPlanUser = data;
            console.log(data);
        });
        console.log(this.dataFoodPlan);
        this.angularfire.list('/User/' + this.onlogUser.UserKey + '/userAnswer/').subscribe(function (data) {
            _this.itemKey = data;
            _this.itemKey.map(function (item) {
                console.log(item.$key);
            });
        });
        this.fireUser = this.angularfire.list('/User/');
        this.userPlanKey = this.onlogUser.foodplan;
        for (var j = 0; j < this.dataFoodPlan.length; j++) {
            console.log("for");
            if (this.userPlanKey == this.dataFoodPlan[j].$key) {
                this.dataFoodPlanUser = this.dataFoodPlan[j];
                console.log(this.dataFoodPlanUser);
                console.log(this.userPlanKey);
            }
        }
    }
    FoodPlanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodPlanPage');
    };
    FoodPlanPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], this.dataUserSend);
    };
    FoodPlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-plan',template:/*ion-inline-start:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\food-plan\food-plan.html"*/'<!--\n  Generated template for the FoodPlanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>foodPlan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="container1" *ngIf="buttonClicked1">\n		<ion-icon large item-start name="ios-arrow-back" (click) = "back()"></ion-icon>\n		<h1>"FoodPlan"</h1>\n		<div class="planDetail">\n			<div class="detailBox">\n				<p class="header">Calories per day <br> {{dataFoodPlanUser.calories}} Cals</p>\n			</div>\n			<div class="detailBox">\n				<p class="header">Carb per day <br> {{dataFoodPlanUser.carbohydrate}} Grams</p>\n			</div>\n			<div class="detailBox">\n				<p class="header">Fat per day <br> {{dataFoodPlanUser.fat}} Grams</p>\n			</div>\n			<div class="detailBox">\n				<p class="header">Protein per day <br> {{dataFoodPlanUser.protein}} Grams</p>\n			</div>\n			<div class="detailBox">\n				<p class="header">Meals</p>\n				<p class = "detail">After Workout <br> {{dataFoodPlanUser.meals.afterWorkout.carbohydrate}} Grams\n												  <br> {{dataFoodPlanUser.meals.afterWorkout.fat}} Grams\n												  <br> {{dataFoodPlanUser.meals.afterWorkout.protein}} Grams\n				</p>\n				<p class = "detail">Before Workout <br> {{dataFoodPlanUser.meals.beforeWorkout.carbohydrate}} Grams\n												  <br> {{dataFoodPlanUser.meals.beforeWorkout.fat}} Grams\n												  <br> {{dataFoodPlanUser.meals.beforeWorkout.protein}} Grams\n				</p>\n				<p class = "detail">Breakfast <br> {{dataFoodPlanUser.meals.breakfast.carbohydrate}} Grams\n												  <br> {{dataFoodPlanUser.meals.breakfast.fat}} Grams\n												  <br> {{dataFoodPlanUser.meals.breakfast.protein}} Grams\n				</p>\n				<p class = "detail">lunch <br> {{dataFoodPlanUser.meals.lunch.carbohydrate}} Grams\n												  <br> {{dataFoodPlanUser.meals.lunch.fat}} Grams\n												  <br> {{dataFoodPlanUser.meals.lunch.protein}} Grams\n				</p>\n			</div>\n		</div>\n\n			\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\food-plan\food-plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FoodPlanPage);
    return FoodPlanPage;
}());

//# sourceMappingURL=food-plan.js.map

/***/ }),

/***/ 130:
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
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/fitness-plan/fitness-plan.module": [
		326,
		5
	],
	"../pages/fitness-plan2/fitness-plan2.module": [
		327,
		7
	],
	"../pages/fitness-plan3/fitness-plan3.module": [
<<<<<<< HEAD
		327,
		4
	],
	"../pages/login/login.module": [
		328,
=======
		328,
		6
	],
	"../pages/food-plan/food-plan.module": [
		329,
		4
	],
	"../pages/login/login.module": [
		330,
>>>>>>> 88edaec48621e19e6ee4481ea82b2c6d2d5513ef
		3
	],
	"../pages/question/question.module": [
		331,
		2
	],
	"../pages/register/register.module": [
		332,
		1
	],
	"../pages/test/test.module": [
		333,
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
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_question_question__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_fitness_plan_fitness_plan__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_fitness_plan2_fitness_plan2__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_fitness_plan3_fitness_plan3__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_test_test__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_food_plan_food_plan__ = __webpack_require__(124);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_fitness_plan_fitness_plan__["a" /* FitnessPlanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_fitness_plan2_fitness_plan2__["a" /* FitnessPlan2Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_fitness_plan3_fitness_plan3__["a" /* FitnessPlan3Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_food_plan_food_plan__["a" /* FoodPlanPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/fitness-plan/fitness-plan.module#FitnessPlanPageModule', name: 'FitnessPlanPage', segment: 'fitness-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fitness-plan2/fitness-plan2.module#FitnessPlan2PageModule', name: 'FitnessPlan2Page', segment: 'fitness-plan2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fitness-plan3/fitness-plan3.module#FitnessPlan3PageModule', name: 'FitnessPlan3Page', segment: 'fitness-plan3', priority: 'low', defaultHistory: [] },
<<<<<<< HEAD
=======
                        { loadChildren: '../pages/food-plan/food-plan.module#FoodPlanPageModule', name: 'FoodPlanPage', segment: 'food-plan', priority: 'low', defaultHistory: [] },
>>>>>>> 88edaec48621e19e6ee4481ea82b2c6d2d5513ef
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/question/question.module#QuestionPageModule', name: 'QuestionPage', segment: 'question', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_14__pages_fitness_plan_fitness_plan__["a" /* FitnessPlanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_fitness_plan2_fitness_plan2__["a" /* FitnessPlan2Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_fitness_plan3_fitness_plan3__["a" /* FitnessPlan3Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_food_plan_food_plan__["a" /* FoodPlanPage */]
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

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(47);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Book\Documents\GitHub\Senior-Project\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Book\Documents\GitHub\Senior-Project\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_question__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DataProvider_User__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fitness_plan_fitness_plan__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__test_test__ = __webpack_require__(121);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.angularfire = angularfire;
        this.navParams = navParams;
        this.events = events;
        this.dataUser = [];
        this.onlogUser = new __WEBPACK_IMPORTED_MODULE_4__DataProvider_User__["a" /* User */]();
        this.dataQuestion = [];
        this.Collections = [{ imageCollections: "../../assets/imgs/TrainLike1.jpg" },
            { imageCollections: "../../assets/imgs/TrainLike2.jpg" },
            { imageCollections: "../../assets/imgs/TrainLike3.jpg" }
        ];
        this.Workouts = [{ imageWorkouts: "../../assets/imgs/Workouts1.jpg" },
            { imageWorkouts: "../../assets/imgs/Workouts2.jpg" },
            { imageWorkouts: "../../assets/imgs/Workouts3.jpg" }
        ];
        this.onlogUser = this.navParams.data;
        this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
        this.dataUserSend = this.navParams.data;
        console.dir(this.dataUserSend);
        console.dir(this.onlogUser);
        this.fireUser = this.angularfire.list('/User/');
        this.fireUser.subscribe(function (data) {
            _this.dataUser = data;
            console.log(data);
        });
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
    HomePage.prototype.workouts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__test_test__["a" /* TestPage */], this.onlogUser);
    };
    HomePage.prototype.startPlan = function () {
        for (var i = 0; i < this.dataUser.length; i++) {
            console.log("for");
            if (this.onlogUser.UserKey == this.dataUser[i].$key) {
                this.dataUserSend = this.dataUser[i];
            }
        }
        console.log("start");
        console.log(this.dataUserSend);
        if (this.dataUserSend.fitplan != "null" && this.dataUserSend.foodplan != "null") {
            console.log("if");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__fitness_plan_fitness_plan__["a" /* FitnessPlanPage */], this.dataUserSend);
        }
        else {
            console.log("else");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__question_question__["a" /* QuestionPage */], this.onlogUser);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\home\home.html"*/'<ion-header >\n\n  		<ion-navbar>\n\n  			<ion-icon item-end name="md-person" (click) = "profile()"></ion-icon>\n\n    		<ion-title><h1>TrainHere</h1></ion-title>\n\n  		</ion-navbar>\n\n</ion-header>\n\n<ion-content  class="body">\n\n	<div id="stripe">\n\n		<button ion-button class="navButton" (click) = home()>Workout Feed</button>\n\n		<button ion-button class="navButton" (click) = workouts()>Workouts</button>\n\n		<button ion-button class="navButton" (click) = startPlan()>Plan</button>	\n\n	</div>\n\n	<p class="label">Popular workout collections</p>\n\n	<ion-slides autoplay="5000" loop="true" speed="3000">\n\n   		<ion-slide *ngFor="let slide of Collections">\n\n   			<img src="{{slide.imageCollections}}"/>\n\n    	</ion-slide>\n\n  	</ion-slides>\n\n	<p class="label">New workouts</p>\n\n	<ion-slides autoplay="5000" loop="true" speed="3000">\n\n    	<ion-slide *ngFor="let slide of Workouts">\n\n      		<img src="{{slide.imageWorkouts}}" />\n\n    	</ion-slide>\n\n  	</ion-slides>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DataProvider_User__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(21);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
        console.log("Redirect Complete");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\login\login.html"*/'\n\n<ion-content  class="body" padding>\n\n  <img src="../../assets/imgs/workout.png" class="LoginLogo">\n\n  <h1>Welcome to TrainHere</h1>\n\n  <p class="description">Personal Healthy Plan</p>\n\n  <ion-item class="emailInput">\n\n    <ion-icon item-start name="md-person"></ion-icon>\n\n    <ion-input [(ngModel)]="email" type="text" placeholder="Email" required></ion-input>\n\n  </ion-item>\n\n  <br>\n\n  <ion-item class="passInput">\n\n    <ion-icon item-start name="md-lock"></ion-icon>\n\n    <ion-input [(ngModel)]="password" type="password" placeholder="Password" required ></ion-input>\n\n  </ion-item>\n\n   <ion-grid>\n\n        <ion-row>\n\n            <ion-col >\n\n                <button ion-button round small class="loginButton" (click)="login(email,password)">Login</button>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col >\n\n                <button ion-button round small class="signUpButton" (click)="redirectToRegister()">Sign Up</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <p class="ForgetPassword">Forget Password?</p>\n\n    <p class="Privacy">By logging in, you agree to TrainHere Privacy Policy and Terms of Use</p>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Book\Documents\GitHub\Senior-Project\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

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

},[226]);
//# sourceMappingURL=main.js.map