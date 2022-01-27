import { PlayerData } from './../player-data.PlayerData';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-player-card',
    templateUrl: './player-card.component.html',
    styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

    @Input() player!: PlayerData;
    @Input() index!: number;
    @Input() launchDialog!: (index: number) => void;

    constructor() { }

    ngOnInit(): void {
    }

}
