import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleHomePageComponent } from './example-home-page.component';

describe('ExampleHomePageComponent', () => {
  let component: ExampleHomePageComponent;
  let fixture: ComponentFixture<ExampleHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
