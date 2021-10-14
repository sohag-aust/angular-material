import { NgModule } from '@angular/core';

// material UI components
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = [
  MatButtonModule
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
