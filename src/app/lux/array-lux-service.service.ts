import {LuxServiceService } from  './lux-service.service'
import {Inject, Injectable, Optional,} from '@angular/core';
import {Data} from "@angular/router";

@Injectable()
export class ArrayLuxServiceService implements LuxServiceService{


  constructor(@Optional() @Inject('LuxData') private cars = []){
}

  getAll(){
    return this.cars;
  }

  save(car) {
    car.id = this.nextId();
    this.cars.push(car);
  }

  update(car) {
    let index = this.findIndex(car.id);
    if (index != -1){
      this.cars[index] = car;
    }
  }

  private findIndex(id: string){
    return this.cars.findIndex(car => id == car.id)
}

private nextId(){
    return "car"
  }


}
