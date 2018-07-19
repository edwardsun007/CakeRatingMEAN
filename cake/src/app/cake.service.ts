import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CakeService {

  constructor(private _http:HttpClient) {}

  getCakes(){
    console.log('Running get cakes on service...');
    return this._http.get('/cakes');
  }

  createCakes(cake){
     console.log('Running create cakes on service...');
     console.log('What is in cake?=',cake);
     
     return this._http.post('/create',cake);
  }

  rateCake(id:string, rate){
    console.log('Running rating cake on service...');
    return this._http.put('/cake/'+id,rate);
  }

  getOneCake(id:string){
    console.log('Running getting one cake on service...');
    return this._http.get('/cake/'+id);
  }
}
