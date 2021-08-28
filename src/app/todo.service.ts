import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: Storage, ) {
    this.init()
   }
  //  private localNotifications: LocalNotifications

  addTask(key, value){
    this.storage.set(key,value)
  }

  deleteTask(key){
    this.storage.remove(key)
  }

  updateTask(key, newValue){
    this.storage.set(key, newValue)
    this.getAllTasks()
  }

  

  getAllTasks(){
    let tasks: any = []
    this.storage.forEach((key, value, index) => {
    // this.storage.get(uid, this.newTaskObj)
    if (value=='ion_did_tutorial'){
    }else{
      tasks.push({'key':value, 'value':key})
    }
    });
    return tasks
  }

  async resetTasks(){
    await this.storage.clear()
  }

  async init(){
    await this.storage.create()
  }
}

