import { Component } from '@angular/core';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';
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
  
  constructor(public tabs:TabsService, private lottieSplashScreen: LottieSplashScreen) {}

}

