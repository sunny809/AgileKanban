import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { KanbanComponent } from './kanban/kanban.component';
// import { KanbanComponent } from './kanban/kanban.component';
// import { UserStoryEditorComponent } from './user-story-editor/user-story-editor.component';

const routes: Routes = [
// { path: 'kanban', loadChildren: './kanban/kanban.module#KanbanModule' }
  { path: 'kanban', component: KanbanComponent }
  // { path: 'usEditor', component: UserStoryEditorComponent }
];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],

  // imports: [
  //   CommonModule
  // ],
  declarations: []
})



export class AppRoutingModule { }
