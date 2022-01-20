import { PlayerData } from 'src/app/common/player-data.PlayerData';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageMap, JSONSchema } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-player-names-dialog',
  templateUrl: './player-names-dialog.component.html',
  styleUrls: ['./player-names-dialog.component.scss']
})
export class PlayerNamesDialogComponent implements OnInit {

  schema: JSONSchema = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        score: {type: 'number'}
      }
    },
  };

  players?: PlayerData[];


  playerNamesForm = this.fb.group(
    {
      names: this.fb.array([ ])
    }
  );

  get names() {
    return this.playerNamesForm.get('names') as FormArray;
  }


  addName() {
    this.names.push(this.fb.control('',[Validators.required]));
  }

  removeName(index: number) {
    this.names.removeAt(index);
  }


  onSubmit() {
    // you are losing steam so let's review
    // you need to get names of new players forom this.playerNamesForm.value (it's an array of names)
    // then assign it to new PlayerData[] where name equals the name and score is 0
    console.warn(this.playerNamesForm.value.names);

    let names: string[] = this.playerNamesForm.value.names;
    let newPlayers: PlayerData[] = [];
    for (const name of names) {

      newPlayers.push({ name: name, score: 0 });
    }
    this.storage.set('players', newPlayers,this.schema).subscribe(() => {});

  }
  logPlayers() {
    console.table(this.players);

  }
  clear() {
    this.storage.clear().subscribe(() => { });
  }

  populateForm() {
    if (this.players == undefined)
    {
      console.log("Didn't find no playas");
      this.names.push(this.fb.control('Player 1', [Validators.required]));
      this.names.push(this.fb.control('Player 2',[Validators.required]));

    }
    else {
      console.log("found something");
      console.table(this.players);

      for (const player of this.players) {
        this.names.push(this.fb.control(player.name,[Validators.required]));
      }
    }
  }

  constructor(private fb:FormBuilder, private storage: StorageMap) { }

  ngOnInit(): void {



    this.storage.get('players', this.schema).subscribe((players) => {
      this.players = <PlayerData[]>players;
      this.populateForm();
     });


  }

}
