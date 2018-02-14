import {Component, OnInit} from '@angular/core';
import {USER_STORYS} from '../mock-UserStory';

@Component({
  selector: 'app-kanban-body',
  templateUrl: './kanban-body.component.html',
  styleUrls: ['./kanban-body.component.css']
})
export class KanbanBodyComponent implements OnInit {

  userStory = USER_STORYS;
  backLogList = [];
  inProgressList = [];
  doneList = [];

  constructor() {
    this.userStory.forEach(function (value, key) {
      switch (value.progress) {
        case 1:
          this.backLogList.push(value);
          break;
        case 2:
          this.inProgressList.push(value);
          break;
        case 3:
          this.doneList.push(value);
          break;
        default:
          break;
      }
    });
  }

  ngOnInit() {
  }

}
