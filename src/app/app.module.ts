import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
// import {KanbanComponent} from './kanban/kanban.component';
// import {KanbanHeaderComponent} from './kanban-header/kanban-header.component';
// import {KanbanBodyComponent} from './kanban-body/kanban-body.component';
// import {KanbanBodyItemComponent} from './kanban-body-item/kanban-body-item.component';
// import {UserStoryComponent} from './user-story/user-story.component';
import {FormsModule} from '@angular/forms';
import {KanbanService} from './kanban.service';
import { AppRoutingModule } from './/app-routing.module';
// import { UserStoryEditorComponent } from './user-story-editor/user-story-editor.component';
// import { UserModule } from './user/user.module';
import { KanbanModule } from './kanban/kanban.module';
// import { KanbanContentComponent } from './kanban-content/kanban-content.component';
// import { PageHeaderComponent } from './page-header/page-header.component';
// import { PageBodyComponent } from './page-body/page-body.component';
// import { PageTailerComponent } from './page-tailer/page-tailer.component';


@NgModule({
  declarations: [
    AppComponent,
    // KanbanComponent,
    // KanbanHeaderComponent,
    // KanbanBodyComponent,
    // KanbanBodyItemComponent,
    // UserStoryComponent,
    // UserStoryEditorComponent
    // KanbanContentComponent,
    // PageHeaderComponent,
    // PageBodyComponent,
    // PageTailerComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    KanbanModule
  ],
  providers: [
    KanbanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
