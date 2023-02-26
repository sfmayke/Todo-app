import { Filters } from '../ts/types/Todo.types';

interface Props {
  items: number;
  clearTodos: () => void;
  handleFilters: (filter: Filters) => void;
  filter: Filters;
}

export default function TodoStatsFilters({
  items,
  clearTodos,
  filter,
  handleFilters,
}: Props) {
  return (
    <div className="hidden w-full justify-center gap-5 bg-white py-4 px-5 shadow-custom transition-all duration-500 dark:bg-[#25273D] dark:shadow-none sm:flex sm:py-5 sm:px-6">
      <span className="mr-auto text-[12px] text-[#494C6B]/50 dark:text-[#5B5E7E] sm:text-[14px]">
        {items} items left
      </span>
      <button
        onClick={() => handleFilters('All')}
        type="button"
        className={`text-[12px] ${
          filter === 'All'
            ? 'text-[#3A7CFD]'
            : 'text-[#494C6B]/50 dark:text-[#5B5E7E]'
        } sm:text-[14px]`}
      >
        All
      </button>
      <button
        onClick={() => handleFilters('Active')}
        type="button"
        className={`text-[12px] ${
          filter === 'Active'
            ? 'text-[#3A7CFD]'
            : 'text-[#494C6B]/50 dark:text-[#5B5E7E]'
        } sm:text-[14px]`}
      >
        Active
      </button>
      <button
        onClick={() => handleFilters('Completed')}
        type="button"
        className={`text-[12px] ${
          filter === 'Completed'
            ? 'text-[#3A7CFD]'
            : 'text-[#494C6B]/50 dark:text-[#5B5E7E]'
        } sm:text-[14px]`}
      >
        Completed
      </button>
      <button
        onClick={clearTodos}
        type="button"
        className="ml-auto text-[12px] text-[#494C6B]/50 dark:text-[#5B5E7E] sm:text-[14px]"
      >
        Clear completed
      </button>
    </div>
  );
}
