import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favoris',
  templateUrl: 'favoris.html',
})
export class FavorisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
 
/*   ionViewWillEnter() {
    this.initWarframeFavori();
  }

  private initWarframeFavori() {
    this.warframeFavoriProvider
      .getWarframeFavori()
      .then(favs => (this.warframeFavori = favs));
  } */
 
}
