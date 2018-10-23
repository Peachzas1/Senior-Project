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
  dataFitnessPlan: any[] = [];
  dataFitnessPlanUser: any = [];
  dataFitnessPlanVideo: any[] = [];
  dataFitnessPlanUserVideo: any = [];
  dataFitnessPlanAmount: any = [];
  dataFitnessPlanTitleVideo: any[] = [];
  dataFitnessPlanLinkVideo: any[] = [];
  dataStart: any[] = [];
  dataUser: any[] = [];
  dataUserSend: User;
  data: any[] = [];
  onlogUser: User;
  userPlanKey: string;
  buttonClicked1: boolean = true;
  buttonClicked2: boolean = false;
  buttonClicked3: boolean = false;
  trustedVideoUrl: SafeResourceUrl;
  loading: Loading;
  video: string;
  b: number;
  c: number;
  d=0;
  rest: string;
  today: number = Date.now();
  date: number;
  day:number;
  getItemsUser:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public angularfire: AngularFireDatabase, public events: Events, private alertCtrl: AlertController,
    public loadingCtrl: LoadingController, private domSanitizer: DomSanitizer) {
    console.log("zzzzz");
    this.date = Math.floor((this.today / (1000 * 3600 * 24)));
    console.log(this.date);
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
    this.fireUser = this.angularfire.list('/User/');
    this.dataUserSend = this.navParams.data;
    console.dir(this.onlogUser);
    this.fireFitnessPlan = this.angularfire.list('/FitnessPlan/');
    this.fireFitnessPlan.subscribe(data => {
      this.dataFitnessPlan = data;
      console.log(data);
      console.log("xxxxxx");
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
          if(this.d == 0){console.log("1234");
            this.days();
          }
          console.log(this.day);
          this.b = this.day % 7;
          var d = this.day / 7;
          this.c = Number.parseInt(d.toFixed(0));
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
      });
    });
  });
  }

  days(){
    this.day = this.date - this.dataStart[0].StartDate;
    console.log("aa");
  }

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

  title() {
    for (let k = 0; k < this.dataFitnessPlanUser.weeks[0].days[this.b].sets.length; k++) {
      console.log("3");
      for (let m = 0; m < this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts.length; m++) {
        console.log("4");
        for (let z = 0; z < 7; z++) {
          if (this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title == "set" + z) {
            this.data.push({
              title: this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title,
              amount: this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].amount
            })
          }
        }
        for (let a = 0; a < this.dataFitnessPlanVideo.length; a++) {
          console.log("5")
          if (this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title == "Rest day") {
            console.log("5.1");
            this.rest = "week " + (this.c + 1) + "   Day " + (this.b + 1) + ":Rest day";
            this.buttonClicked1 = false;
            this.buttonClicked2 = true;
            this.buttonClicked3 = false;
          } else {
            this.rest = "week " + (this.c + 1) + "   Day " + (this.b + 1);
            if (this.c == 0 && this.b == 0) {
              this.buttonClicked1 = true;
              this.buttonClicked2 = false;
              this.buttonClicked3 = false;
            } else {
              this.buttonClicked1 = false;
              this.buttonClicked2 = false;
              this.buttonClicked3 = true;
            }
            if (this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title == this.dataFitnessPlanVideo[a].Title) {
              console.log("6");
              this.data.push({
                title: this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].title,
                amount: this.dataFitnessPlanUser.weeks[0].days[this.b].sets[k].workouts[m].amount
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
      if (title == this.dataFitnessPlanVideo[a].Title) {
        console.log("2");
        this.video = this.dataFitnessPlanVideo[a].Link;
      }
    }
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
        title: 'Finish Plan',
        subTitle: 'Finish Plan',
        buttons: ['OK']
      });
      alert.present();
      console.log("t");
      this.d = 1;
      this.fireTest.remove();
      console.log("u");
      this.fireUser.update(this.onlogUser.UserKey, { fitplan: "null" });
      console.log("v");
      this.fireUser.update(this.onlogUser.UserKey, { foodplan: "null" });
      console.log("w");
      this.fireUser.subscribe(data => {
        this.getItemsUser = data;
      });
      for (let i = 0; i < this.getItemsUser.length; i++) {
        console.log("startloop");
        console.log("usercheck");
        if (this.getItemsUser[i].uid == this.onlogUser.uid) {
          this.onlogUser = this.getItemsUser[i];
          console.dir(this.onlogUser);
          console.dir(this.getItemsUser[i]);
          this.onlogUser.UserKey = this.getItemsUser[i].$key;
          this.navCtrl.setRoot(HomePage, this.onlogUser);
          console.log("found");
          
        }
      }
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

  back() {
    this.navCtrl.setRoot(FitnessPlan2Page, this.onlogUser);
  }
}
