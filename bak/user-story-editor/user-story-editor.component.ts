import { Component, OnInit } from '@angular/core';
// import { UserStory } from '../user-story';
import {UserStory} from '../UserStory';

@Component({
  selector: 'app-user-story-editor',
  templateUrl: './user-story-editor.component.html',
  styleUrls: ['./user-story-editor.component.css']
})
export class UserStoryEditorComponent implements OnInit {

  userStory: UserStory;

  constructor() {
    this.userStory = new UserStory();
  }

  ngOnInit() {
  }

}
