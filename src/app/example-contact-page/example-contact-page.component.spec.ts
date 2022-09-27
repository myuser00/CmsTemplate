import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleContactPageComponent } from './example-contact-page.component';

describe('ExampleContactPageComponent', () => {
  let component: ExampleContactPageComponent;
  let fixture: ComponentFixture<ExampleContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleContactPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
