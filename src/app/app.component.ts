import { Component } from '@angular/core';
import { KanbanModule } from './board/board.module';
import { Router, NavigationEnd } from '@angular/router';
import { AppRoutingModule } from './common/routing';
import {KanbanComponent} from './board/board.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agile Kanban';
}
