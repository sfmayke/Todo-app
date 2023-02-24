export default function CreateInput() {
  return (
    <div className="relative mt-10 flex w-full items-center justify-start gap-3 rounded-[5px] bg-white py-[14px] px-5 dark:bg-[#25273D]">
      <span className="top-0 left-0 h-5 w-5 rounded-full border-[1px] border-[#E3E4F1] dark:border-[#E3E4F1]/50" />
      <input
        maxLength={30}
        className="relative w-full cursor-pointer bg-transparent text-[12px] text-[#494C6B]/50 focus:outline-none dark:text-[#767992]"
        type="text"
        placeholder="Create a new todo..."
        id="todo-check"
      />
    </div>
  );
}
