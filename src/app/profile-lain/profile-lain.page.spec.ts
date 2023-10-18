import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileLainPage } from './profile-lain.page';

describe('ProfileLainPage', () => {
  let component: ProfileLainPage;
  let fixture: ComponentFixture<ProfileLainPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileLainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
