import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVentureComponent } from './edit-venture.component';

describe('EditVentureComponent', () => {
  let component: EditVentureComponent;
  let fixture: ComponentFixture<EditVentureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVentureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVentureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
