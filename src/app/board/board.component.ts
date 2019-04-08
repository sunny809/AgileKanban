import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class KanbanComponent implements OnInit {

  stateList = ['Backlog', 'In Process', 'Done'];
  constructor() { }

  ngOnInit() {
  }

}
