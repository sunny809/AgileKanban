import { Component } from '@angular/core';
import { KanbanModule } from './kanban/kanban.module';
import { Router, NavigationEnd } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {KanbanComponent} from './kanban/kanban.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agile Kanban';
}
