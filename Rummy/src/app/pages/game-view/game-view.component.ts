import { Component, OnInit } from '@angular/core';
import { PlayerCardComponent } from 'src/app/common/player-card/player-card.component';
import { StorageMap } from '@ngx-pwa/local-storage';
import { PlayerData } from 'src/app/common/player-data.PlayerData';
@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {


  players?: PlayerData[] = [{name:"Wojtas", score:69},{name:"Pati",score:-7},{name:"Hitler",score:-62}];

  constructor(private storage:StorageMap) { }

  ngOnInit(): void {
    //get playerData from storageData
    //if undefined run a newPlayers Dialog
    //else players equal what you get from storage data
    
  }

}
