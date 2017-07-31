import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage} from "../login/login";
import {ModalController} from "ionic-angular/index";
/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  logOut(){
    let modal=this.modalCtrl.create(LoginPage);
    modal.present();
  }
}
