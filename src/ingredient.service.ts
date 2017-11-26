import { Injectable } from '@angular/core';
import { Ingredient } from './models/ingredient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'Rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class IngredientService {

  constructor(private http: HttpClient) {}

  getAll():Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>('https://pizzaparty-benoftheworld.c9users.io:8080/ingredient/');
  }

  getOne(id : string):Observable<Ingredient> {
    return this.http.get<Ingredient>('https://pizzaparty-benoftheworld.c9users.io:8080/ingredient/'+id);
  }

  add(data):Observable<Ingredient>{
    return this.http.post<Ingredient>('https://pizzaparty-benoftheworld.c9users.io:8080/ingredient/', data);
  }

  update(id : string, data):Observable<Ingredient>{
     return this.http.put<Ingredient>('https://pizzaparty-benoftheworld.c9users.io:8080/ingredient/'+id, data);
  }

  delete(id : string):Observable<Ingredient>{
    return this.http.delete<Ingredient>('https://pizzaparty-benoftheworld.c9users.io:8080/ingredient/'+id);
  }

}
