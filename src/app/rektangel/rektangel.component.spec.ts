import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RektangelComponent } from './rektangel.component';

describe('RektangelComponent', () => {
  let component: RektangelComponent;
  let fixture: ComponentFixture<RektangelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RektangelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RektangelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
