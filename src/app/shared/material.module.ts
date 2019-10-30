import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Modules (components)
import {
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
