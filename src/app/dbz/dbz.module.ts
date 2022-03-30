import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { GuerrerosComponent } from './guerreros/guerreros.component';
import { AccionesComponent } from './acciones/acciones.component';
import { dbzService } from './services/dbz.service';




@NgModule({
  declarations: [
    MainPageComponent,
    GuerrerosComponent,
    AccionesComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  providers: [
    dbzService
  ]
})
export class DbzModule { }
