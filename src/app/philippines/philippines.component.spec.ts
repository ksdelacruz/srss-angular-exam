import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilippinesComponent } from './philippines.component';

describe('PhilippinesComponent', () => {
  let component: PhilippinesComponent;
  let fixture: ComponentFixture<PhilippinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhilippinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilippinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
