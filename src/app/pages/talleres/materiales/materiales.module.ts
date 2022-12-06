import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialesComponent } from './materiales.component';
import {MaterialesRoutingModule} from "./materiales-routing.module";



@NgModule({
  declarations: [
    MaterialesComponent
  ],
  imports: [
    CommonModule,
    MaterialesRoutingModule
  ]
})
export class MaterialesModule { }
