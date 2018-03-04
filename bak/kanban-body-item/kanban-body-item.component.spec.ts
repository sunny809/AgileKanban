import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanBodyItemComponent } from './kanban-body-item.component';

describe('KanbanBodyItemComponent', () => {
  let component: KanbanBodyItemComponent;
  let fixture: ComponentFixture<KanbanBodyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanBodyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanBodyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
