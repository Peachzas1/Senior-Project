import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { QuestionPage } from '../question/question';
import { User } from '../DataProvider/User';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  onlogUser: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events) {
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog',this.onlogUser);
    console.dir(this.onlogUser);
  }
  login(){
  	this.navCtrl.setRoot(LoginPage);
  }
  startPlan(){
  	this.navCtrl.push(QuestionPage,this.onlogUser);
  }
}
