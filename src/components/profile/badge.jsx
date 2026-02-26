import { useEqualizeSize } from '@/hooks';
import { Card } from '@/ui/card';
import { useRef, useState } from 'react';

export const Badge = ({ resizeCount }) => {
  const h1Ref = useRef(null);
  const [titleWidth, setTitleWidth] = useState(0);
  useEqualizeSize(h1Ref, setTitleWidth, resizeCount, 'width');

  return (
    <Card className={'flex flex-col gap-3 overflow-hidden'} hasheader={false}>
      <div className={'h-max w-full flex justify-center [&>div]:relative'}>
        <div>
          <div className='size-50 rounded-full overflow-hidden'>
            <img
              className={'size-full rounded-full shadow-profile scale-105'}
              src="/profile-photo.png"
              alt="Foto do Leonardo Souza Bento"
            />
          </div>
          <img
            className={'size-15 absolute bottom-1 right-1 bg-transparent'}
            src="/logo-icons/react.svg"
            alt="Logo do React"
          />
        </div>
      </div>
      <div className={'flex flex-col items-center [&>h1]:max-w-max [&>p]:text-large'}>
        <h1 ref={h1Ref}>Leonardo Souza Bento</h1>
        <p style={{ maxWidth: titleWidth || 'none' }}>
          Desenvolvedor <strong>React</strong> Front End formando em Engenharia de Software
        </p>
      </div>
    </Card>
  );
};
