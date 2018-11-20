import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { User } from '../DataProvider/User';
import { HomePage } from '../home/home';
import { Events } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProgressPage} from '../progress/progress';
import { EditprofilePage } from '../editprofile/editprofile';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  data: any[] = [];
  dataUser : any[] = [];
  onlogUser: User = new User();
  fireUser : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularfire: AngularFireDatabase, public events: Events) {
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
    this.fireUser = this.angularfire.list('/User/');
    this.fireUser.subscribe(data => {
      this.dataUser = data;
      console.log(data);
    });
    console.log(this.onlogUser);
    this.data.push({
      fName:this.onlogUser.fName,
      lName:this.onlogUser.lName,
      email:this.onlogUser.email,
      gender:this.onlogUser.gender,
      height:this.onlogUser.height,
      weight:this.onlogUser.weight,
      waistMeasurement:this.onlogUser.waistMeasurement,
      dateofbirth:this.onlogUser.dateofbirth
    })
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  back(){
    this.navCtrl.setRoot(HomePage,this.onlogUser);
  }

  progress(){
    this.navCtrl.setRoot(ProgressPage,this.onlogUser);
  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

  edit(){
    this.navCtrl.setRoot(EditprofilePage,this.onlogUser);
  }
}
