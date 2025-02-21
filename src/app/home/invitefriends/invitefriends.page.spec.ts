import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvitefriendsPage } from './invitefriends.page';

describe('InvitefriendsPage', () => {
  let component: InvitefriendsPage;
  let fixture: ComponentFixture<InvitefriendsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitefriendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
