import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'kb-comopnent-car',
  templateUrl: './comopnent-car.component.html',
  styleUrls: ['./comopnent-car.component.css']
})
export class ComopnentCarComponent{

  @Input()
  car= {};
  @Input()
  isSelected = false;
  @Output('selected')
  onSelect = new EventEmitter();

  get idStyle(){
    return{color: 'gray', letterSpacing: "2px"}
  }

  select(){
    this.onSelect.emit(this.car)
  }

}
