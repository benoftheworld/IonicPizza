import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PizzaService } from '../../pizza.service';
import { Pizza } from '../../models/pizza';

/**
 * Generated class for the PizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizza',
  templateUrl: 'pizza.html',
})
export class PizzaPage {
  pizza: Pizza[];
  constructor(public pizzaService: PizzaService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzaPage');
    this.pizzaService.getAll().subscribe(pizza => {
      this.pizza = pizza;
      console.log(this.pizza);
    });
  }

}
