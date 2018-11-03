import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController, DateTime} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { User } from '../DataProvider/User';
import { HomePage } from '../home/home';
import { Collection15Page } from '../collection15/collection15';

/**
 * Generated class for the CollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html',
})
export class CollectionPage {
  onlogUser: User;
  fireCollection: FirebaseListObservable<any[]>;
  fireUser: FirebaseListObservable<any[]>;
  dataCollection: any[] = [];
  dataUser: any[] = [];
  dataName: any = [];
  dataSend: any[] = [];
  today: number = Date.now();
  constructor(public navCtrl: NavController, public navParams: NavParams, public angularfire: AngularFireDatabase,
    public events: Events, private alertCtrl: AlertController) {
    this.onlogUser = this.navParams.data;
    this.events.publish('onLogUser : userAlreadyLog', this.onlogUser);
    this.fireCollection = this.angularfire.list('/WorkoutCollections/');
    this.fireCollection.subscribe(data => {
      this.dataCollection = data;
      console.log(data);
      this.Name();
    });
    this.fireUser = this.angularfire.list('/User/');
      this.fireUser.subscribe(data => {
        this.dataUser = data;
        console.log(data);
      });
    console.log(this.dataName);
    //this.fireUser.update(this.onlogUser.UserKey,{a:"aaa"});
    //this.fireUser.remove(this.onlogUser.UserKey+'/a');
  }

  Name(){
    for(let a = 0; a < this.dataCollection.length; a++){
      //this.dataName.push(this.dataCollection[a].name);
      //this.dataName.push(this.dataCollection[a].equipment);
      this.dataName.push({
        name: this.dataCollection[a].name,
        avgtime: this.dataCollection[a].avgtime,
        equipment: this.dataCollection[a].equipment,
        pic: this.dataCollection[a].pic
      })
    }
    console.log(this.dataName);
  }

  click(name:any){
    this.today = Math.floor((this.today / (1000 * 3600 * 24)));
    this.fireUser.update(this.onlogUser.UserKey,{startcollection:this.today});
    this.fireUser.update(this.onlogUser.UserKey,{collection:name});
    for(let a = 0;a<this.dataUser.length;a++){
      if(this.onlogUser.UserKey == this.dataUser[a].$key){
        this.onlogUser = this.dataUser[a];
        this.onlogUser.UserKey = this.dataUser[a].$key;
      }
    }
    console.log(this.onlogUser);
    //this.dataSend.push(this.onlogUser);
    //this.dataSend.push(name);
    this.navCtrl.setRoot(Collection15Page,this.onlogUser);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionPage');
  }

  back() {
    this.navCtrl.setRoot(HomePage, this.onlogUser);
  }
}
