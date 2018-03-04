import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanBodyComponent } from './kanban-body.component';

describe('KanbanBodyComponent', () => {
  let component: KanbanBodyComponent;
  let fixture: ComponentFixture<KanbanBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
