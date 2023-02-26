import { useMemo, useReducer, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import BackgroundImg from './components/BackgroundImg';
import CreateInput from './components/CreateInput';
import Header from './components/Header';
import TodoFilter from './components/TodoFilter';
import TodoItem from './components/TodoItem';
import TodoStats from './components/TodoStats';
import TodoStatsFilters from './components/TodoStatsFilters';
import { Todo } from './ts/interfaces/Todo.interfaces';
import {
  Add,
  Toggle,
  Clear,
  Remove,
  ActionType,
  Filters,
} from './ts/types/Todo.types';

function reducer(state: Todo[], action: Add | Toggle | Remove | Clear): Todo[] {
  switch (action.type) {
    case ActionType.ADD: {
      return [
        ...state,
        { id: uuidv4(), completed: false, desc: action.payload },
      ];
    }
    case ActionType.TOGGLE: {
      return [
        ...state.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      ];
    }
    case ActionType.REMOVE: {
      return [...state.filter((todo) => todo.id !== action.payload)];
    }
    case ActionType.CLEAR: {
      return [];
    }
    default:
      throw Error(`Unknown action!`);
  }
}

function filterTodo(todos: Todo[], filter: Filters) {
  switch (filter) {
    case 'Active':
      return todos.filter((todo) => todo.completed === false);
    case 'Completed':
      return todos.filter((todo) => todo.completed === true);
    default:
      return todos;
  }
}

function App() {
  const [filter, setFilter] = useState<Filters>('All');
  const [todos, dispatch] = useReducer(reducer, []);

  const visibleTodos = useMemo(
    () => filterTodo(todos, filter),
    [todos, filter]
  );

  const addTodo = (desc: string) => {
    dispatch({ type: ActionType.ADD, payload: desc });
  };

  const toggleTodo = (todo: Todo) => {
    dispatch({ type: ActionType.TOGGLE, payload: todo });
  };

  const removeTodo = (id: string) => {
    dispatch({ type: ActionType.REMOVE, payload: id });
  };

  const clearTodos = () => {
    dispatch({ type: ActionType.CLEAR });
  };

  const handleFilters = (f: Filters) => {
    setFilter(f);
  };

  return (
    <div className="px-6 pt-12 sm:min-w-[540px] sm:px-0 sm:pt-[70px]">
      <div className="grid">
        <BackgroundImg />
      </div>
      <div className="flex justify-between">
        <Header />
      </div>
      <CreateInput addTodo={addTodo} />
      <div className="mt-4 flex flex-col gap-[1px] overflow-hidden rounded-[5px] bg-[#E3E4F1] shadow-custom dark:bg-[#393A4B] dark:shadow-none sm:mt-6">
        {visibleTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoStats
          items={todos.filter((todo) => !todo.completed).length}
          clearTodos={clearTodos}
        />
        <TodoStatsFilters
          filter={filter}
          handleFilters={handleFilters}
          items={todos.filter((todo) => !todo.completed).length}
          clearTodos={clearTodos}
        />
      </div>
      <TodoFilter filter={filter} handleFilters={handleFilters} />
      <span className="tracking-[-0.19 px] mt-10 flex justify-center text-[14px] font-light leading-[14px] text-[#9495A5] dark:text-[#5B5E7E] sm:mt-12 sm:text-[18px]">
        Drag and drop to reorder list
      </span>
    </div>
  );
}

export default App;
