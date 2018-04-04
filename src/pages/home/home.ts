import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  message: Array<string> = ["This is Home"];
  constructor(
    public mModalController : ModalController,
    public navCtrl: NavController) {

  }
  pushPage(){
    this.navCtrl.push("ListPage");
  }

  showModal(){
    // this.navCtrl.push("ModalPage");
    let modal = this.mModalController.create("ModalPage");
    modal.present();
    // 
    modal.onDidDismiss((data)=>{
      console.log("tawts view");
      if(data){

        this.message.push(data);
        this.message[0] = data;

      }
    })
  }
}
