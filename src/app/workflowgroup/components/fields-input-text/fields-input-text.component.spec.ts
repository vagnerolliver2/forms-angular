import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsInputTextComponent } from './fields-input-text.component';

describe('FieldsInputTextComponent', () => {
  let component: FieldsInputTextComponent;
  let fixture: ComponentFixture<FieldsInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
