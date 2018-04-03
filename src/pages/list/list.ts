import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  items  = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = ["Book","Deline","Cancel"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  menuIndex: number = 0;
  change(number){
    this.menuIndex = number;
    // var animate = document.getElementById("animate");
    // if(animate){
    //   var distance = animate.clientWidth * number + "px";
    //   console.log(distance);
      
    //   animate.style.left = distance;
    // }
  }
}
