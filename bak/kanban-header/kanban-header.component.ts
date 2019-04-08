import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-kanban-header',
    templateUrl: './kanban-header.component.html',
    styleUrls: ['./kanban-header.component.css']
})
export class KanbanHeaderComponent implements OnInit {

    constructor() {}

    backLogQty = 0;
    progressQty = 0;
    doneQty = 0;

    ngOnInit() {
    }
}



