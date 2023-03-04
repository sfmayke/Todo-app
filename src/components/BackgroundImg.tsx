import bgDesktopDark from '../assets/images/bg-desktop-dark.jpg';
import bgDesktopLight from '../assets/images/bg-desktop-light.jpg';
import bgMobileDark from '../assets/images/bg-mobile-dark.jpg';
import bgMobileLight from '../assets/images/bg-mobile-light.jpg';

export default function BackgroundImg() {
  return (
    <>
      <picture className="absolute top-0 left-0 -z-10">
        <source
          className="hidden dark:block"
          srcSet={bgDesktopDark}
          media="(min-width: 376px)"
        />
        <img
          className="hidden dark:block"
          srcSet={bgMobileDark}
          alt="background-mobile-dark"
        />
      </picture>
      <picture className="absolute top-0 left-0 -z-10">
        <source
          className="block dark:hidden"
          srcSet={bgDesktopLight}
          media="(min-width: 376px)"
        />
        <img
          className="block dark:hidden"
          src={bgMobileLight}
          alt="background-mountains"
        />
      </picture>
    </>
  );
}
