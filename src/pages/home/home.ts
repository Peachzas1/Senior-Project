import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { QuestionPage } from '../question/question';
import { User } from '../DataProvider/User';
import { Events } from 'ionic-angular';
import { FitnessPlanPage } from '../fitness-plan/fitness-plan';
import { FitnessPlan3Page } from '../fitness-plan3/fitness-plan3';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TestPage } from '../test/test';
import { WorkoutPage } from '../workout/workout';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dataUser : any[] = [];
  dataUserSend: User;
  onlogUser: User = new User();
  fireFitnessPlan: FirebaseListObservable<any[]>;
  fireUser : FirebaseListObservable<any[]>;
  fireFoodPlan: FirebaseListObservable<any[]>;
  dataQuestion: any[] =[];
  Collections = [{ imageCollections: "img/TrainLike1.jpg" }
                ,{ imageCollections: "img/TrainLike2.jpg" }
                ,{ imageCollections: "img/TrainLike3.jpg" }
                ];
  Workouts = [{ imageWorkouts: "img/Workouts1.jpg" }
                ,{ imageWorkouts: "img//Workouts2.jpg" }
                ,{ imageWorkouts: "img/Workouts3.jpg" }
                ];

  constructor(public navCtrl: NavController, public angularfire: AngularFireDatabase, public navParams: NavParams,public events: Events) {
      this.onlogUser = this.navParams.data;
      this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
      this.dataUserSend = this.navParams.data;
      console.dir(this.dataUserSend);
      console.dir(this.onlogUser);
      this.fireUser = this.angularfire.list('/User/');
      this.fireUser.subscribe(data => {
        this.dataUser = data;
        console.log(data);
      });
      console.log(this.onlogUser);
  }

  workouts(){
    this.navCtrl.setRoot(WorkoutPage,this.onlogUser);
  }

  startPlan(){
    for(let i=0; i<this.dataUser.length;i++){
        console.log("for");
        if(this.onlogUser.UserKey==this.dataUser[i].$key){
          this.dataUserSend = this.dataUser[i];
        }
      }
    console.log("start");
    if(this.dataUserSend.fitplan!="null"&&this.dataUserSend.foodplan!="null"){
      console.log("if");
      for(let i = 0; i < this.dataUser.length; i++){
        if(this.onlogUser.UserKey == this.dataUser[i].$key){
          this.onlogUser = this.dataUser[i];
          this.onlogUser.UserKey = this.dataUser[i].$key;
        }
        }
      console.log(this.onlogUser)
      this.navCtrl.setRoot(FitnessPlanPage,this.onlogUser);
    }else{
      console.log("else");
      this.navCtrl.setRoot(QuestionPage,this.onlogUser);
    }
    console.log(this.onlogUser);
  }

  profile(){
    this.navCtrl.setRoot(ProfilePage,this.onlogUser);
  }
}
