import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Questionnaires } from '../DataProvider/Question';
import { User } from '../DataProvider/User';
/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

	question : Questionnaires[];
	fireQuestion: FirebaseListObservable<any[]>;
	dataQuestion: any[] =[];
	onlogUser: User;
	fireUser: FirebaseListObservable<any[]>;
	startDate: String = new Date().toISOString();


  constructor(public navCtrl: NavController, public navParams: NavParams,
  	 public angularfire: AngularFireDatabase, public events: Events) {
  	this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
    console.dir(this.onlogUser);
  	this.fireQuestion = this.angularfire.list('/Questionnaires/');
  	// this.fireQuestion.push({Question1:{question:"Equipment Available?",choices:['None','Dumbbell','Pyrobox']},
  	// 	Question2:{question:"Workout Per Week?",choices:['1-2','2-3','3-4','4-5']},
  	// 	Question3:{question:"Plan Difficult ?",choices:['Beginner','Intermiadate']},
  	// 	Question4:{question:"Plan Intensity ?",choices:['1','2','3']},
  	// 	Question5:{question:"Start Date ?",choices:['1','2','3','4']}});
  	this.fireQuestion.subscribe(data => {
    this.dataQuestion = data;
    console.log(data)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  submit(){
  }

}
