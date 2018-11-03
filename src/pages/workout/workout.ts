import { Component } from '@angular/core';
import { Loading, LoadingController, IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { User } from '../DataProvider/User';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { WorkoutCategoryArmsPage } from '../workout-category-arms/workout-category-arms';
import { WorkoutCategoryShouldersPage } from '../workout-category-shoulders/workout-category-shoulders';
import { WorkoutCategoryAbsPage } from '../workout-category-abs/workout-category-abs';
import { WorkoutCategoryChestPage } from '../workout-category-chest/workout-category-chest';
import { WorkoutCategoryBackPage } from '../workout-category-back/workout-category-back';
import { WorkoutCategoryLegsPage } from '../workout-category-legs/workout-category-legs';
import { WorkoutCategoryCardioPage } from '../workout-category-cardio/workout-category-cardio';

/**
 * Generated class for the WorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html',
})
export class WorkoutPage {
  onlogUser: User;
  fireFitnessPlanVideo: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularfire: AngularFireDatabase,
    public events: Events, public loadingCtrl: LoadingController, private domSanitizer: DomSanitizer ) {
      this.onlogUser = this.navParams.data;
      this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
    console.log("a");
    console.log(this.onlogUser);
  }

  Arm(){
    this.navCtrl.setRoot(WorkoutCategoryArmsPage,this.onlogUser);
    console.log("Arm");
  }

  Shoulder(){
    this.navCtrl.setRoot(WorkoutCategoryShouldersPage,this.onlogUser);
  }

  Chest(){
    this.navCtrl.setRoot(WorkoutCategoryChestPage,this.onlogUser);
  }

  Back(){
    this.navCtrl.setRoot(WorkoutCategoryBackPage,this.onlogUser);
  }

  Abs(){
    this.navCtrl.setRoot(WorkoutCategoryAbsPage,this.onlogUser);
  }

  Legs(){
    this.navCtrl.setRoot(WorkoutCategoryLegsPage,this.onlogUser);
  }

  Cardio(){
    this.navCtrl.setRoot(WorkoutCategoryCardioPage,this.onlogUser);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutPage');
  }

  back(){
    this.navCtrl.setRoot(HomePage,this.onlogUser);
  }
}
