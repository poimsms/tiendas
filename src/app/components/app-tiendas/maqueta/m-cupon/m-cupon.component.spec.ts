import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MCuponComponent } from './m-cupon.component';

describe('MCuponComponent', () => {
  let component: MCuponComponent;
  let fixture: ComponentFixture<MCuponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MCuponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
