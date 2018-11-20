import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { User } from '../DataProvider/User';
import { HomePage } from '../home/home';
import { FitnessPlan2Page } from '../fitness-plan2/fitness-plan2';
import { FitnessPlan3Page } from '../fitness-plan3/fitness-plan3';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  dataUser: any[] = [];
  dataProgress: any[] = [];
  onlogUser: User = new User();
  fireUser: FirebaseListObservable<any[]>;
  fireProgress: FirebaseListObservable<any[]>;
  dataProfile: any[] = [];
  weight: number;
  height: number;
  waist: number;
  datasend: any = []; 
  today = new Date().getDate();
  month = new Date().getMonth() + 1;
  year = new Date().getFullYear();
  day: string;
  b: number;
  c: number;
  daysend: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularfire: AngularFireDatabase, public events: Events,
    private alertCtrl: AlertController) {
    this.datasend = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog', this.datasend);
    this.fireUser = this.angularfire.list('/User/');
    this.fireUser.subscribe(data => {
      this.dataUser = data;
      console.log(data);
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
    this.daysend = this.datasend[0].daysend;
    this.day = this.today + "-" + this.month + "-" + this.year;
    this.fireProgress = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/progress/');
    this.fireProgress.subscribe(data => {
      this.dataProgress = data;
      console.log(data);
    });
    this.checkWeek();
    this.profile();
  }

  profile() {
    this.weight = this.onlogUser.weight;
    this.height = this.onlogUser.height;
    this.waist = this.onlogUser.waistMeasurement;
  }

  update(weight: number, height: number, waist: number) {
    if (weight == null || height == null || waist == null) {
      let alert = this.alertCtrl.create({
        title: 'Fail',
        subTitle: 'Please fill up this form',
        buttons: ['OK']
      });
      alert.present();
    } else {
      this.fireProgress.push({
        plan: this.onlogUser.finishplan + 1, weight: this.onlogUser.weight, height: this.onlogUser.height,
        waistMeasurement: this.onlogUser.waistMeasurement,week:"Week " + this.c
      });
      this.fireUser.update(this.onlogUser.UserKey, { weight: weight });
      this.fireUser.update(this.onlogUser.UserKey, { height: height });
      this.fireUser.update(this.onlogUser.UserKey, { waistMeasurement: waist });
      if (this.datasend[0].daysend == 28) {
        this.fireUser.update(this.onlogUser.UserKey, { finishplan: this.onlogUser.finishplan + 1 });
        for (let a = 0; a < this.dataUser.length; a++) {
          if (this.onlogUser.UserKey == this.dataUser[a].$key) {
            this.onlogUser = this.dataUser[a];
            this.onlogUser.UserKey = this.dataUser[a].$key;
          }
        }
        this.navCtrl.setRoot(HomePage, this.onlogUser);
      } else {
        this.navCtrl.setRoot(FitnessPlan3Page, this.datasend);
      }
      console.log(weight);
    }
  }

  checkWeek(){
    this.b = this.daysend % 7;
    var d = this.daysend / 7;
          this.c = Number.parseInt(d.toFixed(0));
          if (this.b >= 4) {
            this.c = this.c - 1;
          }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

}
