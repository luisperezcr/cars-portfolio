import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Modules (components)
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
