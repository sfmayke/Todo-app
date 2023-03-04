import { Todo } from '../ts/interfaces/Todo.interfaces';
import { IconCross, IconCheck } from './Icons';

interface Props {
  todo: Todo;
  toggleTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
}

export default function TodoItem({ todo, toggleTodo, removeTodo }: Props) {
  return (
    <div className="relative flex w-full items-center justify-start gap-3 bg-white py-4 px-5 transition-all duration-500 dark:bg-[#25273D] sm:py-5 sm:px-6">
      <div className="relative">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo)}
          className={`h-5 w-5 rounded-full border-[#E3E4F1] bg-transparent ring-0 before:pointer-events-none before:absolute 
            before:top-[62%] before:left-[50%] before:hidden before:h-[55%] before:w-[55%] before:translate-y-[-50%] before:translate-x-[-50%] 
            before:bg-contain before:bg-no-repeat before:content-[''] checked:bg-gradient-to-br 
            checked:from-[#57ddff] checked:to-[#c058f3] checked:before:block focus:border-none focus:ring-transparent 
            checked:focus:border-none`}
        />
        {todo.completed && (
          <IconCheck className="pointer-events-none absolute left-1/4 top-[35%]" />
        )}
      </div>
      <label
        htmlFor="todo-check"
        className={`relative block cursor-pointer select-none text-[12px]  dark:text-[#C8CBE7] sm:text-[18px] ${
          todo.completed ? 'text-[#494C6B]/50 line-through' : 'text-[#494C6B]'
        }`}
      >
        {todo.desc}
      </label>
      <IconCross
        onClick={() => removeTodo(todo.id)}
        className="ml-auto w-3 sm:w-[18px]"
      />
    </div>
  );
}
