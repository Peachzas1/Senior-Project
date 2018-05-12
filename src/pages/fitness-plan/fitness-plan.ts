import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FitnessPlan } from '../DataProvider/FitnessPlan';
import { User } from '../DataProvider/User';
import { Questionnaires } from '../DataProvider/Question';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the FitnessPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fitness-plan',
  templateUrl: 'fitness-plan.html',
})
export class FitnessPlanPage {

  fitnessPlan: FitnessPlan[];
  fireFitnessPlan: FirebaseListObservable<any[]>;
  dataFitnessPlan: any[] =[];
  answerData : any[]
  onlogUser: User;
  onlogPlan: FitnessPlan = new FitnessPlan();
  fireUser: FirebaseListObservable<any[]>;
  age: number;
  bmi: number;
  today: number = Date.now();
  keyFit: any[] =[];
  PlanKey: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
           public angularfire: AngularFireDatabase, public events: Events, private alertCtrl: AlertController) {
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
    console.dir(this.onlogUser);
    this.fireFitnessPlan = this.angularfire.list('/FitnessPlan/');
    this.fireFitnessPlan.subscribe(data => {
    this.dataFitnessPlan = data;
    console.log(data);
    });
    console.log(this.dataFitnessPlan);
    this.angularfire.list('/User/'+this.onlogUser.UserKey+'/userAnswer/').subscribe(data => {
    this.answerData = data;    
    });
    this.fireUser = this.angularfire.list('/User/');
  }

  /*calculate(bmi: number){
    bmi = this.onlogUser.weight/(this.onlogUser.height*this.onlogUser.height);
    console.log(bmi);
  }

  CalculateAge(): void{
            var timeDiff = Math.abs(this.today - new Date(this.onlogUser.dateofbirth).getTime());
            this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
            console.log(this.age);
    }

  check(){
    this.bmi = this.onlogUser.weight/(this.onlogUser.height*this.onlogUser.height);
    console.log(this.bmi);
    var timeDiff = Math.abs(this.today - new Date(this.onlogUser.dateofbirth).getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    console.log(this.age);
    if(this.onlogUser.fitplan=="null"){
      for(let i = 0; i < this.dataFitnessPlan.length; i++){
        if(this.onlogUser.gender==this.dataFitnessPlan[i].gender.gender1||this.onlogUser.gender==this.dataFitnessPlan[i].gender.gender2){
          if(this.itemKey[0].PD==this.dataFitnessPlan[i].difficult){
            if(this.itemKey[0].PI==this.dataFitnessPlan[i].intensity){
              if(this.age>=this.dataFitnessPlan[i].start&&this.age<=this.dataFitnessPlan[i].end){
                if(this.bmi>=this.dataFitnessPlan[i].start&&this.age<=this.dataFitnessPlan[i].end){

                }
              }
            }
          }
        }
      }
    }else{
      let alert = this.alertCtrl.create({
            title: 'Already have plan',
            subTitle: 'Your have plan',
            buttons: ['OK']
          });
      alert.present();
    }//
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad FitnessPlanPage');
    this.bmi = this.onlogUser.weight/((this.onlogUser.height/100)*(this.onlogUser.height/100));
    console.log(this.bmi);
    var timeDiff = Math.abs(this.today - new Date(this.onlogUser.dateofbirth).getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    console.log(this.age);
    if(this.onlogUser.fitplan=="null"){
      for(let i = 0; i < this.dataFitnessPlan.length; i++){
        if(this.onlogUser.gender==this.dataFitnessPlan[i].gender.gender1||this.onlogUser.gender==this.dataFitnessPlan[i].gender.gender2){console.log("gender")
          if(this.answerData[0].PD==this.dataFitnessPlan[i].difficult){console.log("difficult")
            if(this.answerData[0].PI==this.dataFitnessPlan[i].intensity){console.log("intensity")
              if(this.answerData[0].Equipment==this.dataFitnessPlan[i].equipment){console.log("equipment")
                if(this.age>=this.dataFitnessPlan[i].age.start&&this.age<=this.dataFitnessPlan[i].age.end){console.log("age")
                  if(this.bmi>=this.dataFitnessPlan[i].bmi.start&&this.bmi<=this.dataFitnessPlan[i].bmi.end){console.log("bmi")
                    console.log("success")
                    this.keyFit = this.dataFitnessPlan[i];
                    this.fireUser.update(this.onlogUser.UserKey,{fitplan:this.dataFitnessPlan[i].$key});
                    break;
                  }
                }
              }
            }
          }
        }
      }
    }else{
      let alert = this.alertCtrl.create({
            title: 'Already have plan',
            subTitle: 'Your have plan',
            buttons: ['OK']
          });
      alert.present();
    }
    console.log()
    //console.log(this.itemKey[0].PD);
    //if(this.dataFitnessPlan[1].intensity==2){
    /*if(this.onlogUser.fitplan=="null"){
      console.log("success")
    }else{
      console.log("fail")
    }*/
  }
}