import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog'


const MaterialComponents = [MatCardModule, MatSliderModule,MatButtonModule,MatDialogModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialsModule { }
