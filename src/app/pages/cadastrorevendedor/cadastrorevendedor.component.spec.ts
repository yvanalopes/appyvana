import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrorevendedorComponent } from './cadastrorevendedor.component';

describe('CadastrorevendedorComponent', () => {
  let component: CadastrorevendedorComponent;
  let fixture: ComponentFixture<CadastrorevendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrorevendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrorevendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
