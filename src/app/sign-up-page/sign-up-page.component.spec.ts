import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInPageComponent } from './sign-up-page.component';

describe('SingInPageComponent', () => {
  let component: SignInPageComponent;
  let fixture: ComponentFixture<SignInPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInPageComponent]
    });
    fixture = TestBed.createComponent(SignInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
