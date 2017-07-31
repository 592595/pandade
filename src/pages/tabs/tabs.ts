import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SettingPage} from '../setting/setting';
import { AboutPage } from '../about/about';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];

  constructor() {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: 'Home',
        tabIcon: 'home'
      },
      {
        root: AboutPage,
        tabTitle:'关于',
        tabIcon:'heart'
      },
      {
        root: SettingPage,
        tabTitle: '设置',
        tabIcon: 'person'
      }
    ];
  }
}
