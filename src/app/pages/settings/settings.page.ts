import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public alertController: AlertController, public todoService:TodoService) {

  }

  ngOnInit() {
  }

  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
    }else{
      document.body.setAttribute('color-theme', 'light');
      
    }
  }

  async confirmationAlert(){
    const alert = await this.alertController.create({
      header: 'Are you sure you want to clear all your task?',
      message: 'You cannot revert or recover your tasks. Do really want to do this?',
      // buttons: ['Cancel', 'Yes!']
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: (blah) => {
          console.log('Confirm Cancel: blah')
        }
      },{
        text: 'Yes!',
        role: 'yes',
        handler: () => {
          this.todoService.resetTasks()}
        }
    ]
    });
    await alert.present();
  }

}
