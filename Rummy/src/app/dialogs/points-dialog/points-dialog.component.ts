import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlayerData } from 'src/app/common/player-data.PlayerData';

@Component({
    selector: 'app-points-dialog',
    templateUrl: './points-dialog.component.html',
    styleUrls: ['./points-dialog.component.scss']
})
export class PointsDialog implements OnInit {

    playerPointsForm = this.fb.group(
        {
            points: this.fb.array([])
        }
    );
    names:string[] = this.data.players.map((player) => player.name).filter((_,index) => index!==this.data.index);



    get points() {
        return this.playerPointsForm.get('points') as FormArray;
    }

    onSubmit() {
        let winnerPoints: number = 0;
        let points: number[] = this.playerPointsForm.value.points;

        for (const score of points) {
            winnerPoints -= score;
        }

        points.splice(this.data.index, 0, winnerPoints);
        this.dialogRef.close(points);
    }

    populateForm() {
        for (const _ of this.names) {
            this.points.push(this.fb.control(13, [Validators.required]));
        }
    }

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<PointsDialog>,
        @Inject(MAT_DIALOG_DATA) public data: {index:number, players:PlayerData[]}
    ) { }

    ngOnInit(): void {
        this.populateForm()
    }

}
