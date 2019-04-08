import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../common/domain';
import { TaskService } from '../../../common/services';

@Component({
  selector: 'app-col-body',
  templateUrl: './col-body.component.html',
  styleUrls: ['./col-body.component.css']
})
export class ColBodyComponent implements OnInit {

  @Input() taskList : Task [];

  constructor(private taskService: TaskService) { }

    ngOnInit() {
        console.log('ngOnInit');
    }

}
