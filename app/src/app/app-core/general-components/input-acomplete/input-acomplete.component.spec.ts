import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAcompleteComponent } from './input-acomplete.component';

describe('InputAcompleteComponent', () => {
  let component: InputAcompleteComponent;
  let fixture: ComponentFixture<InputAcompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAcompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
