import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdaysListComponent } from './workdays-list.component';

describe('WorkdaysListComponent', () => {
  let component: WorkdaysListComponent;
  let fixture: ComponentFixture<WorkdaysListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdaysListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdaysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
