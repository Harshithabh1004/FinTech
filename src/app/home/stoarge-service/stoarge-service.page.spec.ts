import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoargeServicePage } from './stoarge-service.page';

describe('StoargeServicePage', () => {
  let component: StoargeServicePage;
  let fixture: ComponentFixture<StoargeServicePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StoargeServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
