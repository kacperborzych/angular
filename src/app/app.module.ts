import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import {LuxModule} from './lux/lux.module'
import luxData from './lux.data'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LuxModule,

  ],
  providers: [
    {provide: 'LuxData', useValue: luxData}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
