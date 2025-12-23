import { sectionsTitles } from '../data/sectionsTitles';

const css = {
  nav: `mb-4 shadow-sm/12 sticky top-0 z-6 backdrop-blur-sm border-b border-border/33 bg-background/50`,
  wrapper: `px-3 md:px-6 lg:px-12 xl:px-0 flex items-center gap-5 h-16
  max-w-6xl mx-auto pb-1`,
  link: `text-sm-button`,
};

const Nav = () => {
  return (
    <nav className={css.nav}>
      <div className={css.wrapper}>
        {sectionsTitles.map(({ _, keyWord }) => {
          const sectionName = keyWord.charAt(0).toUpperCase() + keyWord.slice(1);
          return (
            <a key={keyWord} href={`#${keyWord}`} className={css.link}>
              {sectionName}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
