import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreditScorePage } from './credit-score.page';

describe('CreditScorePage', () => {
  let component: CreditScorePage;
  let fixture: ComponentFixture<CreditScorePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditScorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
