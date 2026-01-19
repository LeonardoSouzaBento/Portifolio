import { useEffect, useState } from 'react';
import { sectionsTitles } from '../data/sectionsTitles';

const css = {
  nav: `mb-3 md:mb-4 shadow-sm/12 sticky top-0 z-6 backdrop-blur-sm border-b 
  border-border/33 bg-linear-to-r from-background/50 to-background`,
  wrapper: `hidden md:flex px-3 md:px-6 lg:px-12 xl:px-0 items-center gap-5 h-16
  max-w-6xl mx-auto pb-1`,
  wrapperLink: `h-max flex flex-col items-center`,
  link: `px-[0.9em] text-sm-button rounded-full`,
  border: `h-height-3 w-[calc(100%-1.45em)] rounded-full transition-all duration-300`,
  activeBorder: `bg-primary-300`,
  inactiveBorder: `bg-transparent`,
};

export const Nav = () => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      // rootMargin: 'cima direita baixo esquerda'
      // "linha de detecção" suba 10% a partir da base
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.85, // A seção precisa de 85% de visibilidade para ativar
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
              <a href={`#${keyWord}`} className={`${css.link}`}>
                {sectionName}
              </a>
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
