import { expertiseData } from '@/data/expertiseData';
import { Separator } from '@/ui';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { findTitle } from '@/utils/findTitle';

const title = findTitle('expertises');

const css = {
  wrapper: `flex flex-col gap-3 pl-5`,
  item: `list-disc [&::marker]:text-primary-500`,
  text: `small-text text-muted-foreground`,
};

export const Expertises = () => {
  return (
    <Card id={title.keyWord} className={`home-section`}>
      <CardHeader>
        <CardTitle>
          <h3>{title.title}</h3>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className={`grid grid-cols-1 next-md:grid-cols-2 gap-4`}>
        {expertiseData.map((list, index) => (
          <ul key={index} className={css.wrapper}>
            {list.map((expertise) => (
              <li key={expertise.title} className={css.item}>
                <p>{expertise.title}</p>
                <p className={css.text}>{expertise.description}</p>
              </li>
            ))}
          </ul>
        ))}
      </CardContent>
    </Card>
  );
};
