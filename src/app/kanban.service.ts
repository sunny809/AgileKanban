import {Injectable} from '@angular/core';
import {USER_STORYS} from './mock-UserStory';
// import {Observable} from 'rxjs/Observable';
import {UserStory} from './UserStory';
// import {current} from "codelyzer/util/syntaxKind";

@Injectable()
export class KanbanService {

  userStory = [];
  backLogCount = 0;
  inProgressCount = 0;
  doneCount = 0;

  constructor() {
    this.userStory = USER_STORYS;
    this.backLogCount = 0;
    this.inProgressCount = 0;
    this.doneCount = 0;
  }

  getUserStory(): UserStory[] {
    return this.userStory;
  }

  deleteUserStory(id: number): void {
    // this.userStory.forEach(currentUserStory,index){
    //   if (currentUserSotry.id === id) {
    //     this.userStory.filter(item => item.id === id );
    //   }
    // }
    console.log('current length:' + this.userStory.length);
    // this.userStory.forEach(currentUserStory,index){
    //   if (currentUserSotry.id === id) {
    const newlist = this.userStory.filter(item => item.id === id);
    // }
    // }
    console.log('after del length:' + this.userStory.length);
    console.log(newlist);
    this.refreshStat();
  }

  refreshStat() {
    console.log('into the refresh state');
    this.userStory.forEach(function (currentItem, index, userStory) {
      const progress = currentItem.progress;
      console.log('progress flag:' + progress);
      switch (progress) {
        case 1: this.backLogCount += 1;
          alert('1');
          break;
        case 2: this.inProgressCount += 1;
          // console.log('case 2');
          alert('2');
          break;
        case 3: this.doneCount += 1;
          alert('3');
          break;
        default: alert('default');
          // console.log('case default');
          break;
      }
      // console.log('backlog:' + this.backLogCount + '\nprogress:' + this.inProgressCount + '\ndone:' + this.doneCount);
    });
  }

  getBackLogList(): UserStory[] {
    return this.userStory.filter(item => item.progress === 1);
  }

  getInProgressList(): UserStory[] {
    return this.userStory.filter(item => item.progress === 2);
  }

  getDoneList(): UserStory[] {
    return this.userStory.filter(item => item.progress === 3);
  }

}
