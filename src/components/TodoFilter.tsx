export default function TodoFilter() {
  return (
    <div className="mt-4 flex w-full justify-center gap-5 rounded-[5px] bg-white py-4 px-5 shadow-custom dark:bg-[#25273D] dark:shadow-none">
      <button
        type="button"
        className="text-[12px] text-[#494C6B]/50 dark:text-[#5B5E7E]"
      >
        All
      </button>
      <button
        type="button"
        className="text-[12px] text-[#494C6B]/50 dark:text-[#5B5E7E]"
      >
        Active
      </button>
      <button
        type="button"
        className="text-[12px] text-[#494C6B]/50 dark:text-[#5B5E7E]"
      >
        Completed
      </button>
    </div>
  );
}

// {/* <div className="relative flex w-full items-center justify-start gap-3 bg-white py-4 px-5">
//   {/* <span className="top-0 left-0 h-5 w-5 rounded-full border-2 border-[#E3E4F1]" /> */}
//   <span className="top-0 left-0 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#55FFF4] to-[#C058F3]">
//     <IconCheck />
//   </span>
//   <input
//     className="absolute h-5 w-5 cursor-pointer opacity-0"
//     type="checkbox"
//     id="todo-check"
//     onChange={() => alert()}
//   />
//   <label
//     htmlFor="todo-check"
//     className="relative block cursor-pointer select-none text-[12px] text-[#494C6B] line-through"
//   >
//     Jog around the park 3x
//   </label>
//   <IconCross className="ml-auto w-3" />
// </div>; */}
