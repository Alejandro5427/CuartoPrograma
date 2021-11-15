import { Component} from '@angular/core';
import { Button } from 'selenium-webdriver';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin: 5px;
    }`
  ]
})
export class PorRegionComponent {

  regiones:string[] =['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  asignarValor:string='';

  paises  : Country[] = [];

  constructor(private _service:PaisService){}

  asignarClaseCss=(botonSeleccionado:string) => {

    return (botonSeleccionado === this.asignarValor) ? 'btn btn-primary':'btn btn-outline-primary';
  }

  activarRegion(valor:string){
    this.asignarValor = valor;

    this._service.buscarRegion(valor).subscribe((region)=>{
      console.log(region);
      this.paises=region;
    })
  }

}
