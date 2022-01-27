import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialsModule } from './common/materials/materials.module';
import { PlayerCardComponent } from './common/player-card/player-card.component';
import { PlayerNamesDialog } from './dialogs/player-names-dialog/player-names-dialog.component';
import { GameViewComponent } from './pages/game-view/game-view.component';
import { PointsDialog } from './dialogs/points-dialog/points-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    GameViewComponent,
    PlayerNamesDialog,
    PointsDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
