import { Component, OnInit, Input } from '@angular/core';
// import { Input } from '@angular/'

@Component({
  selector: 'app-col-header',
  templateUrl: './col-header.component.html',
  styleUrls: ['./col-header.component.css']
})
export class ColHeaderComponent implements OnInit {

  @Input() state: string;
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
