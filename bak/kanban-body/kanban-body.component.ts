import {Component, OnInit} from '@angular/core';
import {TASKS} from '../common/mock-UserStory';
import {TaskService} from '../common/services';

@Component({
  selector: 'app-kanban-body',
  templateUrl: './kanban-body.component.html',
  styleUrls: ['./kanban-body.component.css']
})
export class KanbanBodyComponent implements OnInit {

  userStory = TASKS;
  backLogList = [];
  inProgressList = [];
  doneList = [];

  constructor(private taskService: TaskService) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');

    this.backLogList = this.taskService.getBackLogList();
    this.inProgressList = this.taskService.getInProgressList();
    this.doneList = this.taskService.getDoneList();
    // const bList = [];
    // const pList = [];
    // const dList = [];
    //
    // this.userStory.forEach(function (this, value, key, array) {
    //
    //   switch (value.progress) {
    //     case 1:
    //       bList.push(value);
    //       break;
    //     case 2:
    //       pList.push(value);
    //       break;
    //     case 3:
    //       dList.push(value);
    //       break;
    //     default:
    //       break;
    //   }
    // });
    //
    // this.backLogList = bList;
    // this.inProgressList = pList;
    // this.doneList = dList;
  }



}
