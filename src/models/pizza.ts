import { Ingredient } from './Ingredient';

export class Pizza {

   _id: string;
   name: string;
   price : number;
   description: string;
   img: string;
   ingredients : Array<Ingredient>;

   constructor() {
     this._id = null;
 		this.name = null;
 		this.description = null;
 		this.img = null;
 		this.price = null;
 		this.ingredients = Array<Ingredient>();
   }

}
