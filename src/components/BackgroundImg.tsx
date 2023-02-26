export default function BackgroundImg() {
  return (
    <>
      <picture className="absolute top-0 left-0 -z-10">
        <source
          className="hidden dark:block"
          srcSet="/src/assets/images/bg-desktop-dark.jpg"
          media="(min-width: 376px)"
        />
        <img
          className="hidden dark:block"
          srcSet="/src/assets/images/bg-mobile-dark.jpg"
          alt="background-mobile-dark"
        />
      </picture>
      <picture className="absolute top-0 left-0 -z-10">
        <source
          className="block dark:hidden"
          srcSet="/src/assets/images/bg-desktop-light.jpg"
          media="(min-width: 376px)"
        />
        <img
          className="block dark:hidden"
          src="/src/assets/images/bg-mobile-light.jpg"
          alt="background-mountains"
        />
      </picture>
    </>
  );
}
