import { cardStyles } from '@/App';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { findTitle } from '@/utils/findTitle';

const title = findTitle('prévia');

export const Prev = () => {
  return (
    <Card id={title.keyWord} className={`home-section`}>
      <CardHeader>
        <CardTitle>{title.title}</CardTitle>
      </CardHeader>
      <CardContent className={cardStyles}>
        
      </CardContent>
    </Card>
  );
};
