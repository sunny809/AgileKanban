import { Component, OnInit, Input } from '@angular/core';
import { UserStory } from '../../UserStory';
import { KanbanService } from '../../kanban.service';

@Component({
  selector: 'app-userstory-item',
  templateUrl: './userstory-item.component.html',
  styleUrls: ['./userstory-item.component.css']
})
export class UserstoryItemComponent implements OnInit {

  @Input() current: UserStory;

  constructor(private kanbanService: KanbanService) { }


  showDetail(userStoryIndex: number) {
    console.log('showing detail', userStoryIndex);
  }


  delDetail(userStoryIndex: number) {
    console.log('del detail', userStoryIndex);
    this.kanbanService.deleteUserStory(userStoryIndex);
    // console.log();
  }

  ngOnInit() {
  }

}
