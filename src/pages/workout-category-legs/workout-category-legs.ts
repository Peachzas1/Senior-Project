import { Component } from '@angular/core';
import { Loading, LoadingController, IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { HomePage } from '../home/home';
import { FitnessPlan } from '../DataProvider/FitnessPlan';
import { User } from '../DataProvider/User';
import { Questionnaires } from '../DataProvider/Question';
import { Video } from '../DataProvider/Video';
import { WorkoutPage } from '../workout/workout';


@IonicPage()
@Component({
  selector: 'page-workout-category-legs',
  templateUrl: 'workout-category-legs.html',
})
export class WorkoutCategoryLegsPage {

  onlogUser: User;
  fireFitnessPlanVideo: FirebaseListObservable<any[]>;
  dataFitnessPlanVideo: any[] = [];
  dataFitnessPlanTitle: any = [];
  dataFitnessPlanLegs: any = [];
  video: string;
  trustedVideoUrl: SafeResourceUrl;
  loading: Loading;
  buttonClicked1: boolean = true;
  buttonClicked2: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularfire: AngularFireDatabase,
    public events: Events, public loadingCtrl: LoadingController, private domSanitizer: DomSanitizer ) {
      this.onlogUser = this.navParams.data;
      this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
      this.fireFitnessPlanVideo = this.angularfire.list('/Video/');
      this.fireFitnessPlanVideo.subscribe(data => {
        this.dataFitnessPlanVideo = data;
        console.log(data);
        this.videoLink();
        //this.video = this.dataFitnessPlanUserVideo.Link;
        //this.ionViewWillEnter();
      });
    console.log("a");
    console.log(this.onlogUser);
  }

  videoLink(){
    for(let a = 0; a < this.dataFitnessPlanVideo.length; a++){
      if(this.dataFitnessPlanVideo[a].Category == "Legs"){
        this.dataFitnessPlanLegs.push(this.dataFitnessPlanVideo[a].Title);
      }
      this.dataFitnessPlanTitle.push(this.dataFitnessPlanVideo[a].Title);
    }
  }

  click(title:any){
    if(this.buttonClicked1 == true){
      this.buttonClicked1 = !this.buttonClicked1;
      this.buttonClicked2 = !this.buttonClicked2;
    }
    for(let a = 0;a < this.dataFitnessPlanVideo.length; a++){console.log("1");
      if(title == this.dataFitnessPlanVideo[a].Title){console.log("2");
        this.video = this.dataFitnessPlanVideo[a].Link;
      }
    }
    this.ionViewWillEnter();
    console.log(title);
  }

  ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video);

    /*this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });

    this.loading.present();*/
    console.log(this.trustedVideoUrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutCategoryLegsPage');
  }

  back(){
    this.navCtrl.setRoot(WorkoutPage,this.onlogUser);
  }

}
