import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController } from 'ionic-angular';
import { IngredientService } from '../../ingredient.service';
import { Ingredient } from '../../models/ingredient';
import { IngredientAddPage } from '../ingredient-add/ingredient-add';
import { IngredientUpdatePage } from '../ingredient-update/ingredient-update';

/**
 * Generated class for the IngredientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingredient',
  templateUrl: 'ingredient.html',
})
export class IngredientPage {

  ingredient: Ingredient[];
  constructor(public ingredientService: IngredientService, public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.ingredientService.getAll().subscribe(ingredient => {
      this.ingredient = ingredient;
    });
  }

  delete(id){
    this.ingredientService.delete(id);
  }

  update(id){
    let updateModal = this.modalCtrl.create(IngredientUpdatePage, id);
    updateModal.present();
  }

  add(){
    let addModal = this.modalCtrl.create(IngredientAddPage);
    addModal.present();
  }

}
