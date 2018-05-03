import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FitnessPlan } from '../DataProvider/FitnessPlan';
import { User } from '../DataProvider/User';
import { Questionnaires } from '../DataProvider/Question';

/**
 * Generated class for the FitnessPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fitness-plan',
  templateUrl: 'fitness-plan.html',
})
export class FitnessPlanPage {

	fitnessPlan: FitnessPlan[];
	fireFitnessPlan: FirebaseListObservable<any[]>;
	dataFitnessPlan: any[] =[];
	onlogUser: User;
	fireUser: FirebaseListObservable<any[]>;
	
	

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	 		  public angularfire: AngularFireDatabase, public events: Events) {
  	this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
    console.dir(this.onlogUser);
  	this.fireFitnessPlan = this.angularfire.list('/FitnessPlan/');
  	this.fireFitnessPlan.subscribe(data => {
    this.dataFitnessPlan = data;
    console.log(data)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FitnessPlanPage');
  }

}
