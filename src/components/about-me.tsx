import { useRef, useState } from 'react';
import { useEqualizeSize } from '@/hooks/useEqualizeSize';
import { Card, CardContent, CardHeader, CardTitle, Icon } from '@/ui/index';
import { findTitle } from '@/utils/findTitle';
import { Church, Scale } from 'lucide-react';

const title = findTitle('sobre mim'); 

interface AboutMeProps {
  resizeCount: number;
}

export const AboutMe = ({ resizeCount }: AboutMeProps) => {
  const lastPWrapperRef = useRef<HTMLDivElement | null>(null);
  const [lastPWrapperHeight, setLastPWrapperHeight] = useState(0);

  useEqualizeSize(lastPWrapperRef, setLastPWrapperHeight, resizeCount);

  if (!title) return null;

  return (
    <Card id={title.keyWord} className="home-section">
      <CardHeader className="">
        <CardTitle className="">
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
