import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbDate, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {KanbanComponent} from './board.component';
import {Column} from './column/column.component';
import {ColHeaderComponent} from './column/header/header.component';
import {ColumnBody} from './column/body/body.component';
import {DetailsDialog} from './task/details/details.component';
import {DetailsComponent} from './task/task.component';

import {TaskService} from '../common/services';
import {MessageService} from '../common/services';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
    ],
    declarations: [KanbanComponent,
        Column,
        ColHeaderComponent,
        ColumnBody,
        DetailsComponent,
        DetailsDialog
    ], providers: [
        TaskService,
        MessageService
    ]
})
export class KanbanModule {}
