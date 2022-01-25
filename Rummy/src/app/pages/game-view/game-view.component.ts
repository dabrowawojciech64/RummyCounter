import { PlayerData } from './../../common/player-data.PlayerData';
import { PlayerNamesDialog } from './../../dialogs/player-names-dialog/player-names-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StorageMap, JSONSchema } from '@ngx-pwa/local-storage';
@Component({
    selector: 'app-game-view',
    templateUrl: './game-view.component.html',
    styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {
    schema: JSONSchema = {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                score: { type: 'number' }
            }
        },
    };

    players?: PlayerData[];

    saveData(players?: PlayerData[]): void {
        if (players === undefined) {
            this.storage.set('players', this.players, this.schema).subscribe(() => { });
        }
        else {
            this.storage.set('players', players, this.schema).subscribe(() => { });
        }
    }

    launchPlayerNamesDialog(): void {
        let dialogRef = this.dialog.open(PlayerNamesDialog, {
            height: '400px',
            width: '600px',
            data: this.players,
            disableClose: !(this.players)
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result && result.submitted) {
                this.players = result.players;
                this.saveData()
            }
        });
    }

    resetGame(): void {
        if (this.players) {
            for (const player of this.players) {
                player.score = 0;
            }
        }
    }

    constructor(private storage: StorageMap, public dialog: MatDialog) { }

    ngOnInit(): void {
        this.storage.get('players', this.schema).subscribe((players) => {
            if (players) {
                this.players = <PlayerData[]>players;
            }
            else {
                this.launchPlayerNamesDialog();
            }
        });
    }

}
