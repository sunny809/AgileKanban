import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { KanbanComponent } from './board.component';
import { ColComponent } from './column/col.component';
import { ColHeaderComponent } from './column/col-header/col-header.component';
import { ColBodyComponent } from './column/col-body/col-body.component';
import {KanbanService} from '../common/services';
import { UserstoryItemComponent } from './userstory-item/userstory-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [KanbanComponent,
    ColComponent,
    ColHeaderComponent,
    ColBodyComponent,
    UserstoryItemComponent
], providers: [
  KanbanService
]
})
export class KanbanModule { }
