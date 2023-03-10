import { Filters } from '../ts/types/Todo.types';

interface Props {
  handleFilters: (filter: Filters) => void;
  filter: Filters;
}

export default function TodoFilter({ handleFilters, filter }: Props) {
  return (
    <div className="mt-4 flex w-full justify-center gap-5 rounded-[5px] bg-white py-4 px-5 shadow-custom transition-all duration-500 dark:bg-[#25273D] dark:shadow-none sm:hidden sm:py-5 sm:px-6">
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
    </div>
  );
}
