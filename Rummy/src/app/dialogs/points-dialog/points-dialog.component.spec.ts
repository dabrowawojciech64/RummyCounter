import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsDialog } from './points-dialog.component';

describe('PointsDialogComponent', () => {
  let component: PointsDialog;
  let fixture: ComponentFixture<PointsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
