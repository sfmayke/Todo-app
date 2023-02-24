import './App.css';
import CreateInput from './components/CreateInput';
import { IconMoon } from './components/Icons';
import TodoFilter from './components/TodoFilter';
import TodoItem from './components/TodoItem';
import TodoStats from './components/TodoStats';
import { useThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useThemeContext();

  console.log('theme', theme);

  return (
    <div className="px-6 pt-12">
      <div className="grid">
        <picture className="absolute top-0 left-0 -z-10">
          <source
            srcSet="/src/assets/images/bg-mobile-dark.jpg"
            media="(prefers-color-scheme: dark)"
          />
          <img
            src="/src/assets/images/bg-mobile-light.jpg"
            alt="background-mountains"
          />
        </picture>
      </div>
      <div className="flex justify-between">
        <span className="text-2xl font-bold leading-5 tracking-[0.75rem] text-white">
          TODO
        </span>
        <IconMoon className="h-5 w-5 fill-white" />
      </div>
      <CreateInput />
      <div className="mt-4 flex flex-col gap-[1px] overflow-hidden rounded-[5px] bg-[#E3E4F1] shadow-custom dark:bg-[#393A4B] dark:shadow-none">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoStats />
      </div>
      <TodoFilter />
      <span className="tracking-[-0.19 px] mt-10 flex justify-center text-[14px] font-light leading-[14px] text-[#9495A5] dark:text-[#5B5E7E]">
        Drag and drop to reorder list
      </span>
    </div>
  );
}

export default App;
