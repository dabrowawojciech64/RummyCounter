import { PointsDialog } from './../../dialogs/points-dialog/points-dialog.component';
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
                score: { type: 'number' },
                dealer: { type:'boolean'}
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

    launchPointsDialog(index: any):void {
        let dialogRef = this.dialog.open(PointsDialog, {
            height: '800px',
            width: '600px',
            data: {
                index: index,
                players: this.players
            },
        });
        dialogRef.afterClosed().subscribe((result:number[]) => {
            if (result) {
                for (const key of result.keys()) {
                    this.players![key].score-=result[key]
                }
                this.nextDealer();
                this.saveData()
            }
        });
    }

    nextDealer(): void {
        const index = this.players!.findIndex((player) => player.dealer === true);
        const nextIndex = index + 1 !== this.players!.length ? index + 1 : 0;
        this.players![index].dealer = false;
        this.players![nextIndex].dealer = true;
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
