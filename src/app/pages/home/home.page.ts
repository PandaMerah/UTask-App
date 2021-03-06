import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { TaskPage } from '../task/task.page';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  todoList =[]
  
  
  today : number = Date.now()
  
  constructor(public modalCtrl:ModalController, public todoService:TodoService) {
    this.getAllTask()
  }
  
  async addNewItem(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    })
    modal.onDidDismiss().then(newTask =>{ 
      this.getAllTask()
    })
    return await modal.present()
  }

  getAllTask(){
    this.todoList = this.todoService.getAllTasks()
    console.log(this.todoList)
  }

  refreshTask(event){
    this.todoList = []
    this.todoList = this.todoService.getAllTasks()
    console.log(this.todoList)

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  delete(key) {
    this.todoService.deleteTask(key)
    this.getAllTask()
  }

  async update(selectedTask){
    const modal = await this.modalCtrl.create({
      component: TaskPage,
      componentProps: {task: selectedTask}
    }) 

    modal.onDidDismiss().then(()=>{
      this.getAllTask()
    })
  
    return await modal.present()
  }
      
}
