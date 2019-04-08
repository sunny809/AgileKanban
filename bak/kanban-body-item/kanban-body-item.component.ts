import { Component, OnInit, Input } from '@angular/core';
// import {UserStory} from '../UserStory';
// import {TaskService} from '../common/services';

@Component({
  selector: 'app-kanban-body-item',
  templateUrl: './kanban-body-item.component.html',
  styleUrls: ['./kanban-body-item.component.css']
})
// export
class KanbanBodyItemComponent implements OnInit {

  @Input() userStory: UserStory;
  constructor(private taskService: TaskService) {
    console.log(this.userStory);
  }
  ngOnInit() {
    console.log(this.userStory);
  }

  showTask(taskId: number) {
    console.log('showing detail', taskId);
  }

  deleteTask(taskId: number) {
    console.log('del detail', taskId);
    this.taskService.deleteTask(taskId);
    // console.log();
  }

}
