import {Component, OnInit, Input} from '@angular/core';
import {Task} from '../../common/domain';
import {State} from '../../common/domain';

import {TaskService} from '../../common/services';
import {MessageService} from '../../common/services';

@Component({
    selector: 'app-col',
    templateUrl: './column.component.html',
    styleUrls: ['./column.component.css']
})
export class Column implements OnInit {
    public tasksList: Task[];
    @Input() state: State;

    constructor(private taskService: TaskService, private messageService: MessageService) {
        this.messageService.messageHandler().subscribe(message => {
            if (message["message"] === "resfreshColumn") {
                var stateId = message["data"];
                if (stateId === this.state.id) {
                    this.ngOnInit();
                }
            }
        });
    }

    ngOnInit() {
        console.log(this.state);
        this.tasksList = this.taskService.getTasksList(this.state);
    }

}
