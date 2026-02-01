import { useEffect, useState } from 'react';
import { sectionsTitles } from '../data/sectionsTitles';
import { NavLink } from 'react-router-dom';

const css = {
  nav: `mb-3 md:mb-4 shadow-sm/12 sticky top-0 z-6 backdrop-blur-sm border-b 
  border-border/33 bg-linear-to-r from-light-bg/50 to-light-bg`,
  wrapper: `hidden lg:flex px-3 md:px-6 lg:px-12 xl:px-0 items-center gap-4 h-16
  max-w-6xl mx-auto pb-1`,
  wrapperLink: `h-max flex flex-col items-center`,
  navLink: `mt-1.5 px-[0.45em] text-sm-button rounded-full text-primary-800`,
  border: `h-0.75 mt-1 w-[calc(100%-0.9em)] rounded-full transition-all duration-300`,
  activeBorder: `bg-secondary-300`,
  inactiveBorder: `bg-transparent`,
};

export const TopNavBar = () => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      // rootMargin: 'cima direita baixo esquerda'
      // Detecta quando a seção está no centro da viewport
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.7, // A seção precisa de 30% de visibilidade para ativar (ajustado para cards grandes)
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observa todas as seções que possuem os IDs definidos no sectionsTitles
    sectionsTitles.forEach(({ keyWord }) => {
      const element = document.getElementById(keyWord);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={css.nav}>
      <div className={css.wrapper}>
        {sectionsTitles.map(({ _, keyWord }) => {
          const sectionName = keyWord.charAt(0).toUpperCase() + keyWord.slice(1);
          return (
            <div key={keyWord} className={css.wrapperLink}>
              <NavLink to={`#${keyWord}`} className={`${css.navLink}`}>
                {sectionName}
              </NavLink>
              <div
                className={`${css.border} ${
                  activeId === keyWord ? css.activeBorder : css.inactiveBorder
                }`}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
};
