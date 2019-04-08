import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KanbanComponent} from '../board/board.component';
// import { UserStoryEditorComponent } from './user-story-editor/user-story-editor.component';

const routes: Routes = [
    //{ path: 'kanban', loadChildren: './board/board.module#KanbanModule' }
    {path: 'kanban', component: KanbanComponent}
    //{ path: 'usEditor', component: UserStoryEditorComponent }
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

    // imports: [
    //   CommonModule
    // ],
    declarations: []
})



export class AppRoutingModule {}
