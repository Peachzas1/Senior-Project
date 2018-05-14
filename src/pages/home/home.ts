import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { QuestionPage } from '../question/question';
import { User } from '../DataProvider/User';
import { Events } from 'ionic-angular';
import { FitnessPlanPage } from '../fitness-plan/fitness-plan';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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
  dataQuestion: any[] =[];
  Collections = [{ imageCollections: "../../assets/imgs/TrainLike1.jpg" }
                ,{ imageCollections: "../../assets/imgs/TrainLike2.jpg" }
                ,{ imageCollections: "../../assets/imgs/TrainLike3.jpg" }
                ];
  Workouts = [{ imageWorkouts: "../../assets/imgs/Workouts1.jpg" }
                ,{ imageWorkouts: "../../assets/imgs/Workouts2.jpg" }
                ,{ imageWorkouts: "../../assets/imgs/Workouts3.jpg" }
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
     /*this.fireFitnessPlan.push({
       age:{start:30,end:60},
       bmi:{start:18.5,end:40},
       category:"lose weight",
       difficult:"beginner",
       equipment:{equipment1:"dumbbell"},
       intensity:1,
       gender:{gender1:"female"},
       user:{user1:this.onlogUser.UserKey},
       week:{week1:{day1:{bodyparts:{part1:"legs",part2:"hips"},workouts:{resttime:60,set1:{deadlift:15,squat:20},set2:{deadlift:15,squat:20},
       set3:{deadlift:15,squat:20},set4:{deadlift:15,squat:20},set5:{deadlift:15,squat:20},set6:{deadlift:15,squat:20},
       set7:{deadlift:15,squat:20}}},
       day2:{bodyparts:{part1:"triceps",part2:"back",part3:"biceps"},workouts:{resttime:60,set1:{deadlift:15,squat:20},set2:{deadlift:15,squat:20},
       set3:{deadlift:15,squat:20},set4:{deadlift:15,squat:20},set5:{deadlift:15,squat:20},set6:{deadlift:15,squat:20},
       set7:{deadlift:15,squat:20}}},
       day3:{bodyparts:{part1:"chest",part2:"shoulders",part3:"biceps"},workouts:{resttime:60,set1:{deadlift:15,squat:20},set2:{deadlift:15,squat:20},
       set3:{deadlift:15,squat:20},set4:{deadlift:15,squat:20},set5:{deadlift:15,squat:20},set6:{deadlift:15,squat:20},
       set7:{deadlift:15,squat:20}}},}}
     });*/

  }
  login(){
    this.navCtrl.setRoot(LoginPage);
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
    if(this.dataUserSend.fitplan!="null"){
      console.log("if");
      this.navCtrl.push(FitnessPlanPage,this.dataUserSend);
    }else{
      console.log("else");
    this.navCtrl.push(QuestionPage,this.onlogUser);
    }
  }
}
