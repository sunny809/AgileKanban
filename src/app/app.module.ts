import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
// import {KanbanComponent} from './board/board.component';
// import {KanbanHeaderComponent} from './board-header/board-header.component';
// import {KanbanBodyComponent} from './board-body/board-body.component';
// import {KanbanBodyItemComponent} from './board-body-item/board-body-item.component';
// import {UserStoryComponent} from './user-story/user-story.component';
import {FormsModule} from '@angular/forms';
import {KanbanService} from './common/services';
import { AppRoutingModule } from './common/routing';
// import { UserStoryEditorComponent } from './user-story-editor/user-story-editor.component';
// import { UserModule } from './user/user.module';
import { KanbanModule } from './board/board.module';
// import { KanbanContentComponent } from './board-content/board-content.component';
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
