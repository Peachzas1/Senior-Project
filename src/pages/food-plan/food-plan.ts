import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FoodPlan } from '../DataProvider/FoodPlan';
import { User } from '../DataProvider/User';
import { Questionnaires } from '../DataProvider/Question';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FoodPlan2Page } from '../food-plan2/food-plan2';
// import { FoodNutrition } from '../DataProvider/FoodNutrition';

/**
 * Generated class for the FoodPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-plan',
  templateUrl: 'food-plan.html',
})
export class FoodPlanPage {

  fireFoodPlan: FirebaseListObservable<any[]>;
  fireFoodPlanUser: FirebaseListObservable<any[]>;
  dataFoodPlan: any[] =[];
  dataFoodPlanUser: any[] =[];
  itemKey : any[]
  dataUserSend :User;
  onlogUser: User;
  fireUser: FirebaseListObservable<any[]>;
  userPlanKey: string;

  fireFoodNutrition: FirebaseListObservable<any[]>;
  
  dataFoodNutrition: any[] =[];

  // fireFoodNutrition: FirebaseListObservable<any[]>;
  // dataFoodNutrition: any[] =[];

  carbohydrateUser: number;
  fatUser: number;
  proteinUser: number;
  volume: number;
  
  buttonClicked1: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
           public angularfire: AngularFireDatabase, public events: Events, private alertCtrl: AlertController) {
    
      this.onlogUser = this.navParams.data;
      this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
      this.dataUserSend = this.navParams.data;
      console.dir(this.onlogUser);
      this.fireFoodPlan = this.angularfire.list('/FoodPlan/');
      this.fireFoodPlan.subscribe(data => {
      this.dataFoodPlan = data;
      console.log(data);
      });
      this.fireFoodPlanUser = this.angularfire.list('/FoodPlan/'+this.onlogUser.foodplan);
        this.fireFoodPlanUser.subscribe(data => {
        this.dataFoodPlanUser = data;
        console.log(data);
        });

        this.fireFoodNutrition = this.angularfire.list('/FoodNutrition/');
      this.fireFoodNutrition.subscribe(data => {
      this.dataFoodNutrition = data;
      console.log(data);
      });

      console.log(this.dataFoodPlan);
      this.angularfire.list('/User/'+this.onlogUser.UserKey+'/userAnswer/').subscribe(data => {
      this.itemKey = data;    
      this.itemKey.map(item => {
         console.log(item.$key);
        })
      });
    this.fireUser = this.angularfire.list('/User/');

      
      this.userPlanKey = this.onlogUser.foodplan;
     for(let j = 0; j < this.dataFoodPlan.length; j++){
         console.log("for");
         if(this.userPlanKey == this.dataFoodPlan[j].$key){
          this.dataFoodPlanUser = this.dataFoodPlan[j];
          console.log(this.dataFoodPlanUser);
          console.log(this.userPlanKey);
          // for(let i = 0; i < this.dataFoodNutrition.length; i++){
          //   console.log("for");
          //   this.proteinUser = (this.dataFoodPlan[j].protein*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].protein;
          //   console.log("proteinUser" + this.proteinUser);
          //   this.carbohydrateUser = (this.dataFoodPlan[j].carbohydrate*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].carbohydrates;
          //   console.log("carbohydrateUser" + this.carbohydrateUser);
          //   this.fatUser = (this.dataFoodPlan[j].fat*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].fat;
          //   console.log("fatUser" + this.fatUser);
          // }
       }
  }


}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPlanPage');
  }
  submit(){
    this.navCtrl.push(FoodPlan2Page,this.dataUserSend);
  }
  back(){
    this.navCtrl.setRoot(HomePage,this.dataUserSend);
  }
}
