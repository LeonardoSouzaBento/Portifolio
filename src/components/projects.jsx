import { sectionStyles } from '@/App';
import { findTitle } from '@/utils/findTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { projectsData } from '@/data/projectsData';

const css = {
  container: `pt-1 pb-[1cap] w-full flex flex-row gap-4 overflow-x-scroll pr-6`,
  wrapper: `min-w-80 bg-background border shadow-xs hover:shadow-sm transition-all duration-200 br-lg`,
  imageWrapper: `w-full h-50 crop rounded-t-lg relative bg-background/12`,
  img: `w-full h-full object-cover bg-background/8`,
  mainLabel: `px-[1cap] backdrop-blur-xs bg-background/66 br-full flex-center 
  text-xs absolute top-[1ex] right-[1ex] z-2 capitalize shadow-xs/12`,
  contentWrapper: `p-4 pt-[1ex]`,
  title: `capitalize pb-[0.5ex]`,
  description: `text-sm`,
  labelsWrapper: `flex flex-wrap gap-2 py-[1cap] mb-[1ex] border-t border-b border-border/66`,
  label: `text-xs bg-primary/5 text-muted-foreground br-full 
  content-center px-[1cap] max-w-max`,
};

const title = findTitle('projetos');

const Projects = () => {
  return (
    <Card id={title.keyWord} className={`${sectionStyles} pr-0`}>
      <CardHeader>
        <CardTitle>{title.title}</CardTitle>
      </CardHeader>
      <CardContent className={`overflow-hidden pr-0`}>
        <div className={css.container}>
          {projectsData.map((project) => (
            <div key={project.id} className={css.wrapper}>
              <div className={css.imageWrapper}>
                <img src={project.image} className={css.img} alt="" />
                <p className={css.mainLabel}>{project.mainLabel}</p>
              </div>
              <div className={css.contentWrapper}>
                <h6 className={css.title}>{project.name}</h6>
                <div className={css.labelsWrapper}>
                  {project.labels.map((label) => (
                    <p key={label} className={css.label}>
                      {label}
                    </p>
                  ))}
                </div>
                <p className={css.description}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
