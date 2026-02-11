import { findTitle } from '@/utils/findTitle';
import { technologiesData } from '../data/technologiesData';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '@/ui';

const title = findTitle('tecnologias');

export const Technologies = () => {
  return (
    <Card id={title.keyWord} className="home-section">
      <CardHeader>
        <CardTitle>
          <h3>{title.title}</h3>
        </CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-1 pre-lg:grid-cols-2 gap-4">
        {technologiesData.map(({ id, title, list, icons }) => (
          <ListWrapper key={id} subtitle={title}>
            <div className="max-w-max grid grid-cols-1 sm:grid-cols-[2.5fr_1fr] gap-4 sm:flex-row
            lg:grid-cols-1 ">
              <ul className="list-disc list-inside space-y-1">
                {list.map((tech) => (
                  <li key={tech} className="[&]:marker:text-xs [&]:marker:text-primary">
                    {tech}
                  </li>
                ))}
              </ul>
              <div
                className="w-full flex flex-wrap justify-between gap-3
                xs:grid grid-cols-7 max-w-72 sm:grid-cols-3 lg:flex">
                {icons.map((icon) => {
                  const next = icon === '/logo-icons/nextdotjs.svg' ? 'size-11 -mt-1' : '';
                  return <img key={icon} src={icon} alt="" className={next || 'size-6'} />;
                })}
              </div>
            </div>
          </ListWrapper>
        ))}
      </CardContent>
    </Card>
  );
};

const ListWrapper = ({ children, subtitle }) => {
  return (
    <div className="p-3 rounded-md border border-border/75 pt-1 [&>div]:space-y-2">
      <p className={`text-lg font-bold tracking-tight text-muted-foreground`}>{subtitle}</p>
      <Separator className="mb-2 border-border/75" />
      <div>{children}</div>
    </div>
  );
};
