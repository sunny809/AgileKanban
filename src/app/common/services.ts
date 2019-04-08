import {Injectable} from '@angular/core';
import {Subject, BehaviorSubject} from "rxjs";

import {TASKS} from './repository';
import {STATES} from './repository';
import {State} from './domain';
import {Task} from './domain';

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

    sendMessage() {
        this.message.next(true);
    }

    messageHandler() {
        return this.message;
    }

    gettaskArray(): Task[] {
        return this.taskArray;
    }

    getTasksList(state: State): Task[] {
        if (state !== undefined) {
            const result = this.taskArray.filter(task => task.state === state.id);
            return result;
        }
    }

    getStatesList(): State[] {
        return this.stateArray;
    }

    deleteTask(id: number): void {
        console.log('current length:' + this.taskArray.length);
        console.log(this.taskArray);
        const newlist = this.taskArray.filter(item => item.id !== id);
        this.taskArray = newlist;
        console.log('after del length:' + this.taskArray.length);
        console.log(this.taskArray);
        this.sendMessage()
    }
}
