import { Component, OnInit, Input } from '@angular/core';
import { State } from '../../../common/domain';
// import { Input } from '@angular/'

@Component({
  selector: 'app-col-header',
  templateUrl: './col-header.component.html',
  styleUrls: ['./col-header.component.css']
})
export class ColHeaderComponent implements OnInit {

  @Input() state: State;
  constructor() {
    // console.log('col header init');
    // if (this.status === '') {
      // this.status = 'Status';
    // }
  }

  ngOnInit() {
    // if (this.status ===  '') {
      // this.status = 'status';
    // }
  }

}
