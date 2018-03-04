import { Component, OnInit, Input } from '@angular/core';
import { UserStory } from '../../UserStory';

@Component({
  selector: 'app-userstory-item',
  templateUrl: './userstory-item.component.html',
  styleUrls: ['./userstory-item.component.css']
})
export class UserstoryItemComponent implements OnInit {

  @Input() current: UserStory;

  constructor() { }

  ngOnInit() {
  }

}
