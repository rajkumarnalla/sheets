import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTagComponent } from './vertical-tag.component';

describe('VerticalTagComponent', () => {
  let component: VerticalTagComponent;
  let fixture: ComponentFixture<VerticalTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
