import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaConfigComponent } from './agenda-config.component';

describe('AgendaConfigComponent', () => {
  let component: AgendaConfigComponent;
  let fixture: ComponentFixture<AgendaConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
