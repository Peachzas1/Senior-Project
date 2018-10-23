import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../DataProvider/User';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LoginPage } from '../login/login'; 
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  firebaseUser: AngularFireDatabase;
  getItemsUsers: any[] = [];
  getItemsUser: any;
  newUser: User = new User();
  itemsUsers: FirebaseListObservable<any[]>;
  items: FirebaseListObservable<any[]>;
  dateofbirth: Date = new Date();

  constructor(private afAuth:AngularFireAuth ,public navCtrl: NavController,
   public navParams: NavParams,private alertCtrl: AlertController,public angularfire: AngularFireDatabase) {
    this.items = angularfire.list('/User/');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(email: string, password: string, fName: string,
    lName: string,weight:number, height:number,waistMeasurement:number, dateofbirth:Date, gender:string, fitplan:string, foodplan:string,
    collection:string) {
    fitplan = "null";
    foodplan = "null";
    collection ="null";
    let check :boolean = true;
    let result;
    if(email==null||password==null||fName==null||lName==null||weight==null||height==null||waistMeasurement==null||dateofbirth==null
        ||gender==null){
      let alert = this.alertCtrl.create({
            title: 'Please fill up this form',
            subTitle: 'Please fill up this form',
            buttons: ['OK']
          });
          console.log(alert);
          alert.present();
    }else{
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(email,password); 
    }
    catch (error) {
      console.log(error.message);
      if (error != null) {
        if (error.message == "The email address is already in use by another account.") {
          let alert = this.alertCtrl.create({
            title: 'Email Already Use',
            subTitle: 'Please Change Email',
            buttons: ['OK']
          });
          console.log(alert);
          alert.present();
          check = false;
        }
        if (error.message == "The email address is badly formatted.") {
          let alert = this.alertCtrl.create({
            title: ' Caution!',
            subTitle: 'Invalid Email',
            buttons: ['OK']
          });
          alert.present();
          check = false;
        }
        if (error.message == "Password should be at least 6 characters") {
          let alert = this.alertCtrl.create({
            title: ' Weak Password!',
            subTitle: 'Password should be at least 6',
            buttons: ['OK']
          });
          alert.present();
          check = false;

        }
      } else {
        let alert = this.alertCtrl.create({
          title: ' Unknown Error ',
          subTitle: ' Failed to create User',
          buttons: ['OK']
        });
        alert.present();
        check = false;
      }
    }
    if(check){
      this.newUser.email = email;
      this.newUser.password = password;
      this.newUser.fName = fName;
      this.newUser.lName = lName;
      this.newUser.height = height;
      this.newUser.weight = weight;
      this.newUser.waistMeasurement = waistMeasurement;
      this.newUser.dateofbirth = dateofbirth;
      this.newUser.gender = gender;
      this.newUser.fitplan = fitplan;
      this.newUser.foodplan = foodplan;
      this.newUser.collection = collection;
      this.newUser.uid = this.afAuth.auth.currentUser.uid;
      this.items.push(this.newUser);
      var alert = this.alertCtrl.create({
        title: ' Successfully ',
        subTitle: ' User Create ',
        buttons: [{
          text: 'OK',
          handler: data => {
            this.navCtrl.push(LoginPage);
          }
        }]
      });
      alert.present();
      
      for (let i = 0; i < this.getItemsUsers.length; i++) {
        let user: User = new User();
        user = this.getItemsUser[i];
        user.UserKey = this.getItemsUser[i].$key;
        this.itemsUsers.update(user.UserKey, user);
      }
      console.log(this.newUser.UserKey);
    }
    }
    }
    back(){
      this.navCtrl.setRoot(LoginPage);
    }
  }

