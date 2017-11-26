import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IngredientUpdatePage } from './ingredient-update';

@NgModule({
  declarations: [
    IngredientUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(IngredientUpdatePage),
  ],
})
export class IngredientUpdatePageModule {}
