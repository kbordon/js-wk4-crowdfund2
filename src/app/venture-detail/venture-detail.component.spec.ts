import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureDetailComponent } from './venture-detail.component';

describe('VentureDetailComponent', () => {
  let component: VentureDetailComponent;
  let fixture: ComponentFixture<VentureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
