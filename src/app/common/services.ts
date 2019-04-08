import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from "rxjs";

import { TASKS } from './repository';
import { STATES } from './repository';
// import {Observable} from 'rxjs/Observable';
import { State } from './domain';
import { Task } from './domain';
// import {current} from "codelyzer/util/syntaxKind";

@Injectable()
export class TaskService {

    private taskArray: Task[] = [];
    private stateArray: State[] = [];
    private message: Subject<boolean> = new BehaviorSubject(false);
    message$ = this.message.asObservable();

  constructor() {
    this.taskArray = TASKS;
    this.stateArray = STATES;
    console.log('constructor done');
  }

  sendMessage () {
    this.message.next(true);
  }

  messageHandler(){
      return this.message;
  }

  gettaskArray(): Task[] {
    return this.taskArray;
  }

    getTaskList( state : State ): Task[] {
        if(state !== undefined){
            const result = this.taskArray.filter(task => task.state === state.id);
            return result;
        }
    }

  getStatesList(): State[] {
    return this.stateArray;
  }

    deleteTask(id: number): void {
        // this.taskArray.forEach(currenttaskArray,index){
        //   if (currentUserSotry.id === id) {
        //     this.taskArray.filter(item => item.id === id );
        //   }
        // }
        console.log('current length:' + this.taskArray.length);
        console.log(this.taskArray);
        // this.taskArray.forEach(currenttaskArray,index){
        //   if (currentUserSotry.id === id) {
        const newlist = this.taskArray.filter(item => item.id !== id);
        this.taskArray = newlist;
        console.log('after del length:' + this.taskArray.length);
        console.log(this.taskArray);
        this.sendMessage()
    }

  refreshStat() {
    console.log('into the refresh state');

    for (let i = 0; i < this.taskArray.length; i++ ) {
      const currentItem = this.taskArray[i];
      const progress = currentItem.progress;
      // console.log('progress flag:' + progress);
      switch (progress) {
        case 1:
          // alert('1');
          break;
        case 2:
          // console.log('case 2');
          // alert('2');
          break;
        case 3:
          // alert('3');
          break;
        default: alert('default');
          // console.log('case default');
          break;
      }
    }
  }

  getBackLogList(): Task[] {
    return this.taskArray.filter(item => item.progress === 1);
  }

  getInProgressList(): Task[] {
    return this.taskArray.filter(item => item.progress === 2);
  }

  getDoneList(): Task[] {
    return this.taskArray.filter(item => item.progress === 3);
  }

}
