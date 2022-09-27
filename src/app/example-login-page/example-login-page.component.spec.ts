import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLoginPageComponent } from './example-login-page.component';

describe('ExampleLoginPageComponent', () => {
  let component: ExampleLoginPageComponent;
  let fixture: ComponentFixture<ExampleLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
