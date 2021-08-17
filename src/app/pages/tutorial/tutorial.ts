import { Component, ViewChild,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../../todo.service';
import { MenuController, IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss'],
})
export class TutorialPage {
  showSkip = true;

  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage
  ) {}

  startApp() {
    this.router
      .navigateByUrl('/home', { replaceUrl: true })
      .then(() => this.storage.set('ion_did_tutorial', true));
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        this.router.navigateByUrl('/home', { replaceUrl: true });
      }
    });

    this.menu.enable(false);
  }

  // nextSlide(){
  //   this.slides.slideNext();
  // }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}

export class AddNewTaskPage implements OnInit {
  categories= []
  categorySelectedCategory

  newTaskObj = {}
  itemName
  itemDueDate
  itemPriority
  itemCategory


  constructor(public modalCtlr: ModalController, public todoService:TodoService) { 

   }

  ngOnInit() {
    this.categories.push('work')
    this.categories.push('personal')
    this.categories.push('school')
  }

  async add(){
    this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory})
    console.log(this.newTaskObj);
    let uid = this.itemName + this.itemDueDate
    
    if(uid){
      await this.todoService.addTask(uid,this.newTaskObj)
    }else{
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

