import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from './../app.api';
 
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
 
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class RestaurantServices {
 
  constructor(private http: HttpClient) {}
 
  restaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`);
  }
}