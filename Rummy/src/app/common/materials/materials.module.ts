import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'


const MaterialComponents = [MatInputModule, MatFormFieldModule,MatCardModule, MatSliderModule,MatButtonModule,MatDialogModule, MatIconModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialsModule { }
