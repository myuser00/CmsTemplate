import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleUserPageComponent } from './example-user-page.component';

describe('ExampleUserPageComponent', () => {
  let component: ExampleUserPageComponent;
  let fixture: ComponentFixture<ExampleUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleUserPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExampleUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
