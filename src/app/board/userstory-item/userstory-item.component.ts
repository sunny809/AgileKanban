import {Component, OnInit, Input} from '@angular/core';
import $ from "jquery";
import "jquery-ui";
import {Task} from '../../common/domain';
import {TaskService} from '../../common/services';

@Component({
    selector: 'app-userstory-item',
    templateUrl: './userstory-item.component.html',
    styleUrls: ['./userstory-item.component.css']
})
export class UserstoryItemComponent implements OnInit {

    @Input() current: Task;

    constructor(private taskService: TaskService) {}


    showTask(taskId: number) {
        console.log('showing detail', taskId);
    }


    deleteTask(taskId: number) {
        console.log('del detail', taskId);
        this.taskService.deleteTask(taskId);
    }

    ngOnInit() {}

}
