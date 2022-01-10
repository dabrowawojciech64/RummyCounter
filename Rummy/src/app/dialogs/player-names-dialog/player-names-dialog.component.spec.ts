import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerNamesDialogComponent } from './player-names-dialog.component';

describe('PlayerNamesDialogComponent', () => {
  let component: PlayerNamesDialogComponent;
  let fixture: ComponentFixture<PlayerNamesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerNamesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerNamesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
