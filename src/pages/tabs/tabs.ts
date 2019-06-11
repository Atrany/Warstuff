import { FavorisPage } from './../favoris/favoris';
import { WarframesPage } from './../warframes/warframes';
import { Component } from '@angular/core';
import { InformationsPage } from '../informations/informations';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WarframesPage;
  tab2Root = FavorisPage;
  tab3Root = InformationsPage; 

  constructor() {

  }
}
