import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MPrincipalComponent } from './m-principal.component';

describe('MPrincipalComponent', () => {
  let component: MPrincipalComponent;
  let fixture: ComponentFixture<MPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
