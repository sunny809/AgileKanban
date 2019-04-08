import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.css']
})
export class ColComponent implements OnInit {

  @Input() state: string;

  constructor() { }

  ngOnInit() {
    console.log(this.state);
  }

}
