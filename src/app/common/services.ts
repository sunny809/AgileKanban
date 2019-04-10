import {Injectable} from '@angular/core';
import {Subject, BehaviorSubject} from "rxjs";

import {TASKS} from './repository';
import {STATES} from './repository';
import {State} from './domain';
import {Task} from './domain';

@Injectable()
export class MessageService {

    private message: Subject<boolean> = new BehaviorSubject(false);
    message$ = this.message.asObservable();

    constructor() {
        console.log('constructor done');
    }

    sendMessage(message) {
        this.message.next(message);
    }

    messageHandler() {
        return this.message;
    }
}

@Injectable()
export class TaskService {

    private taskArray: Task[] = [];
    private stateArray: State[] = [];

    constructor(private messageService: MessageService) {
        this.taskArray = TASKS;
        this.stateArray = STATES;
        console.log('constructor done');
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

    deleteTask(task: Task): void {


        console.log('current length:' + this.taskArray.length);
        console.log(this.taskArray);
        const newlist = this.taskArray.filter(item => item.id !== task.id);
        this.taskArray = newlist;
        console.log('after del length:' + this.taskArray.length);
        console.log(this.taskArray);
        this.messageService.sendMessage({message: "resfreshColumn", data: task.state})
    }
}
