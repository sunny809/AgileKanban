import {Component, OnInit, Input} from '@angular/core';
import {Task} from '../../../common/domain';

@Component({
    selector: 'columnBody',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class ColumnBody implements OnInit {

    @Input() tasksList: Task[];

    constructor() {}

    ngOnInit() {
        console.log('ngOnInit');
    }

}
