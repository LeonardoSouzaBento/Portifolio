import { cardStyles, sectionStyles } from '@/App';
import { sectionsTitles } from '@/data/sectionsTitles';
import { technologiesData } from '../data/technologiesData';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const css = {
  subtitle: `text-lg tracking-tight font-medium mb-1.5 text-muted-foreground`,
  p: `text-base`,
  wrapperName: `flex gap-2.5`,
  wrapperTechnologies: `space-y-2`,
  logoImage: `rounded-xs overflow-hidden mt-1.5`,
};

const title = sectionsTitles.find((title) => title.keyWord === 'tecnologias');

const Technologies = () => {
  return (
    <Card id={title.keyWord} className={sectionStyles}>
      <CardHeader>
        <CardTitle>{title.title}</CardTitle>
      </CardHeader>

      <CardContent className={`grid grid-cols-1 min-[830px]:grid-cols-2 gap-5`}>
        <div className={cardStyles}>
          <p className={css.subtitle}>Front-end:</p>

          <div className={css.wrapperTechnologies}>
            {technologiesData.front.map((tech, index) => {
              const lastItem =
                index === technologiesData.front.length - 1 ? `size-3.5 mt-2` : `size-4.5`;
              const styledComponents = tech.name === 'Styled Components' ? `size-5.5` : ``;
              return (
                <div key={tech.name} className={css.wrapperName}>
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={`${css.logoImage} ${lastItem} ${styledComponents}`}
                  />
                  <p className={css.p}>{tech.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={cardStyles}>
          <p className={css.subtitle}>Back-end:</p>
          <div className={css.wrapperTechnologies}>
            {technologiesData.back.map((tech) => (
              <div key={tech.name} className={css.wrapperName}>
                <img src={tech.icon} alt={tech.name} className={`${css.logoImage} size-4.5`} />
                <p className={css.p}>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Technologies;
