import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAboutPageComponent } from './example-about-page.component';

describe('ExampleAboutPageComponent', () => {
  let component: ExampleAboutPageComponent;
  let fixture: ComponentFixture<ExampleAboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleAboutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
