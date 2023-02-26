import { Todo } from '../interfaces/Todo.interfaces';

export enum ActionType {
  ADD = 'ADD',
  TOGGLE = 'TOGGLE',
  REMOVE = 'REMOVE',
  CLEAR = 'CLEAR',
}

export type Filters = 'All' | 'Active' | 'Completed';

export type Add = {
  type: ActionType.ADD;
  payload: string;
};

export type Remove = {
  type: ActionType.REMOVE;
  payload: string;
};

export type Toggle = {
  type: ActionType.TOGGLE;
  payload: Todo;
};

export type Clear = {
  type: ActionType.CLEAR;
};
