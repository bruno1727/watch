import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGroupItemComponent } from './job-group-item.component';

describe('JobGroupItemComponent', () => {
  let component: JobGroupItemComponent;
  let fixture: ComponentFixture<JobGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
