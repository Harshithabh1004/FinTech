import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FundsPage } from './funds.page';

describe('FundsPage', () => {
  let component: FundsPage;
  let fixture: ComponentFixture<FundsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
