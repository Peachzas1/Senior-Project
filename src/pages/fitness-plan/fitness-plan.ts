import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FitnessPlan } from '../DataProvider/FitnessPlan';
import { User } from '../DataProvider/User';
import { Questionnaires } from '../DataProvider/Question';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
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
  fireFitnessPlanUser: FirebaseListObservable<any[]>;
  dataFitnessPlan: any[] =[];
  dataFitnessPlanUser: any[] =[];
  itemKey : any[]
  dataUserSend :User;
  onlogUser: User;
  onlogPlan: FitnessPlan = new FitnessPlan();
  fireUser: FirebaseListObservable<any[]>;
  fireUser2: FirebaseListObservable<any[]>;
  age: number;
  bmi: number;
  today: number = Date.now();
  keyFit: any[] =[];
  userPlanKey: string;
  imagePath: string = "../../assets/imgs/plan4.jpg";
  buttonClicked1: boolean = false;
  buttonClicked2: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
           public angularfire: AngularFireDatabase, public events: Events, private alertCtrl: AlertController) {
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
    this.dataUserSend = this.navParams.data;
    console.dir(this.onlogUser);
    this.fireFitnessPlan = this.angularfire.list('/FitnessPlan/');
    this.fireFitnessPlan.subscribe(data => {
    this.dataFitnessPlan = data;
    console.log(data);
    });
    this.fireFitnessPlanUser = this.angularfire.list('/FitnessPlan/'+this.onlogUser.fitplan);
      this.fireFitnessPlanUser.subscribe(data => {
      this.dataFitnessPlanUser = data;
      console.log(data);
      });
    console.log(this.dataFitnessPlan);
    this.angularfire.list('/User/'+this.onlogUser.UserKey+'/userAnswer/').subscribe(data => {
    this.itemKey = data;    
    this.itemKey.map(item => {
       console.log(item.$key);
      })
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
  }

  submit(){
      this.buttonClicked1 = !this.buttonClicked1;
      this.buttonClicked2 = !this.buttonClicked2;
      console.log("else");
      this.userPlanKey = this.onlogUser.fitplan;
      console.log(this.userPlanKey);
      for(let j = 0; j < this.dataFitnessPlan.length; j++){
        console.log("for");
        if(this.userPlanKey == this.dataFitnessPlan[j].$key){
          this.dataFitnessPlanUser = this.dataFitnessPlan[j];
          if(j==0){
            this.imagePath = "../../assets/imgs/Plan1.jpg";
          }else if(j==1){
            this.imagePath = "../../assets/imgs/Plan2.jpg";
          }else if(j==2){
            this.imagePath = "../../assets/imgs/Plan3.jpg";
          }else if(j==3){
            this.imagePath = "../../assets/imgs/Plan4.jpg";
          }
          console.log(this.dataFitnessPlanUser);
          console.log(this.userPlanKey);
        }
      }
    //console.log(this.itemKey[0].PD);
    //if(this.dataFitnessPlan[1].intensity==2){
    /*if(this.onlogUser.fitplan=="null"){
      console.log("success")
    }else{
      console.log("fail")
    }*/
  }
  back(){
    this.navCtrl.setRoot(HomePage,this.dataUserSend);
  }
}