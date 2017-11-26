import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PizzaGestionPage } from './pizza-gestion';

@NgModule({
  declarations: [
    PizzaGestionPage,
  ],
  imports: [
    IonicPageModule.forChild(PizzaGestionPage),
  ],
})
export class PizzaGestionPageModule {}
