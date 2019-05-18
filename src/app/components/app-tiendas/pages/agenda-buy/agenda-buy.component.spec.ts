import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaBuyComponent } from './agenda-buy.component';

describe('AgendaBuyComponent', () => {
  let component: AgendaBuyComponent;
  let fixture: ComponentFixture<AgendaBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
