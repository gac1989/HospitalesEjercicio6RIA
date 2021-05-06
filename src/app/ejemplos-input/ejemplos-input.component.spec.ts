import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosInputComponent } from './ejemplos-input.component';

describe('EjemplosInputComponent', () => {
  let component: EjemplosInputComponent;
  let fixture: ComponentFixture<EjemplosInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemplosInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplosInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
