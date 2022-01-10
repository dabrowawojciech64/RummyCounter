import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-player-names-dialog',
  templateUrl: './player-names-dialog.component.html',
  styleUrls: ['./player-names-dialog.component.scss']
})
export class PlayerNamesDialogComponent implements OnInit {

  playerNamesForm = this.fb.group(
    {
      names: this.fb.array([
        this.fb.control('Player 1',[Validators.required]),
        this.fb.control('Player 2',[Validators.required]),
      ]
      )
    }
  );

  get names() {
    return this.playerNamesForm.get('names') as FormArray;
  }


  addName() {
    this.names.push(this.fb.control('',[Validators.required]));
  }




  onSubmit() {

  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
