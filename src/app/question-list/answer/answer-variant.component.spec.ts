import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerVariantComponent } from './answer-variant.component';

describe('AnswerComponent', () => {
  let component: AnswerVariantComponent;
  let fixture: ComponentFixture<AnswerVariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerVariantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
