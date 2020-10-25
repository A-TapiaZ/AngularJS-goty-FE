import { Component, OnInit } from '@angular/core';
import { GotyService } from '../../providers/goty.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos:Game[] = [];

  constructor(private _gs:GotyService) { }

  ngOnInit(): void {
  
    this._gs.getNominated().subscribe( (resp:Game[]) => {
      console.log(resp)
      this.juegos=resp;
    })
  }

  votar(juego:Game){

    this._gs.gameVote(juego.id).subscribe( (resp:{ok:boolean, mensaje:string}) => {
      console.log(resp);

      if (resp.ok===true) {
        Swal.fire({
          title:'Gracias',
          text:resp.mensaje,
          icon:'success',
        })
      } else {
        Swal.fire({
          title:'Error',
          text:resp["message"],
          icon:'error',
        })
      }
    })

  }
}