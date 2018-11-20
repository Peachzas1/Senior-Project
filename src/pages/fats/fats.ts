import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FoodPlan } from '../DataProvider/FoodPlan';
import { FoodNutrition } from '../DataProvider/FoodNutrition';
import { User } from '../DataProvider/User';
import { AlertController } from 'ionic-angular';
import { FoodPlanPage } from '../food-plan/food-plan';


/**
 * Generated class for the FoodPlan2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fats',
  templateUrl: 'fats.html',
})
export class FatsPage {

  fireFoodNutrition: FirebaseListObservable<any[]>;
  
  dataFoodNutrition: any[] =[];
 

  fireFoodPlan: FirebaseListObservable<any[]>;
  fireFoodPlanUser: FirebaseListObservable<any[]>;
  dataFoodPlan: any[] =[];
  dataFoodPlanUser: any[] =[];
  itemKey : any[]
  dataUserSend :User;
  onlogUser: User;
  fireUser: FirebaseListObservable<any[]>;
  userPlanKey: string;

  proteinEach:any[] = [];
  carbsEach:any[] = [];;
  fatsEach:any[] = [];;
  volume:number;
  

  buttonClicked1: boolean = true;



  constructor(public navCtrl: NavController, public navParams: NavParams,
           public angularfire: AngularFireDatabase, public events: Events, private alertCtrl: AlertController) {

    this.onlogUser = this.navParams.data;
      this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
      this.dataUserSend = this.navParams.data;
      console.dir(this.onlogUser);

      this.fireFoodNutrition = this.angularfire.list('/FoodNutrition/');
        this.fireFoodNutrition.subscribe(data => {
          this.dataFoodNutrition = data;
          console.log(data);
        });

      this.fireFoodPlan = this.angularfire.list('/FoodPlan/');
      this.fireFoodPlan.subscribe(data => {
      this.dataFoodPlan = data;
      console.log(data);
      });
        
        this.angularfire.list('/User/'+this.onlogUser.UserKey+'/userAnswer/').subscribe(data => {
      this.itemKey = data;    
      this.itemKey.map(item => {
         console.log(item.$key);
        })
      });
    this.fireUser = this.angularfire.list('/User/');

      
      this.userPlanKey = this.onlogUser.foodplan;



      for (let j = 0; j < this.dataFoodPlan.length; j++){
      console.log("for");
      if(this.onlogUser.UserKey == this.dataFoodPlan[j].UserKey){
        this.dataFoodPlanUser = this.dataFoodPlan[j];
        console.log(this.dataFoodPlanUser);
        console.log(this.dataFoodPlan[j].EachMealProtein);
        for(let i = 0; i < this.dataFoodNutrition.length; i++){
          if(this.dataFoodNutrition[i].protein >= 0){
            this.proteinEach.push((this.dataFoodPlan[j].EachMealProtein*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].protein);
            console.log("proteinEach" + this.proteinEach);
          }if(this.dataFoodNutrition[i].carbs >= 0){
            this.carbsEach.push((this.dataFoodPlan[j].EachMealCarbs*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].carbs);
            console.log("proteinEach" + this.carbsEach);
          }if(this.dataFoodNutrition[i].fat >= 0){
            this.fatsEach.push(((this.dataFoodPlan[j].EachMealFats*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].fat));
            console.log("proteinEach" + this.fatsEach);
          }
        }
      }
  }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPlan2Page');
  }
  back(){
    this.navCtrl.setRoot(FoodPlanPage,this.onlogUser);
  }
}
