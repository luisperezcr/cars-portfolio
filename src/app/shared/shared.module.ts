import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { FallbackPageComponent } from '../fallback-page/fallback-page.component';

@NgModule({
  declarations: [
    FallbackPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class SharedModule { }
