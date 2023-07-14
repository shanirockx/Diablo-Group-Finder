import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordComponent } from './discord.component';

describe('DiscordComponent', () => {
  let component: DiscordComponent;
  let fixture: ComponentFixture<DiscordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscordComponent]
    });
    fixture = TestBed.createComponent(DiscordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
