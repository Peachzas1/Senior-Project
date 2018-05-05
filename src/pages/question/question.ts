import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Questionnaires } from '../DataProvider/Question';
import { User } from '../DataProvider/User';
import { Validators, FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { FitnessPlanPage } from '../fitness-plan/fitness-plan';
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
	questionForm : FormGroup;
	userAnswer : User;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	 public angularfire: AngularFireDatabase, public events: Events, public builder:FormBuilder) {
  	this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
    console.dir(this.onlogUser); 

  	this.fireQuestion = this.angularfire.list('/Questionnaires/');
  	this.fireQuestion.subscribe(data => {
    this.dataQuestion = data;
    console.log(data)


   this.fireUser = this.angularfire.list('/User/'+this.onlogUser.UserKey);

    this.questionForm = this.builder.group({
    	'Equipment' : ['',Validators.required],
    	'WPD' : ['',Validators.required],
    	'PD' : ['',Validators.required],
    	'PI' : ['',Validators.required],
    	'SD' : ['',Validators.required]
    })
    
    // this.fireQuestion.push({Question1:{question:"Equipment Available?",choices:['None','Dumbbell','Pyrobox']},
  	// 	Question2:{question:"Workout Per Week?",choices:['1-2','2-3','3-4','4-5']},
  	// 	Question3:{question:"Plan Difficult ?",choices:['Beginner','Intermiadate']},
  	// 	Question4:{question:"Plan Intensity ?",choices:['1','2','3']},
  	// 	Question5:{question:"Start Date ?",choices:['1','2','3','4']}});
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  submit(){
  	if(this.questionForm.valid){
      console.log('Valdiate : Pass')
      this.onlogUser.userAnswer = this.questionForm.value;
      this.fireUser.push(this.onlogUser.userAnswer);
      this.navCtrl.setRoot(FitnessPlanPage,this.onlogUser);
  	}else{
  		console.log('Valdiate : Invalid');
  	}
  }

}
