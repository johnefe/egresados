import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCeremoniaComponent } from './gestion-ceremonia.component';

describe('GestionCeremoniaComponent', () => {
  let component: GestionCeremoniaComponent;
  let fixture: ComponentFixture<GestionCeremoniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCeremoniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCeremoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
