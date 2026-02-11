import { useEqualizeSize } from '@/hooks/useEqualizeSize';
import { Card, CardContent, CardHeader, CardTitle, Icon } from '@/ui/index';
import { findTitle } from '@/utils/findTitle';
import { Church, Heart, Scale, Trash2 } from 'lucide-react';
import { useRef, useState } from 'react';

const title = findTitle('sobre mim');

export const AboutMe = ({ resizeCount }) => {
  const lastPWrapperRef = useRef(null);
  const [lastPWrapperHeight, setLastPWrapperHeight] = useState(0);

  useEqualizeSize(lastPWrapperRef, setLastPWrapperHeight, resizeCount);

  return (
    <Card id={title.keyWord} className="home-section">
      <CardHeader>
        <CardTitle>
          <h3>{title.title}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent className={`card-wrapper flex flex-row gap-[1ex]`}>
        <div className={`min-w-max min-h-full relative [&>div>svg]:text-primary-800`}>
          <Icon Icon={Church} size={'sm'} className="mt-2" />

          <div className={`absolute bottom-0 left-0`} style={{ height: `${lastPWrapperHeight}px` }}>
            <Icon Icon={Scale} className={`mt-1.5`} fill="var(--color-primary-50)" size={'sm'} />
          </div>
        </div>
        <div className={`[&>p]:pb-[0.5ex]`}>
          <p>
            Minha atuação profissional é pautada pela consideração ao próximo, busco contribuir para
            um ambiente de trabalho harmonioso sendo uma pessoa humilde, realista, aberta a críticas
            e confiável.
          </p>
          <div ref={lastPWrapperRef} className={`[&>p]:pb-[0.5ex]`}>
            <p>
              Entendo que o desempenho profissional está diretamente ligado a uma vida pessoal
              saudável e regrada, por isso, executo minhas atividades com alto nível de foco,
              engajamento e comprometimento.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
