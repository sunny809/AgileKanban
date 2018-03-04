import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

  stateList = ['Backlog', 'In Process', 'Done'];
  constructor() { }

  ngOnInit() {
  }

}
