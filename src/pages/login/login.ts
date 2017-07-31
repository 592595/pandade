import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import {Modal} from "ionic-angular/index";
import {ModalController} from "ionic-angular/index";
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      alert("请输入账号");
    } else if (password.value.length == 0) {
      alert("请输入密码");
    } else {
      let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
      alert(userinfo);
      /*this.navCtrl.push(TabsPage);*/
      let modal=this.modalCtrl.create(TabsPage);
      modal.present();
  }




}
}



