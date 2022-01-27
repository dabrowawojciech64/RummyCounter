import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerNamesDialog } from './player-names-dialog.component';

describe('PlayerNamesDialogComponent', () => {
    let component: PlayerNamesDialog;
    let fixture: ComponentFixture<PlayerNamesDialog>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ PlayerNamesDialog ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerNamesDialog);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
