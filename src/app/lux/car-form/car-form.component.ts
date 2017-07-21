import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'kb-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent{

  @Input()
  edited = {}
  @Output('save')
  onSave = new EventEmitter();
  @Output('cancel')
  onCancel = new EventEmitter()

}
