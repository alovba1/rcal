import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { UnitMeasure } from 'src/app/Modelo/UnitMeasure';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  id:number=1;

  unitMeasure:UnitMeasure[];

  constructor(private service:ServiceService, private router:Router) 
  { 
    this.unitMeasure=[];

  }

  ngOnInit()
  {
  
 this.service.get()
 .subscribe(data=>{
   this.unitMeasure=data;
  })

  }
  
  Delete(unitMeasure:UnitMeasure){
    this.service.delete(unitMeasure)
    .subscribe(data=>{
      this.unitMeasure=this.unitMeasure.filter(p=>p!==unitMeasure);
      alert("Registro Eliminado");
    })
    
    }

}
