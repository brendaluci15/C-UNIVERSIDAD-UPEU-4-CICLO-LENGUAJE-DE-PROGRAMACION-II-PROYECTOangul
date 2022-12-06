import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasComponent } from './personas.component';
import {PersonasRoutingModule} from "./personas-routing.module";
import {PersonaService} from "../../../providers/services/persona.service";
import { PersonaModalComponent } from './persona-modal/persona-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PersonasComponent,
    PersonaModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonasRoutingModule
  ],
  providers: [PersonaService]
})
export class PersonasModule { }
