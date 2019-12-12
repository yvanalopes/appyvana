import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrocomprasComponent } from './cadastrocompras.component';

describe('CadastrocomprasComponent', () => {
  let component: CadastrocomprasComponent;
  let fixture: ComponentFixture<CadastrocomprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrocomprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrocomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
