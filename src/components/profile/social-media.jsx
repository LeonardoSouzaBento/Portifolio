import { cardStyles } from '@/App';
import { contactLinks } from '@/data/contactData';
import { SvgIcon } from '@/ui';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { useRef } from 'react';

const css = {
  link: `max-w-max h-max flex flex-col items-start border-b-2
  border-transparent hover:border-blue-100 transition-all duration-200`,
};

const SocialMedia = () => {
  const aRef = useRef(null);

  return (
    <Card className={``}>
      <CardHeader>
        <CardTitle>
          <h3>Redes Sociais</h3>
        </CardTitle>
      </CardHeader>

      <CardContent className={`${cardStyles} flex-auto`}>
        {contactLinks.map((item, index) => (
          <a
            ref={aRef}
            className={css.link}
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer">
            <div className={`flex gap-2 items-center`}>
              <img className="size-4.5 inline-flex grayscale-50" src={item.icon} alt={item.name} />
              <p className={`text-sm-button font-semibold -mb-1 text-[#0038C7]`}>{item.name}</p>
            </div>
            <p className={`text-sm-button text-muted-foreground p-0`}>{item.value}</p>
          </a>
        ))}
      </CardContent>
    </Card>
  );
};

export default SocialMedia;
