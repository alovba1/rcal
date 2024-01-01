import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { UnitMeasure } from 'src/app/Modelo/UnitMeasure';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserValidator } from 'src/app/Validaciones';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  id="";
  name="";
  code:number=0;
  codeUnitMeasureType:number=0;
  acronyms="";
  active= false;

  companyNit="";
  createdBy="";
  modifiedBy="";
  unitMeasureType="";

dataFormServer = {};
registered = false;
errorRegistered=false;
channelForm: FormGroup; 

  constructor(private router:Router, private service:ServiceService, public fb:FormBuilder) {
  
this.channelForm=this.fb.group({
id : '',
name: ['',Validators.compose([
  Validators.required,
  Validators.minLength(3),
  UserValidator.verificarDatos
])]
})
}

  ngOnInit()  {
  }
 
  Guardar()
  {
    const unitMeasure = new UnitMeasure(this.id,this.code,this.name,this.codeUnitMeasureType,this.acronyms,this.active,this.companyNit,this.createdBy,this.modifiedBy,this.unitMeasureType);
  
    this.service.create(unitMeasure).subscribe(
      data=>{
        alert("se agrego con exito el registro"+this.id);
       this.router.navigate(["listar"]);
      },
      error=>{
             }
    )
}


}