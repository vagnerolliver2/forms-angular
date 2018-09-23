import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowgroupComponent } from './workflowgroup.component';

describe('WorkflowgroupComponent', () => {
  let component: WorkflowgroupComponent;
  let fixture: ComponentFixture<WorkflowgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
