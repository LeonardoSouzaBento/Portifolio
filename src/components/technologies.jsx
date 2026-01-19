import { findTitle } from '@/utils/findTitle';
import { technologiesData } from '../data/technologiesData';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const css = {
  subtitle: `text-lg tracking-tight font-medium mb-1.5 text-muted-foreground`,
  p: `text-base`,
  wrapper: `card-wrapper [&>div]:space-y-2`,
  nameWrapper: `flex gap-[1ex] items-center`,
  iconImg: `rounded-xs overflow-hidden mb-1`,
};

const title = findTitle('tecnologias');

export const Technologies = () => {
  return (
    <Card id={title.keyWord} className={'home-section'}>
      <CardHeader>
        <CardTitle>{title.title}</CardTitle>
      </CardHeader>

      <CardContent className={`grid grid-cols-1 min-[830px]:grid-cols-2 gap-4`}>
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
                  <p className={`${css.p} ${styledComponents && '-ml-1'}`}>{tech.name}</p>
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
                <p className={css.p}>{tech.name}</p>
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
    <div className="card-wrapper pt-0 [&>div]:space-y-2">
      <p
        className={`text-lg tracking-tight font-medium mb-0.5 
        text-muted-foreground pt-ex-offset`}>
        {subtitle}
      </p>
      <div>{children}</div>
    </div>
  );
};
