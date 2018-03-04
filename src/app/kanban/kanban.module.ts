import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanComponent } from './kanban.component';
import { ColComponent } from './col/col.component';
import { ColHeaderComponent } from './col-header/col-header.component';
import { ColBodyComponent } from './col-body/col-body.component';
import {KanbanService} from '../kanban.service';
import { UserstoryItemComponent } from './userstory-item/userstory-item.component';

@NgModule({
  imports: [
    CommonModule
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
