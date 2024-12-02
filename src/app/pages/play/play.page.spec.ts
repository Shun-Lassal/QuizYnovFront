import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayPage } from './play.page';

describe('PlayPage', () => {
  let component: PlayPage;
  let fixture: ComponentFixture<PlayPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
