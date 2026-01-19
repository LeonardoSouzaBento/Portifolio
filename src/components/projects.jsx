import { projectsData } from '@/data/projectsData';
import { useMouseScrollX } from '@/hooks/useMouseScrollX';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/ui';
import { CustomLink } from '@/ui/custom-link';
import { findTitle } from '@/utils/findTitle';
import { useEffect, useRef, useState } from 'react';

const css = {
  container: `pt-1 pb-[1cap] pr-6 w-full flex gap-4 overflow-x-scroll [*]:touch-scroll-x [*]:select-none`,
  wrapper: `h-144 min-w-84 border border-border/75 shadow-sm 
  hover:shadow-md transition-all duration-200 br-lg pb-4 bg-background relative `,
  imageWrapper: `w-full h-60 overflow-y-scroll rounded-t-lg relative bg-background/12 cursor-pointer`,
  gradient: `h-8 absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary-1000/3 to-primary-50/0`,
  img: `w-full h-auto object-cover bg-background/8`,
  mainLabel: `pb-0.5 px-[0.9em] flex items-center backdrop-blur-xs bg-primary-50/66 br-full
  text-xs absolute top-2 left-2 z-2 shadow-xs/12 text-primary-1000 border border-primary-50/20`,
  labelsWrapper: `flex flex-wrap gap-2 py-3 border-t border-b border-border/66`,
  label: `text-xs bg-primary-50 text-primary-700 br-full px-[1cap] pb-0.5 max-w-max`,
};

const title = findTitle('projetos');

export const Projects = ({ resizingCounter }) => {
  const containerRef = useRef(null);
  const scrollabDivRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  useMouseScrollX(scrollabDivRef, scrollWidth, parentWidth);

  function getVariables() {
    if (containerRef.current || scrollabDivRef.current) {
      const parentWidth = containerRef.current.offsetWidth;
      const scrollWidth = scrollabDivRef.current.scrollWidth;
      setParentWidth(parentWidth);
      setScrollWidth(scrollWidth);
    }
  }

  useEffect(() => {
    getVariables();
  }, []);

  useEffect(() => {
    getVariables();
  }, [resizingCounter]);

  return (
    <Card id={title.keyWord} className={`home-section pr-0`}>
      <CardHeader>
        <CardTitle>{title.title}</CardTitle>
      </CardHeader>
      <CardContent className={`overflow-hidden pr-0`} ref={containerRef}>
        <div className={css.container} ref={scrollabDivRef}>
          {projectsData.map((project, index) => {
            const imageContraste = project.id === 'pet-shop' ? 'hue-rotate-9' : '';
            const textWrapperHeight = index === 0 || index === 1 ? 'h-46' : 'h-55';

            return (
              <div key={project.id} className={css.wrapper}>
                {project.mainLabel && <div className={css.mainLabel}>{project.mainLabel}</div>}
                <div className="relative">
                  <div id="project-image-wrapper" className={css.imageWrapper}>
                    <img src={project.image} className={`${css.img} ${imageContraste}`} alt="" />
                  </div>
                  <div className={css.gradient} />
                </div>
                <div className={'overflow-hidden'}>
                  <div className="px-4">
                    <h6 className="capitalize mt-ex-offset pb-ex-offset">{project.name}</h6>
                    <div className={css.labelsWrapper}>
                      {project.labels.map((label) => (
                        <p key={label} className={css.label}>
                          {label}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className={`${textWrapperHeight} pl-4 pr-2 overflow-y-scroll`}>
                    <p className="text-sm pt-ex-offset pb-3">{project.description}</p>
                    {project.id !== 'portfolio' && (
                      <div className="w-full flex justify-center sticky bottom-0 left-0">
                        <Button className="rounded-full">
                          <CustomLink href={project.link || '#'} />
                          Ver projeto
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
