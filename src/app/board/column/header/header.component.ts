import {Component, OnInit, Input} from '@angular/core';
import {State} from '../../../common/domain';

@Component({
    selector: 'columnHeader',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class ColHeaderComponent implements OnInit {

    @Input() state: State;
    constructor() {}

    ngOnInit() {}

}
