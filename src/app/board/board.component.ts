import {Component, OnInit} from '@angular/core';

import {State} from '../common/domain';

import {TaskService} from '../common/services';

@Component({
    selector: 'app-kanban',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class KanbanComponent implements OnInit {

    statesList: State[];
    constructor(private taskService: TaskService) {}

    ngOnInit() {
        this.statesList = this.taskService.getStatesList();
    }

}
