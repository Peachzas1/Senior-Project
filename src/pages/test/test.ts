import { Component } from '@angular/core';
import { Loading, LoadingController, IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { HomePage } from '../home/home';
import { FitnessPlan2Page } from '../fitness-plan2/fitness-plan2';
import { User } from '../DataProvider/User';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-test',
    templateUrl: 'test.html',
})
export class TestPage {
    fireUser: FirebaseListObservable<any[]>;
    fireAnswer: FirebaseListObservable<any[]>;
    dataUser: any[] = [];
    dataStart: any[] = [];
    onlogUser: User;
    dayAnswer: string;
    year = new Date().getFullYear();

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private domSanitizer: DomSanitizer,
        public angularfire: AngularFireDatabase, public events: Events, public navParams: NavParams, private alertCtrl: AlertController) {
        this.onlogUser = this.navParams.data;
        this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
        this.fireUser = this.angularfire.list('/User/');
        this.fireUser.subscribe(data => {
            this.dataUser = data;
            console.log(data);
        });
        this.fireAnswer = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/userAnswer/');
        this.fireAnswer.subscribe(data => {
            this.dataStart = data;
            console.log(data);
        });
        this.day();
        console.log(this.dataStart[0].StartDate-1)
    }

    day(){
        this.dayAnswer = this.dataStart[0].StartDate + "-" + this.dataStart[0].StartMonth + "-" + this.year;
    }
    
    click(){
        if(this.dataStart[0].StartDate-1 == 0){console.log("if")
        if (this.dataStart[0].StartMonth-1 == 1 || this.dataStart[0].StartMonth-1 == 3 || this.dataStart[0].StartMonth-1 == 5 ||
            this.dataStart[0].StartMonth-1 == 7 || this.dataStart[0].StartMonth-1 == 8 || this.dataStart[0].StartMonth-1 == 10 ||
            this.dataStart[0].StartMonth-1 == 12) {
                this.fireAnswer.update(this.dataStart[0],{StartDate:this.dataStart[0].StartDate+31-1})
                this.fireAnswer.update(this.dataStart[0],{StartMonth:this.dataStart[0].StartMonth-1})
          } else if (this.dataStart[0].StartMonth-1 == 2) {
            if (this.year % 4 == 0) {
                this.fireAnswer.update(this.dataStart[0],{StartDate:this.dataStart[0].StartDate+29-1})
                this.fireAnswer.update(this.dataStart[0],{StartMonth:this.dataStart[0].StartMonth-1})
            } else if (this.year % 4 != 0) {
                this.fireAnswer.update(this.dataStart[0],{StartDate:this.dataStart[0].StartDate+28-1})
                this.fireAnswer.update(this.dataStart[0],{StartMonth:this.dataStart[0].StartMonth-1})
            }
          } else if (this.dataStart[0].StartMonth-1 == 4 || this.dataStart[0].StartMonth-1 == 6 || this.dataStart[0].StartMonth-1 == 9 ||
            this.dataStart[0].StartMonth-1 == 11) {console.log(this.dataStart[0].StartMonth)
                this.fireAnswer.update(this.dataStart[0],{StartDate:this.dataStart[0].StartDate+30-1})
                this.fireAnswer.update(this.dataStart[0],{StartMonth:this.dataStart[0].StartMonth-1})
          }
        }else{
            this.fireAnswer.update(this.dataStart[0],{StartDate:this.dataStart[0].StartDate-1})
        }
        for (let a = 0; a < this.dataUser.length; a++) {
            if (this.onlogUser.UserKey == this.dataUser[a].$key) {
              this.onlogUser = this.dataUser[a];
              this.onlogUser.UserKey = this.dataUser[a].$key;
            }
          }
          this.day();
          let alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'Success',
            buttons: ['OK']
          });
          alert.present();
    }

    back() {
        this.navCtrl.setRoot(FitnessPlan2Page, this.onlogUser);
      }
}