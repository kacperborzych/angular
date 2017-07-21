import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { ComopnentCarComponent } from './comopnent-car/comopnent-car.component';
import { CarFormComponent } from './car-form/car-form.component';
import {ArrayLuxServiceService} from "./array-lux-service.service";
import {HttpLuxService} from "./http-lux.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ComopnentCarComponent, CarFormComponent],

  providers: [
    {provide: 'LuxServiceService', useClass: HttpLuxService}
  ] ,

  declarations: [ComopnentCarComponent, CarFormComponent]
})
export class LuxModule { }
