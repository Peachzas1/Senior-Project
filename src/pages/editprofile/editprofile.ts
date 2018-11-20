import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { User } from '../DataProvider/User';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  dataUser : any[] = [];
  onlogUser: User = new User();
  fireUser : FirebaseListObservable<any[]>;
  weight: number;
  height: number;
  waistMeasurement: number;
  fName: string;
  lName: string;
  dateofbirth: Date;
  gender: string;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController,
    public navParams: NavParams, private alertCtrl: AlertController, public angularfire: AngularFireDatabase,
    public events: Events) {
      this.onlogUser = this.navParams.data;
      this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
      this.fireUser = this.angularfire.list('/User/');
      this.fireUser.subscribe(data => {
        this.dataUser = data;
        console.log(data);
      });
      this.profile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

  profile() {
    this.fName = this.onlogUser.fName;
    this.lName = this.onlogUser.lName;
    this.weight = this.onlogUser.weight;
    this.height = this.onlogUser.height;
    this.waistMeasurement = this.onlogUser.waistMeasurement;
    this.dateofbirth = this.onlogUser.dateofbirth;
    this.gender = this.onlogUser.gender;
  }

  edit(fName: string,lName: string, weight: number, height: number, waistMeasurement: number, dateofbirth: Date, gender: string){
      if (fName == null || lName == null || weight == null || height == null || waistMeasurement == null || dateofbirth == null
        || gender == null) {
        let alert = this.alertCtrl.create({
          title: 'Please fill up this form',
          subTitle: 'Please fill up this form',
          buttons: ['OK']
        });
        console.log(alert);
        alert.present();
      }else if(weight<30 || weight>200){
        let alert = this.alertCtrl.create({
          title: 'Fail',
          subTitle: 'Please enter weight between 30-200(kg)',
          buttons: ['OK']
        });
        console.log(alert);
        alert.present();
      }else if(height<120 || height>250){
        let alert = this.alertCtrl.create({
          title: 'Fail',
          subTitle: 'Please enter height between 120-250(cm)',
          buttons: ['OK']
        });
        console.log(alert);
        alert.present();
      }else if(waistMeasurement<15 || waistMeasurement>50){
        let alert = this.alertCtrl.create({
          title: 'Fail',
          subTitle: 'Please enter waistMeasurement between 15-50(inch)',
          buttons: ['OK']
        });
        console.log(alert);
        alert.present();
      }else{
        this.fireUser.update(this.onlogUser.UserKey,{ fName: fName});
        this.fireUser.update(this.onlogUser.UserKey,{ lName: lName});
        this.fireUser.update(this.onlogUser.UserKey,{ gender: gender});
        this.fireUser.update(this.onlogUser.UserKey,{ dateofbirth: dateofbirth});
        this.fireUser.update(this.onlogUser.UserKey, { weight: weight });
        this.fireUser.update(this.onlogUser.UserKey, { height: height });
        this.fireUser.update(this.onlogUser.UserKey, { waistMeasurement: waistMeasurement });
        for (let a = 0; a < this.dataUser.length; a++) {
          if (this.onlogUser.UserKey == this.dataUser[a].$key) {
            this.onlogUser = this.dataUser[a];
            this.onlogUser.UserKey = this.dataUser[a].$key;
          }
        }
        this.navCtrl.setRoot(ProfilePage, this.onlogUser);
        let alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: 'Success',
          buttons: ['OK']
        });
        alert.present();
      }
  }

  back(){
    this.navCtrl.setRoot(ProfilePage,this.onlogUser);
  }
}
