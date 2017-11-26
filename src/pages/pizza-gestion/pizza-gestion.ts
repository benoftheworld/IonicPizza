import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { PizzaService } from '../../pizza.service';
import { Pizza } from '../../models/pizza';
import { PizzaAddPage } from '../pizza-add/pizza-add';
import { PizzaUpdatePage } from '../pizza-update/pizza-update';

/**
 * Generated class for the PizzaGestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizza-gestion',
  templateUrl: 'pizza-gestion.html',
})
export class PizzaGestionPage {

  pizza: Pizza[];

  constructor(public pizzaService: PizzaService, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzaPage');
    this.pizzaService.getAll().subscribe(pizza => {
      this.pizza = pizza;
      console.log(this.pizza);
    });
  }

  delete(id){
    this.pizzaService.delete(id);
  }

  update(id){
    let updateModal = this.modalCtrl.create(PizzaUpdatePage, id);
    updateModal.present();
  }

  add(){
    let addModal = this.modalCtrl.create(PizzaAddPage);
    addModal.present();
  }

}
