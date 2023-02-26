interface Props {
  items: number;
  clearTodos: () => void;
}

export default function TodoStats({ items, clearTodos }: Props) {
  return (
    <div className="flex w-full justify-between bg-white py-4 px-5 transition-all duration-500 dark:bg-[#25273D] sm:hidden sm:py-5 sm:px-6">
      <span className="text-[12px] text-[#494C6B]/50 dark:text-[#5B5E7E] sm:text-[14px]">
        {items} items left
      </span>
      <button
        onClick={clearTodos}
        type="button"
        className="text-[12px] text-[#494C6B]/50 dark:text-[#5B5E7E] sm:text-[14px]"
      >
        Clear completed
      </button>
    </div>
  );
}
