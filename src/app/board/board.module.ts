import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {KanbanComponent} from './board.component';
import {Column} from './column/column.component';
import {ColHeaderComponent} from './column/header/header.component';
import {ColumnBody} from './column/body/body.component';
import {TaskService} from '../common/services';
import {UserstoryItemComponent} from './userstory-item/userstory-item.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [KanbanComponent,
        Column,
        ColHeaderComponent,
        ColumnBody,
        UserstoryItemComponent
    ], providers: [
        TaskService
    ]
})
export class KanbanModule {}
