import { cardStyles, sectionStyles } from '@/App';
import { iconMd, iconSm } from '@/css/lucideIcon';
import { findTitle } from '@/utils/findTitle';
import { patterns } from '../data/patterns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const css = {
  wrapper: `max-w-lg m-0 max-w-max`,
  nameWrapper: `flex gap-2.5 mb-1 max-w-max`,
  icon: `mt-1.5`,
};

const title = findTitle('padrões');

const firstHalf = patterns.slice(0, 3);
const secondHalf = patterns.slice(3);

const Patterns = () => {
  return (
    <Card id={title.keyWord} className={sectionStyles}>
      <CardHeader>
        <CardTitle>{title.title}</CardTitle>
        <CardDescription>{title.subtitle}</CardDescription>
      </CardHeader>

      <CardContent className={`${cardStyles} pt-3 mt-[1cap] gap-0 flex flex-col md:flex-row md:gap-12`}>
        <div className={css.wrapper}>
          {firstHalf.map((pattern, index) => (
            <div key={pattern.name} className={css.nameWrapper}>
              <pattern.icon {...(index === 0 ? iconMd : iconSm)} className={css.icon} />
              <div>
                <p>{pattern.name}</p>
                <p className={`text-sm text-muted-foreground`}>{pattern.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={css.wrapper}>
          {secondHalf.map((pattern) => (
            <div key={pattern.name} className={css.nameWrapper}>
              <pattern.icon {...iconSm} className={`${css.icon} scale-95`} />
              <div>
                <p>{pattern.name}</p>
                <p className={`text-sm text-muted-foreground`}>{pattern.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Patterns;
