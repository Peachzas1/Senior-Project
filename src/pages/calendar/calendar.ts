import { Component } from '@angular/core';
import { Loading, LoadingController, IonicPage, NavController, NavParams, Events, DateTime } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FitnessPlan } from '../DataProvider/FitnessPlan';
import { User } from '../DataProvider/User';
import { AlertController } from 'ionic-angular';
import { FitnessPlan3Page } from '../fitness-plan3/fitness-plan3';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { HomePage } from '../home/home';


/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  onlogUser: User;
  date = new Date();
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  fireUser: FirebaseListObservable<any[]>;
  fireTest: FirebaseListObservable<any[]>;
  fireStatus: FirebaseListObservable<any[]>;
  dataUser: any[] = [];
  dataStatus: any[] = [];

  today = new Date().getDate();
  month = new Date().getMonth() + 1;
  year = new Date().getFullYear();
  dataStart: any[] = [];
  day: number;
  datasend: any = [];
  planday: any = [];
  lasteventday: any = [];
  nexteventday: any = [];
  currentplan: any = [];
  nextplan: any = [];
  d = 0;
  allplan:any = [];
  dataStatusDay: any[] = [];
  dataStatusfalse: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public angularfire: AngularFireDatabase, public events: Events, private alertCtrl: AlertController,
    public loadingCtrl: LoadingController, private domSanitizer: DomSanitizer) {
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
    this.fireStatus = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/status/');
    this.fireStatus.subscribe(data => {
      console.log("ccccc");
      this.dataStatus = data;
    });
    this.fireTest = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/userAnswer/');
    this.fireTest.subscribe(data => {
      console.log("ccccc");
      this.dataStart = data;
    });
    //this.today = Math.floor((this.date.getTime() / (1000 * 3600 * 24)));
    console.log(this.dataStart[0].StartDate);
    for (let u = 0; u < 28; u++) {
      if (this.dataStart[0].StartMonth == 1 || this.dataStart[0].StartMonth == 3 || this.dataStart[0].StartMonth == 5 ||
        this.dataStart[0].StartMonth == 7 || this.dataStart[0].StartMonth == 8 || this.dataStart[0].StartMonth == 10 ||
        this.dataStart[0].StartMonth == 12) {
        if (this.dataStart[0].StartDate + u > 31) {
          this.nextplan.push(this.dataStart[0].StartDate + u - 31);
          this.allplan.push(this.dataStart[0].StartDate + u - 31);
        } else {
          this.currentplan.push(this.dataStart[0].StartDate + u);
          this.allplan.push(this.dataStart[0].StartDate + u);
        }
      } else if (this.dataStart[0].StartMonth == 2) {
        if (this.year % 4 == 0) {
          if (this.dataStart[0].StartDate + u > 29) {
            this.nextplan.push(this.dataStart[0].StartDate + u - 29);
            this.allplan.push(this.dataStart[0].StartDate + u - 29);
          } else {
            this.currentplan.push(this.dataStart[0].StartDate + u);
            this.allplan.push(this.dataStart[0].StartDate + u);
          }
        } else if (this.year % 4 != 0) {
          if (this.dataStart[0].StartDate + u > 28) {
            this.nextplan.push(this.dataStart[0].StartDate + u - 28);
            this.allplan.push(this.dataStart[0].StartDate + u - 28);
          } else {
            this.currentplan.push(this.dataStart[0].StartDate + u);
            this.allplan.push(this.dataStart[0].StartDate + u);
          }
        }
      } else if (this.dataStart[0].StartMonth == 4 || this.dataStart[0].StartMonth == 6 || this.dataStart[0].StartMonth == 9 ||
        this.dataStart[0].StartMonth == 11) {
        if (this.dataStart[0].StartDate + u > 30) {
          this.nextplan.push(this.dataStart[0].StartDate + u - 30);
          this.allplan.push(this.dataStart[0].StartDate + u - 30);
        } else {
          this.currentplan.push(this.dataStart[0].StartDate + u);
          this.allplan.push(this.dataStart[0].StartDate + u);
        }
      }
    }
    this.getDaysOfMonth();
    this.goToLastMonth();
    this.goToNextMonth();
    if (this.month == this.dataStart[0].StartMonth) {
      console.log("if");
      this.planday = this.currentplan;
    } else if (this.month - 1 == this.dataStart[0].StartMonth) {
      console.log(this.nextplan);
      this.planday = this.nextplan;
    }
    this.all();
    console.log(this.currentplan);
    console.log(this.dataStatusfalse);
  }

  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    //this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentMonth = this.date.getMonth() + 1;
    this.currentYear = this.date.getFullYear();
    console.log(this.currentYear);
    if (this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
      console.log(this.currentDate);
    } else {
      this.currentDate = 999;
    }

    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }

    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    for (var i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push(i + 1);
    }

    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
    var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate();
    for (var i = 0; i < (6 - lastDayThisMonth); i++) {
      this.daysInNextMonth.push(i + 1);
    }
    var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
    if (totalDays < 36) {
      for (var i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
        this.daysInNextMonth.push(i);
      }
    }
  }

  goToLastMonth() {
    this.month = this.month - 1;
    var dates = new Date().getMonth();
    if (dates + 1 == this.dataStart[0].StartMonth) {
      if (this.month == this.dataStart[0].StartMonth) {
        this.planday = this.currentplan;
        this.all();
      } else if (dates - 1 == this.dataStart[0].StartMonth) {
        this.planday = this.currentplan;
        this.all();
      } else if (dates + 2 == this.month) {
        this.planday = this.nextplan;
        this.all();
      } else {
        this.planday = "";
        this.dataStatusfalse = [];
      }
    } else if (dates == this.dataStart[0].StartMonth) {
      if (this.month == this.dataStart[0].StartMonth) {
        this.planday = this.currentplan;
        this.lasteventday = this.currentplan;
        this.nexteventday = "";
        this.all();
      } else if (dates + 1 == this.month) {
        this.planday = this.nextplan;
        this.lasteventday = "";
        this.nexteventday = this.nextplan;
        this.all();
      } else {
        this.planday = "";
        this.lasteventday = "";
        this.nexteventday = "";
        this.dataStatusfalse = [];
      }
    }
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
    console.log(this.dataStatusfalse)
  }

  goToNextMonth() {
    this.month = this.month + 1;
    var dates = new Date().getMonth() + 2;
    if (dates - 1 == this.dataStart[0].StartMonth) {
      if (this.month == this.dataStart[0].StartMonth) {
        this.planday = this.currentplan;
        this.all();
      } else if (dates == this.month) {
        this.planday = this.nextplan;
        this.all();
      } else {
        this.planday = "";
        this.dataStatusfalse = [];
      }
    } else if (dates - 2 == this.dataStart[0].StartMonth) {
      if (this.month == this.dataStart[0].StartMonth) {
        this.planday = this.currentplan;
        this.lasteventday = this.currentplan;
        this.nexteventday = "";
        this.all();
      } else if (dates - 1 == this.month) {
        this.planday = this.nextplan;
        this.lasteventday = "";
        this.nexteventday = this.nextplan;
        this.all();
      } else {
        this.planday = "";
        this.lasteventday = "";
        this.nexteventday = "";
        this.dataStatusfalse = [];
      }
    }
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
    this.getDaysOfMonth();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

  daysLast() {
    if (this.today < this.dataStart[0].StartDate) {
      if (this.month == 1 || this.month == 3 || this.month == 5 ||
        this.month == 7 || this.month == 8 || this.month == 10 ||
        this.month == 12) {
        this.today = this.today + 31;
        this.day = this.today - this.dataStart[0].StartDate;
      } else if (this.month == 2) {
        if (this.year % 4 == 0) {
          this.today = this.today + 29;
          this.day = this.today - this.dataStart[0].StartDate;
        } else if (this.year % 4 != 0) {
          this.today = this.today + 28;
          this.day = this.today - this.dataStart[0].StartDate;
        }
      } else if (this.month == 4 || this.month == 6 || this.month == 9 ||
        this.month == 11) {
        this.today = this.today + 30;
        this.day = this.today - this.dataStart[0].StartDate;
      }
    }
  }

  selectDate(dayy: any) {
    this.d = 0;
    var date = new Date().getMonth() + 1;
    for (let p = 0; p < this.planday.length; p++) {
      if (dayy == this.planday[p]) {
        this.today = dayy;
        if (this.month == this.dataStart[0].StartMonth) {
          this.days();
        } else if (this.month == this.dataStart[0].StartMonth - 1) {
          this.daysLast();
        } else if (this.month == this.dataStart[0].StartMonth + 1) {
          this.days();
        }
        this.datasend.push({
          daysend: this.day,
          key: this.onlogUser.UserKey
        })
        this.navCtrl.setRoot(FitnessPlan3Page, this.datasend);
      }
    }
  }

  days() {
    if (this.today < this.dataStart[0].StartDate) {
      if (this.dataStart[0].StartMonth == 1 || this.dataStart[0].StartMonth == 3 || this.dataStart[0].StartMonth == 5 ||
        this.dataStart[0].StartMonth == 7 || this.dataStart[0].StartMonth == 8 || this.dataStart[0].StartMonth == 10 ||
        this.dataStart[0].StartMonth == 12) {
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
        this.today = this.today + 30;
        this.day = this.today - this.dataStart[0].StartDate;
      }
    } else if (this.month == this.dataStart[0].StartMonth) {
      this.day = this.today - this.dataStart[0].StartDate;
    } else {
      this.day = 27;
    }
  }

  checkEvent(day) {
    var hasEvent = false;
    var dates = new Date().getDate();
    var monthh = new Date().getMonth() + 1;
    if (monthh == this.dataStart[0].StartMonth) {
      for (let o = 0; o < this.planday.length; o++) {
        if (monthh == this.dataStart[0].StartMonth) {
          if (dates <= this.planday[o]) {
            if (day == this.planday[o]) {
              hasEvent = true;
            }
          }
        } else if (this.month == this.dataStart[0].StartMonth) {
          if (dates >= this.planday[o]) {
            if (day == this.planday[o]) {
              hasEvent = true;
            }
          }
        }
        if (this.month == this.dataStart[0].StartMonth + 1) {
          if (dates >= this.planday[o]) {
            if (day == this.planday[o]) {
              hasEvent = true;
            }
          }
        }
      }
    } else if (monthh - 1 == this.dataStart[0].StartMonth) {
      for (let o = 0; o < this.planday.length; o++) {
        if (this.month == this.dataStart[0].StartMonth + 1) {
          if (dates <= this.planday[o]) {
            if (day == this.planday[o]) {
              hasEvent = true;
            }
          }
        }
      }
    }
    return hasEvent;
  }

  lastEvent(day) {
    var lastEvent = false;
    var dates = new Date().getDate();
    var month = new Date().getMonth() + 1;

    if (month == this.dataStart[0].StartMonth) {
      for (let o = 0; o < this.planday.length; o++) {
        if (dates > this.planday[o]) {
          if (day == this.planday[o]) {
            lastEvent = true;
          }
        }
        if (this.month == this.dataStart[0].StartMonth + 1) {
          if (dates > this.planday[o]) {
            if (day == this.planday[o]) {
              lastEvent = false;
            }
          }
        }
      }
    } else if (month - 1 == this.dataStart[0].StartMonth) {
      for (let o = 0; o < this.planday.length; o++) {
        if (dates > this.planday[o]) {
          if (day == this.planday[o]) {
            lastEvent = true;
          }
        }
        if (day == this.lasteventday[o]) {
          lastEvent = true;
        }
      }
    }
    if(this.unfinishday(day) == true){
      lastEvent = false;
    }
    return lastEvent;
  }

  unfinishday(day) {
    var unfinish = false;
    var dates = new Date().getDate();
    var month = new Date().getMonth() + 1;
    //this.dataStatusDay = this.allplan;
    console.log(this.dataStatus[0].length);

    if (month == this.dataStart[0].StartMonth) {
      // for (let a = 0; a < this.dataStatus[0].length; a++) {
      //   if (this.dataStatus[0][a].status == "false") {
      //     this.dataStatusfalse.push(this.dataStatusDay[a]);
      //   }
      // }
      for (let o = 0; o < this.dataStatusfalse.length; o++) {
        if(this.dataStatusfalse[o] >= this.dataStart[0].StartDate){
        if (dates > this.dataStatusfalse[o]) {
          if (day == this.dataStatusfalse[o]) {
            unfinish = true;
          }
        }
        if (this.month == this.dataStart[0].StartMonth + 1) {
          if (dates > this.dataStatusfalse[o]) {
            if (day == this.dataStatusfalse[o]) {
              unfinish = false;
            }
          }
        }
      }
    }
    } else if (month - 1 == this.dataStart[0].StartMonth) {
      // for (let a = 0; a < this.dataStatus[0].length; a++) {
      //   if (this.dataStatus[0][a].status == "false") {
      //     this.dataStatusfalse.push(this.dataStatusDay[a]);
      //   }
      // }
      if(this.month == this.dataStart[0].StartMonth){
        for (let o = 0; o < this.dataStatusfalse.length; o++) {
          if (dates < this.dataStatusfalse[o]) {
            if(this.dataStatusfalse[o] >= this.dataStart[0].StartDate){
            if (day == this.dataStatusfalse[o]) {
              unfinish = true;
            }
          }
          }
        }
      }else{
      for (let o = 0; o < this.dataStatusfalse.length; o++) {
        if (dates > this.dataStatusfalse[o]) {
          if (day == this.dataStatusfalse[o]) {
            unfinish = true;
          }
        }
        // if (day == this.dataStatusfalse[o]) {
        //   unfinish = true;
        // }
      }
    }
    }
    return unfinish;
  }

  all(){
    this.dataStatusDay = this.allplan;
    for (let a = 0; a < this.dataStatus[0].length; a++) {
      if (this.dataStatus[0][a].status == "false") {
        this.dataStatusfalse.push(this.dataStatusDay[a]);
      }
    }
  }

  back() {
    this.days();
    this.datasend.push({
      daysend: this.day,
      key: this.onlogUser.UserKey
    })
    console.log(this.datasend);
    this.navCtrl.setRoot(FitnessPlan3Page, this.datasend);
  }

}
