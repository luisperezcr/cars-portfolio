import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Modules (components)
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatIconModule,
  MatCheckboxModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
