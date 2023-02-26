import { KeyboardEvent } from 'react';

interface Props {
  addTodo: (desc: string) => void;
}

export default function CreateInput({ addTodo }: Props) {
  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo(e.currentTarget.value);
      e.currentTarget.value = '';
    }
  };

  return (
    <div className="relative mt-10 flex w-full items-center justify-start gap-3 rounded-[5px] bg-white py-[14px] px-5 transition-all duration-500 dark:bg-[#25273D] sm:mt-12 sm:py-5 sm:px-6">
      <span className="top-0 left-0 h-5 w-5 rounded-full border-[1px] border-[#E3E4F1]" />
      <input
        maxLength={30}
        className="relative w-[90%] cursor-pointer border-none bg-transparent p-0 text-[12px] leading-3 text-[#494C6B]/50 focus:outline-none focus:ring-transparent dark:text-[#767992] sm:left-[18px] sm:text-[18px]"
        type="text"
        onKeyDown={(e) => handleSubmit(e)}
        placeholder="Create a new todo..."
        id="todo-check"
      />
    </div>
  );
}
