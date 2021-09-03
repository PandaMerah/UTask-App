import { AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    public alertController: AlertController,
    public todoService:TodoService,
    public toastController:ToastController,
    public router: Router,
    ) {

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

  aboutUs(){
    this.router.navigateByUrl('/aboutus', { replaceUrl: true});
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

  async profile(){
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: "Profile System is not yet available to the public",
      // showCloseButton: true
    });
    await toast.present();
    console.log("can't save empty task");

  }

}
