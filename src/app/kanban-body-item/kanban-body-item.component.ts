import { Component, OnInit, Input } from '@angular/core';
import {UserStory} from '../UserStory';

@Component({
  selector: 'app-kanban-body-item',
  templateUrl: './kanban-body-item.component.html',
  styleUrls: ['./kanban-body-item.component.css']
})
export class KanbanBodyItemComponent implements OnInit {

  @Input() userStory: UserStory;
  constructor() {
    console.log(this.userStory);
  }
  ngOnInit() {
    console.log(this.userStory);
  }

}
