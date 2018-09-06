import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Questionnaires } from '../DataProvider/Question';
import { User } from '../DataProvider/User';
import { Validators, FormControl, FormBuilder, FormGroup} from '@angular/forms';
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

  question : Questionnaires[];
  fireQuestion: FirebaseListObservable<any[]>;
  dataQuestion: any[] =[];
  onlogUser: User;
  fireUser: FirebaseListObservable<any[]>;
  fireUserAnswer: FirebaseListObservable<any[]>;
  questionForm : FormGroup;
  fireFitnessPlan: FirebaseListObservable<any[]>;
  dataFitnessPlan: any[] =[];
  age: number;
  bmi: number;
  today: number = Date.now();
  keyFit: any[] =[];
  itemKey : any[]

  fireFoodPlan: FirebaseListObservable<any[]>;
  dataFoodPlan: any[] =[];
  keyFood: any[] =[];
  weight: number;
  height: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public angularfire: AngularFireDatabase, public events: Events, public builder:FormBuilder, private alertCtrl: AlertController) {
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
    console.dir(this.onlogUser); 

    this.fireQuestion = this.angularfire.list('/Questionnaires/');
    this.fireQuestion.subscribe(data => {
      this.dataQuestion = data;
      console.log(data)
    });
    this.fireUserAnswer = this.angularfire.list('/User/'+this.onlogUser.UserKey+'/userAnswer/');

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
    
    console.log(this.dataFitnessPlan);
    this.questionForm = this.builder.group({
      'Equipment' : ['',Validators.required],
      'WPD' : ['',Validators.required],
      'PD' : ['',Validators.required],
      'PI' : ['',Validators.required]
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

  submit(){
    if(this.questionForm.valid){
      console.log('Valdiate : Pass')
      this.fireUserAnswer.push(this.questionForm.value);
      console.log(this.onlogUser);
      this.bmi = this.onlogUser.weight/((this.onlogUser.height/100)*(this.onlogUser.height/100));
      console.log(this.bmi);
      this.weight = this.onlogUser.weight;
      this.height = this.onlogUser.height;
      var timeDiff = Math.abs(this.today - new Date(this.onlogUser.dateofbirth).getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      console.log(this.age);
      console.log(this.dataFitnessPlan);
      console.log(this.dataFoodPlan);
      for(let i = 0; i < this.dataFitnessPlan.length; i++){
        console.log("for");
        console.log(this.itemKey[0]);
        if(this.onlogUser.gender==this.dataFitnessPlan[i].gender.gender1||this.onlogUser.gender==this.dataFitnessPlan[i].gender.gender2){console.log("gender")
          if(this.itemKey[0].PD==this.dataFitnessPlan[i].difficult){console.log("difficult")
            if(this.itemKey[0].PI==this.dataFitnessPlan[i].intensity){console.log("intensity")
              if(this.itemKey[0].Equipment==this.dataFitnessPlan[i].equipment){console.log("equipment")
                if(this.age>=this.dataFitnessPlan[i].age.start&&this.age<=this.dataFitnessPlan[i].age.end){console.log("age")
                  if(this.bmi>=this.dataFitnessPlan[i].bmi.start&&this.bmi<=this.dataFitnessPlan[i].bmi.end){console.log("bmi")
                    console.log("success")
                    this.keyFit = this.dataFitnessPlan[i];
                    console.log(this.keyFit)
                    this.fireUser.update(this.onlogUser.UserKey,{fitplan:this.dataFitnessPlan[i].$key});
                    
                  }
                }
              }
            }
          }
        }
    }
    for(let j = 0; j < this.dataFoodPlan.length; j++){
    console.log("for");
        console.log(this.itemKey[0]);
        if(this.onlogUser.gender==this.dataFoodPlan[j].gender.gender1||this.onlogUser.gender==this.dataFoodPlan[j].gender.gender2){console.log("gender")
          if(this.age>=this.dataFoodPlan[j].age.start&&this.age<=this.dataFoodPlan[j].age.end){console.log("age")
            if(this.weight>=this.dataFoodPlan[j].weight.start&&this.weight<=this.dataFoodPlan[j].weight.end){console.log("weight")
               if(this.height>=this.dataFoodPlan[j].height.start&&this.height<=this.dataFoodPlan[j].height.end){console.log("height")
              console.log("success");
              this.keyFood = this.dataFoodPlan[j];
              console.log(this.keyFood)
              this.fireUser.update(this.onlogUser.UserKey,{foodplan:this.dataFoodPlan[j].$key});
              this.navCtrl.setRoot(HomePage,this.onlogUser);
              }
            }
          }
        }
      }
      
        
      
       
    }else{
      let alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: 'กรุณากรอกข้อมูลให้ครบถ้วน',
            buttons: ['OK']
          });
      alert.present();
      console.log('Valdiate : Invalid');
    }
  }
}
