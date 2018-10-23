import { Component } from '@angular/core';
import { Loading, LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { HomePage } from '../home/home';
import { User } from '../DataProvider/User';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
	d: Date;
    onlogUser: User;

    constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,private domSanitizer: DomSanitizer) {
        console.log(this.d);
    }    
}