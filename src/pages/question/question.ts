import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Questionnaires } from '../DataProvider/Question';
import { User } from '../DataProvider/User';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { FitnessPlanPage } from '../fitness-plan/fitness-plan';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

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

  question: Questionnaires[];
  fireQuestion: FirebaseListObservable<any[]>;
  dataUser: any[] = [];
  dataQuestion: any[] = [];
  dataUserSend: User;
  onlogUser: User;
  fireUser: FirebaseListObservable<any[]>;
  fireUserAnswer: FirebaseListObservable<any[]>;
  fireStatus: FirebaseListObservable<any[]>;
  questionForm: FormGroup;
  fireFitnessPlan: FirebaseListObservable<any[]>;
  dataFitnessPlan: any[] = [];
  age: number;
  bmi: number;
  day = new Date().getDate();
  month = new Date().getMonth() + 1;
  year = new Date().getFullYear();
  today: number = Date.now();
  date: number = 0;
  keyFit: any[] = [];
  itemKey: any[]

  fireFoodPlan: FirebaseListObservable<any[]>;
  dataFoodPlan: any[] = [];
  keyFood: any[] = [];
  weight: number;
  height: number;
  up: number = 0;
  dataStatus: any[] = [];
  dataStart: any[] = [];

  dataFitnessPlanUser: any[] = [];
  goal = 0;
  calories: number;
  carbs: number;
  fats: number;
  protein: number;
  lbs: number;
  activityValue: number;
  allDayProtein: number;
  allDayCarbs: number;
  allDayFats: number;
  eachMealProtein: number;
  eachMealCarbs: number;
  eachMealFats: number;
  dataAnswer: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public angularfire: AngularFireDatabase, public events: Events, public builder: FormBuilder, private alertCtrl: AlertController) {
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
    console.dir(this.onlogUser);
    this.fireUser = this.angularfire.list('/User/');
    this.fireUser.subscribe(data => {
      this.dataUser = data;
      console.log(data);
    });
    this.fireQuestion = this.angularfire.list('/Questionnaires/');
    this.fireQuestion.subscribe(data => {
      this.dataQuestion = data;
      console.log(data)
    });
    this.fireUserAnswer = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/userAnswer/');
    this.fireUserAnswer.subscribe(data => {
      this.dataAnswer = data;
    });
    this.fireFitnessPlan = this.angularfire.list('/FitnessPlan/');
    this.fireFitnessPlan.subscribe(data => {
      this.dataFitnessPlan = data;
      console.log(data);
    });
    this.fireFoodPlan = this.angularfire.list('/FoodPlan/');
    this.fireFoodPlan.subscribe(data => {
      this.dataFoodPlan = data;
      console.log(data);
    });
    this.fireUserAnswer.subscribe(data => {
      this.itemKey = data;
      this.itemKey.map(item => {
        console.log(item.$key);
      })
    });
    for (let a = 0; a < this.dataUser.length; a++) {
      if (this.onlogUser.UserKey == this.dataUser[a].$key) {
        this.onlogUser = this.dataUser[a];
        this.onlogUser.UserKey = this.dataUser[a].$key;
      }
    }
    this.date = Math.floor((this.today / (1000 * 3600 * 24)));

    console.log(this.dataFitnessPlan);
    this.questionForm = this.builder.group({
      'Equipment': ['', Validators.required],
      'WPD': ['', Validators.required],
      'PD': ['', Validators.required],
      'PI': ['', Validators.required],
      'Goal': ['', Validators.required],
      'StartDate': this.day,
      'StartMonth': this.month,
      'StartYear': this.year,
      'update': this.up
    });
    this.fireUser = this.angularfire.list('/User/');
    // this.fireQuestion.push({Question1:{question:"Equipment Available?",choices:['none','dumbbell','pyrobox']},
    //   Question2:{question:"Workout Per Week?",choices:['1-2','2-3','3-4','4-5']},
    //   Question3:{question:"Plan Difficult ?",choices:['beginner','intermiadate']},
    //   Question4:{question:"Plan Intensity ?",choices:[1,2,3]},
    //   Question5:{question:"Start Date ?",choices:['1','2','3','4']}});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  submit() {
    if (this.questionForm.valid) {
      console.log('Valdiate : Pass')
      this.fireUserAnswer.push(this.questionForm.value);
      this.fireStatus = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/status/');
      // this.fireStatus.push({day1:"false",day2:"false",day3:"false",day4:"false",day5:"false",day6:"false",day7:"false",day8:"false"
      //   ,day9:"false",day10:"false",day11:"false",day12:"false",day13:"false",day14:"false",day15:"false",day16:"false",day17:"false",day18:"false"
      //   ,day19:"false",day20:"false",day21:"false",day22:"false",day23:"false",day24:"false",day25:"false",day26:"false",day27:"false",day28:"false"});
      this.fireStatus.push({
        0: { day: 1, status: "false" }, 1: { day: 2, status: "false" }, 2: { day: 3, status: "false" }, 3: { day: 4, status: "false" }
        , 4: { day: 5, status: "false" }, 5: { day: 6, status: "false" }, 6: { day: 7, status: "false" }, 7: { day: 8, status: "false" }, 8: { day: 9, status: "false" }
        , 9: { day: 10, status: "false" }, 10: { day: 11, status: "false" }, 11: { day: 12, status: "false" }, 12: { day: 13, status: "false" }, 13: { day: 14, status: "false" }
        , 14: { day: 15, status: "false" }, 15: { day: 16, status: "false" }, 16: { day: 17, status: "false" }, 17: { day: 18, status: "false" }, 18: { day: 19, status: "false" }
        , 19: { day: 20, status: "false" }, 20: { day: 21, status: "false" }, 21: { day: 22, status: "false" }, 22: { day: 23, status: "false" }, 23: { day: 24, status: "false" }
        , 24: { day: 25, status: "false" }, 25: { day: 26, status: "false" }, 26: { day: 27, status: "false" }, 27: { day: 28, status: "false" }
      });
      console.log(this.onlogUser);
      this.bmi = this.onlogUser.weight / ((this.onlogUser.height / 100) * (this.onlogUser.height / 100));
      console.log(this.bmi);
      this.weight = this.onlogUser.weight;
      this.height = this.onlogUser.height;
      var timeDiff = Math.abs(this.today - new Date(this.onlogUser.dateofbirth).getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      console.log(this.age);
      console.log(this.dataFitnessPlan);
      console.log(this.dataFoodPlan);
      for (let i = 0; i < this.dataFitnessPlan.length; i++) {
        console.log("for");
        console.log(this.itemKey[0]);
        if (this.onlogUser.gender == this.dataFitnessPlan[i].gender[0] || this.onlogUser.gender == this.dataFitnessPlan[i].gender[1]) {
          console.log("gender")
          if (this.itemKey[0].Goal == this.dataFitnessPlan[i].category) {
            console.log("a")
            if (this.itemKey[0].PD == this.dataFitnessPlan[i].difficult) {
              console.log("difficult")
              if (this.itemKey[0].PI == this.dataFitnessPlan[i].intensity) {
                console.log("intensity")
                for (let a = 0; a < this.dataFitnessPlan[i].equipment.length; a++) {
                  if (this.itemKey[0].Equipment == this.dataFitnessPlan[i].equipment[a]) {
                    console.log("equipment")
                    if (this.age >= this.dataFitnessPlan[i].age.start && this.age <= this.dataFitnessPlan[i].age.end) {
                      console.log("age")
                      if (this.bmi >= this.dataFitnessPlan[i].bmi.start && this.bmi <= this.dataFitnessPlan[i].bmi.end) {
                        console.log("bmi")
                        console.log("success")
                        this.keyFit = this.dataFitnessPlan[i];
                        console.log(this.keyFit)
                        this.fireUser.update(this.onlogUser.UserKey, { fitplan: this.dataFitnessPlan[i].$key });
                        for (let a = 0; a < this.dataUser.length; a++) {
                          if (this.onlogUser.UserKey == this.dataUser[a].$key) {
                            this.onlogUser = this.dataUser[a];
                            this.onlogUser.UserKey = this.dataUser[a].$key;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (this.onlogUser.fitplan == "null") {
        if (this.itemKey[0].Goal == "Lose weight") {
          this.fireUser.update(this.onlogUser.UserKey, { fitplan: this.dataFitnessPlan[2].$key });
          for (let a = 0; a < this.dataUser.length; a++) {
            if (this.onlogUser.UserKey == this.dataUser[a].$key) {
              this.onlogUser = this.dataUser[a];
              this.onlogUser.UserKey = this.dataUser[a].$key;
            }
          }
        } else if (this.itemKey[0].Goal == "Gain muscles") {
          this.fireUser.update(this.onlogUser.UserKey, { fitplan: this.dataFitnessPlan[18].$key });
          for (let a = 0; a < this.dataUser.length; a++) {
            if (this.onlogUser.UserKey == this.dataUser[a].$key) {
              this.onlogUser = this.dataUser[a];
              this.onlogUser.UserKey = this.dataUser[a].$key;
            }
          }
        }
      }
      this.setActicityValue();
      this.createFoodPlan();
      this.fireFoodPlan.push({
        UserKey: this.onlogUser.UserKey, AllDayCal: this.calories, AllDayProtein: this.allDayProtein,
        AllDayCarbs: this.allDayCarbs, AllDayFats: this.allDayFats, EachMealProtein: this.eachMealProtein,
        EachMealCarbs: this.eachMealCarbs, EachMealFats: this.eachMealFats
      });
      for (let a = 0; a < this.dataFoodPlan.length; a++) {
        if (this.onlogUser.UserKey == this.dataFoodPlan[a].UserKey) {
          this.fireUser.update(this.onlogUser.UserKey, { foodplan: this.dataFoodPlan[a].$key });
        }
      }
      for (let a = 0; a < this.dataUser.length; a++) {
        if (this.onlogUser.UserKey == this.dataUser[a].$key) {
          this.onlogUser = this.dataUser[a];
          this.onlogUser.UserKey = this.dataUser[a].$key;
        }
      }
      let alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: 'Success',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.setRoot(HomePage, this.onlogUser);
      // for (let j = 0; j < this.dataFoodPlan.length; j++) {
      //   console.log("for");
      //   console.log(this.itemKey[0]);
      //   if (this.age >= this.dataFoodPlan[j].age.start && this.age <= this.dataFoodPlan[j].age.end) {
      //     console.log("age")
      //     if (this.weight >= this.dataFoodPlan[j].weight.start && this.weight <= this.dataFoodPlan[j].weight.end) {
      //       console.log("weight")
      //       if (this.height >= this.dataFoodPlan[j].height.start && this.height <= this.dataFoodPlan[j].height.end) {
      //         console.log("height")
      //         console.log("success");
      //         this.keyFood = this.dataFoodPlan[j];
      //         console.log(this.keyFood)
      //         this.fireUser.update(this.onlogUser.UserKey, { foodplan: this.dataFoodPlan[j].$key });
      // let alert = this.alertCtrl.create({
      //   title: 'Success',
      //   subTitle: 'Success',
      //   buttons: ['OK']
      // });
      // alert.present();
      // this.navCtrl.setRoot(HomePage, this.onlogUser);
      //       }
      //     }
      //   }
      // }
    } else {
      let alert = this.alertCtrl.create({
        title: 'Fail',
        subTitle: 'Please fill up this form',
        buttons: ['OK']
      });
      alert.present();
      console.log('Valdiate : Invalid');
    }
  }

  setActicityValue() {
    if (this.dataAnswer[0].WPD == "1-2") {
      this.activityValue = 1.2;
      console.log(this.activityValue);
    }
    else if (this.dataAnswer[0].WPD == "3-4") {
      this.activityValue = 1.375;
      console.log(this.activityValue);
    }
    else if (this.dataAnswer[0].WPD == "5-6") {
      this.activityValue = 1.55;
      console.log(this.activityValue);
    }
    else if (this.dataAnswer[0].WPD == "5-7") {
      this.activityValue = 1.725;
      console.log(this.activityValue);
    }
  }

  createFoodPlan() {
    for (let i = 0; i < this.dataFitnessPlan.length; i++) {
      console.log(this.dataFitnessPlan[i].$key);
      console.log(this.onlogUser.fitplan);
      if (this.onlogUser.fitplan == this.dataFitnessPlan[i].$key) {
        this.dataFitnessPlanUser[0] = this.dataFitnessPlan[i];
        console.log(this.dataFitnessPlanUser[0].category);
        if (this.dataFitnessPlanUser[0].category == "Lose weight") {
          this.goal = 1;
          console.log(this.goal);
          if (this.onlogUser.gender == "Male") {
            console.log("if");
            console.log(this.onlogUser.weight);
            console.log(this.onlogUser.height);
            console.log(this.age);
            console.log(this.activityValue);
            this.calories = Math.round(((this.onlogUser.weight * 10) +
              (this.onlogUser.height * 6.25) - (5 * this.age) + 5) * this.activityValue);
            console.log(this.calories);
          }
          else {
            this.calories = Math.round(((this.onlogUser.weight * 10) +
              (this.onlogUser.height * 6.25) - (5 * this.age) - 161) * this.activityValue);
            console.log(this.calories);
          }
        }
        else if (this.dataFitnessPlanUser[0].category == "Gain muscles") {
          this.goal = 2;
          console.log(this.goal);
          if (this.onlogUser.gender == "Male") {
            this.calories = Math.round(((this.onlogUser.weight * 10) +
              (this.onlogUser.height * 6.25) - (5 * this.age) + 5) * this.activityValue);
            console.log(this.calories);
          }
          else {
            this.calories = Math.round(((this.onlogUser.weight * 10) +
              (this.onlogUser.height * 6.25) - (5 * this.age) - 161) * this.activityValue);
            console.log(this.calories);
          }
        }
        this.lbs = this.onlogUser.weight * 2.2;
        console.log(this.lbs);
        if (this.goal == 1) {
          this.calories = this.calories - 800;
          this.protein = this.lbs * 0.8;
          this.fats = this.lbs * 0.35;
          this.carbs = (this.calories - ((this.protein * 4) - (this.fats * 9))) / 4;
        }
        else if (this.goal == 2) {
          this.calories = this.calories + 250;
          this.protein = this.lbs * 0.7;
          this.fats = (this.lbs * 0.25) / 9;
          this.carbs = (this.calories - (this.protein * 4) - (this.fats * 9)) / 4;
        }
        this.allDayProtein = Math.round(this.protein);
        this.allDayCarbs = Math.round(this.carbs);
        this.allDayFats = Math.round(this.fats);
        console.log(this.allDayProtein);
        console.log(this.allDayCarbs);
        console.log(this.allDayFats);

        this.eachMealProtein = this.allDayProtein / 4;
        this.eachMealCarbs = this.allDayCarbs / 4;
        this.eachMealFats = this.allDayFats / 4;

        console.log(this.eachMealProtein);
        console.log(this.eachMealCarbs);
        console.log(this.eachMealFats);
      }
    }
  }

  back() {
    this.navCtrl.setRoot(HomePage, this.onlogUser);
  }
}
