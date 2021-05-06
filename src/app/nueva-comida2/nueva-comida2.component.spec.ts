import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaComida2Component } from './nueva-comida2.component';

describe('NuevaComida2Component', () => {
  let component: NuevaComida2Component;
  let fixture: ComponentFixture<NuevaComida2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaComida2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaComida2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
