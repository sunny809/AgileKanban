import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KanbanComponent } from './kanban/kanban.component';
import { KanbanHeaderComponent } from './kanban-header/kanban-header.component';
import { KanbanBodyComponent } from './kanban-body/kanban-body.component';
import { KanbanBodyItemComponent } from './kanban-body-item/kanban-body-item.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { KanbanContentComponent } from './kanban-content/kanban-content.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageBodyComponent } from './page-body/page-body.component';
import { PageTailerComponent } from './page-tailer/page-tailer.component';


@NgModule({
  declarations: [
    AppComponent,
    KanbanComponent,
    KanbanHeaderComponent,
    KanbanBodyComponent,
    KanbanBodyItemComponent,
    UserStoryComponent,
    KanbanContentComponent,
    PageHeaderComponent,
    PageBodyComponent,
    PageTailerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
