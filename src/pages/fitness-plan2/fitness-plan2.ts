import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FitnessPlan } from '../DataProvider/FitnessPlan';
import { User } from '../DataProvider/User';
import { Questionnaires } from '../DataProvider/Question';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FitnessPlanPage } from '../fitness-plan/fitness-plan';
import { FitnessPlan3Page } from '../fitness-plan3/fitness-plan3';
import { UpdatePage } from '../update/update';
import { TestPage } from '../test/test';

/**
 * Generated class for the FitnessPlan2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fitness-plan2',
  templateUrl: 'fitness-plan2.html',
})
export class FitnessPlan2Page {
  fitnessPlan: FitnessPlan[];
  fireFitnessPlan: FirebaseListObservable<any[]>;
  fireFitnessPlanUser: FirebaseListObservable<any[]>;
  fireUser: FirebaseListObservable<any[]>;
  fireTest: FirebaseListObservable<any[]>;
  dataUser: any[] = [];
  dataFitnessPlan: any[] = [];
  dataFitnessPlanUser: any[] = [];
  dataUserSend: User;
  onlogUser: User;
  userPlanKey: string;
  buttonClicked1: boolean = true;

  today = new Date().getDate();
  month = new Date().getMonth() + 1;
  year = new Date().getFullYear();
  dataStart: any[] = [];
  day: number;
  datasend: any = [];
  dataAnswer: any[] = [];
  c: number;
  b: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public angularfire: AngularFireDatabase, public events: Events, private alertCtrl: AlertController) {
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
    this.dataUserSend = this.navParams.data;
    console.dir(this.onlogUser);
    this.fireFitnessPlan = this.angularfire.list('/FitnessPlan/');
    this.fireFitnessPlan.subscribe(data => {
      this.dataFitnessPlan = data;
      console.log(data);
    });
    this.fireFitnessPlanUser = this.angularfire.list('/FitnessPlan/' + this.onlogUser.fitplan);
    this.fireFitnessPlanUser.subscribe(data => {
      this.dataFitnessPlanUser = data;
      console.log(data);
    });
    this.fireUser = this.angularfire.list('/User/');
    this.fireUser.subscribe(data => {
      this.dataUser = data;
      console.log(data);
    });
    this.fireTest = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/userAnswer/');
    this.fireTest.subscribe(data => {
      console.log("ccccc");
      this.dataStart = data;
      this.dataAnswer = this.dataStart[0];
    });
    this.userPlanKey = this.onlogUser.fitplan;
    console.log(this.userPlanKey);
    for (let j = 0; j < this.dataFitnessPlan.length; j++) {
      console.log("for");
      if (this.userPlanKey == this.dataFitnessPlan[j].$key) {
        this.dataFitnessPlanUser = this.dataFitnessPlan[j];
        console.log(this.dataFitnessPlanUser);
      }
    }
    this.days();
    this.datasend.push({
      daysend: this.day,
      key: this.onlogUser.UserKey
    })
    console.log(this.dataAnswer);
  }

  days() {
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FitnessPlan2Page');
  }

  submit() {
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

  change(){
    this.navCtrl.setRoot(TestPage, this.onlogUser)
  }

  back() {
    this.navCtrl.setRoot(FitnessPlanPage, this.onlogUser);
  }
}
