import { ApiWarframeProvider } from './../../providers/api-warframe/api-warframe';
import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Subscription } from 'rxjs';

/**
 * Generated class for the WarframesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-warframes',
  templateUrl: 'warframes.html',
})
export class WarframesPage {
  public subs : Subscription;
  warframes: Warframe[];
  page = 1;
  filter: String = "";
  
  constructor(public navCtrl: NavController, public ApiWarframeProvider: ApiWarframeProvider) {
  }

  ionViewDidLoad() {
    this.getWarframe();
  }

  getWarframe() {
    this.page = 1;
    this.subs = this.ApiWarframeProvider.getWarframe(this.page.toString()).subscribe(data =>{
      this.warframes = data.results;
    })
  }
}
