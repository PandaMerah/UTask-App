import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  constructor(private router: Router, private platform: Platform) {
    this.platform.ready().then(() => {
      console.log('Core service init');
      this.navEvents();
    });
  }

     // A simple subscription that tells us what page we're currently navigating to.
  private navEvents() {
  this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
    console.log(e);
    this.showHideTabs(e);
    });
  }

  private hideTabBarPages: string[] = [
    'tutorial',
  ];

  private showHideTabs(e: NavigationEnd){
    id:13
    url: "/tutorial"
    urlAfterRedirects:"/tutorial"
    const urlArray = e.url.split('/');
    const pageUrl = urlArray[urlArray.length - 1];
    const page = pageUrl.split('?')[0];
    const shouldHide = this.hideTabBarPages.indexOf(page) > -1;
    shouldHide ? this.hideTabs() : this.showTabs()
  }

  public hideTabs(){
    const tabBar = document.getElementById('myTabBar');
    if (tabBar !== null && tabBar.style.display !== 'none')
    tabBar.style.display = 'none';
  }

  public showTabs() {
    const tabBar = document.getElementById('myTabBar');
    if (tabBar !== null && tabBar.style.display !== 'flex') tabBar.style.display = 'flex';
  }
}
