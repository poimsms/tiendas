import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaTooltipComponent } from './agenda-tooltip.component';

describe('AgendaTooltipComponent', () => {
  let component: AgendaTooltipComponent;
  let fixture: ComponentFixture<AgendaTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
