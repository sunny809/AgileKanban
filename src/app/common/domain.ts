export class Task {
  id: number;
  name: string;
  description: string;
  state : number;
  storyPoint: number;
  progress: number;
  priority: number;
  importance: number;
}

export class State {
  id: number;
  name: string;
  description: string;
}