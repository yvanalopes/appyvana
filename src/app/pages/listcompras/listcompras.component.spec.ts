import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComprasComponent } from './listcompras.component';

describe('ListComprasComponent', () => {
  let component: ListComprasComponent;
  let fixture: ComponentFixture<ListComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
