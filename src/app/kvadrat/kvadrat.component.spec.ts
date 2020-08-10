import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvadratComponent } from './kvadrat.component';

describe('KvadratComponent', () => {
  let component: KvadratComponent;
  let fixture: ComponentFixture<KvadratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvadratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvadratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
