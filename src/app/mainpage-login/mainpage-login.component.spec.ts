import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageLoginComponent } from './mainpage-login.component';

describe('MainpageLoginComponent', () => {
  let component: MainpageLoginComponent;
  let fixture: ComponentFixture<MainpageLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpageLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainpageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
