import {Component, Inject, OnInit} from '@angular/core';
import {LuxServiceService} from "./lux/lux-service.service";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'kb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  selected = {};
  edited = null;
  cars = [];

  private carSubject = new Subject;

  constructor(@Inject('LuxServiceService') private luxServiceService: LuxServiceService){

  }
  ngOnInit(): void {
    this.refresh()
  }

  select(car){
    this.selected = car;
    this.edited = Object.assign({}, car);
  }

  save() {
   this.luxServiceService.update(this.edited)
     .subscribe(() => this.refresh())
    this.reset()
  }

  reset() {
    this.selected = {}
    this.edited = null
  }

  cancel(){
    this.reset()
  }

  private subscribe(observable: Observable<any>) {
    observable.subscribe(() => this.refresh())
  }



  private refresh(){
    this.luxServiceService.getAll()
      .subscribe(cars => this.cars = cars)
  }

}
