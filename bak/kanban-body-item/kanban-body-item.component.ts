import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-kanban-body-item',
    templateUrl: './kanban-body-item.component.html',
    styleUrls: ['./kanban-body-item.component.css']
})

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
    }

}
