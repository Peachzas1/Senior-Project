import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { QuestionPage } from '../question/question';
import { User } from '../DataProvider/User';
import { Events } from 'ionic-angular';
import { FitnessPlanPage } from '../fitness-plan/fitness-plan';
import { FitnessPlan3Page } from '../fitness-plan3/fitness-plan3';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { WorkoutPage } from '../workout/workout';
import { ProfilePage } from '../profile/profile';
import { CollectionPage } from '../collection/collection';
import { Collection2Page } from '../collection2/collection2';
import { UpdatePage } from '../update/update';
import { Collection15Page } from '../collection15/collection15';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dataUser: any[] = [];
  dataUserSend: User;
  dataWork: any[] = [];
  onlogUser: User;
  fireFitnessPlan: FirebaseListObservable<any[]>;
  fireUser: FirebaseListObservable<any[]>;
  fireWork: FirebaseListObservable<any[]>;
  fireFoodPlan: FirebaseListObservable<any[]>;
  fireCollection: FirebaseListObservable<any[]>;
  fireTest: FirebaseListObservable<any[]>;
  dataQuestion: any[] = [];
  dataStart: any[] = [];
  Collections = [{ imageCollections: "img/ronaldo.jpg", name: "1" }
    , { imageCollections: "img/therock.jpg", name: "2" }
  ];
  Workouts = [{ imageWorkouts: "img/Workouts1.jpg" }
    , { imageWorkouts: "img//Workouts2.jpg" }
    , { imageWorkouts: "img/Workouts3.jpg" }
  ];

  today = new Date().getDate();
  month = new Date().getMonth() + 1;
  year = new Date().getFullYear();
  colMonth: number;
  colDay: number;
  day: number;
  datasend: any = [];
  dataCollection: any[] = [];

  firePerPlan : FirebaseListObservable<any[]>;
  dataPerPlan: any[] = [];
  perPlan: number;
  lastGoal:string;
  c: number;
  b: number;
  fireUserAnswer: FirebaseListObservable<any[]>;
  itemKey:any[];
  countStatus = 0;
  per: number;
  buttonClicked1 = true;
  buttonClicked2 = false;
  name: string;

  constructor(public navCtrl: NavController, public angularfire: AngularFireDatabase, public navParams: NavParams, public events: Events) {
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
    this.dataUserSend = this.navParams.data;
    console.dir(this.dataUserSend);
    console.dir(this.onlogUser);
    this.fireUser = this.angularfire.list('/User/');
    this.fireUser.subscribe(data => {
      this.dataUser = data;
      console.log(data);
    });
    this.fireCollection = this.angularfire.list('/WorkoutCollections/');
    this.fireCollection.subscribe(data => {
      this.dataCollection = data;
      console.log(data);
    });

    this.firePerPlan = this.angularfire.list('/User/'+ this.onlogUser.UserKey + '/perplan/');
    this.firePerPlan.subscribe(data => {
      this.dataPerPlan = data;
      console.log(data);
    });
    this.fireTest = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/userAnswer/');
    this.fireTest.subscribe(data => {
      console.log("ccccc");
      this.dataStart = data;
    });
    this.fireUserAnswer = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/userAnswer/');
    this.fireUserAnswer.subscribe(data => {
      this.itemKey = data;
      this.itemKey.map(item => {
        console.log(item.$key);
      })
    });
    this.fireWork = this.angularfire.list('/User/'+this.onlogUser.UserKey+'/status/')
    this.fireWork.subscribe(data => {
      this.dataWork = data;
    });
    // let dataDay = Object.keys(this.onlogUser.status[Object.keys(this.onlogUser.status)[0]])
    // // console.log(dataDay.day1);
    // this.dataWork = this.dataWork[0];
    // console.log(this.dataWork.length);
    // for(let a =0;a<this.dataWork.length;a++){
    //   console.log(this.dataWork[a].day);
    // }
    //this.fireWork.push({day1:"false",day2:"false"});
    this.name = this.onlogUser.fName;
    if(this.onlogUser.fitplan =="null"){
      this.buttonClicked1 = true;
      this.buttonClicked2 = false;
    }else{
      this.buttonClicked1 = false;
      this.buttonClicked2 = true;
    this.showPerPlan();
    this.showLastGoal();
    this.showdays();
    this.checkWeek();
    this.setWeekDay();
    }
  }

  workouts() {
    this.navCtrl.setRoot(WorkoutPage, this.onlogUser);
    /*this.fireWork = this.angularfire.list('Video');
      this.fireWork.push({name:'a'});*/
  }

  startPlan() {
    for (let i = 0; i < this.dataUser.length; i++) {
      console.log("for");
      if (this.onlogUser.UserKey == this.dataUser[i].$key) {
        this.dataUserSend = this.dataUser[i];
      }
    }
    console.log("start");
    if (this.dataUserSend.fitplan != "null" && this.dataUserSend.foodplan != "null") {
      console.log("if");
      for (let i = 0; i < this.dataUser.length; i++) {
        if (this.onlogUser.UserKey == this.dataUser[i].$key) {
          this.onlogUser = this.dataUser[i];
          this.onlogUser.UserKey = this.dataUser[i].$key;
        }
      }
      console.log(this.onlogUser);
      this.navCtrl.setRoot(FitnessPlanPage, this.onlogUser);
    } else {
      console.log("else");
      this.navCtrl.setRoot(QuestionPage, this.onlogUser);
    }
    console.log(this.onlogUser);
  }

  profile() {
    this.navCtrl.setRoot(ProfilePage, this.onlogUser);
  }

  collection() {
    this.days();
    this.datasend.push({
      daysend: this.day,
      key: this.onlogUser.UserKey
    })
    if (this.onlogUser.collectionuser != "null") {
      this.navCtrl.setRoot(Collection2Page, this.datasend);
    } else {
      this.navCtrl.setRoot(CollectionPage, this.onlogUser);
    }
  }

  days() {
    this.colMonth = this.onlogUser.startmonthcollection;
    this.colDay = this.onlogUser.startcollection;
    if (this.month == this.colMonth) {
      this.day = this.today - this.colDay;
    } else if (this.month - this.colMonth == 1) {
      if (this.colMonth == 1 || this.colMonth == 3 || this.colMonth == 5 ||
        this.colMonth == 7 || this.colMonth == 8 || this.colMonth == 10 ||
        this.colMonth == 12) {
        console.log("month31");
        this.today = this.today + 31;
        this.day = this.today - this.colDay;
      } else if (this.colMonth == 2) {
        if (this.year % 4 == 0) {
          this.today = this.today + 29;
          this.day = this.today - this.colDay;
        } else if (this.year % 4 != 0) {
          this.today = this.today + 28;
          this.day = this.today - this.colDay;
        }
      } else if (this.colMonth == 4 || this.colMonth == 6 || this.colMonth == 9 ||
        this.colMonth == 11) {
        console.log("month30");
        this.today = this.today + 30;
        this.day = this.today - this.colDay;
      }
    } else {
      this.day = 6;
    }
    if (this.day > 6) {
      this.day = 6;
    }
    console.log("aa");
  }

  click(img: any) {
    this.fireUser.update(this.onlogUser.UserKey, { startcollection: this.today });
    this.fireUser.update(this.onlogUser.UserKey, { startmonthcollection: this.month });
    for(let a =0; a<this.dataCollection.length;a++){
      if(img == this.dataCollection[a].pic){
        this.fireUser.update(this.onlogUser.UserKey, { collection: this.dataCollection[a].name });
      }
    }
    for (let a = 0; a < this.dataUser.length; a++) {
      if (this.onlogUser.UserKey == this.dataUser[a].$key) {
        this.onlogUser = this.dataUser[a];
        this.onlogUser.UserKey = this.dataUser[a].$key;
      }
    }
    this.navCtrl.setRoot(Collection15Page, this.onlogUser);
  }

  showPerPlan(){
    for(let a= 0;a<this.dataWork[0].length;a++){
      if(this.dataWork[0][a].status == "true"){
        this.countStatus++;
      }
    }
    this.per = this.countStatus*100/28;
    this.per = Number(this.per.toFixed(2));
  }

  showLastGoal(){
    this.lastGoal = this.itemKey[0].Goal;
    console.log(this.lastGoal);
  }
  
  showdays() {
    if (this.month == this.dataStart[0].StartMonth) {
      this.day = this.today - this.dataStart[0].StartDate;
    } else if (this.month - this.dataStart[0].StartMonth == 1) {
      if (this.dataStart[0].StartMonth == 1 || this.dataStart[0].StartMonth == 3 || this.dataStart[0].StartMonth == 5 ||
        this.dataStart[0].StartMonth == 7 || this.dataStart[0].StartMonth == 8 || this.dataStart[0].StartMonth == 10 ||
        this.dataStart[0].StartMonth == 12) {
        console.log("month31");
        this.today = this.today + 31;
        this.day = this.today - this.dataStart[0].StartDate;
      } else if (this.dataStart[0].StartMonth == 2) {
        if (this.year % 4 == 0) {
          this.today = this.today + 29;
          this.day = this.today - this.dataStart[0].StartDate;
        } else if (this.year % 4 != 0) {
          this.today = this.today + 28;
          this.day = this.today - this.dataStart[0].StartDate;
        }
      } else if (this.dataStart[0].StartMonth == 4 || this.dataStart[0].StartMonth == 6 || this.dataStart[0].StartMonth == 9 ||
        this.dataStart[0].StartMonth == 11) {
        console.log("month30");
        this.today = this.today + 30;
        this.day = this.today - this.dataStart[0].StartDate;
      }
    } else {
      this.day = 27;
    }
    if(this.day > 27){
      this.day = 27;
    }
    console.log("aa");
  }

  checkWeek(){
    this.b = this.day % 7;
    var d = this.day / 7;
          this.c = Number.parseInt(d.toFixed(0));
          if (this.b >= 4) {
            this.c = this.c - 1;
          }
          this.b = this.b+1;
  }

  setWeekDay(){
    this.c = this.c+1;
  }

  go(){
    this.showdays();
    this.datasend.push({
      daysend: this.day,
      key: this.onlogUser.UserKey
    })
    this.checkWeek();
    console.log(this.c);
    if(this.c == 0 && this.dataStart[0].update == 0){
      this.fireTest.update(this.dataStart[0],{update:this.dataStart[0].update+1} );
      this.navCtrl.setRoot(UpdatePage,this.datasend);
    }else if(this.c == 1 && this.dataStart[0].update == 1){console.log("if");
      this.fireTest.update(this.dataStart[0],{update:this.dataStart[0].update+1} );
      this.navCtrl.setRoot(UpdatePage,this.datasend);
    }else if(this.c == 2 && this.dataStart[0].update == 2){
      this.fireTest.update(this.dataStart[0],{update:this.dataStart[0].update+1} );
      this.navCtrl.setRoot(UpdatePage,this.datasend);
    }else if(this.c == 3 && this.dataStart[0].update == 3){
      this.fireTest.update(this.dataStart[0],{update:this.dataStart[0].update+1} );
      this.navCtrl.setRoot(UpdatePage,this.datasend);
    }else{
    this.navCtrl.setRoot(FitnessPlan3Page, this.datasend);
    }
  }
}
