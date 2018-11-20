import { Component } from '@angular/core';
import { Loading, LoadingController, IonicPage, NavController, NavParams, Events, DateTime } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FitnessPlan } from '../DataProvider/FitnessPlan';
import { User } from '../DataProvider/User';
import { Questionnaires } from '../DataProvider/Question';
import { Video } from '../DataProvider/Video';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { FitnessPlan2Page } from '../fitness-plan2/fitness-plan2';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { FoodPlan } from '../DataProvider/FoodPlan';
import { CalendarPage } from '../calendar/calendar';
import { UpdatePage } from '../update/update';

/**
 * Generated class for the FitnessPlan3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fitness-plan3',
  templateUrl: 'fitness-plan3.html',
})
export class FitnessPlan3Page {
  fitnessPlan: FitnessPlan[];
  fireUser: FirebaseListObservable<any[]>;
  fireTest: FirebaseListObservable<any[]>;
  fireFitnessPlan: FirebaseListObservable<any[]>;
  fireFitnessPlanUser: FirebaseListObservable<any[]>;
  fireFitnessPlanVideo: FirebaseListObservable<any[]>;
  firePerPlan: FirebaseListObservable<any[]>;
  fireFoodPlan: FirebaseListObservable<any[]>;
  fireWork: FirebaseListObservable<any[]>;
  dataFitnessPlan: any[] = [];
  dataFoodPlan: any[] = [];
  dataFitnessPlanUser: any = [];
  dataFitnessPlanVideo: any[] = [];
  dataFitnessPlanUserVideo: any = [];
  dataFitnessPlanAmount: any = [];
  dataFitnessPlanTitleVideo: any[] = [];
  dataFitnessPlanLinkVideo: any[] = [];
  dataWork: any[] = [];
  dataStart: any[] = [];
  dataUser: any[] = [];
  data: any[] = [];
  date:string;
  onlogUser: User;
  userPlanKey: string;
  buttonClicked1: boolean = true;
  buttonClicked2: boolean = false;
  buttonClicked3: boolean = false;
  buttonClicked4: boolean = false;
  buttonClicked5: boolean = false;
  trustedVideoUrl: SafeResourceUrl;
  loading: Loading;
  video: string;
  b: number;
  c: number;
  d = 0;
  z = 0;
  countStatus = 0;
  per: number;
  rest: string;
  // today = new Date().getDate();
  // month = new Date().getMonth() + 1;
  // year = new Date().getFullYear();
  // //today: number = Date.now();
  day: number;
  getItemsUser: any[] = [];
  datasend: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public angularfire: AngularFireDatabase, public events: Events, private alertCtrl: AlertController,
    public loadingCtrl: LoadingController, private domSanitizer: DomSanitizer) {
    console.log("zzzzz");
    this.datasend = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog', this.datasend);
    this.fireUser = this.angularfire.list('/User/');
    this.fireUser.subscribe(data => {
      this.dataUser = data;
    });
    for (let h = 0; h < this.dataUser.length; h++) {
      console.log("for");
      if (this.datasend[0].key == this.dataUser[h].$key) {
        console.log("if");
        this.onlogUser = this.dataUser[h];
        this.onlogUser.UserKey = this.dataUser[h].$key;
        console.log(this.onlogUser);
      }
    }
    this.day = this.datasend[0].daysend;
    this.fireFitnessPlan = this.angularfire.list('/FitnessPlan/');
    this.fireFitnessPlan.subscribe(data => {
      this.dataFitnessPlan = data;
      console.log(data);
      console.log("xxxxxx");
    });
    this.fireFoodPlan = this.angularfire.list('/FoodPlan/');
    this.fireFoodPlan.subscribe(data => {
      this.dataFoodPlan = data;
      console.log(data);
    });
    this.firePerPlan = this.angularfire.list('/User/'+ this.onlogUser.UserKey + '/perplan/');
    this.fireWork = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/status/');
    this.fireWork.subscribe(data => {
      this.dataWork = data;
      console.log(data);
    });
    this.fireFitnessPlanUser = this.angularfire.list('/FitnessPlan/' + this.onlogUser.fitplan);
    this.fireFitnessPlanUser.subscribe(data => {
      this.dataFitnessPlanUser = data;
      console.log(data);
      console.log("yyyyy");

      this.fireFitnessPlanVideo = this.angularfire.list('/Video/');
      this.fireFitnessPlanVideo.subscribe(data => {
        this.dataFitnessPlanVideo = data;
        console.log(data);
        console.log("bbbbb");

        this.fireTest = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/userAnswer/');
        this.fireTest.subscribe(data => {
        console.log("ccccc");
        this.dataStart = data;
        // if (this.d == 0) {
        //   console.log("1234");
        //   this.days();
        //   console.log(this.day);
        });
        console.log(this.day);
        this.b = this.day % 7;
        var d = this.day / 7;
        this.c = Number.parseInt(d.toFixed(0));
        if (this.b >= 4) {
          this.c = this.c - 1;
        }
        console.log(this.c);
        //this.video = this.dataFitnessPlanUserVideo.Link;

        console.log(this.dataFitnessPlanVideo);
        console.log(this.video);
        this.userPlanKey = this.onlogUser.fitplan;
        console.log(this.userPlanKey);
        for (let j = 0; j < this.dataFitnessPlan.length; j++) {
          console.log("for");
          if (this.userPlanKey == this.dataFitnessPlan[j].$key) {
            this.dataFitnessPlanUser = this.dataFitnessPlan[j];
            console.log(this.dataFitnessPlanUser);
            console.log(this.userPlanKey);
          }
        }
        this.title();
        this.ionViewWillEnter();
        //});
      });
    });
    console.log(this.data);
  }

  /*days() {
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
      this.day = 100;
    }
    console.log("aa");
  }*/

  ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video);

    /*this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });

    this.loading.present();*/
    console.log(this.trustedVideoUrl);
  }

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

  linkVideo() {
    for (let i = 0; i < this.dataFitnessPlanVideo.length; i++) {
      this.dataFitnessPlanLinkVideo[i] = this.dataFitnessPlanVideo[i].Link;
    }
    console.log("titlevideo");
  }

  titleVideo() {
    for (let i = 0; i < this.dataFitnessPlanVideo.length; i++) {
      this.dataFitnessPlanTitleVideo[i] = this.dataFitnessPlanVideo[i].Title;
    }
    console.log("titlevideo");
  }

  // newTitle(){
  //   this.dataFitnessPlanUser.week[0].days[this.b].sets.map(data=>{
  //     console.log('3')
  //   })
  // }

  title() {
    for (let k = 0; k < this.dataFitnessPlanUser.weeks[0].days[this.b].sets.length; k++) {
      console.log("3");
      for (let m = 0; m < this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts.length; m++) {
        console.log("4");
        for (let z = 0; z < 7; z++) {
          if (this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title == "Set " + z) {
            this.data.push({
              title: this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title,
              amount: this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].amount,
              index: this.z,
              status: false
            })
          }
        }
        for (let a = 0; a < this.dataFitnessPlanVideo.length; a++) {
          console.log("5")
          if (this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title == "Rest day") {
            console.log("5.1");
            this.rest = "Week " + (this.c + 1) + "   Day " + (this.b + 1) + ":Rest day";
            if(this.day == 27){
            this.buttonClicked1 = false;
            this.buttonClicked2 = false;
            this.buttonClicked3 = false;
            this.buttonClicked4 = false;
            this.buttonClicked5 = true;
            }else {
            this.buttonClicked1 = false;
            this.buttonClicked2 = true;
            this.buttonClicked3 = false;
            this.buttonClicked4 = false;
            this.buttonClicked5 = false;
            }
          } else {
            this.rest = "Week " + (this.c + 1) + "   Day " + (this.b + 1);
            if (this.c == 0 && this.b == 0) {
              this.buttonClicked1 = true;
              this.buttonClicked2 = false;
              this.buttonClicked3 = false;
              this.buttonClicked4 = false;
              this.buttonClicked5 = false;
            } else if (this.c == 3 && this.b == 6) {
              this.buttonClicked1 = false;
              this.buttonClicked2 = false;
              this.buttonClicked3 = false;
              this.buttonClicked4 = true;
              this.buttonClicked5 = false;
            } else {
              this.buttonClicked1 = false;
              this.buttonClicked2 = false;
              this.buttonClicked3 = true;
              this.buttonClicked4 = false;
              this.buttonClicked5 = false;
            }
            if (this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title == this.dataFitnessPlanVideo[a].Title) {
              console.log("6");
              this.data.push({
                title: this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title,
                amount: this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].amount,
                index: this.z,
                status: false
              })
              this.dataFitnessPlanUserVideo.push(this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title);
              //if(this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].amount == "None"){
              //this.dataFitnessPlanAmount = [];
              //}else{  
              //this.dataFitnessPlanAmount.push(this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].amount);
              //}
              //console.log(this.dataFitnessPlanAmount);
            }
          }
        }
      }
    }
    for (let a = 0; a < this.dataFitnessPlanVideo.length; a++) {
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FitnessPlan3Page');
  }

  click(title: any) {
    console.log(title);
    for (let a = 0; a < this.dataFitnessPlanVideo.length; a++) {
      console.log("1");
      if (title.title == this.dataFitnessPlanVideo[a].Title) {
        console.log("2");
        this.video = this.dataFitnessPlanVideo[a].Link;
      }
    }
    title.status = true;
    this.ionViewWillEnter();
    console.log(this.video);
    console.log(this.dataFitnessPlanVideo);
  }

  submit() {
    console.log(this.b);
    console.log(this.c);
    console.log(this.d);
    if (this.c != 3 && this.b == 6) {
      console.log("a")
      this.b = 0;
      this.c++;
      this.dataFitnessPlanUserVideo = [];
      this.dataFitnessPlanAmount = [];
      this.data = [];
      this.title();
      this.ionViewWillEnter();
    } else if (this.c == 3 && this.b == 6) {
      console.log("b");
      let alert = this.alertCtrl.create({
        title: 'Confirm',
        message: 'Do you want to finish plan?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            }
          },
          {
            text: 'yes',
            handler: () => {
              for(let a= 0;a<this.dataWork[0].length;a++){
                if(this.dataWork[0][a].status == "true"){
                  this.countStatus++;
                }
              }
              this.per = this.countStatus*100/28;
              this.per = Number(this.per.toFixed(2));
              this.date = this.dataStart[0].StartDate+"-"+this.dataStart[0].StartMonth+"-"+this.dataStart[0].StartYear;
              console.log(this.date)
              this.firePerPlan.push({ per:this.per,plan:this.onlogUser.finishplan+1,date:this.date});
              this.d = 1;
              this.fireTest.remove();
              this.fireWork.remove();
              this.fireUser.update(this.onlogUser.UserKey, { fitplan: "null" });
              this.fireUser.update(this.onlogUser.UserKey, { foodplan: "null" });
              for(let a = 0;a<this.dataFoodPlan.length;a++){
                if(this.onlogUser.foodplan == this.dataFoodPlan[a].$key){
                  this.fireFoodPlan.remove(this.dataFoodPlan[a]);
                }
              }
              this.fireUser.subscribe(data => {
                this.getItemsUser = data;
              });
              this.datasend[0].daysend = 28;
              for (let i = 0; i < this.getItemsUser.length; i++) {
                console.log("startloop");
                console.log("usercheck");
                if (this.getItemsUser[i].uid == this.onlogUser.uid) {
                  this.onlogUser = this.getItemsUser[i];
                  console.dir(this.onlogUser);
                  console.dir(this.getItemsUser[i]);
                  this.onlogUser.UserKey = this.getItemsUser[i].$key;
                  this.navCtrl.setRoot(UpdatePage, this.datasend);
                  console.log("found");

                }
              }
            }
          }
        ]
      });
      alert.present();
      console.log("alert");
    } else {
      console.log("c")
      this.b++;
      this.dataFitnessPlanUserVideo = [];
      this.dataFitnessPlanAmount = [];
      this.data = [];
      this.title();
      this.ionViewWillEnter();
    }
  }

  previous() {
    if (this.b == 0) {
      this.b = 6;
      this.c--;
      this.dataFitnessPlanUserVideo = [];
      this.dataFitnessPlanAmount = [];
      this.data = [];
      this.title();
      this.ionViewWillEnter();
      console.log(this.c);
    } else {
      this.b--;
      this.dataFitnessPlanUserVideo = [];
      this.dataFitnessPlanAmount = [];
      this.data = [];
      this.title();
      this.ionViewWillEnter();
    }
  }

  check() {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you finish plan day?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'yes',
          handler: () => {
            this.dataWork = this.dataWork[0];
            console.log(this.dataWork.length)
            let oldData = this.onlogUser.status[Object.keys(this.onlogUser.status)[0]]
            console.log(oldData)
            for (let a = 0; a < this.dataWork.length; a++) {
              if (this.dataWork[a].day == this.day + 1) {
                console.log("if")
                oldData[a].status = "true"
              }
            }
            this.fireWork.update((Object.keys(this.onlogUser.status)[0]), oldData);
          }
        }
      ]
    });
    alert.present();
  }

  back() {
    this.navCtrl.setRoot(FitnessPlan2Page, this.onlogUser);
  }

  cal() {
    this.navCtrl.setRoot(CalendarPage, this.onlogUser);
  }
}
