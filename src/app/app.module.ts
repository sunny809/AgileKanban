import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KanbanComponent } from './kanban/kanban.component';
import { KanbanHeaderComponent } from './kanban-header/kanban-header.component';
import { KanbanBodyComponent } from './kanban-body/kanban-body.component';
import { KanbanBodyItemComponent } from './kanban-body-item/kanban-body-item.component';
import { UserStoryComponent } from './user-story/user-story.component';


@NgModule({
  declarations: [
    AppComponent,
    KanbanComponent,
    KanbanHeaderComponent,
    KanbanBodyComponent,
    KanbanBodyItemComponent,
    UserStoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
