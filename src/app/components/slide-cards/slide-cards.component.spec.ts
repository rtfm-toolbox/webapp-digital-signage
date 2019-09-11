import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCardsComponent } from './slide-cards.component';

describe('SlideCardsComponent', () => {
  let component: SlideCardsComponent;
  let fixture: ComponentFixture<SlideCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
