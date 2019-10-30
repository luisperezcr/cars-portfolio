import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Modules (components)
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class MaterialModule { }
