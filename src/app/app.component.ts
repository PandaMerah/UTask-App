import { Component } from '@angular/core';
import { TabsService } from './core/tabs.service';
// import { ModalController } from '@ionic/angular';
// import { AddNewTaskPage } from './pages/add-new-task/add-new-task.page';
// import { TodoService } from './todo.service';
// import { TaskPage } from './pages/task/task.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  


  constructor(public tabs:TabsService) {}


  // Theme Changer Code
  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
    }else{
      document.body.setAttribute('color-theme', 'light');

    }
  }

}
