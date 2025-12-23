import { cardStyles } from '@/App';
import { contactLinks } from '@/data/contactData';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { useRef } from 'react';

const css = {
  section: ``,
  wrapper: `flex flex-col gap-2 items-start`,
  link: `h-max flex flex-col items-start`,
  wrapperLabel: ``,
};

const Contacts = () => {
  const aRef = useRef(null);

  return (
    <Card className={`flex-auto`}>
      <CardHeader>
        <CardTitle>Redes Sociais</CardTitle>
      </CardHeader>

      <CardContent className={`${cardStyles} pt-4`}>
        {contactLinks.map((item) => (
          <a
            ref={aRef}
            className={css.link}
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer">
            <div className={`flex gap-2.5 items-center`}>
              <img className="size-5 inline-flex" src={item.icon} alt={item.name} />
              <p className={`text-sm-button font-semibold -mb-1`}>{item.name}</p>
            </div>
            <p className={`text-sm text-muted-foreground`}>{item.value}</p>
          </a>
        ))}
      </CardContent>
    </Card>
  );
};

export default Contacts;
