import { Component } from '@angular/core';
import { Loading, LoadingController, IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FitnessPlan } from '../DataProvider/FitnessPlan';
import { User } from '../DataProvider/User';
import { Questionnaires } from '../DataProvider/Question';
import { Video } from '../DataProvider/Video';
import { AlertController } from 'ionic-angular';
import { FitnessPlan2Page } from '../fitness-plan2/fitness-plan2';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the FitnessPlan3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fitness-plan3',
  templateUrl: 'fitness-plan3.html',
})
export class FitnessPlan3Page {
  fitnessPlan: FitnessPlan[];
  fireFitnessPlan: FirebaseListObservable<any[]>;
  fireFitnessPlanUser: FirebaseListObservable<any[]>;
  fireFitnessPlanVideo: FirebaseListObservable<any[]>;
  dataFitnessPlan: any[] = [];
  dataFitnessPlanUser: any = [];
  dataFitnessPlanVideo: any[] = [];
  dataFitnessPlanUserVideo: any = [];
  dataFitnessPlanTitleVideo: any[] = [];
  dataFitnessPlanLinkVideo: any[] = [];
  dataUserSend: User;
  onlogUser: User;
  userPlanKey: string;
  buttonClicked1: boolean = true;
  trustedVideoUrl: SafeResourceUrl;
  loading: Loading;
  video: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public angularfire: AngularFireDatabase, public events: Events, private alertCtrl: AlertController,
    public loadingCtrl: LoadingController, private domSanitizer: DomSanitizer) {
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
    this.dataUserSend = this.navParams.data;
    console.dir(this.onlogUser);
    this.fireFitnessPlan = this.angularfire.list('/FitnessPlan/');
    this.fireFitnessPlan.subscribe(data => {
      this.dataFitnessPlan = data;
      console.log(data);
    });
    this.fireFitnessPlanUser = this.angularfire.list('/FitnessPlan/' + this.onlogUser.fitplan);
    this.fireFitnessPlanUser.subscribe(data => {
      this.dataFitnessPlanUser = data;
      console.log(data);

      this.fireFitnessPlanVideo = this.angularfire.list('/Video/');
      this.fireFitnessPlanVideo.subscribe(data => {
        this.dataFitnessPlanVideo = data;
        console.log(data);
        this.videoKey();
        this.video = this.dataFitnessPlanUserVideo.Link;
        this.ionViewWillEnter();
      });
    });
    console.log(this.dataFitnessPlanVideo);
    console.log(this.video);
    this.userPlanKey = this.onlogUser.fitplan;
    console.log(this.userPlanKey);
    for (let j = 0; j < this.dataFitnessPlan.length; j++) {
      console.log("for");
      if (this.userPlanKey == this.dataFitnessPlan[j].$key) {
        this.dataFitnessPlanUser = this.dataFitnessPlan[j];
        console.log(this.dataFitnessPlanUser);
        console.log(this.userPlanKey);
      }
    }
    /*for(let i = 0; i < this.dataFitnessPlanVideo.length; i++){
      console.log("for");
      if(this.dataFitnessPlanUser.week.week1.day1.set1.workout1.title == this.dataFitnessPlanVideo[i].$key){
        this.dataFitnessPlanUserVideo = this.dataFitnessPlanVideo[i];
        console.log(this.dataFitnessPlanUserVideo);
      }
    }*/
  }

  ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video);

    /*this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });

    this.loading.present();*/
    console.log(this.trustedVideoUrl);
  }

  /*handleIFrameLoadEvent(): void {
    this.loading.dismiss();
  }*/

  videoKey() {
    for (let i = 0; i < this.dataFitnessPlanVideo.length; i++) {
      console.log("for");
      if (this.dataFitnessPlanUser.week.week1.day1.set1.workout2.title == this.dataFitnessPlanVideo[i].Title) {
        this.dataFitnessPlanUserVideo = this.dataFitnessPlanVideo[i];
        console.log();
      }
    }
  }

  linkVideo(){
    for (let i = 0; i < this.dataFitnessPlanVideo.length; i++) {
      this.dataFitnessPlanLinkVideo[i] = this.dataFitnessPlanVideo[i].Link;
    }
    console.log("titlevideo");
  }

  titleVideo(){
    for (let i = 0; i < this.dataFitnessPlanVideo.length; i++) {
      this.dataFitnessPlanTitleVideo[i] = this.dataFitnessPlanVideo[i].Title;
    }
    console.log("titlevideo");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FitnessPlan3Page');
  }

  submit() {
    this.ionViewWillEnter();
    this.titleVideo();
    console.log(this.dataFitnessPlanUserVideo);
    console.log(this.video);
  }

}
