import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GotyService {

  juegos:Game[]=[];

  constructor(private http:HttpClient) { }

  getNominated(){

    if (this.juegos.length>0) {
      // console.log('cache');
      
      // No tenemos juegos
      // Me permite retornar cualquier cosa que yo quiera como un observable
      return of(this.juegos);
    }else{
      // console.log('internet');
      
      return this.http.get(`${environment.url}/goty`).pipe(
        tap(
          (resp:Game[]) => this.juegos=resp
        ))
    }
  }

  gameVote(id:string){

    return this.http.post(`${environment.url}/goty/${id}`,{})
      .pipe(catchError(err => of (err.error)));
  }



}
