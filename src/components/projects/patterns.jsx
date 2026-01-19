import { cardStyles } from '@/App';
import { iconMd, iconSm } from '@/css/lucideIcon';
import { patterns } from '@/data/patterns';
import { CardContent } from '@/ui/card';
import { findTitle } from '@/utils/findTitle';

const css = {
  wrapper: `max-w-lg m-0 max-w-max`,
  nameWrapper: `flex gap-2.5 mb-1 max-w-max [&>svg]:text-primary-800`,
  icon: `mt-1.5`,
};

const title = findTitle('padrões');

const firstHalf = patterns.slice(0, 3);
const secondHalf = patterns.slice(3);

export const Patterns = () => {
  return (
    <div id={title.keyWord} className={'mb-4 mr-6 bg-primary-50/33 p-5 pb-4 pt-0 rounded-lg'}>
      <h6 className={`w-full font-semibold pt-cap-offset mb-ex-offset text-primary`}>{title.title}</h6>
      <CardContent className={`gap-0 flex flex-col md:flex-row md:gap-12`}>
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
    </div>
  );
};
