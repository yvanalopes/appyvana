import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbackpageComponent } from './cashbackpage.component';

describe('CashbackpageComponent', () => {
  let component: CashbackpageComponent;
  let fixture: ComponentFixture<CashbackpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashbackpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbackpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
