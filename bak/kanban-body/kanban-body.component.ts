import {Component, OnInit} from '@angular/core';
import {USER_STORYS} from '../common/mock-UserStory';
import {KanbanService} from '../common/services';

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

  constructor(private kanbanService: KanbanService) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');

    this.backLogList = this.kanbanService.getBackLogList();
    this.inProgressList = this.kanbanService.getInProgressList();
    this.doneList = this.kanbanService.getDoneList();
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
