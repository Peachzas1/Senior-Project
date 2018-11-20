import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { User } from '../DataProvider/User';
import { ProfilePage } from '../profile/profile';


/**
 * Generated class for the ProgressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-progress',
  templateUrl: 'progress.html',
})
export class ProgressPage {
  onlogUser: User = new User();
  fireUser : FirebaseListObservable<any[]>;
  fireProgress : FirebaseListObservable<any[]>;
  firePerPlan : FirebaseListObservable<any[]>;
  dataPerPlan: any[] = [];
  dataProgress: any[] = [];
  dataUser : any[] = [];
  titleProgress: any[] = [];
  progress: any[] = [];
  perPlan: number;
  weeks: any[] = [];
  showTable = false;

  weightWeek0:number;
  weightWeek4:number;
  heightWeek0:number;
  heightWeek4:number;
  waistMeasurementWeek0:number;
  waistMeasurementWeek4:number;
  calWeight:number;
  calHeight:number;
  calWaist:number;
  resultHeight:string;
  resultWeight:string;
  resultWaist:string;
  lastDate:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularfire: AngularFireDatabase, public events: Events) {
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
    this.fireUser = this.angularfire.list('/User/');
    this.fireUser.subscribe(data => {
      this.dataUser = data;
      console.log(data);
    });
    this.firePerPlan = this.angularfire.list('/User/'+ this.onlogUser.UserKey + '/perplan/');
    this.firePerPlan.subscribe(data => {
      this.dataPerPlan = data;
      console.log(data);
    });
    this.fireProgress = this.angularfire.list('/User/' + this.onlogUser.UserKey + '/progress/');
    this.fireProgress.subscribe(data => {
      this.dataProgress = data;
      console.log(data);
    });
    this.PlanProgress();
    console.log(this.dataPerPlan[0]);
    if(this.dataPerPlan[0] != undefined){
    this.change(this.dataPerPlan[this.dataPerPlan.length-1].plan);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgressPage');
  }

  PlanProgress(){
    for(let a =0;a<this.dataPerPlan.length;a++){
      this.titleProgress.push({
        plan: this.dataPerPlan[a].plan,
        per: this.dataPerPlan[a].per,
        date: this.dataPerPlan[a].date
      })
    }
  }

  addProgress(p: any){
    this.progress = [];
    for(let a =0;a<this.dataProgress.length;a++){
      if(this.dataProgress[a].plan == p){
        this.progress.push({
          height:this.dataProgress[a].height,
          weight:this.dataProgress[a].weight,
          waist:this.dataProgress[a].waistMeasurement,
          week:this.dataProgress[a].week
        });
      }
    }
  }

  change(p: any){
    for(let a =0;a<this.dataPerPlan.length;a++){
      if(p == this.dataPerPlan[a].plan){
        this.perPlan = this.dataPerPlan[a].per;
        this.lastDate = this.dataPerPlan[a].date;
      }
    }
    this.addProgress(p);
    this.Result(p);
    this.showTable = true;
    console.log(p);
  }

  Result(p:any){
    for(let a =0;a<this.dataProgress.length;a++){
      if(this.dataProgress[a].plan == p){
        if(this.dataProgress[a].week=="Week 0"){
          this.weightWeek0 = this.dataProgress[a].weight;
          this.heightWeek0 = this.dataProgress[a].height;
          this.waistMeasurementWeek0 = this.dataProgress[a].waistMeasurement;
          console.log("weight week0: "+ this.weightWeek0);
          console.log("height week0: "+ this.heightWeek0);
          console.log("waist week0: "+ this.waistMeasurementWeek0);
        }
        if(this.dataProgress[a].week=="Week 4"){
          this.weightWeek4 = this.dataProgress[a].weight;
          this.heightWeek4 = this.dataProgress[a].height;
          this.waistMeasurementWeek4 = this.dataProgress[a].waistMeasurement;
          console.log("weight week4: "+ this.weightWeek4);
          console.log("height week4: "+ this.heightWeek4);
          console.log("waist week4: "+ this.waistMeasurementWeek4);
        }
      }
    }
    this.calWeight = (this.weightWeek4 - this.weightWeek0);
    this.calHeight = (this.heightWeek4 - this.heightWeek0);
    this.calWaist = (this.waistMeasurementWeek4 - this.waistMeasurementWeek0);

    console.log(this.calHeight);
    console.log(this.calWeight);
    console.log(this.calWaist);

    if(this.calHeight >= 0){
      this.resultHeight = "+ "+this.calHeight;
    }
    if(this.calWeight >= 0){
      this.resultWeight = "+ "+this.calWeight;
    }
    if(this.calWaist >= 0){
      this.resultWaist = "+ "+this.calWaist;
    }
    if(this.calHeight < 0){
      this.resultHeight = ""+this.calHeight;
    }
    if(this.calWeight < 0){
      this.resultWeight = ""+this.calWeight;
    }
    if(this.calWaist < 0){
      this.resultWaist = ""+this.calWaist;
    }
  }

  back(){
    this.navCtrl.setRoot(ProfilePage,this.onlogUser);
  }
}
