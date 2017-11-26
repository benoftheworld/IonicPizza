import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IngredientAddPage } from './ingredient-add';

@NgModule({
  declarations: [
    IngredientAddPage,
  ],
  imports: [
    IonicPageModule.forChild(IngredientAddPage),
  ],
})
export class IngredientAddPageModule {}
