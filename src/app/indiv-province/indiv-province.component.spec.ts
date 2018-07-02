import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivProvinceComponent } from './indiv-province.component';

describe('IndivProvinceComponent', () => {
  let component: IndivProvinceComponent;
  let fixture: ComponentFixture<IndivProvinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndivProvinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
