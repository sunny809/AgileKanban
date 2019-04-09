import {Component, OnInit, Input} from '@angular/core';
import {Task} from '../../common/domain';
import {TaskService} from '../../common/services';
import {MessageService} from '../../common/services';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class DetailsComponent implements OnInit {

    @Input() current: Task;

    constructor(private taskService: TaskService, private messageService: MessageService) {}


    showTask(task: Task) {
        console.log('showing detail', task);
        this.messageService.sendMessage({message: "opendialog", data: task.id});
    }


    deleteTask(task: Task) {
        console.log('del detail', task);
        this.taskService.deleteTask(task);
    }

    ngOnInit() {}

}
