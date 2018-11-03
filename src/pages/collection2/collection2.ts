import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController, DateTime } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { User } from '../DataProvider/User';
import { Video } from '../DataProvider/Video';
import { HomePage } from '../home/home';
import { CollectionPage } from '../collection/collection';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the Collection2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collection2',
  templateUrl: 'collection2.html',
})
export class Collection2Page {
  onlogUser: User;
  fireCollection: FirebaseListObservable<any[]>;
  fireFitnessPlanVideo: FirebaseListObservable<any[]>;
  fireUser: FirebaseListObservable<any[]>;
  dataFitnessPlanVideo: any[] = [];
  dataCollection: any[] = [];
  dataUser: any[] = [];
  dataCollectionUserVideo: any[] = [];
  data: any[] = [];
  avgtime: string;
  rest: string;
  video: string;
  equipment: any = [];
  buttonClicked1: boolean = true;
  buttonClicked2: boolean = false;
  buttonClicked3: boolean = false;
  b = 0;
  //c=0;
  trustedVideoUrl: SafeResourceUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularfire: AngularFireDatabase,
    public events: Events, private alertCtrl: AlertController, private domSanitizer: DomSanitizer) {
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
    this.fireCollection = this.angularfire.list('/WorkoutCollections/');
    this.fireCollection.subscribe(data => {
      this.dataCollection = data;
      console.log(data);
    });
    this.fireFitnessPlanVideo = this.angularfire.list('/Video/');
    this.fireFitnessPlanVideo.subscribe(data => {
      this.dataFitnessPlanVideo = data;
      this.check();
      this.ionViewWillEnter();
    });
    this.fireUser = this.angularfire.list('/User/');
    this.fireUser.subscribe(data => {
      this.dataUser = data;
      console.log(data);
    });
    console.log(this.data);
  }

  check() {
    for (let a = 0; a < this.dataCollection.length; a++) {
      console.log("for");
      if (this.onlogUser.collection == this.dataCollection[a].name) {
        console.log("if");
        for (let k = 0; k < this.dataCollection[a].weeks[0].days[this.b].sets.length; k++) {
          console.log("1");
          for (let m = 0; m < this.dataCollection[a].weeks[0].days[this.b].sets[k].workouts.length; m++) {
            console.log("2");
            for (let z = 0; z < 11; z++) {
              console.log("3");
              if (this.dataCollection[a].weeks[0].days[this.b].sets[k].workouts[m].title == "set" + z) {
                console.log("3.1");
                this.data.push({
                  title: this.dataCollection[a].weeks[0].days[this.b].sets[k].workouts[m].title,
                  amount: this.dataCollection[a].weeks[0].days[this.b].sets[k].workouts[m].amount
                })
              }
            }
            for (let d = 0; d < this.dataFitnessPlanVideo.length; d++) {
              console.log("4");
              if (this.dataCollection[a].weeks[0].days[this.b].sets[k].workouts[m].title == "Rest day") {
                console.log("5");
                console.log("5.1");
                this.rest = "Day " + (this.b + 1) + ":Rest day";
                this.buttonClicked1 = false;
                this.buttonClicked2 = true;
                this.buttonClicked3 = false;
              } else {
                console.log("6");
                this.rest = "Day " + (this.b + 1);
                if (this.b == 0) {
                  this.buttonClicked1 = true;
                  this.buttonClicked2 = false;
                  this.buttonClicked3 = false;
                } else {
                  this.buttonClicked1 = false;
                  this.buttonClicked2 = false;
                  this.buttonClicked3 = true;
                }
                if (this.dataCollection[a].weeks[0].days[this.b].sets[k].workouts[m].title == this.dataFitnessPlanVideo[d].Title) {
                  console.log("7");
                  this.data.push({
                    title: this.dataCollection[a].weeks[0].days[this.b].sets[k].workouts[m].title,
                    amount: this.dataCollection[a].weeks[0].days[this.b].sets[k].workouts[m].amount
                  })
                  this.dataCollectionUserVideo.push(this.dataCollection[a].weeks[0].days[this.b].sets[k].workouts[m].title);
                }
              }
            }
          }
        }
        for (let d = 0; d < this.dataFitnessPlanVideo.length; d++) {
          console.log("8");
          console.log("12");
          if (this.dataCollectionUserVideo[0] == this.dataFitnessPlanVideo[d].Title) {
            this.video = this.dataFitnessPlanVideo[d].Link;
          }
        }
      }
    }
  }

  ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video);

    /*this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });

    this.loading.present();*/
    console.log(this.trustedVideoUrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Collection2Page');
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

  endplan() {
    console.log("aa");
    /*let alert = this.alertCtrl.create({
      title: 'Finish Plan',
      subTitle: 'Finish Plan',
      buttons: ['OK']
    });
    alert.present();
    this.fireUser.update(this.onlogUser.UserKey, { collection: "null" });
    for (let a = 0; a < this.dataUser.length; a++) {
      if (this.onlogUser.UserKey == this.dataUser[a].$key) {
        this.onlogUser = this.dataUser[a];
        this.onlogUser.UserKey = this.dataUser[a].$key;
      }
    }
    this.navCtrl.setRoot(HomePage, this.onlogUser);*/
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to end plan?',
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
            this.fireUser.update(this.onlogUser.UserKey, { collection: "null" });
            for (let a = 0; a < this.dataUser.length; a++) {
              if (this.onlogUser.UserKey == this.dataUser[a].$key) {
                this.onlogUser = this.dataUser[a];
                this.onlogUser.UserKey = this.dataUser[a].$key;
              }
            }
            this.navCtrl.setRoot(HomePage, this.onlogUser);
          }
        }
      ]
    });
    alert.present();
  }


  submit() {
    console.log(this.b);
    if (this.b == 6) {
      console.log("b");
      let alert = this.alertCtrl.create({
        title: 'Finish CollectionPlan',
        subTitle: 'Finish CollectionPlan',
        buttons: ['OK']
      });
      alert.present();
      console.log("t");
      this.fireUser.update(this.onlogUser.UserKey, { collection: "null" });
      for (let a = 0; a < this.dataUser.length; a++) {
        if (this.onlogUser.UserKey == this.dataUser[a].$key) {
          this.onlogUser = this.dataUser[a];
          this.onlogUser.UserKey = this.dataUser[a].$key;
        }
      }
      this.navCtrl.setRoot(HomePage, this.onlogUser);
      console.log("alert");
    } else {
      this.b++;
      this.dataCollectionUserVideo = [];
      this.data = [];
      this.check();
      this.ionViewWillEnter();
    }
  }

  previous() {
    this.b--;
    this.dataCollectionUserVideo = [];
    this.data = [];
    this.check();
    this.ionViewWillEnter();
  }

  back() {
    this.navCtrl.setRoot(HomePage, this.onlogUser);
  }
}
