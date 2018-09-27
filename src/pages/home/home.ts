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
  }

  workouts(){
    this.navCtrl.push(WorkoutPage,this.onlogUser);
  }

  startPlan(){
    for(let i=0; i<this.dataUser.length;i++){
        console.log("for");
        if(this.onlogUser.UserKey==this.dataUser[i].$key){
          this.dataUserSend = this.dataUser[i];
        }
      }
    console.log("start");
    console.log(this.dataUserSend);
    if(this.dataUserSend.fitplan!="null"&&this.dataUserSend.foodplan!="null"){
      console.log("if");
      this.navCtrl.push(FitnessPlanPage,this.dataUserSend);
    }else{
      console.log("else");
    this.navCtrl.push(QuestionPage,this.onlogUser);
    }
  }

  profile(){
    this.navCtrl.push(ProfilePage,this.onlogUser);
  }
}
