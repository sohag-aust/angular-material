import { NgModule } from '@angular/core';

// material UI components
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon'; 

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule
];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})

export class MaterialModule { }
