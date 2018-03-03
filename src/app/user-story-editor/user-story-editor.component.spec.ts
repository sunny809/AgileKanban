import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryEditorComponent } from './user-story-editor.component';

describe('UserStoryEditorComponent', () => {
  let component: UserStoryEditorComponent;
  let fixture: ComponentFixture<UserStoryEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
