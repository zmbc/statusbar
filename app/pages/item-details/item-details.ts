import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {ListPage} from "../list/list";


@Component({
  templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, navParams: NavParams, public viewCtrl: ViewController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  push() {
    this.navCtrl.push(ListPage);
  }
}
