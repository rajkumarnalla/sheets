import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalTagComponent } from './horizontal-tag.component';

describe('HorizontalTagComponent', () => {
  let component: HorizontalTagComponent;
  let fixture: ComponentFixture<HorizontalTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
