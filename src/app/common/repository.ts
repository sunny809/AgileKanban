import { Task } from './domain';
import { State } from './domain';


export const TASKS: Task[] = [
    { id: 1, name: 'CVCDEV-2075', description: 'Some description a', state: 4, storyPoint: 5, progress: 1, priority: 1, importance: 1  },
    { id: 2, name: 'CVCDEV-2076', description: 'Some description a', state: 1, storyPoint: 4, progress: 2, priority: 1, importance: 1  },
    { id: 3, name: 'CVCDEV-2077', description: 'Some description b', state: 2, storyPoint: 3, progress: 2, priority: 1, importance: 1  },
    { id: 4, name: 'CVCDEV-2076', description: 'Some description c', state: 3, storyPoint: 2, progress: 3, priority: 1, importance: 1  },
    { id: 5, name: 'CVCDEV-2077', description: 'Some description d', state: 2, storyPoint: 1, progress: 3, priority: 1, importance: 1  },
    { id: 6, name: 'CVCDEV-2078', description: 'Some description e', state: 1, storyPoint: 3, progress: 3, priority: 1, importance: 1 }
];

export const STATES: State[] = [
    { id: 1, name: 'Backlog', description: 'The backlog' },
    { id: 2, name: 'Waiting', description: 'Tasks that needs a developer' },
    { id: 3, name: 'In Process', description: 'Tasks in progress ( development )' },
    { id: 4, name: 'Done', description: 'Tasks that are meeting "DOD"' }
];
