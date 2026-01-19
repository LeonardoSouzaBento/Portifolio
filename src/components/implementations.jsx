import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { findTitle } from '@/utils/findTitle';

const title = findTitle('implementações');

export const Implementations = () => {
  return (
    <Card id={title.keyWord} className={`home-section`}>
      <CardHeader>
        <CardTitle>{title.title}</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};
