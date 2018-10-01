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
  selector: 'page-food-plan2',
  templateUrl: 'food-plan2.html',
})
export class FoodPlan2Page {

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

  



  carbohydrateAfter: any[] =[];
  fatAfter: any[] =[];
  proteinAfter: any[] =[];

  carbohydrateBefore: any[] =[];
  fatBefore: any[] =[];
  proteinBefore: any[] =[];

  carbohydrateBreakfast: any[] =[];
  fatBreakfast: any[] =[];
  proteinBreakfast: any[] =[];

  carbohydrateLunch: any[] =[];
  fatLunch: any[] =[];
  proteinLunch: any[] =[];

  volume: number;
  

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
      this.fireFoodPlanUser = this.angularfire.list('/FoodPlan/'+this.onlogUser.foodplan);
        this.fireFoodPlanUser.subscribe(data => {
        this.dataFoodPlanUser = data;
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



      for(let j = 0; j < this.dataFoodPlan.length; j++){
         console.log("for");

         if(this.userPlanKey == this.dataFoodPlan[j].$key){
          this.dataFoodPlanUser = this.dataFoodPlan[j];
          console.log(this.dataFoodPlanUser);
          console.log(this.userPlanKey);
          for(let i = 0; i < this.dataFoodNutrition.length; i++){
            
            console.log("for");
            if(this.dataFoodNutrition[i].protein >= 0){
              console.log("test");
              this.proteinAfter.push((this.dataFoodPlan[j].meals.afterWorkout.protein*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].protein);
              console.log("proteinAfter" + this.proteinAfter);
              this.proteinBefore.push((this.dataFoodPlan[j].meals.beforeWorkout.protein*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].protein);
              console.log("proteinBefore" + this.proteinBefore);
              this.proteinBreakfast.push((this.dataFoodPlan[j].meals.breakfast.protein*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].protein);
              console.log("proteinBreakfast" + this.proteinBreakfast);
              this.proteinLunch.push((this.dataFoodPlan[j].meals.lunch.protein*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].protein);
              console.log("proteinLunch" + this.proteinLunch);
            }if(this.dataFoodNutrition[i].carbs >= 0){
              this.carbohydrateAfter.push((this.dataFoodPlan[j].meals.afterWorkout.carbohydrate*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].carbs);
              console.log("carbohydrateAfter" + this.carbohydrateAfter);
              this.carbohydrateBefore.push((this.dataFoodPlan[j].meals.beforeWorkout.carbohydrate*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].carbs);
              console.log("carbohydrateBefore" + this.carbohydrateBefore);
              this.carbohydrateBreakfast.push((this.dataFoodPlan[j].meals.breakfast.carbohydrate*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].carbs);
              console.log("carbohydrateBreakfast" + this.carbohydrateBreakfast);
              this.carbohydrateLunch.push((this.dataFoodPlan[j].meals.lunch.carbohydrate*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].carbs);
              console.log("carbohydrateLunch" + this.carbohydrateLunch);
            
            }if(this.dataFoodNutrition[i].fat >= 0){
              this.fatAfter.push((this.dataFoodPlan[j].meals.afterWorkout.fat*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].fat);
              console.log("fatAfter" + this.fatAfter);
              this.fatBefore.push((this.dataFoodPlan[j].meals.beforeWorkout.fat*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].fat);
              console.log("fatBefore" + this.fatBefore);
              this.fatBreakfast.push((this.dataFoodPlan[j].meals.breakfast.fat*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].fat);
              console.log("fatBreakfast" + this.fatBreakfast);
              this.fatLunch.push((this.dataFoodPlan[j].meals.lunch.fat*this.dataFoodNutrition[i].volume)/this.dataFoodNutrition[i].fat);
              console.log("fatLunch" + this.fatLunch);
            }
            
          }
       }
  }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPlan2Page');
  }
  back(){
    this.navCtrl.setRoot(FoodPlanPage,this.dataUserSend);
  }
}
