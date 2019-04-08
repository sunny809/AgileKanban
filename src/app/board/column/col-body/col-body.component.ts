import { Component, OnInit, Input } from '@angular/core';
import { UserStory } from '../../../common/domain';
import { KanbanService } from '../../../common/services';

@Component({
  selector: 'app-col-body',
  templateUrl: './col-body.component.html',
  styleUrls: ['./col-body.component.css']
})
export class ColBodyComponent implements OnInit {

  @Input() userStoryList;

  backlogList: any[];
  inProgressList: any[];
  doneList: any[];

  constructor(private kanbanService: KanbanService) { }

  ngOnInit() {

    console.log('ngOnInit');

    this.backlogList = this.kanbanService.getBackLogList();
    this.inProgressList = this.kanbanService.getInProgressList();
    this.doneList = this.kanbanService.getDoneList();

  }

}
