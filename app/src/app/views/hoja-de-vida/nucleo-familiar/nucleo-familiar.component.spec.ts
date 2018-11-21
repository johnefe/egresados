import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NucleoFamiliarComponent } from './nucleo-familiar.component';

describe('NucleoFamiliarComponent', () => {
  let component: NucleoFamiliarComponent;
  let fixture: ComponentFixture<NucleoFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NucleoFamiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NucleoFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
