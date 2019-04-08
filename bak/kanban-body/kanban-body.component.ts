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
    }



}
