import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comidas2Component } from './comidas2.component';

describe('Comidas2Component', () => {
  let component: Comidas2Component;
  let fixture: ComponentFixture<Comidas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comidas2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comidas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
