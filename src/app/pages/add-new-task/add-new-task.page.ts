import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  minDate: string = new Date().toISOString();
  maxDate : any = (new Date()).getFullYear() + 3;
  categories= []
  categorySelectedCategory

  newTaskObj = {}
  itemName
  itemDueDate
  itemPriority
  itemCategory


  constructor(public modalCtlr: ModalController, public todoService:TodoService, public toastController: ToastController) { 

   }

  ngOnInit() {
    this.categories.push('Work')
    this.categories.push('Homework')
    this.categories.push('Personal')
  }

  async add(){
    this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory})
    console.log(this.newTaskObj);
    let uid = this.itemName + this.itemDueDate
    
    if(uid){
      await this.todoService.addTask(uid,this.newTaskObj)
    }else{
      const toast = await this.toastController.create({
        color: 'dark',
        duration: 2000,
        message: "Can't save empty task",
        // showCloseButton: true
      });
      await toast.present();
      console.log("can't save empty task");
    }
    
    this.dismis()
  }

  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtlr.dismiss(this.newTaskObj)
  }

}
