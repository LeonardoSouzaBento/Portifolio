import { patterns } from '@/data/patterns';
import { Icon, Separator } from '@/ui';
import { CardContent } from '@/ui/card';

const css = {
  wrapper: `max-w-lg m-0 max-w-max`,
  nameWrapper: `flex gap-2.5 mb-1 max-w-max [&>svg]:text-primary-800`,
  icon: `mt-1.5`,
};

const firstHalf = patterns.slice(0, 3);
const secondHalf = patterns.slice(3);
const patternsList = [firstHalf, secondHalf];

export const Patterns = () => {
  return (
    <div className={'p-6.5 pt-1 pb-6 bg-linear-to-br from-secondary-50/25 to-secondary-50/18'}>
      <h6 className={`w-full font-semibold pt-2 mb-ex-offset text-primary-800`}>
        O que vou encontrar?
      </h6>
      <CardContent className={`max-w-max grid grid-cols-1 md:grid-cols-2 gap-6`}>
        {patternsList.map((patternList) => (
          <div key={patternList[0].name} className={css.wrapper}>
            {patternList.map((pattern) => (
              <div key={pattern.name} className={css.nameWrapper}>
                <Icon
                  Icon={pattern.icon}
                  className={css.icon}
                  fill={'var(--color-icon-fill)'}
                  size={'sm'}
                />
                <div>
                  <p>{pattern.name}</p>
                  <p className={`text-sm text-muted-foreground`}>{pattern.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </CardContent>
    </div>
  );
};
