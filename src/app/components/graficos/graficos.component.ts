import { Component, Input, OnDestroy } from '@angular/core';
import { votos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})

export class GraficosComponent implements OnDestroy{


  @Input() votaciones:votos[]=[];

  view: any[] = [1000, 400];
  // intervalo;

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Juegos';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votos';

  colorScheme = 'nightLights'; 

  constructor() {

    // el truco para que la grafica se actualice cada vez que cambian los valores es reemplazar todo el objeto, no solo un valor a la vez, sino todo de un golpe.

    // Este intervalo se realizo con el fin de mostrar, como un funcion cmo lo es setInterval sino se finaliza, puede crear una fuga de memoria.
    // this.intervalo= setInterval(() => {
    //   console.log('interval');
      
      // const newResults =  [...this.results];
      // for (let i in newResults  ) {
      //   newResults[i].value=Math.round(Math.random()*500)
      // }
      
      // this.results=[...newResults];
    // },1500);
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  // onActivate(data): void {
  //   console.log('Activate', JSON.parse(JSON.stringify(data)));
  // }

  // onDeactivate(data): void {
  //   console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  // }

  ngOnDestroy(){

    // Con este metodo, finalizabamos el intervalo asiganado ateriormente.  
    // clearInterval(this.intervalo);
  }

}
