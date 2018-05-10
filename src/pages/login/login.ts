import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { User } from '../DataProvider/User';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  onlogUser: User = new User();
  itemsUser: FirebaseListObservable<any[]>;
  getItemsUser: any[] = [];
  check : string = '';

  constructor(private afAuth: AngularFireAuth,private alertCtrl:AlertController,
    public navCtrl: NavController, public navParams: NavParams,
    public angularfire: AngularFireDatabase) {
    this.itemsUser = angularfire.list('/User/');
    this.itemsUser.subscribe(data => {
      this.getItemsUser = data;
    });
  }

  login(email:string,password:string){
    if (email == null || password == null) {
      email = "";
      password = "";
    }
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(e => {
      let alert = this.alertCtrl.create({
        title: 'Incorrect email or password.',
        subTitle: 'Please fill correct email or password to login.',
        buttons: ['Ok']
      });
      alert.present();
      console.error("Incorrect");
      this.check = e.message;
    }).then(data => {
      console.log("start");
      if (this.getItemsUser != null) {
        console.log("firebasecheck");
        console.log(this.check);
          if (this.afAuth.auth.currentUser != null && this.check == '') {
          for (let i = 0; i < this.getItemsUser.length; i++) {
            console.log("startloop");
            console.log("usercheck");
            if (this.getItemsUser[i].uid == this.afAuth.auth.currentUser.uid) {
              this.onlogUser = this.getItemsUser[i];
              console.dir(this.onlogUser);
              console.dir(this.getItemsUser[i]);
              this.onlogUser.UserKey = this.getItemsUser[i].$key;
              this.navCtrl.setRoot(HomePage, this.onlogUser);
              console.log("found");
              
            }
            console.log(" 1 row pass");
          }
        }
      }else {
        let alert = this.alertCtrl.create({
          title: 'Non of user on the server!',
          subTitle: 'Please SignUp first',
          buttons: [{
            text: 'Ok',
            handler: data => {
              this.navCtrl.push(RegisterPage);
            }
          }]
        });
        alert.present();
        console.error("Error");
      }
    });
    this.check='';
  
  }
  redirectToRegister() {
    this.navCtrl.push(RegisterPage);
    console.log("Redirect Complete");
  }
}
