import { Component, OnInit, Input } from '@angular/core';
import {UserStory} from '../UserStory';
import {KanbanService} from '../kanban.service';

@Component({
  selector: 'app-kanban-body-item',
  templateUrl: './kanban-body-item.component.html',
  styleUrls: ['./kanban-body-item.component.css']
})
export class KanbanBodyItemComponent implements OnInit {

  @Input() userStory: UserStory;
  constructor(private kanbanService: KanbanService) {
    console.log(this.userStory);
  }
  ngOnInit() {
    console.log(this.userStory);
  }

  showDetail(userStoryIndex: number) {
    console.log('showing detail', userStoryIndex);
  }

  delDetail(userStoryIndex: number) {
    console.log('del detail', userStoryIndex);
    this.kanbanService.deleteUserStory(userStoryIndex);
    // console.log();
  }

}
