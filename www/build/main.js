webpackJsonp([11],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(28);
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
                if (this.onlogUser.gender == this.dataFitnessPlan[i].gender[0] || this.onlogUser.gender == this.dataFitnessPlan[i].gender[1]) {
                    console.log("gender");
                    if (this.itemKey[0].PD == this.dataFitnessPlan[i].difficult) {
                        console.log("difficult");
                        if (this.itemKey[0].PI == this.dataFitnessPlan[i].intensity) {
                            console.log("intensity");
                            for (var a = 0; a < this.dataFitnessPlan[i].equipment.length; a++) {
                                if (this.itemKey[0].Equipment == this.dataFitnessPlan[i].equipment[a]) {
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
            }
            for (var j = 0; j < this.dataFoodPlan.length; j++) {
                console.log("for");
                console.log(this.itemKey[0]);
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
                            var alert_1 = this.alertCtrl.create({
                                title: 'Success',
                                subTitle: 'Success',
                                buttons: ['OK']
                            });
                            alert_1.present();
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], this.onlogUser);
                        }
                    }
                }
            }
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Fail',
                subTitle: 'Please fill up this form',
                buttons: ['OK']
            });
            alert_2.present();
            console.log('Valdiate : Invalid');
        }
    };
    QuestionPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], this.onlogUser);
    };
    QuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-question',template:/*ion-inline-start:"/Users/apple/Projects/Senior-Project/src/pages/question/question.html"*/'<!--\n  Generated template for the QuestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n		<ion-navbar>\n		  <ion-icon large item-start name="ios-arrow-back" (click) = "back()"></ion-icon>\n		  <ion-title><h1>Question</h1></ion-title>\n		</ion-navbar>\n	</ion-header>\n\n<ion-content class="c" padding *ngFor= "let a of dataQuestion">\n	\n	<form class="list" [formGroup] = "questionForm">\n\n	<ion-list radio-group [(ngModel)]="equipment" formControlName="Equipment">\n		<ion-list-header class="b">\n			1. {{a.Question1.question}}\n		</ion-list-header>\n		<ion-item class="a">\n			<ion-label>{{a.Question1.choices[0]}}</ion-label>\n			<ion-radio value="None"></ion-radio>\n		</ion-item>\n		<ion-item class="a">\n			<ion-label>{{a.Question1.choices[1]}}</ion-label>\n			<ion-radio value="Dumbbell"></ion-radio>\n		</ion-item>\n		<ion-item class="a">\n			<ion-label>{{a.Question1.choices[2]}}</ion-label>\n			<ion-radio value="Pyrobox"></ion-radio>\n		</ion-item>\n	</ion-list>\n	<ion-list radio-group [(ngModel)]="workoutPerDay" formControlName="WPD">\n		<ion-list-header class="a">\n			2. {{a.Question2.question}}\n		</ion-list-header>\n		<ion-item class="a">\n			<ion-label>{{a.Question2.choices[0]}}</ion-label>\n			<ion-radio value="1-2"></ion-radio>\n		</ion-item>\n		<ion-item class="a">\n			<ion-label>{{a.Question2.choices[1]}}</ion-label>\n			<ion-radio value="2-3"></ion-radio>\n		</ion-item>\n		<ion-item class="a">\n			<ion-label>{{a.Question2.choices[2]}}</ion-label>\n			<ion-radio value="3-4"></ion-radio>\n		</ion-item>\n		<ion-item class="a">\n			<ion-label>{{a.Question2.choices[3]}}</ion-label>\n			<ion-radio value="4-5"></ion-radio>\n		</ion-item>\n	</ion-list>\n	<ion-list radio-group [(ngModel)]="planDifficult" formControlName="PD">\n		<ion-list-header class="a">\n			3. {{a.Question3.question}}\n		</ion-list-header>\n		<ion-item class="a">\n			<ion-label>{{a.Question3.choices[0]}}</ion-label>\n			<ion-radio value="Beginner"></ion-radio>\n		</ion-item>\n		<ion-item class="a">\n			<ion-label>{{a.Question3.choices[1]}}</ion-label>\n			<ion-radio value="Intermiadate"></ion-radio>\n		</ion-item>\n	</ion-list>\n	<ion-list radio-group [(ngModel)]="planIntensity" formControlName="PI">\n		<ion-list-header class="a">\n			4. {{a.Question4.question}}\n		</ion-list-header>\n		<ion-item class="a">\n			<ion-label>{{a.Question4.choices[0]}}</ion-label>\n			<ion-radio value=1></ion-radio>\n		</ion-item>\n		<ion-item class="a">\n			<ion-label>{{a.Question4.choices[1]}}</ion-label>\n			<ion-radio value=2></ion-radio>\n		</ion-item>\n		<ion-item class="a">\n			<ion-label>{{a.Question4.choices[2]}}</ion-label>\n			<ion-radio value=3></ion-radio>\n		</ion-item>\n	</ion-list>\n	<br>\n	<button ion-button type="submit" (click)="submit()">submit</button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Projects/Senior-Project/src/pages/question/question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], QuestionPage);
    return QuestionPage;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(28);
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
 * Generated class for the WorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkoutPage = /** @class */ (function () {
    function WorkoutPage(navCtrl, navParams, angularfire, events, loadingCtrl, domSanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularfire = angularfire;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.domSanitizer = domSanitizer;
        this.dataFitnessPlanVideo = [];
        this.dataFitnessPlanTitle = [];
        this.dataFitnessPlanArms = [];
        this.dataFitnessPlanShoulder = [];
        this.dataFitnessPlanBack = [];
        this.dataFitnessPlanLegs = [];
        this.dataFitnessPlanCardio = [];
        this.dataFitnessPlanChest = [];
        this.dataFitnessPlanAbs = [];
        this.buttonClicked1 = true;
        this.buttonClicked2 = false;
        this.onlogUser = this.navParams.data;
        this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
        this.fireFitnessPlanVideo = this.angularfire.list('/Video/');
        this.fireFitnessPlanVideo.subscribe(function (data) {
            _this.dataFitnessPlanVideo = data;
            console.log(data);
            _this.videoLink();
            //this.video = this.dataFitnessPlanUserVideo.Link;
            //this.ionViewWillEnter();
        });
        console.log("a");
        console.log(this.onlogUser);
    }
    WorkoutPage.prototype.ionViewWillEnter = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video);
        /*this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    
        this.loading.present();*/
        console.log(this.trustedVideoUrl);
    };
    WorkoutPage.prototype.videoLink = function () {
        for (var a = 0; a < this.dataFitnessPlanVideo.length; a++) {
            if (this.dataFitnessPlanVideo[a].Category == "Arms") {
                this.dataFitnessPlanArms.push(this.dataFitnessPlanVideo[a].Title);
            }
            else if (this.dataFitnessPlanVideo[a].Category == "Back") {
                this.dataFitnessPlanBack.push(this.dataFitnessPlanVideo[a].Title);
            }
            else if (this.dataFitnessPlanVideo[a].Category == "Shoulder") {
                this.dataFitnessPlanShoulder.push(this.dataFitnessPlanVideo[a].Title);
            }
            else if (this.dataFitnessPlanVideo[a].Category == "Legs") {
                this.dataFitnessPlanLegs.push(this.dataFitnessPlanVideo[a].Title);
            }
            else if (this.dataFitnessPlanVideo[a].Category == "Cardio") {
                this.dataFitnessPlanCardio.push(this.dataFitnessPlanVideo[a].Title);
            }
            else if (this.dataFitnessPlanVideo[a].Category == "Chest") {
                this.dataFitnessPlanChest.push(this.dataFitnessPlanVideo[a].Title);
            }
            else if (this.dataFitnessPlanVideo[a].Category == "Abs") {
                this.dataFitnessPlanAbs.push(this.dataFitnessPlanVideo[a].Title);
            }
            this.dataFitnessPlanTitle.push(this.dataFitnessPlanVideo[a].Title);
        }
    };
    WorkoutPage.prototype.click = function (title) {
        if (this.buttonClicked1 == true) {
            this.buttonClicked1 = !this.buttonClicked1;
            this.buttonClicked2 = !this.buttonClicked2;
        }
        for (var a = 0; a < this.dataFitnessPlanVideo.length; a++) {
            console.log("1");
            if (title == this.dataFitnessPlanVideo[a].Title) {
                console.log("2");
                this.video = this.dataFitnessPlanVideo[a].Link;
            }
        }
        this.ionViewWillEnter();
        console.log(title);
    };
    /*handleIFrameLoadEvent(): void {
      this.loading.dismiss();
    }*/
    WorkoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkoutPage');
    };
    WorkoutPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], this.onlogUser);
    };
    WorkoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-workout',template:/*ion-inline-start:"/Users/apple/Projects/Senior-Project/src/pages/workout/workout.html"*/'<!--\n  Generated template for the WorkoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-icon large item-start name="ios-arrow-back" (click) = "back()"></ion-icon>\n      <ion-title><h1>Workout</h1></ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="container1" padding>\n  <div *ngIf="buttonClicked1" [style.background]="\'url(\' + imagePath + \')\'">\n    <!--<ion-list *ngFor = "let title of dataFitnessPlanTitle">\n        <button (click)="click(title)">{{title}}</button>\n      </ion-list>-->\n    <h5>Arms</h5>\n    <ion-list *ngFor="let arm of dataFitnessPlanArms">\n      <button class="a" (click)="click(arm)">{{arm}}</button>\n    </ion-list>\n    <h5>Shoulder</h5>\n    <ion-list *ngFor="let shoulder of dataFitnessPlanShoulder">\n      <button  class="a" (click)="click(shoulder)">{{shoulder}}</button>\n    </ion-list>\n    <h5>Back</h5>\n    <ion-list *ngFor="let back of dataFitnessPlanBack">\n      <button  class="a" (click)="click(back)">{{back}}</button>\n    </ion-list>\n    <h5>Legs</h5>\n    <ion-list *ngFor="let leg of dataFitnessPlanLegs">\n      <button  class="a" (click)="click(leg)">{{leg}}</button>\n    </ion-list>\n    <h5>Cardio</h5>\n    <ion-list *ngFor="let cardio of dataFitnessPlanCardio">\n      <button  class="a" (click)="click(cardio)">{{cardio}}</button>\n    </ion-list>\n    <h5>Chest</h5>\n    <ion-list *ngFor="let chest of dataFitnessPlanChest">\n      <button  class="a" (click)="click(chest)">{{chest}}</button>\n    </ion-list>\n    <h5>Abs</h5>\n    <ion-list *ngFor="let abs of dataFitnessPlanAbs">\n      <button  class="a" (click)="click(abs)">{{abs}}</button>\n    </ion-list>\n  </div>\n  <div *ngIf="buttonClicked2" [style.background]="\'url(\' + imagePath + \')\'">\n    <iframe width="100%" height="315" [src]="trustedVideoUrl ? trustedVideoUrl : null" frameborder="0" allowfullscreen>\n    </iframe>\n    <!--<ion-list *ngFor = "let title of dataFitnessPlanTitle">\n      <button (click)="click(title)">{{title}}</button>\n    </ion-list>-->\n    <h5>Arms</h5>\n    <ion-list *ngFor="let arm of dataFitnessPlanArms">\n      <button  class="a" (click)="click(arm)">{{arm}}</button>\n    </ion-list>\n    <h5>Shoulder</h5>\n    <ion-list *ngFor="let shoulder of dataFitnessPlanShoulder">\n      <button  class="a" (click)="click(shoulder)">{{shoulder}}</button>\n    </ion-list>\n    <h5>Back</h5>\n    <ion-list *ngFor="let back of dataFitnessPlanBack">\n      <button  class="a" (click)="click(back)">{{back}}</button>\n    </ion-list>\n    <h5>Legs</h5>\n    <ion-list *ngFor="let leg of dataFitnessPlanLegs">\n      <button  class="a" (click)="click(leg)">{{leg}}</button>\n    </ion-list>\n    <h5>Cardio</h5>\n    <ion-list *ngFor="let cardio of dataFitnessPlanCardio">\n      <button  class="a" (click)="click(cardio)">{{cardio}}</button>\n    </ion-list>\n    <h5>Chest</h5>\n    <ion-list *ngFor="let chest of dataFitnessPlanChest">\n      <button  class="a" (click)="click(chest)">{{chest}}</button>\n    </ion-list>\n    <h5>Abs</h5>\n    <ion-list *ngFor="let abs of dataFitnessPlanAbs">\n      <button  class="a" (click)="click(abs)">{{abs}}</button>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/apple/Projects/Senior-Project/src/pages/workout/workout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], WorkoutPage);
    return WorkoutPage;
}());

//# sourceMappingURL=workout.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DataProvider_User__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(28);
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







/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, angularfire, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularfire = angularfire;
        this.events = events;
        this.data = [];
        this.dataUser = [];
        this.onlogUser = new __WEBPACK_IMPORTED_MODULE_3__DataProvider_User__["a" /* User */]();
        this.onlogUser = this.navParams.data;
        this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
        this.fireUser = this.angularfire.list('/User/');
        this.fireUser.subscribe(function (data) {
            _this.dataUser = data;
            console.log(data);
        });
        console.log(this.onlogUser);
        this.data.push({
            fName: this.onlogUser.fName,
            lName: this.onlogUser.lName,
            email: this.onlogUser.email,
            gender: this.onlogUser.gender,
            height: this.onlogUser.height,
            weight: this.onlogUser.weight,
            waistMeasurement: this.onlogUser.waistMeasurement,
            dateofbirth: this.onlogUser.dateofbirth
        });
        console.log(this.data);
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], this.onlogUser);
    };
    ProfilePage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/apple/Projects/Senior-Project/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-icon large item-start name="ios-arrow-back" (click)="back()"></ion-icon>\n    <ion-title>\n      <h1>Profile</h1>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="container" padding>\n  <ion-list *ngFor="let a of data">\n    <h5>First Name : {{a.fName}}</h5>\n    <h5>Last Name : {{a.lName}}</h5>\n    <h5>Email : {{a.email}}</h5>\n    <h5>Gender : {{a.gender}}</h5>\n    <h5>height : {{a.height}}</h5>\n    <h5>weight : {{a.weight}}</h5>\n    <h5>waistMeasurement : {{a.waistMeasurement}}</h5>\n    <h5>dateofbirth : {{a.dateofbirth}}</h5>\n  </ion-list>\n  <button ion-button type="submit" (click)="logout()" class="submit">Logout</button>\n</ion-content>'/*ion-inline-end:"/Users/apple/Projects/Senior-Project/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DataProvider_User__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(14);
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
                            title: 'Please fill up this form',
                            subTitle: 'Please fill up this form',
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
            selector: 'page-register',template:/*ion-inline-start:"/Users/apple/Projects/Senior-Project/src/pages/register/register.html"*/'<ion-content padding class="body">\n  <img src="img/workout.png" class="LoginLogo">\n  <h1>Register to TrainHere</h1>\n  <ion-item class="emailInput">\n    <ion-label>Email : </ion-label>\n    <ion-input type="email" [(ngModel)]="email" placeholder="Email" name="emailInput" required ></ion-input>\n  </ion-item>\n  <ion-item class="otherInput">\n    <ion-label>Password : </ion-label>\n    <ion-input type="password" [(ngModel)]="password" placeholder="Password" name="passwordInput" required></ion-input>\n  </ion-item>\n  <ion-item class="otherInput">\n    <ion-label>Firstname : </ion-label>\n    <ion-input [(ngModel)]="fName" type="text" placeholder="Firstname" required ></ion-input>\n  </ion-item>\n  <ion-item class="otherInput">\n    <ion-label>Lastname : </ion-label>\n    <ion-input [(ngModel)]="lName" type="text" placeholder="Lastname" required ></ion-input>\n  </ion-item>\n  <ion-item class="otherInput">\n    <ion-label>Weight (kg) : </ion-label>\n    <ion-input [(ngModel)]="weight" type="number" min="20" max="300" placeholder="Weight" required ></ion-input><\n  </ion-item>\n  <ion-item class="otherInput">\n    <ion-label>Hegiht (cm) : </ion-label>\n    <ion-input [(ngModel)]="height" type="number" min="50" max="300" placeholder="Height" required ></ion-input>CM\n  </ion-item>\n  <ion-item class="otherInput">\n    <ion-label>Waist (inch) : </ion-label>\n    <ion-input [(ngModel)]="waistMeasurement" type="number" min="10" max="50" required placeholder = "Waist Measurement"></ion-input>Inch\n  </ion-item>\n  <ion-item class="otherInput">\n    <ion-label>Gender : </ion-label>\n    <ion-select [(ngModel)]="gender" required >\n        <ion-option value="Male">Male</ion-option>\n        <ion-option value="Female">Female</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item class="dateInput">\n    <ion-label>Date of birth : </ion-label>\n    <ion-datetime displayFormat="DD/MM/YYYY" max="2010-12-31" [(ngModel)]="dateofbirth" placeholder = "DD/MM/YYYY"></ion-datetime>\n  </ion-item>\n  <button ion-button round small class="backButton" (click)="back()">Back</button>\n  <button ion-button round small class="signUpButton" (click)="register(email,password,fName,lName,weight,height,waistMeasurement,dateofbirth,gender)">Sign Up</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Projects/Senior-Project/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitnessPlan3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fitness_plan2_fitness_plan2__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(20);
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
        this.dataFitnessPlanAmount = [];
        this.dataFitnessPlanTitleVideo = [];
        this.dataFitnessPlanLinkVideo = [];
        this.dataUser = [];
        this.data = [];
        this.buttonClicked1 = true;
        this.buttonClicked2 = false;
        this.buttonClicked3 = false;
        this.b = 0;
        this.c = 0;
        this.onlogUser = this.navParams.data;
        this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
        this.fireUser = this.angularfire.list('/User/');
        this.fireTest = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/userAnswer/');
        /*this.fireUser.subscribe(data => {
          this.dataUser = data;
          console.log(data);
        });*/
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
                //this.video = this.dataFitnessPlanUserVideo.Link;
                console.log(_this.dataFitnessPlanVideo);
                console.log(_this.video);
                _this.userPlanKey = _this.onlogUser.fitplan;
                console.log(_this.userPlanKey);
                for (var j = 0; j < _this.dataFitnessPlan.length; j++) {
                    console.log("for");
                    if (_this.userPlanKey == _this.dataFitnessPlan[j].$key) {
                        _this.dataFitnessPlanUser = _this.dataFitnessPlan[j];
                        console.log(_this.dataFitnessPlanUser);
                        console.log(_this.userPlanKey);
                    }
                }
                _this.title();
                _this.ionViewWillEnter();
            });
        });
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
    /*videoKey() {
      for (let i = 0; i < this.dataFitnessPlanVideo.length; i++) {
        console.log("for");
        if (this.dataFitnessPlanUser.week.week1.day1.set1.workout2.title == this.dataFitnessPlanVideo[i].Title) {
          this.dataFitnessPlanUserVideo = this.dataFitnessPlanVideo[i];
          console.log();
        }
      }
    }*/
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
    FitnessPlan3Page.prototype.title = function () {
        for (var k = 0; k < this.dataFitnessPlanUser.weeks[0].days[this.b].sets.length; k++) {
            console.log("3");
            for (var m = 0; m < this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts.length; m++) {
                console.log("4");
                for (var z = 0; z < 7; z++) {
                    if (this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title == "set" + z) {
                        this.data.push({
                            title: this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title,
                            amount: this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].amount
                        });
                    }
                }
                for (var a = 0; a < this.dataFitnessPlanVideo.length; a++) {
                    console.log("5");
                    if (this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title == "Rest day") {
                        console.log("5.1");
                        this.rest = "week " + (this.c + 1) + "   Day " + (this.b + 1) + ":Rest day";
                        this.buttonClicked1 = false;
                        this.buttonClicked2 = true;
                        this.buttonClicked3 = false;
                    }
                    else {
                        this.rest = "week " + (this.c + 1) + "   Day " + (this.b + 1);
                        if (this.c == 0 && this.b == 0) {
                            this.buttonClicked1 = true;
                            this.buttonClicked2 = false;
                            this.buttonClicked3 = false;
                        }
                        else {
                            this.buttonClicked1 = false;
                            this.buttonClicked2 = false;
                            this.buttonClicked3 = true;
                        }
                        if (this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title == this.dataFitnessPlanVideo[a].Title) {
                            console.log("6");
                            this.data.push({
                                title: this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title,
                                amount: this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].amount
                            });
                            this.dataFitnessPlanUserVideo.push(this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title);
                            //if(this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].amount == "None"){
                            //this.dataFitnessPlanAmount = [];
                            //}else{  
                            //this.dataFitnessPlanAmount.push(this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].amount);
                            //}
                            console.log(this.dataFitnessPlanAmount);
                        }
                    }
                }
            }
        }
        for (var a = 0; a < this.dataFitnessPlanVideo.length; a++) {
            console.log("12");
            if (this.dataFitnessPlanUserVideo[0] == this.dataFitnessPlanVideo[a].Title) {
                this.video = this.dataFitnessPlanVideo[a].Link;
            }
        }
        /*for(let i = 0;i < this.dataFitnessPlanUserVideo.length; i++){
          this.data.push({
           title: this.dataFitnessPlanUserVideo[i],
           amount: this.dataFitnessPlanAmount[i]
          });
        }console.log(this.data);*/
    };
    FitnessPlan3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FitnessPlan3Page');
    };
    FitnessPlan3Page.prototype.click = function (title) {
        console.log(title);
        for (var a = 0; a < this.dataFitnessPlanVideo.length; a++) {
            console.log("1");
            if (title == this.dataFitnessPlanVideo[a].Title) {
                console.log("2");
                this.video = this.dataFitnessPlanVideo[a].Link;
            }
        }
        this.ionViewWillEnter();
        console.log(this.video);
        console.log(this.dataFitnessPlanVideo);
    };
    FitnessPlan3Page.prototype.submit = function () {
        console.log(this.b);
        console.log(this.c);
        if (this.c != 3 && this.b == 6) {
            console.log("a");
            this.b = 0;
            this.c++;
            this.dataFitnessPlanUserVideo = [];
            this.dataFitnessPlanAmount = [];
            this.data = [];
            this.title();
            this.ionViewWillEnter();
        }
        else if (this.c == 3 && this.b == 6) {
            console.log("b");
            var alert_1 = this.alertCtrl.create({
                title: 'Finish Plan',
                subTitle: 'Finish Plan',
                buttons: ['OK']
            });
            alert_1.present();
            this.fireUser.update(this.onlogUser.UserKey, { fitplan: "null" });
            this.fireUser.update(this.onlogUser.UserKey, { foodplan: "null" });
            this.fireTest.remove();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], this.onlogUser);
        }
        else {
            console.log("c");
            this.b++;
            this.dataFitnessPlanUserVideo = [];
            this.dataFitnessPlanAmount = [];
            this.data = [];
            this.title();
            this.ionViewWillEnter();
        }
    };
    FitnessPlan3Page.prototype.previous = function () {
        if (this.b == 0) {
            this.b = 6;
            this.c--;
            this.dataFitnessPlanUserVideo = [];
            this.dataFitnessPlanAmount = [];
            this.data = [];
            this.title();
            this.ionViewWillEnter();
        }
        else {
            this.b--;
            this.dataFitnessPlanUserVideo = [];
            this.dataFitnessPlanAmount = [];
            this.data = [];
            this.title();
            this.ionViewWillEnter();
        }
    };
    FitnessPlan3Page.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__fitness_plan2_fitness_plan2__["a" /* FitnessPlan2Page */], this.onlogUser);
    };
    FitnessPlan3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fitness-plan3',template:/*ion-inline-start:"/Users/apple/Projects/Senior-Project/src/pages/fitness-plan3/fitness-plan3.html"*/'<!--\n  Generated template for the FitnessPlan3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n    <ion-navbar>\n      <ion-icon large item-start name="ios-arrow-back" (click) = "back()"></ion-icon>\n      <ion-title><h1>FitnessPlan</h1></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="container">\n  <div *ngIf="buttonClicked1">\n    <iframe width="100%"\n            height="315"\n            [src]="trustedVideoUrl ? trustedVideoUrl : null"\n            frameborder="0"\n            allowfullscreen>\n    </iframe>\n    {{rest}}<br><br><br>\n    <ion-list *ngFor = "let title of data">\n      <p *ngIf="title.title == \'set1\'||title.title == \'set2\'||title.title == \'set3\'||title.title == \'set4\'||\n      title.title == \'set5\'||title.title == \'set6\';else not">{{title.title}}</p>\n      <ng-template #not>\n      <button (click)="click(title.title)" class="back">{{title.title}}</button>&nbsp;&nbsp;&nbsp;&nbsp;\n      {{title.amount}}\n      </ng-template>\n    </ion-list>\n    <div class="container1">\n      <br><button ion-button type="submit" (click)="submit()" class="submitButton1">Next</button>\n    </div>\n  </div>\n\n  <div *ngIf="buttonClicked2">\n      {{rest}}<br><br><br>\n      <ion-list *ngFor = "let title of data">\n        <button (click)="click(title.title)" class="back">{{title.title}}</button>\n        {{title.amount}}\n      </ion-list>\n      <div class="container1">\n        <br><button ion-button type="submit" (click)="submit()" class="submitButton1">Next</button>\n      </div>\n      <div class="container2">\n          <br><button ion-button type="submit" (click)="previous()" class="submitButton1">previous</button>\n      </div>\n  </div>\n\n  <div *ngIf="buttonClicked3">\n      <iframe width="100%"\n              height="315"\n              [src]="trustedVideoUrl ? trustedVideoUrl : null"\n              frameborder="0"\n              allowfullscreen>\n      </iframe>\n      {{rest}}<br><br><br>\n      <ion-list *ngFor = "let title of data">\n          <p *ngIf="title.title == \'set1\'||title.title == \'set2\'||title.title == \'set3\'||title.title == \'set4\'||\n          title.title == \'set5\'||title.title == \'set6\';else not">{{title.title}}</p>\n          <ng-template #not>\n          <button (click)="click(title.title)" class="back">{{title.title}}</button>&nbsp;&nbsp;&nbsp;&nbsp;\n          {{title.amount}}\n          </ng-template>\n      </ion-list>\n      <div class="container1">\n        <br><button ion-button type="submit" (click)="submit()" class="submitButton1">Next</button>\n      </div>\n      <div class="container2">\n        <br><button ion-button type="submit" (click)="previous()" class="submitButton1">previous</button>\n      </div>\n\n  </div>\n  <!--<ion-list *ngFor = "let title of dataFitnessPlanTitleVideo">\n    <h1>{{title}}<br></h1>  \n  </ion-list>-->\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Projects/Senior-Project/src/pages/fitness-plan3/fitness-plan3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]])
    ], FitnessPlan3Page);
    return FitnessPlan3Page;
}());

//# sourceMappingURL=fitness-plan3.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodPlan2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__food_plan_food_plan__ = __webpack_require__(66);
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
 * Generated class for the FoodPlan2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FoodPlan2Page = /** @class */ (function () {
    function FoodPlan2Page(navCtrl, navParams, angularfire, events, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularfire = angularfire;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.dataFoodNutrition = [];
        this.dataFoodPlan = [];
        this.dataFoodPlanUser = [];
        this.buttonClicked1 = true;
        this.onlogUser = this.navParams.data;
        this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
        this.dataUserSend = this.navParams.data;
        console.dir(this.onlogUser);
        this.fireFoodNutrition = this.angularfire.list('/FoodNutrition/');
        this.fireFoodNutrition.subscribe(function (data) {
            _this.dataFoodNutrition = data;
            console.log(data);
        });
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
                for (var i = 0; i < this.dataFoodNutrition.length; i++) {
                    console.log("for");
                    if (i == 0) {
                        console.log("test");
                        console.log(this.dataFoodNutrition[i].volume);
                        this.proteinAfter = (this.dataFoodPlan[j].meals.afterWorkout.protein * this.dataFoodNutrition[i].volume) / this.dataFoodNutrition[i].protein;
                        console.log("proteinAfter" + this.proteinAfter);
                        this.proteinBefore = (this.dataFoodPlan[j].meals.beforeWorkout.protein * this.dataFoodNutrition[i].volume) / this.dataFoodNutrition[i].protein;
                        console.log("proteinBefore" + this.proteinBefore);
                        this.proteinBreakfast = (this.dataFoodPlan[j].meals.breakfast.protein * this.dataFoodNutrition[i].volume) / this.dataFoodNutrition[i].protein;
                        console.log("proteinBreakfast" + this.proteinBreakfast);
                        this.proteinLunch = (this.dataFoodPlan[j].meals.lunch.protein * this.dataFoodNutrition[i].volume) / this.dataFoodNutrition[i].protein;
                        console.log("proteinLunch" + this.proteinLunch);
                    }
                    if (i == 1) {
                        this.fatAfter = (this.dataFoodPlan[j].meals.afterWorkout.fat * this.dataFoodNutrition[i].volume) / this.dataFoodNutrition[i].fat;
                        console.log("fatAfter" + this.fatAfter);
                        this.fatBefore = (this.dataFoodPlan[j].meals.beforeWorkout.fat * this.dataFoodNutrition[i].volume) / this.dataFoodNutrition[i].fat;
                        console.log("fatBefore" + this.fatBefore);
                        this.fatBreakfast = (this.dataFoodPlan[j].meals.breakfast.fat * this.dataFoodNutrition[i].volume) / this.dataFoodNutrition[i].fat;
                        console.log("fatBreakfast" + this.fatBreakfast);
                        this.fatLunch = (this.dataFoodPlan[j].meals.lunch.fat * this.dataFoodNutrition[i].volume) / this.dataFoodNutrition[i].fat;
                        console.log("fatLunch" + this.fatLunch);
                    }
                    if (i == 2) {
                        this.carbohydrateAfter = (this.dataFoodPlan[j].meals.afterWorkout.carbohydrate * this.dataFoodNutrition[i].volume) / this.dataFoodNutrition[i].carbohydrates;
                        console.log("carbohydrateAfter" + this.carbohydrateAfter);
                        this.carbohydrateBefore = (this.dataFoodPlan[j].meals.beforeWorkout.carbohydrate * this.dataFoodNutrition[i].volume) / this.dataFoodNutrition[i].carbohydrates;
                        console.log("carbohydrateBefore" + this.carbohydrateBefore);
                        this.carbohydrateBreakfast = (this.dataFoodPlan[j].meals.breakfast.carbohydrate * this.dataFoodNutrition[i].volume) / this.dataFoodNutrition[i].carbohydrates;
                        console.log("carbohydrateBreakfast" + this.carbohydrateBreakfast);
                        this.carbohydrateLunch = (this.dataFoodPlan[j].meals.lunch.carbohydrate * this.dataFoodNutrition[i].volume) / this.dataFoodNutrition[i].carbohydrates;
                        console.log("carbohydrateLunch" + this.carbohydrateLunch);
                    }
                }
            }
        }
    }
    FoodPlan2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodPlan2Page');
    };
    FoodPlan2Page.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__food_plan_food_plan__["a" /* FoodPlanPage */], this.dataUserSend);
    };
    FoodPlan2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-plan2',template:/*ion-inline-start:"/Users/apple/Projects/Senior-Project/src/pages/food-plan2/food-plan2.html"*/'<!--\n  Generated template for the FoodPlan2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n		<ion-icon large item-start name="ios-arrow-back" (click) = "back()"></ion-icon>\n    <ion-title>food-plan2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n	<div class="container1" *ngIf="buttonClicked1">\n		\n		<h1>"FoodNutrition"</h1>\n		<div class="foodDetail">\n			<div class="detailBox">\n				<h2 class="header">After Workout</h2>\n				<p class = "detail">Chicken raw {{proteinAfter.toFixed()}} grams</p>\n				<p class = "detail">Plam oil {{fatAfter.toFixed()}} grams</p>\n				<p class = "detail">Rice boiled {{carbohydrateAfter.toFixed()}} grams</p>\n			</div>\n			<div class="detailBox">\n				<h2 class="header">Before Workout</h2>\n				<p class = "detail">Chicken raw {{proteinBefore.toFixed()}} grams</p>\n				<p class = "detail">Plam oil {{fatBefore.toFixed()}} grams</p>\n				<p class = "detail">Rice boiled {{carbohydrateBefore.toFixed()}} grams</p>\n			</div>\n			<div class="detailBox">\n				<h2 class="header">Breakfast</h2>\n				<p class = "detail">Chicken raw {{proteinBreakfast.toFixed()}} grams</p>\n				<p class = "detail">Plam oil {{fatBreakfast.toFixed()}} grams</p>\n				<p class = "detail">Rice boiled {{carbohydrateBreakfast.toFixed()}} grams</p>\n			</div>\n			<div class="detailBox">\n				<h2 class="header">Lunch</h2>\n				<p class = "detail">Chicken raw {{proteinLunch.toFixed()}} grams</p>\n				<p class = "detail">Plam oil {{fatLunch.toFixed()}} grams</p>\n				<p class = "detail">Rice boiled {{carbohydrateLunch.toFixed()}} grams</p>\n			</div>\n		</div>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Projects/Senior-Project/src/pages/food-plan2/food-plan2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FoodPlan2Page);
    return FoodPlan2Page;
}());

//# sourceMappingURL=food-plan2.js.map

/***/ }),

/***/ 132:
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
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/fitness-plan/fitness-plan.module": [
		329,
		10
	],
	"../pages/fitness-plan2/fitness-plan2.module": [
		330,
		9
	],
	"../pages/fitness-plan3/fitness-plan3.module": [
		331,
		8
	],
	"../pages/food-plan/food-plan.module": [
		333,
		7
	],
	"../pages/food-plan2/food-plan2.module": [
		332,
		6
	],
	"../pages/login/login.module": [
		334,
		5
	],
	"../pages/profile/profile.module": [
		335,
		4
	],
	"../pages/question/question.module": [
		336,
		3
	],
	"../pages/register/register.module": [
		337,
		2
	],
	"../pages/test/test.module": [
		338,
		1
	],
	"../pages/workout/workout.module": [
		339,
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
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(20);
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
            selector: 'page-test',template:/*ion-inline-start:"/Users/apple/Projects/Senior-Project/src/pages/test/test.html"*/'<!--\n  Generated template for the TestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            YouTube Video Embed\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <iframe width="100%"\n            height="315"\n            [src]="trustedVideoUrl ? trustedVideoUrl : null"\n            (load)="trustedVideoUrl ? handleIFrameLoadEvent() : null"\n            frameborder="0"\n            allowfullscreen></iframe>\n    \n    <h2>{{ video?.title }}</h2>\n</ion-content>'/*ion-inline-end:"/Users/apple/Projects/Senior-Project/src/pages/test/test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_question_question__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_fitness_plan_fitness_plan__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_fitness_plan2_fitness_plan2__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_fitness_plan3_fitness_plan3__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_test_test__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_food_plan_food_plan__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_workout_workout__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_food_plan2_food_plan2__ = __webpack_require__(126);
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
                __WEBPACK_IMPORTED_MODULE_18__pages_food_plan_food_plan__["a" /* FoodPlanPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_workout_workout__["a" /* WorkoutPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_food_plan2_food_plan2__["a" /* FoodPlan2Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/fitness-plan/fitness-plan.module#FitnessPlanPageModule', name: 'FitnessPlanPage', segment: 'fitness-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fitness-plan2/fitness-plan2.module#FitnessPlan2PageModule', name: 'FitnessPlan2Page', segment: 'fitness-plan2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fitness-plan3/fitness-plan3.module#FitnessPlan3PageModule', name: 'FitnessPlan3Page', segment: 'fitness-plan3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-plan2/food-plan2.module#FoodPlan2PageModule', name: 'FoodPlan2Page', segment: 'food-plan2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-plan/food-plan.module#FoodPlanPageModule', name: 'FoodPlanPage', segment: 'food-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/question/question.module#QuestionPageModule', name: 'QuestionPage', segment: 'question', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workout/workout.module#WorkoutPageModule', name: 'WorkoutPage', segment: 'workout', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_18__pages_food_plan_food_plan__["a" /* FoodPlanPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_workout_workout__["a" /* WorkoutPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_food_plan2_food_plan2__["a" /* FoodPlan2Page */]
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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_question__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DataProvider_User__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fitness_plan_fitness_plan__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workout_workout__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(123);
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
        this.onlogUser = new __WEBPACK_IMPORTED_MODULE_3__DataProvider_User__["a" /* User */]();
        this.dataQuestion = [];
        this.Collections = [{ imageCollections: "img/TrainLike1.jpg" },
            { imageCollections: "img/TrainLike2.jpg" },
            { imageCollections: "img/TrainLike3.jpg" }
        ];
        this.Workouts = [{ imageWorkouts: "img/Workouts1.jpg" },
            { imageWorkouts: "img//Workouts2.jpg" },
            { imageWorkouts: "img/Workouts3.jpg" }
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
        console.log(this.onlogUser);
    }
    HomePage.prototype.workouts = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__workout_workout__["a" /* WorkoutPage */], this.onlogUser);
    };
    HomePage.prototype.startPlan = function () {
        for (var i = 0; i < this.dataUser.length; i++) {
            console.log("for");
            if (this.onlogUser.UserKey == this.dataUser[i].$key) {
                this.dataUserSend = this.dataUser[i];
            }
        }
        console.log("start");
        if (this.dataUserSend.fitplan != "null" && this.dataUserSend.foodplan != "null") {
            console.log("if");
            for (var i = 0; i < this.dataUser.length; i++) {
                if (this.onlogUser.UserKey == this.dataUser[i].$key) {
                    this.onlogUser = this.dataUser[i];
                    this.onlogUser.UserKey = this.dataUser[i].$key;
                }
            }
            console.log(this.onlogUser);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__fitness_plan_fitness_plan__["a" /* FitnessPlanPage */], this.onlogUser);
        }
        else {
            console.log("else");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__question_question__["a" /* QuestionPage */], this.onlogUser);
        }
        console.log(this.onlogUser);
    };
    HomePage.prototype.profile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */], this.onlogUser);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/apple/Projects/Senior-Project/src/pages/home/home.html"*/'<ion-header >\n  		<ion-navbar>\n  			<ion-icon item-end name="md-person" (click) = "profile()"></ion-icon>\n    		<ion-title><h1>TrainHere</h1></ion-title>\n  		</ion-navbar>\n</ion-header>\n<ion-content  class="body">\n	<div id="stripe">\n		<button ion-button class="navButton" (click) = home()>Workout Feed</button>\n		<button ion-button class="navButton" (click) = workouts()>Workouts</button>\n		<button ion-button class="navButton" (click) = startPlan()>Plan</button>	\n	</div>\n	<p class="label">Popular workout collections</p>\n	<ion-slides autoplay="5000" loop="true" speed="3000">\n   		<ion-slide *ngFor="let slide of Collections">\n   			<img src="{{slide.imageCollections}}"/>\n    	</ion-slide>\n  	</ion-slides>\n	<p class="label">New workouts</p>\n	<ion-slides autoplay="5000" loop="true" speed="3000">\n    	<ion-slide *ngFor="let slide of Workouts">\n      		<img src="{{slide.imageWorkouts}}" />\n    	</ion-slide>\n  	</ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Projects/Senior-Project/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(224);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/apple/Projects/Senior-Project/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/apple/Projects/Senior-Project/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DataProvider_User__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(14);
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/apple/Projects/Senior-Project/src/pages/login/login.html"*/'\n<ion-content  class="body" padding>\n  <img src="img/workout.png" class="LoginLogo">\n  <h1>Welcome to TrainHere :)</h1>\n  <p class="description">Personal Healthy Plan</p>\n  <ion-item class="emailInput">\n    <ion-icon item-start name="md-person"></ion-icon>\n    <ion-input [(ngModel)]="email" type="text" placeholder="Email" required></ion-input>\n  </ion-item>\n  <br>\n  <ion-item class="passInput">\n    <ion-icon item-start name="md-lock"></ion-icon>\n    <ion-input [(ngModel)]="password" type="password" placeholder="Password" required ></ion-input>\n  </ion-item>\n   <ion-grid>\n        <ion-row>\n            <ion-col >\n                <button ion-button round small class="loginButton" (click)="login(email,password)">Login</button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col >\n                <button ion-button round small class="signUpButton" (click)="redirectToRegister()">Sign Up</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <p class="ForgetPassword">Forget Password?</p>\n    <p class="Privacy">By logging in, you agree to TrainHere Privacy Policy and Terms of Use</p>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Projects/Senior-Project/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 58:
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

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitnessPlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fitness_plan2_fitness_plan2__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__food_plan_food_plan__ = __webpack_require__(66);
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
        this.imagePath = "img/plan4.jpg";
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
        this.fireTest = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/userAnswer/');
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
        console.log(this.onlogUser);
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
        console.log(this.onlogUser.fitplan);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__fitness_plan2_fitness_plan2__["a" /* FitnessPlan2Page */], this.onlogUser);
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
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__food_plan_food_plan__["a" /* FoodPlanPage */], this.dataUserSend);
        }
    };
    FitnessPlanPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], this.onlogUser);
    };
    FitnessPlanPage.prototype.endplan = function () {
        var alert = this.alertCtrl.create({
            title: 'End Plan',
            subTitle: 'End Plan',
            buttons: ['OK']
        });
        alert.present();
        this.fireUser.update(this.onlogUser.UserKey, { fitplan: "null" });
        this.fireUser.update(this.onlogUser.UserKey, { foodplan: "null" });
        this.fireTest.remove();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], this.onlogUser);
    };
    FitnessPlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fitness-plan',template:/*ion-inline-start:"/Users/apple/Projects/Senior-Project/src/pages/fitness-plan/fitness-plan.html"*/'<!--\n  Generated template for the FitnessPlanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content >\n	<!--<div class="container1" *ngIf="buttonClicked1" [style.background]="\'url(\' + imagePath + \')\'">\n		<ion-icon large item-start name="ios-arrow-back" (click) = "back()"></ion-icon>\n		<h1>"{{dataFitnessPlanUser.category}}"</h1>\n		<div class="planDetail">\n			<div class="detailBox">\n				<p class = "detail">{{dataFitnessPlanUser.avgtime}} Min</p>\n				<p class="header">Avg. Minute</p>\n			</div>\n			<div class="detailBox">\n				<p class = "detail">{{dataFitnessPlanUser.difficult}}</p>\n				<p class="header">difficult</p>\n			</div>\n			<div class="detailBox">\n				<p class = "detail">Level {{dataFitnessPlanUser.intensity}}</p>\n				<p class="header">intensity</p>\n			</div>\n			<button ion-button type="submit" (click)="submit2()" class="submitButton1">"Start Your Plan"</button>\n		</div>\n		\n	</div>-->\n	<div class="container2" *ngIf="buttonClicked2" [style.background]="\'url(\' + imagePath + \')\'">\n		<ion-icon large item-start name="ios-arrow-back" (click) = "back()"></ion-icon>\n		<h1>"Welcome to fitness plan"</h1>\n		<button ion-button type="submit" (click)="submit()" class="submitButton1">Fitness plan</button><br><br>\n		<button ion-button type="submit" (click)="submit2()" class="submitButton2">Food Plan</button><br><br>\n		<button ion-button type="submit" (click)="endplan()" class="submitButton3">End Plan</button>\n	</div>\n	\n</ion-content>\n\n\n	<!--<ion-content>\n		<br><br><br><br>\n		<ion-item><ion-label>{{keyFit.difficult}}</ion-label></ion-item>\n		<button ion-button type="submit" (click)="submit()">submit</button>\n	</ion-content>-->'/*ion-inline-end:"/Users/apple/Projects/Senior-Project/src/pages/fitness-plan/fitness-plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FitnessPlanPage);
    return FitnessPlanPage;
}());

//# sourceMappingURL=fitness-plan.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitnessPlan2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fitness_plan_fitness_plan__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fitness_plan3_fitness_plan3__ = __webpack_require__(125);
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
        this.userPlanKey = this.onlogUser.fitplan;
        console.log(this.userPlanKey);
        for (var j = 0; j < this.dataFitnessPlan.length; j++) {
            console.log("for");
            if (this.userPlanKey == this.dataFitnessPlan[j].$key) {
                this.dataFitnessPlanUser = this.dataFitnessPlan[j];
            }
        }
        console.log(this.onlogUser);
    }
    FitnessPlan2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FitnessPlan2Page');
    };
    FitnessPlan2Page.prototype.submit = function () {
        console.log(this.onlogUser);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__fitness_plan3_fitness_plan3__["a" /* FitnessPlan3Page */], this.onlogUser);
    };
    FitnessPlan2Page.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__fitness_plan_fitness_plan__["a" /* FitnessPlanPage */], this.onlogUser);
    };
    FitnessPlan2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fitness-plan2',template:/*ion-inline-start:"/Users/apple/Projects/Senior-Project/src/pages/fitness-plan2/fitness-plan2.html"*/'<!--\n  Generated template for the FitnessPlan2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content >\n	<!--<div class="container1" *ngIf="buttonClicked1" [style.background]="\'url(\' + imagePath + \')\'">\n		<ion-icon large item-start name="ios-arrow-back" (click) = "back()"></ion-icon>\n		<h1>"{{dataFitnessPlanUser.category}}"</h1>\n		<div class="planDetail">\n			<div class="detailBox">\n				<p class = "detail">{{dataFitnessPlanUser.avgtime}} Min</p>\n				<p class="header">Avg. Minute</p>\n			</div>\n			<div class="detailBox">\n				<p class = "detail">{{dataFitnessPlanUser.difficult}}</p>\n				<p class="header">difficult</p>\n			</div>\n			<div class="detailBox">\n				<p class = "detail">Level {{dataFitnessPlanUser.intensity}}</p>\n				<p class="header">intensity</p>\n			</div>\n			<button ion-button type="submit" (click)="submit()" class="submitButton1">"Start Your Plan"</button>\n		</div>\n		\n	</div>-->\n	<div class="container1" *ngIf="buttonClicked1">\n		<ion-icon large item-start name="ios-arrow-back" (click) = "back()"></ion-icon>\n		<h1>"{{dataFitnessPlanUser.category}}"</h1>\n		<div class="planDetail">\n			<div class="detailBox">\n				<p class = "detail">{{dataFitnessPlanUser.avgtime}} Min</p>\n				<p class="header">Avg. Minute</p>\n			</div>\n			<div class="detailBox">\n				<p class = "detail">{{dataFitnessPlanUser.difficult}}</p>\n				<p class="header">difficult</p>\n			</div>\n			<div class="detailBox">\n				<p class = "detail">Level {{dataFitnessPlanUser.intensity}}</p>\n				<p class="header">intensity</p>\n			</div>\n			<button ion-button type="submit" (click)="submit()" class="submitButton1">Start Your Plan</button>\n		</div>\n		\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Projects/Senior-Project/src/pages/fitness-plan2/fitness-plan2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FitnessPlan2Page);
    return FitnessPlan2Page;
}());

//# sourceMappingURL=fitness-plan2.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodPlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_plan2_food_plan2__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { FoodNutrition } from '../DataProvider/FoodNutrition';
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
        this.dataFoodNutrition = [];
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
        this.fireFoodNutrition = this.angularfire.list('/FoodNutrition/');
        this.fireFoodNutrition.subscribe(function (data) {
            _this.dataFoodNutrition = data;
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
                // for(let i = 0; i < this.dataFoodNutrition.length; i++){
                //   console.log("for");
                //   this.proteinUser = (this.dataFoodPlan[j].protein*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].protein;
                //   console.log("proteinUser" + this.proteinUser);
                //   this.carbohydrateUser = (this.dataFoodPlan[j].carbohydrate*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].carbohydrates;
                //   console.log("carbohydrateUser" + this.carbohydrateUser);
                //   this.fatUser = (this.dataFoodPlan[j].fat*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].fat;
                //   console.log("fatUser" + this.fatUser);
                // }
            }
        }
    }
    FoodPlanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodPlanPage');
    };
    FoodPlanPage.prototype.submit = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__food_plan2_food_plan2__["a" /* FoodPlan2Page */], this.dataUserSend);
    };
    FoodPlanPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], this.dataUserSend);
    };
    FoodPlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-plan',template:/*ion-inline-start:"/Users/apple/Projects/Senior-Project/src/pages/food-plan/food-plan.html"*/'	<!--\n	  Generated template for the FoodPlanPage page.\n\n	  See http://ionicframework.com/docs/components/#navigation for more info on\n	  Ionic pages and navigation.\n	-->\n	<ion-header>\n\n	  <ion-navbar>\n			<ion-icon large item-start name="ios-arrow-back" (click) = "back()"></ion-icon>\n	    <ion-title>foodPlan</ion-title>\n	  </ion-navbar>\n\n	</ion-header>\n\n\n	<ion-content>\n		<div class="container1" *ngIf="buttonClicked1">\n			\n			<h1>"FoodPlan"</h1>\n			<div class="planDetail">\n				<div class="detailBox">\n					<p class="header">Calories per day <br> {{dataFoodPlanUser.calories}} Cals</p>\n				</div>\n				<div class="detailBox">\n					<p class="header">Carb per day <br> {{dataFoodPlanUser.carbohydrate}} Grams</p>\n				</div>\n				<div class="detailBox">\n					<p class="header">Fat per day <br> {{dataFoodPlanUser.fat}} Grams</p>\n				</div>\n				<div class="detailBox">\n					<p class="header">Protein per day <br> {{dataFoodPlanUser.protein}} Grams</p>\n				</div>\n				<div class="detailBox">\n					<p class="header">Meals</p>\n					<p class = "detail">After Workout <br> {{dataFoodPlanUser.meals.afterWorkout.carbohydrate}} Grams\n													  <br> {{dataFoodPlanUser.meals.afterWorkout.fat}} Grams\n													  <br> {{dataFoodPlanUser.meals.afterWorkout.protein}} Grams\n					</p>\n					<p class = "detail">Before Workout <br> {{dataFoodPlanUser.meals.beforeWorkout.carbohydrate}} Grams\n													  <br> {{dataFoodPlanUser.meals.beforeWorkout.fat}} Grams\n													  <br> {{dataFoodPlanUser.meals.beforeWorkout.protein}} Grams\n					</p>\n					<p class = "detail">Breakfast <br> {{dataFoodPlanUser.meals.breakfast.carbohydrate}} Grams\n													  <br> {{dataFoodPlanUser.meals.breakfast.fat}} Grams\n													  <br> {{dataFoodPlanUser.meals.breakfast.protein}} Grams\n					</p>\n					<p class = "detail">lunch <br> {{dataFoodPlanUser.meals.lunch.carbohydrate}} Grams\n													  <br> {{dataFoodPlanUser.meals.lunch.fat}} Grams\n													  <br> {{dataFoodPlanUser.meals.lunch.protein}} Grams\n					</p>\n				</div>\n				<button ion-button type="submit" (click)="submit()" class="submitButton1">"Show Food"</button>\n			</div>\n\n				\n		</div>\n	</ion-content>\n'/*ion-inline-end:"/Users/apple/Projects/Senior-Project/src/pages/food-plan/food-plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FoodPlanPage);
    return FoodPlanPage;
}());

//# sourceMappingURL=food-plan.js.map

/***/ })

},[229]);
//# sourceMappingURL=main.js.map