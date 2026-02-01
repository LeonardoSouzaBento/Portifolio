import { findTitle } from '@/utils/findTitle';
import { technologiesData } from '../data/technologiesData';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '@/ui';

const css = {
  subtitle: `text-lg tracking-tight font-medium mb-1.5 text-muted-foreground`,
  text: `text-base`,
  nameWrapper: `flex gap-[1ex] items-center`,
  iconImg: `rounded-xs overflow-hidden mt-[0.25ex]`,
};

const title = findTitle('tecnologias');

export const Technologies = () => {
  return (
    <Card id={title.keyWord} className={'home-section'}>
      <CardHeader>
        <CardTitle>
          <h3>{title.title}</h3>
        </CardTitle>
      </CardHeader>

      <CardContent className={`grid grid-cols-1 min-[830px]:grid-cols-[1fr_1.4fr]  gap-4`}>
        <ListWrapper subtitle={'Front-End'}>
          <>
            {technologiesData.front.map((tech, index) => {
              const lastItem =
                index === technologiesData.front.length - 1 ? `size-3.5` : `size-4.5`;
              const styledComponents = tech.name === 'Styled Components' ? `size-5.5` : ``;
              return (
                <div key={tech.name} className={css.nameWrapper}>
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={`${css.iconImg} ${lastItem} ${styledComponents}`}
                  />
                  <p className={`${css.text} ${styledComponents && '-ml-1'}`}>{tech.name}</p>
                </div>
              );
            })}
          </>
        </ListWrapper>
        <ListWrapper subtitle="Back-end">
          <>
            {technologiesData.back.map((tech) => (
              <div key={tech.name} className={css.nameWrapper}>
                <img src={tech.icon} alt={tech.name} className={`${css.iconImg} size-4.5`} />
                <p className={css.text}>{tech.name}</p>
              </div>
            ))}
          </>
        </ListWrapper>
      </CardContent>
    </Card>
  );
};

const ListWrapper = ({ children, subtitle }) => {
  return (
    <div className="p-3 rounded-md border border-border/75 pt-1 [&>div]:space-y-2">
      <p
        className={`text-lg font-bold tracking-tight text-muted-foreground`}>
        {subtitle}
      </p>
      <Separator className="mb-2 border-border/75" />
      <div>{children}</div>
    </div>
  );
};
