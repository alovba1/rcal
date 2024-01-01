import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnitMeasure } from 'src/app/Modelo/UnitMeasure';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  
  Url='http://localhost:8092/persona';
  get(){
    return this.http.get<UnitMeasure[]>(this.Url);
  }
  
  create(persona:UnitMeasure)
  {
    return this.http.post<UnitMeasure>(this.Url,persona);
  }

  getId(id:string) {
    return this.http.get<UnitMeasure>(this.Url+"/"+id);
  }

  update(persona:UnitMeasure) {
    return this.http.put<UnitMeasure>(this.Url+"/"+persona.id,persona);
  }
  
  delete(persona:UnitMeasure)
  {
    return this.http.delete<UnitMeasure>(this.Url+"/"+persona.id);
  }
}
