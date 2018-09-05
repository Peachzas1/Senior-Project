import { Component } from '@angular/core';
import { Loading, LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { HomePage } from '../home/home';

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
	video: any = {
        url: "https://www.youtube.com/embed/MLleDRkSuvk",
        title: 'Awesome video'
    };

    trustedVideoUrl: SafeResourceUrl;
    loading: Loading;

    constructor(public navCtrl: NavController,
                public loadingCtrl: LoadingController,
                private domSanitizer: DomSanitizer) {}

    ionViewWillEnter(): void {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);

        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        this.loading.present();
    }

    handleIFrameLoadEvent(): void {
        this.loading.dismiss();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}