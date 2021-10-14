import { NgModule } from '@angular/core';

// material UI components
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule
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
