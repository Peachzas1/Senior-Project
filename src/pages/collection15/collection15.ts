import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController, DateTime } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { User } from '../DataProvider/User';
import { HomePage } from '../home/home';
import { CollectionPage } from '../collection/collection';
import { Collection2Page } from '../collection2/collection2';

/**
 * Generated class for the Collection1_5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collection15',
  templateUrl: 'collection15.html',
})
export class Collection15Page {
  onlogUser: User;
  fireCollection: FirebaseListObservable<any[]>;
  fireUser: FirebaseListObservable<any[]>;
  dataCollection: any[] = [];
  dataUser: any[] = [];
  dataName: any = [];

  today = new Date().getDate();
  month = new Date().getMonth() + 1;
  year = new Date().getFullYear();
  colMonth: number;
  colDay: number;
  day: number;
  datasend: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public angularfire: AngularFireDatabase,
    public events: Events, private alertCtrl: AlertController) {
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
    this.fireCollection = this.angularfire.list('/WorkoutCollections/');
    this.fireCollection.subscribe(data => {
      this.dataCollection = data;
      console.log(data);
      this.Name();
    });
    this.fireUser = this.angularfire.list('/User/');
    this.fireUser.subscribe(data => {
      this.dataUser = data;
      console.log(data);
    });
    this.days();
    this.datasend.push({
      daysend: this.day,
      key: this.onlogUser.UserKey
    })
    console.log(this.datasend);
  }

  Name() {
    for (let a = 0; a < this.dataCollection.length; a++) {
      //this.dataName.push(this.dataCollection[a].name);
      //this.dataName.push(this.dataCollection[a].equipment);
      if (this.onlogUser.collection == this.dataCollection[a].name) {
        this.dataName.push({
          name: this.dataCollection[a].name,
          avgtime: this.dataCollection[a].avgtime,
          equipment: this.dataCollection[a].equipment,
          pic: this.dataCollection[a].pic,
          description: this.dataCollection[a].description
        })
      }
    }
    console.log(this.dataName);
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
      this.day = 27;
    }
    console.log("aa");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Collection1_5Page');
  }

  back() {
    this.fireUser.update(this.onlogUser.UserKey, { collection: "null" });
    for (let a = 0; a < this.dataUser.length; a++) {
      if (this.onlogUser.UserKey == this.dataUser[a].$key) {
        this.onlogUser = this.dataUser[a];
        this.onlogUser.UserKey = this.dataUser[a].$key;
      }
    }
    this.navCtrl.setRoot(CollectionPage, this.onlogUser);
  }

  click() {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to use this collection?',
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
            this.fireUser.update(this.onlogUser.UserKey,{startcollection:this.today});
            this.fireUser.update(this.onlogUser.UserKey,{startmonthcollection:this.month});
            this.fireUser.update(this.onlogUser.UserKey,{collectionuser : this.onlogUser.collection})
            this.navCtrl.setRoot(Collection2Page, this.datasend);
          }
        }
      ]
    });
    alert.present();
  }
}
