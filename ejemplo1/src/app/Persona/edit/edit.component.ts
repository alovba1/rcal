import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { UnitMeasure } from 'src/app/Modelo/UnitMeasure';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  dataUnitMeasure!: UnitMeasure;
  id="";
 
  constructor(private router:Router, private service:ServiceService) {
   }

  ngOnInit(): void {

  }

editar() {
  this.service.update(this.dataUnitMeasure).subscribe(
    (dataActualizada: UnitMeasure) => {
      this.dataUnitMeasure = dataActualizada;
      console.log('Registro actualizado:', dataActualizada.name);
      alert("Registro Actualizado");
      this.router.navigate(["listar"]);
    },
    (error) => {
      console.error('Error al actualizar el registro:', error);
      // Manejar el error según sea necesario
    }
  );
}

buscar() {
  this.service.getId(this.id).subscribe(
    (unitMeasure: UnitMeasure) => {
      this.dataUnitMeasure = unitMeasure;
    },
    (error) => {
      console.error('Error al buscar id:', error);
      // Manejar el error según sea necesario
    }
  );
}

}

