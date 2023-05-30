import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [];

const DIRECTIVES = [];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class SharedModule {}
