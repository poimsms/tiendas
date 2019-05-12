import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInicioComponent } from './formulario-inicio.component';

describe('FormularioInicioComponent', () => {
  let component: FormularioInicioComponent;
  let fixture: ComponentFixture<FormularioInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
