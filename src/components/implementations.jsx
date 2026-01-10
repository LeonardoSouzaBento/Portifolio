import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card'
import { sectionStyles } from '@/App';
import { findTitle } from '@/utils/findTitle';

const title = findTitle('implementações');

const Implementations = () => {
  return (
    <Card id={title.keyWord} className={`${sectionStyles}`}>
      <CardHeader>
        <CardTitle>{title.title}</CardTitle>
      </CardHeader>
      <CardContent>
        
      </CardContent>
    </Card>
  )
}

export default Implementations;
