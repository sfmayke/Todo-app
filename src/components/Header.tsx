import { useThemeContext } from '../context/ThemeContext';
import { IconMoon, IconSun } from './Icons';

export default function Header() {
  const { theme, themeToggle } = useThemeContext();

  return (
    <>
      <span className="text-2xl font-bold leading-5 tracking-[0.75rem] text-white sm:text-4xl">
        TODO
      </span>
      {theme === 'dark' ? (
        <IconSun
          onClick={() => themeToggle()}
          className="h-5 w-5 fill-white sm:h-[26px] sm:w-[26px]"
        />
      ) : (
        <IconMoon
          onClick={() => themeToggle()}
          className="h-5 w-5 fill-white sm:h-[26px] sm:w-[26px]"
        />
      )}
    </>
  );
}
