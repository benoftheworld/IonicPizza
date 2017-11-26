import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'Rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class PizzaService {

  constructor(private http: HttpClient) {}

  getAll():Observable<Pizza[]> {
    return this.http.get<Pizza[]>('https://pizzaparty-benoftheworld.c9users.io:8080/pizza/');
  }

  getOne(id : string):Observable<Pizza> {
    return this.http.get<Pizza>('https://pizzaparty-benoftheworld.c9users.io:8080/pizza/'+id);
  }

  add(data):Observable<Pizza>{
    return this.http.post<Pizza>('https://pizzaparty-benoftheworld.c9users.io:8080/pizza/', data);
  }

  update(id : string, data):Observable<Pizza>{
     return this.http.put<Pizza>('https://pizzaparty-benoftheworld.c9users.io:8080/pizza/'+id, data);
  }

  delete(id : string):Observable<Pizza>{
    return this.http.delete<Pizza>('https://pizzaparty-benoftheworld.c9users.io:8080/pizza/'+id);
  }

}
