import { IconCheck, IconCross } from './Icons';

export default function TodoItem() {
  return (
    <div className="relative flex w-full items-center justify-start gap-3 bg-white py-4 px-5 dark:bg-[#25273D]">
      {/* <span className="top-0 left-0 h-5 w-5 rounded-full border-2 border-[#E3E4F1]" /> */}
      <span className="top-0 left-0 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#55FFF4] to-[#C058F3]">
        <IconCheck />
      </span>
      <input
        className="absolute h-5 w-5 cursor-pointer opacity-0"
        type="checkbox"
        id="todo-check"
        onChange={() => alert()}
      />
      <label
        htmlFor="todo-check"
        // className="relative block cursor-pointer select-none text-[12px] text-[#494C6B] dark:text-[#C8CBE7]"
        className="relative block cursor-pointer select-none text-[12px] text-[#494C6B] line-through"
      >
        Jog around the park 3x
      </label>
      <IconCross className="ml-auto w-3" />
    </div>
  );
}
