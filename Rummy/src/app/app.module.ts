import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './common/materials/materials.module';
import { PlayerCardComponent } from './common/player-card/player-card.component';
import { GameViewComponent } from './pages/game-view/game-view.component';
import { PlayerNamesDialogComponent } from './dialogs/player-names-dialog/player-names-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    GameViewComponent,
    PlayerNamesDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
