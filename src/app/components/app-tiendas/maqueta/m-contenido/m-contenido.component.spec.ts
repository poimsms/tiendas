import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MContenidoComponent } from './m-contenido.component';

describe('MContenidoComponent', () => {
  let component: MContenidoComponent;
  let fixture: ComponentFixture<MContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
