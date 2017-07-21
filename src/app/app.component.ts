import {Component, Inject} from '@angular/core';
import {LuxServiceService} from "./lux/lux-service.service";

@Component({
  selector: 'kb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  selected = {};
  edited = null;

  constructor(@Inject('LuxServiceService') private luxServiceService: LuxServiceService){

  }

  select(car){
    this.selected = car;
    this.edited = Object.assign({}, car);
  }

  save() {
   if (this.edited.id){
     this.luxServiceService.update(this.edited)
   } else {
     this.luxServiceService.save(this.edited)
   }
   this.reset()
  }

  reset() {
    this.selected = {}
    this.edited = null
  }

  cancel(){
    this.reset()
  }

  get cars() {
    return this.luxServiceService.getAll();
  }


}
