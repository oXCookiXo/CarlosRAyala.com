import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'


const modules = [
    MatCardModule,
    MatListModule,
    MatIconModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [
      modules
  ]
})
export class CustomMaterialsModule { }
