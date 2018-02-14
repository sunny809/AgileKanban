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
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');

    const bList = [];
    const pList = [];
    const dList = [];

    this.userStory.forEach(function (this, value, key, array) {

      switch (value.progress) {
        case 1:
          bList.push(value);
          break;
        case 2:
          pList.push(value);
          break;
        case 3:
          dList.push(value);
          break;
        default:
          break;
      }
    });

    this.backLogList = bList;
    this.inProgressList = pList;
    this.doneList = dList;
  }



}
