import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game, votos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  votaciones:votos[]=[];


  constructor( private firestore: AngularFirestore) { }

  ngOnInit(): void {
    
    this.firestore.collection('goty').valueChanges()
      .pipe(map( (resp:Game[]) => {
        return resp.map( ({name,votos}) => ({name,value:votos}) )
      }))
      .subscribe(resp=> this.votaciones=resp);

      console.log(this.votaciones);
      
  } 

}
