import { cardStyles, sectionStyles } from '@/App';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { findTitle } from '@/utils/findTitle';

const title = findTitle('prévia');

const Prev = () => {
  return (
    <Card id={title.keyWord} className={`${sectionStyles}`}>
      <CardHeader>
        <CardTitle>{title.title}</CardTitle>
      </CardHeader>
      <CardContent className={cardStyles}>
        
      </CardContent>
    </Card>
  );
};

export default Prev;
