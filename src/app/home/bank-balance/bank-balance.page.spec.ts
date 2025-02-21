import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankBalancePage } from './bank-balance.page';

describe('BankBalancePage', () => {
  let component: BankBalancePage;
  let fixture: ComponentFixture<BankBalancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BankBalancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
