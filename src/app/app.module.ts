import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {TaskService} from './common/services';
import {AppRoutingModule} from './common/routing';
import {KanbanModule} from './board/board.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        KanbanModule
    ],
    providers: [
        TaskService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
