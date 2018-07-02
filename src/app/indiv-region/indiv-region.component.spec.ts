import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivRegionComponent } from './indiv-region.component';

describe('IndivRegionComponent', () => {
  let component: IndivRegionComponent;
  let fixture: ComponentFixture<IndivRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndivRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
