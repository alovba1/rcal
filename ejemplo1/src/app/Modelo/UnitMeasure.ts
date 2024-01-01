import { NodeCompatibleEventEmitter } from "rxjs/internal/observable/fromEvent";

export class UnitMeasure {
   id:string;
   code:number;
   name:string;
   codeUnitMeasureType:number;
   acronyms: string;
   active: boolean;
   companyNit:String;
   createdBy: string;
   modifiedBy: string;
   unitMeasureType: string;
   
   constructor(id: string, code:number, name:string, codeUnitMeasureType:number,acronyms:string, active:boolean,companyNit:string, createdBy: string,modifiedBy: string,unitMeasureType: string) {
        this. id=id; 
        this.code=code;
        this.name=name;
        this.codeUnitMeasureType=codeUnitMeasureType;
        this.acronyms=acronyms;
        this.active=active;
        this.companyNit=companyNit;
        this.createdBy=createdBy
        this.modifiedBy=modifiedBy;
        this.unitMeasureType=unitMeasureType;
      }
    }
   