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
  dataFitnessPlan: any[] =[];
  dataFitnessPlanUser: any[] =[];
  dataUserSend :User;
  onlogUser: User;
  userPlanKey: string;
  buttonClicked1: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
           public angularfire: AngularFireDatabase, public events: Events, private alertCtrl: AlertController) {
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
    this.dataUserSend = this.navParams.data;
    console.dir(this.onlogUser);
    this.fireFitnessPlan = this.angularfire.list('/FitnessPlan/');
    this.fireFitnessPlan.subscribe(data => {
    this.dataFitnessPlan = data;
    console.log(data);
    });
    this.fireFitnessPlanUser = this.angularfire.list('/FitnessPlan/'+this.onlogUser.fitplan);
      this.fireFitnessPlanUser.subscribe(data => {
      this.dataFitnessPlanUser = data;
      console.log(data);
      });
    console.log(this.dataUserSend);
    console.log(this.onlogUser.fitplan);
    console.log(this.dataFitnessPlan);
    console.log(this.dataFitnessPlanUser);
    this.userPlanKey = this.onlogUser.fitplan;
      console.log(this.userPlanKey);
      for(let j = 0; j < this.dataFitnessPlan.length; j++){
        console.log("for");
        if(this.userPlanKey == this.dataFitnessPlan[j].$key){
          this.dataFitnessPlanUser = this.dataFitnessPlan[j];
          console.log(this.dataFitnessPlanUser);
          console.log(this.userPlanKey);
        }
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FitnessPlan2Page');
  }

  submit(){
  	console.log(this.onlogUser);
    this.navCtrl.push(FitnessPlan3Page,this.dataUserSend);
  }

  back(){
    this.navCtrl.setRoot(HomePage,this.dataUserSend);
  }
}
