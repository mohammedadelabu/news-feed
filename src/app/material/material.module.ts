import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const Modules = [
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
];
@NgModule({
  imports: [CommonModule, Modules],
  exports: Modules,
  declarations: [],
})
export class MaterialModule {}
