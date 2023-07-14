import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderBoardComponent } from './leader-board.component';

describe('LeaderBoardComponent', () => {
  let component: LeaderBoardComponent;
  let fixture: ComponentFixture<LeaderBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderBoardComponent]
    });
    fixture = TestBed.createComponent(LeaderBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
