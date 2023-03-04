import { v4 as uuidv4 } from 'uuid';
import { Todo } from './ts/interfaces/Todo.interfaces';

const initialState: Todo[] = [
  {
    id: uuidv4(),
    completed: true,
    desc: 'Complete online javascript course',
  },
  {
    id: uuidv4(),
    completed: false,
    desc: 'Job around the park 3 times',
  },
  {
    id: uuidv4(),
    completed: false,
    desc: '10 minutes meditation',
  },
  {
    id: uuidv4(),
    completed: false,
    desc: 'Read for 1 hour',
  },
  {
    id: uuidv4(),
    completed: false,
    desc: 'Pick up groceries',
  },
  {
    id: uuidv4(),
    completed: false,
    desc: 'Complete Todo App on Frontend Mentor',
  },
];

export default initialState;
