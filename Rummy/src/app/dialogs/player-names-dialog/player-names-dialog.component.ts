import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlayerData } from 'src/app/common/player-data.PlayerData';

@Component({
    selector: 'app-player-names-dialog',
    templateUrl: './player-names-dialog.component.html',
    styleUrls: ['./player-names-dialog.component.scss']
})
export class PlayerNamesDialog implements OnInit {

    playerNamesForm = this.fb.group(
        {
            names: this.fb.array([])
        }
    );

    get names() {
        return this.playerNamesForm.get('names') as FormArray;
    }

    addName() {
        this.names.push(this.fb.control('', [Validators.required]));
    }

    removeName(index: number) {
        this.names.removeAt(index);
    }

    onSubmit() {
        let names: string[] = this.playerNamesForm.value.names;
        let newPlayers: PlayerData[] = [];
        for (const name of names) {

            newPlayers.push({ name: name, score: 0 });
        }
        this.dialogRef.close({ players: newPlayers, submitted: true })
    }

    populateForm() {
        if (this.players == undefined) {
            this.names.push(this.fb.control('Player 1', [Validators.required]));
            this.names.push(this.fb.control('Player 2', [Validators.required]));
        }
        else {
            for (const player of this.players) {
                this.names.push(this.fb.control(player.name, [Validators.required]));
            }
        }
    }

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<PlayerNamesDialog>,
        @Inject(MAT_DIALOG_DATA) public players?: PlayerData[]
    ) { }

    ngOnInit(): void {
        this.populateForm();
    }

}
